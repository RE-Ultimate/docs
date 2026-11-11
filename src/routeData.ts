// Starlight route middleware: adds the data-driven block sections to the table of contents, in the
// same places where src/components/MarkdownContent.astro renders them.
import { defineRouteMiddleware, type StarlightRouteData } from '@astrojs/starlight/route-data';
import { findBlock } from './lib/blocks';
import { getBlockDetails, planSections } from './lib/block-details';

type TocItem = NonNullable<StarlightRouteData['toc']>['items'][number];

const slugs = (items: TocItem[]): string[] => items.flatMap((item) => [item.slug, ...slugs(item.children)]);

export const onRequest = defineRouteMiddleware(async (context) => {
	const route = context.locals.starlightRoute;
	const toc = route.toc;
	if (!toc) return;
	const block = await findBlock(route.entry.id);
	if (!block) return;

	const plan = planSections(await getBlockDetails(block));
	const added = [...plan.lead, ...(plan.machine ? [plan.machine] : []), ...(plan.credits ? [plan.credits] : [])];
	if (added.length === 0) return;

	// A Markdown heading with the same anchor would produce a duplicate ID. Fail with the fix instead.
	const taken = new Set(slugs(toc.items));
	for (const section of added) {
		if (taken.has(section.id)) {
			throw new Error(
				`${route.entry.id}: the heading "${section.title}" is generated from src/data/block-details. Remove or rename the Markdown heading with the anchor #${section.id}.`,
			);
		}
	}

	const toItem = ({ id, title }: { id: string; title: string }): TocItem => ({ depth: 2, slug: id, text: title, children: [] });
	const items = [...toc.items];
	if (plan.credits) items.push(toItem(plan.credits));
	if (plan.machine) {
		const sources = items.findIndex((item) => item.slug === 'sources');
		items.splice(sources < 0 ? items.length - (plan.credits ? 1 : 0) : sources, 0, toItem(plan.machine));
	}
	// Starlight's own "Overview" entry (anchor _top) stays first.
	const afterOverview = items[0]?.slug === '_top' ? 1 : 0;
	items.splice(afterOverview, 0, ...plan.lead.map(toItem));
	toc.items = items;
});

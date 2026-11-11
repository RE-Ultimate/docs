// Shape of the machine GUI layout files (src/data/machine-guis/<mod>/<slug>.json).
// A file records where the slots, progress indicators and gauges sit in the machine's in-game window,
// in the GUI texture's own pixel coordinates. The site draws its own window from these facts; it never
// ships the mod's GUI texture. No Astro or Node imports, so unit tests can run it directly.
import { z } from 'astro/zod';
import { blockIdPattern } from './block-details-schema.ts';

const text = z.string().trim().min(1);
const px = z.number().int().min(0).max(512);
const httpUrl = z.url({ protocol: /^https?$/ });

/** Top-left of the 16 x 16 item area, as passed to the container's slot constructor. The frame is 1px larger on each side. */
const slot = z.strictObject({
	x: px,
	y: px,
	/** What the slot is for. `input` and `output` are the recipe slots the site fills with an example. */
	role: z.enum(['input', 'output', 'fuel', 'battery', 'upgrade', 'container', 'filter', 'tool', 'pattern', 'storage', 'other']),
	label: text,
	/** Zero-based position among the container's input or output slots, to match a recipe's ingredient or product order. */
	index: z.number().int().min(0).optional(),
	/** Larger result slot (26 x 26 frame), as on a crafting table. */
	large: z.boolean().optional(),
});

/** An animated indicator: the area it fills and the direction it fills in. */
const progress = z.strictObject({
	kind: z.enum(['arrow', 'flame', 'bubbles', 'bar', 'other']),
	x: px,
	y: px,
	w: px,
	h: px,
	direction: z.enum(['right', 'left', 'up', 'down']),
	label: text,
});

/** A stored-amount display: energy, fluid tank, heat, or similar. */
const gauge = z.strictObject({
	kind: z.enum(['energy', 'fluid', 'heat', 'steam', 'other']),
	x: px,
	y: px,
	w: px,
	h: px,
	direction: z.enum(['up', 'right', 'down', 'left']),
	label: text,
});

export const machineGuiSchema = z
	.strictObject({
		block: z.string().regex(blockIdPattern, 'Use "<mod>/<slug>", the same as the block page path.'),
		/** The window title as shown in game. */
		title: text,
		/** Width and height of the GUI background in texture pixels (often 176 x 166). */
		width: px,
		height: px,
		/** True when the window includes the standard player inventory at the bottom. */
		playerInventory: z.boolean(),
		/** Top of the player inventory's first slot row, when present (usually 84). */
		playerInventoryY: px.optional(),
		/** Machine slots. Can be empty for a window that only shows gauges (an energy cell). */
		slots: z.array(slot).default([]),
		/** For a machine with modes, record the default mode and describe the others in `notes`. */
		progress: z.array(progress).default([]),
		gauges: z.array(gauge).default([]),
		/** `pack-code`: read from the pinned mod artifact. `legacy-reference`: a version-matching outside source. */
		verification: z.enum(['pack-code', 'legacy-reference']),
		sources: z.array(z.strictObject({ title: text, url: httpUrl })).min(1),
		notes: z.array(text).default([]),
	})
	.refine((gui) => gui.slots.length + gui.progress.length + gui.gauges.length > 0, 'A window needs at least one slot, progress indicator, or gauge.');

export type MachineGui = z.infer<typeof machineGuiSchema>;
export type GuiSlot = MachineGui['slots'][number];

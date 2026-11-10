/** Prefixes a site path with the deploy base (`/docs/`). Pass paths without the base, for example `blocks/`. */
export const withBase = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

/** GitHub location of the content folder, used for "add a page" links. */
export const repositoryUrl = 'https://github.com/RE-Ultimate/docs';
export const blocksFolderUrl = `${repositoryUrl}/tree/main/src/content/docs/blocks`;

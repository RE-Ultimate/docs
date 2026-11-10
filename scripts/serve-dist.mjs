// Serves the built site the way GitHub Pages does for this project: files under /docs/, directory
// indexes, and dist/404.html with status 404 for unknown paths. Used by the Playwright tests.
// Usage: node scripts/serve-dist.mjs [port]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const base = '/docs/';
const port = Number(process.argv[2] ?? 4322);

const types = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8',
	'.json': 'application/json',
	'.xml': 'application/xml',
	'.txt': 'text/plain; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.webp': 'image/webp',
	'.woff2': 'font/woff2',
	'.wasm': 'application/wasm',
	'.pf_meta': 'application/octet-stream',
	'.pf_index': 'application/octet-stream',
	'.pf_fragment': 'application/octet-stream',
	'.pagefind': 'application/octet-stream',
};

/** Returns the file to send for a request path, or undefined. */
async function resolve(pathname) {
	if (!pathname.startsWith(base)) return undefined;
	const relative = normalize(decodeURIComponent(pathname.slice(base.length)));
	if (relative.startsWith('..')) return undefined;
	const candidate = join(root, relative);
	const info = await stat(candidate).catch(() => undefined);
	if (info?.isFile()) return candidate;
	if (info?.isDirectory() && pathname.endsWith('/')) {
		const index = join(candidate, 'index.html');
		if (await stat(index).catch(() => undefined)) return index;
	}
	return undefined;
}

createServer(async (request, response) => {
	const { pathname } = new URL(request.url ?? '/', 'http://localhost');
	if (pathname === '/docs') {
		response.writeHead(301, { location: base }).end();
		return;
	}
	const file = await resolve(pathname);
	const status = file ? 200 : 404;
	const path = file ?? join(root, '404.html');
	const body = await readFile(path);
	response.writeHead(status, { 'content-type': types[extname(path)] ?? 'application/octet-stream' });
	response.end(body);
}).listen(port, '127.0.0.1', () => {
	console.log(`Serving dist at http://127.0.0.1:${port}${base}`);
});

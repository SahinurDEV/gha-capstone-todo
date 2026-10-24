// Tiny static server for the Docker image: serves dist/ on port 8080.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = new URL('../dist/', import.meta.url).pathname;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.txt': 'text/plain' };
createServer(async (req, res) => {
  const p = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  const file = join(root, p.endsWith('/') ? p + 'index.html' : p);
  try { const b = await readFile(file); res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' }); res.end(b); }
  catch { res.writeHead(404); res.end('Not found'); }
}).listen(process.env.PORT || 8080, () => console.log('listening on 8080'));

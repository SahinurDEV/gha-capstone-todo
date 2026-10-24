// Copies src/ to dist/ and writes version.txt (from APP_VERSION or "dev").
import { cpSync, rmSync, writeFileSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
cpSync('src', 'dist', { recursive: true, filter: f => !f.endsWith('server.js') });
writeFileSync('dist/version.txt', (process.env.APP_VERSION || 'dev') + '\n');
console.log('built dist/ version', process.env.APP_VERSION || 'dev');

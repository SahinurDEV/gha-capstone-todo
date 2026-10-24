// Zero-dependency lint: syntax-check every .js file and forbid console.log in src/ (except server.js).
import { readdirSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
let bad = 0;
for (const dir of ['src', 'scripts', 'test']) for (const f of readdirSync(dir)) {
  if (!f.endsWith('.js')) continue;
  const p = `${dir}/${f}`;
  try { execFileSync(process.execPath, ['--check', p]); } catch { console.error(`syntax error: ${p}`); bad++; }
  if (dir === 'src' && f !== 'server.js' && /console\.log/.test(readFileSync(p, 'utf8'))) { console.error(`console.log in ${p}`); bad++; }
}
if (bad) process.exit(1); console.log('lint ok');

// Emits TypeScript declarations for app/components into .design-sync/.cache/types
// so design-sync can extract real <Name>Props contracts for the design agent.
//
// This repo has no library build. Without these declarations the converter
// finds no .d.ts tree and every emitted <Name>.d.ts is an
// `[key: string]: unknown` stub. The converter locates the barrel through
// package.json `publishConfig.types`; run this after `yarn build` (it's part of
// `buildCmd` in .design-sync/config.json).
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, '.design-sync', '.cache', 'types');
const srcDir = join(root, 'app', 'components');

rmSync(out, { recursive: true, force: true });

// tsconfig.json sets noEmit; override it for a declaration-only emit. tsc exits
// non-zero on type errors but still writes declarations, so report and continue.
try {
  execFileSync(
    process.execPath,
    [
      join(root, 'node_modules', 'typescript', 'bin', 'tsc'),
      '-p', join(root, 'tsconfig.json'),
      '--noEmit', 'false',
      '--declaration',
      '--emitDeclarationOnly',
      '--outDir', out,
    ],
    { stdio: 'inherit' },
  );
} catch {
  console.warn('types: tsc reported type errors; declarations were still emitted');
}

// tsconfig's `**/*` include skips dot-folders, so the re-export module isn't
// emitted. A re-export-only .ts file is already a valid .d.ts, and its
// '../app/components/...' paths still resolve because out/ mirrors the repo.
mkdirSync(join(out, '.design-sync'), { recursive: true });
copyFileSync(
  join(root, '.design-sync', 'default-exports.ts'),
  join(out, '.design-sync', 'default-exports.d.ts'),
);

// Barrel mirroring the converter's synthesized JS entry (one `export *` per
// .tsx/.jsx file under app/components) plus the re-export module, so the
// type-level export list matches what window.RockFact carries at runtime.
const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(tsx|jsx)$/.test(entry.name) && !/\.(stories|test|spec)\./.test(entry.name)) files.push(p);
  }
})(srcDir);

const specifier = (p) => './' + relative(root, p).split(sep).join('/').replace(/\.(tsx|jsx)$/, '');
const lines = files.sort().map((p) => `export * from '${specifier(p)}';`);
lines.push(`export * from './.design-sync/default-exports';`);
writeFileSync(join(out, 'index.d.ts'), lines.join('\n') + '\n');

console.log(`types: ${files.length} component modules + default-exports -> ${relative(root, out)}`);

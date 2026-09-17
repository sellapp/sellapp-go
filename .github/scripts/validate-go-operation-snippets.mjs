import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const directory = path.resolve(process.argv[2]);
const snippets = (
  await Promise.all(
    ['operation-examples.json', 'operation-variants.json'].map(async (file) =>
      JSON.parse(await fs.readFile(path.join(directory, 'docs', file), 'utf8')),
    ),
  )
).flat();
const target = path.join(directory, '.validation-snippets');
await fs.mkdir(target, { recursive: true });
for (const [index, snippet] of snippets.entries())
  await fs.writeFile(
    path.join(target, snippet.operationId + '-' + (snippet.exampleId ?? 'default') + '.go'),
    snippet.content.replace('func main()', `func example${index}()`),
  );
await fs.writeFile(
  path.join(target, 'go.mod'),
  `module example.com/sellapp-snippets

go 1.23

require github.com/sellapp/sellapp-go v0.0.0
replace github.com/sellapp/sellapp-go => ${directory}
`,
);
const result = spawnSync('go', ['test', '-mod=mod', './...'], { cwd: target, encoding: 'utf8' });
if (result.status !== 0) {
  await fs.mkdir(path.resolve(import.meta.dirname, '../reports'), { recursive: true });
  await fs.writeFile(
    path.resolve(import.meta.dirname, '../reports/go-snippet-errors.log'),
    result.stdout + result.stderr,
  );
  process.stderr.write(result.stdout + result.stderr);
  process.exit(result.status ?? 1);
}
await fs.rm(path.resolve(import.meta.dirname, '../reports/go-snippet-errors.log'), { force: true });
console.log(`Compiled ${snippets.length} operation snippets against the Go SDK.`);

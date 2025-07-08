import fs from 'fs';
import path from 'path';
import { compileString } from 'sass';
import * as culori from 'culori';

const themesDir = './src/styles/themes/'; // ✅ point to correct folder
const outputDir = './src/styles/docs1/';

const themeFiles = fs.readdirSync(themesDir).filter(file =>
  file.startsWith('_theme-') && file.endsWith('.scss')
);

const colorRegex = /\.export-(.+?)\s*{[^}]*value:\s*([^)]+?\)\s*);/g;

for (const themeFile of themeFiles) {
  const themePath = path.join(themesDir, themeFile);
  const themeName = themeFile.replace('_theme-', '').replace('.scss', '');
  const scssContent = fs.readFileSync(themePath, 'utf8');

  const compiled = compileString(`
  @use "sass:map";

  ${scssContent}

  $keys: map.keys($theme-${themeName});
  @each $key in $keys {
    .export-#{$key} {
      value: map.get($theme-${themeName}, $key);
    }
  }
`).css.toString();


  const rows = [];
  let match;
  while ((match = colorRegex.exec(compiled)) !== null) {
    const name = match[1];
    const oklch = match[2].trim();
    let hex = oklch;
    try {
      const parsed = culori.oklch(oklch);
      hex = culori.formatHex(parsed);
    } catch {
      hex = "⚠️ invalid oklch";
    }
    rows.push({ name, oklch, hex });
  }

const pad = 3;
const headers = ['Token', 'HEX', 'CSS Variable'];

const col1 = Math.max(
  headers[0].length,
  ...rows.map(r => r.name.length)
) + pad;

const col2 = Math.max(
  headers[1].length,
  ...rows.map(r => r.hex.length)
) + pad;

const col3 = Math.max(
  headers[2].length,
  ...rows.map(r => `--color-${r.name}`.length)
) + pad;

// Build Markdown table
const markdown = `# 🎨 ${capitalize(themeName)} Design Tokens

| ${headers[0].padEnd(col1)} | ${headers[1].padEnd(col2)} | ${headers[2].padEnd(col3)} |
|${'-'.repeat(col1 + 1)}|${'-'.repeat(col2 + 1)}|${'-'.repeat(col3 + 1)}|
${rows
  .map((r) => {
    const cssVar = `--color-${r.name}`;
    return `| ${r.name.padEnd(col1)} | ${r.hex.padEnd(col2)} | \`${cssVar.padEnd(col3 - 2)}\` |`;
  })
  .join('\n')}
`;



  const outputPath = path.join(outputDir, `${themeName}.md`);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = `${outputPath}.${timestamp}.bak.md`;

    if (fs.existsSync(outputPath)) {
    fs.copyFileSync(outputPath, backupPath);
    console.log(`🧾 Backup created: ${backupPath}`);
    }

    fs.writeFileSync(outputPath, markdown);
    console.log(`✅ Generated: ${outputPath}`);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { parseTranslationPairingManifest, translationPairSourcePredicate } from '../../../../../scripts/translation-pairing.ts'
import { rewriteTranslationLinkLocales, type TranslationLinkContext } from '../../../../../scripts/translation-links.ts'

const root = resolve('.')
const manifest = parseTranslationPairingManifest(readFileSync('scripts/translation-pairing.manifest.json', 'utf8'))
const isTranslationPairSource = translationPairSourcePredicate(manifest)

let fixedFiles = 0
let totalRewrites = 0

function walk(dir: string): void {
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === '.git' || ent.name === '.generated' || ent.name === '.dist') continue
    const full = join(dir, ent.name)
    if (ent.isDirectory()) {
      walk(full)
    } else if (ent.name.endsWith('.md')) {
      const rel = full.split('\\').join('/')
      const markdown = readFileSync(full, 'utf8')
      const context: TranslationLinkContext = {
        repoRoot: root,
        sourcePath: rel,
        isTranslationPairSource,
      }
      const { content, rewritten } = rewriteTranslationLinkLocales(markdown, context)
      if (rewritten > 0) {
        writeFileSync(full, content, 'utf8')
        fixedFiles++
        totalRewrites += rewritten
        console.log(`Rewrote ${rewritten} link(s) in ${rel}`)
      }
    }
  }
}

walk('.agents/notes')
walk('packages')
walk('apps')
walk('python')
console.log(`Total: ${totalRewrites} rewrites across ${fixedFiles} files.`)

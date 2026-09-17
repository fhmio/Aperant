/** Markdown implementation labels and primitive chrome. */
export const en = {
  'viewer.label': 'Markdown',
  'code.copy': 'Copy',
  'code.copied': 'Copied',
  'footnotes': 'Footnotes',
} satisfies Record<string, string>

/** Markdown namespace keys. */
export type MarkdownPreviewKey = keyof typeof en

/** Arabic labels, paired with the English key set. */
export const ar = {
  'viewer.label': 'Markdown',
  'code.copy': 'نسخ',
  'code.copied': 'تم النسخ',
  'footnotes': 'الهوامش',
} satisfies Record<MarkdownPreviewKey, string>

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Markdown document renderer and its code/footnote controls. */
    documentMarkdown: MarkdownPreviewKey
  }
}

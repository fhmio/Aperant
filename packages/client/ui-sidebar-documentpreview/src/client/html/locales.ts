/** Locale-owned HTML implementation name and iframe status text. */
export const en = {
  title: 'HTML',
  frame: 'HTML document preview',
  loading: 'Preparing HTML preview…',
  failed: 'This HTML document could not be previewed.',
} satisfies Record<string, string>

/** HTML renderer dictionary keys. */
export type HtmlPreviewKey = keyof typeof en

/** Arabic dictionary with the same keys as the English dictionary. */
export const ar = {
  title: 'HTML',
  frame: 'معاينة مستند HTML',
  loading: 'جارٍ تجهيز معاينة HTML…',
  failed: 'تعذرت معاينة مستند HTML هذا.',
} satisfies Record<HtmlPreviewKey, string>

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** HTML preview selection and status text. */
    documentHtml: HtmlPreviewKey
  }
}

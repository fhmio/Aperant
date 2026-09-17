/** Copy owned by the PDF renderer. */
export const en = {
  title: 'PDF',
  pageImage: 'PDF page {page}',
  loading: 'Opening PDF…',
  rendering: 'Rendering page…',
  failed: 'Cannot display PDF: {message}',
  password: 'This PDF requires a password; password-protected previews are not supported.',
  workerFailed: 'The PDF rendering process could not continue. Please retry.',
  unsupported: 'PDF preview requires the complete file contents.',
  retry: 'Retry',
} satisfies Record<string, string>

/** PDF translation keys shared by both dictionaries. */
export type PdfLocaleKey = keyof typeof en

/** Arabic PDF-renderer dictionary. */
export const ar = {
  title: 'PDF',
  pageImage: 'صفحة PDF {page}',
  loading: 'جارٍ فتح ملف PDF…',
  rendering: 'جارٍ عرض الصفحة…',
  failed: 'تعذر عرض ملف PDF: {message}',
  password: 'يتطلب ملف PDF هذا كلمة مرور؛ المعاينة المحمية بكلمة مرور غير مدعومة.',
  workerFailed: 'تعذرت متابعة عملية معالجة PDF. يُرجى إعادة المحاولة.',
  unsupported: 'تتطلب معاينة PDF محتوى الملف بالكامل.',
  retry: 'إعادة المحاولة',
} satisfies Record<PdfLocaleKey, string>

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** PDF page, loading, and failure messages. */
    sidebarPdf: PdfLocaleKey
  }
}

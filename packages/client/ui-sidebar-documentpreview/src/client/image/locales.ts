/** Locale-owned image renderer labels and status text. */
export const en = {
  title: 'Image',
  preview: 'Image preview: {name}',
  loading: 'Opening image…',
  failed: 'This image could not be displayed.',
  unsupported: 'Image preview requires the complete file contents.',
} satisfies Record<string, string>

/** Image renderer dictionary keys. */
export type ImagePreviewKey = keyof typeof en

/** Arabic dictionary with the same keys as the English dictionary. */
export const ar = {
  title: 'صورة',
  preview: 'معاينة الصورة: {name}',
  loading: 'جارٍ فتح الصورة…',
  failed: 'تعذر عرض هذه الصورة.',
  unsupported: 'تتطلب معاينة الصورة محتوى الملف بالكامل.',
} satisfies Record<ImagePreviewKey, string>

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Image preview selection, accessible name, and status text. */
    sidebarImage: ImagePreviewKey
  }
}

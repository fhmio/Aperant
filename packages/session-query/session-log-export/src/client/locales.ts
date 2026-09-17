/** Locale namespace owned by Session export browser feedback. */
export const NS = 'session-log-download'

/** English Session export strings (source of truth). */
export const en = {
  'header.more': 'More actions',
  'menu.download': 'Download session log',
  'dialog.preparingTitle': 'Exporting Session',
  'dialog.preparingDescription': 'Preparing a ZIP containing this Session, its sub-Sessions, and attachments.',
  'dialog.successTitle': 'Session download started',
  'dialog.successDescription': 'The browser is downloading the Session ZIP.',
  'dialog.errorTitle': 'Session export failed',
  'dialog.close': 'Close',
  'dialog.commandFailed': 'Could not start the Session export.',
} as const

/** Stable locale keys consumed by the shared modal. */
export type SessionLogDownloadKey = keyof typeof en

/** Arabic Session export strings. */
export const ar: Record<SessionLogDownloadKey, string> = {
  'header.more': 'مزيد من الإجراءات',
  'menu.download': 'تنزيل سجل الجلسة',
  'dialog.preparingTitle': 'جارٍ تصدير الجلسة',
  'dialog.preparingDescription': 'جارٍ تحضير ملف ZIP يحتوي على هذه الجلسة وجلساتها الفرعية والمرفقات.',
  'dialog.successTitle': 'بدأ تنزيل الجلسة',
  'dialog.successDescription': 'المتصفح يقوم الآن بتنزيل ملف ZIP للجلسة.',
  'dialog.errorTitle': 'فشل تصدير الجلسة',
  'dialog.close': 'إغلاق',
  'dialog.commandFailed': 'تعذر بدء تصدير الجلسة.',
}

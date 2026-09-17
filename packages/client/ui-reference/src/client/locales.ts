/** `reference` namespace dictionaries for the unified `@` source. */

import type {} from '@deepseek-ai/dsh-client-ui-slots'

/** Dictionary namespace owned by this plugin. */
export const NS = 'reference'

/** English dictionary (the key-set source of truth). */
export const en = {
  'section.files': 'Files & folders',
  'section.sessions': 'Sessions',
  'candidate.noCwd': '(no cwd)',
  'crumb.root': 'Workspace',
  'time.now': 'now',
  'time.minutes': '{n}min',
  'time.hours': '{n}h',
  'time.days': '{n}d',
  'time.months': '{n}mo',
  'time.years': '{n}y',
} satisfies Record<string, string>

/** The reference namespace key union. */
export type ReferenceKey = keyof typeof en

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** The unified `@` reference menu's copy. */
    reference: ReferenceKey
  }
}

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'section.files': 'الملفات والمجلدات',
  'section.sessions': 'الجلسات',
  'candidate.noCwd': '(بدون دليل عمل)',
  'crumb.root': 'مساحة العمل',
  'time.now': 'الآن',
  'time.minutes': '{n} د',
  'time.hours': '{n} س',
  'time.days': '{n} ي',
  'time.months': '{n} ش',
  'time.years': '{n} سنة',
} satisfies Record<ReferenceKey, string>

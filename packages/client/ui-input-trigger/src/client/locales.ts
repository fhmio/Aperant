/**
 * `slash.menu` namespace dictionaries: group titles keyed by source name
 * (the lookup chain returns the key itself, so an unknown source shows its
 * raw name), the pending row, and the listbox and header aria labels.
 */

/** English dictionary (the key-set source of truth). */
export const en = {
  'command': 'Commands',
  'skill': 'Skills',
  'subagent': 'Subagents',
  'loading': 'Loading…',
  'drill.aria': 'Browse folder',
  'drill.hint': 'Browse folder',
  'drill.key': 'Tab',
  'crumbs.aria': 'Folder navigation',
  'suggestions.aria': 'Trigger suggestions',
} satisfies Record<string, string>

/** The slash.menu namespace key union. */
export type MenuKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'command': 'الأوامر',
  'skill': 'المهارات',
  'subagent': 'الوكلاء الفرعيون',
  'loading': 'جارٍ التحميل…',
  'drill.aria': 'استعراض المجلد',
  'drill.hint': 'استعراض المجلد',
  'drill.key': 'Tab',
  'crumbs.aria': 'التنقل في المجلدات',
  'suggestions.aria': 'اقتراحات الإدخال',
} satisfies Record<MenuKey, string>

/** `sidebar` namespace dictionaries for shell controls and global panels. */

/** English dictionary (the key-set source of truth). */
export const en = {
  'session.new': 'New Session',
  'session.new.label': 'New session',
  'toggle.open': 'Open sidebar',
  'toggle.collapse': 'Collapse sidebar',
  'panels.label': 'Global panels',
} satisfies Record<string, string>

/** The sidebar namespace key union. */
export type SidebarKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'session.new': 'جلسة جديدة',
  'session.new.label': 'إنشاء جلسة جديدة',
  'toggle.open': 'فتح الشريط الجانبي',
  'toggle.collapse': 'طي الشريط الجانبي',
  'panels.label': 'الألواح العامة',
} satisfies Record<SidebarKey, string>

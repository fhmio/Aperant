/** `skill` namespace dictionaries for the dedicated tool row. */

/** Dictionary namespace owned by this plugin. */
export const NS = 'skill'

/** English dictionary (the key-set source of truth). */
export const en = {
  'row.title': 'Skill',
  'row.running': 'Loading skill',
  'row.failed': 'Skill load failed',
  'row.stopped': 'Skill load stopped',
  'row.instructions': 'Instructions',
  'row.inspect': 'Inspect',
  'menu.userOnly': 'user-only',
} satisfies Record<string, string>

/** The skill namespace key union. */
export type SkillKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'row.title': 'المهارة',
  'row.running': 'جارٍ تحميل المهارة',
  'row.failed': 'فشل تحميل المهارة',
  'row.stopped': 'تم إيقاف تحميل المهارة',
  'row.instructions': 'التعليمات',
  'row.inspect': 'فحص',
  'menu.userOnly': 'للمستخدم فقط',
} satisfies Record<SkillKey, string>

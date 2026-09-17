/** `goal` namespace dictionaries. */

/** English dictionary (the key-set source of truth). */
export const en = {
  'phase.active': 'Ongoing Goal',
  'phase.active.disarmed': 'Inactive Goal',
  'phase.paused': 'Paused Goal',
  'phase.blocked': 'Blocked Goal',
  'objective.aria': 'Goal objective',
  'commandInput.aria': 'Command input',
  'action.save': 'Save goal',
  'action.cancel': 'Cancel edit',
  'action.pause': 'Pause goal',
  'action.resume': 'Resume goal',
  'action.edit': 'Edit goal',
  'action.clear': 'Clear goal',
} satisfies Record<string, string>

/** The goal namespace key union. */
export type GoalKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'phase.active': 'هدف قيد التنفيذ',
  'phase.active.disarmed': 'هدف غير نشط',
  'phase.paused': 'هدف موقوف مؤقتاً',
  'phase.blocked': 'هدف متعثر',
  'objective.aria': 'نص الهدف',
  'commandInput.aria': 'إدخال الأمر',
  'action.save': 'حفظ الهدف',
  'action.cancel': 'إلغاء التعديل',
  'action.pause': 'إيقاف الهدف مؤقتاً',
  'action.resume': 'استئناف الهدف',
  'action.edit': 'تعديل الهدف',
  'action.clear': 'مسح الهدف',
} satisfies Record<GoalKey, string>

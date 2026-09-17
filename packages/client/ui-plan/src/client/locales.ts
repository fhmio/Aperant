/** `plan` namespace dictionaries (the composer plan chip's copy). */

/** English dictionary (the key-set source of truth). */
export const en = {
  'chip.label': 'Plan',
  'chip.on.aria': 'Plan mode on, press to turn off',
  'chip.on.title': 'Plan mode on — click to turn off (/plan off)',
  'chip.off.aria': 'Plan mode off, press to turn on',
  'chip.off.title': 'Plan mode off — click to turn on (/plan)',
  'chip.exitFailed': 'Failed to exit plan mode',
} satisfies Record<string, string>

/** The plan namespace key union. */
export type PlanKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'chip.label': 'الخطة',
  'chip.on.aria': 'وضع الخطة قيد التشغيل، اضغط لإيقافه',
  'chip.on.title': 'وضع الخطة مفعّل — انقر لإيقافه (/plan off)',
  'chip.off.aria': 'وضع الخطة متوقف، اضغط لتشغيله',
  'chip.off.title': 'وضع الخطة متوقف — انقر لتفعيله (/plan)',
  'chip.exitFailed': 'فشل الخروج من وضع الخطة',
} satisfies Record<PlanKey, string>

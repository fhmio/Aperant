/** `settings.theme` namespace dictionaries (the Appearance and font-size rows' copy). */

/** English dictionary (the key-set source of truth). */
export const en = {
  'appearance.title': 'Appearance',
  'appearance.light': 'Light',
  'appearance.dark': 'Dark',
  'appearance.system': 'System',
  'fontSize.title': 'Font size',
  'fontSize.description': 'Only affects conversation content',
  'fontSize.unit': 'px',
  'fontSize.increase': 'Increase font size',
  'fontSize.decrease': 'Decrease font size',
} satisfies Record<string, string>

/** The settings.theme namespace key union. */
export type ThemeKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'appearance.title': 'المظهر',
  'appearance.light': 'فاتح',
  'appearance.dark': 'داكن',
  'appearance.system': 'تلقائي (حسب النظام)',
  'fontSize.title': 'حجم الخط',
  'fontSize.description': 'يؤثر فقط على حجم خط نصوص المحادثة',
  'fontSize.unit': 'بكسل',
  'fontSize.increase': 'تكبير الخط',
  'fontSize.decrease': 'تصغير الخط',
} satisfies Record<ThemeKey, string>

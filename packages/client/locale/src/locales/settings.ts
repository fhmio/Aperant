/** `settings.locale` namespace dictionaries (the Language row's copy). */

/** English dictionary (the key-set source of truth). */
export const en = {
  'language.title': 'Language',
} satisfies Record<string, string>

/** The settings.locale namespace key union. */
export type SettingsLocaleKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'language.title': 'اللغة',
} satisfies Record<SettingsLocaleKey, string>

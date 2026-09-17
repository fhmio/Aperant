/** Shell chrome and General-nav dictionaries; feature rows own their copy. */

/** English dictionary (the key-set source of truth). */
export const en = {
  'trigger': 'Settings',
  'title': 'Settings',
  'close': 'Close',
  'openDocument': 'Open configuration file',
  'openDocument.error': 'Could not open configuration file',
  'general.nav': 'General',
  'connection.error': 'Disconnected',
  'connection.retry': 'Reconnect now',
  'connection.connecting': 'Reconnecting',
  'connection.connected': 'Connected',
  'connection.reconnect': 'Disconnected, reconnect now',
  'connection.restart': 'Reconnecting automatically, reconnect now',
} satisfies Record<string, string>

/** The settings namespace key union. */
export type SettingsKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'trigger': 'الإعدادات',
  'title': 'الإعدادات',
  'close': 'إغلاق',
  'openDocument': 'فتح ملف التكوين',
  'openDocument.error': 'تعذر فتح ملف التكوين',
  'general.nav': 'عام',
  'connection.error': 'انقطع الاتصال',
  'connection.retry': 'إعادة الاتصال الآن',
  'connection.connecting': 'جارٍ إعادة الاتصال',
  'connection.connected': 'متصل',
  'connection.reconnect': 'الاتصال منقطع، انقر لإعادة الاتصال الآن',
  'connection.restart': 'جارٍ إعادة الاتصال تلقائياً، انقر لإعادة الاتصال الآن',
} satisfies Record<SettingsKey, string>

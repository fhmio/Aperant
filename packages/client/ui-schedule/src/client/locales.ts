/** `schedule.catalog` namespace dictionaries. */

/** Dictionary namespace owned by this plugin. */
export const NS = 'schedule.catalog'

/** English dictionary (the key-set source of truth). */
export const en = {
  'trigger.one': '{count} reminder',
  'trigger.other': '{count} reminders',
  'list.aria': 'Active reminders',
  'status.scheduled': 'Scheduled',
  'status.overdue': 'Overdue',
  'frequency.once': 'Once',
  'frequency.every': 'Every {value} {unit}',
  'unit.day.one': 'day',
  'unit.day.other': 'days',
  'unit.hour.one': 'hour',
  'unit.hour.other': 'hours',
  'unit.minute.one': 'minute',
  'unit.minute.other': 'minutes',
  'unit.second.one': 'second',
  'unit.second.other': 'seconds',
  'relative.now': 'Due now',
  'relative.future': 'in {value} {unit}',
  'relative.overdue': '{value} {unit} overdue',
} as const

/** Key domain of the Schedule catalog namespace. */
export type ScheduleCatalogKey = keyof typeof en

/** Arabic dictionary, key-identical to the English source of truth. */
export const ar: Record<ScheduleCatalogKey, string> = {
  'trigger.one': '{count} تذكير',
  'trigger.other': '{count} تذكيرات',
  'list.aria': 'التذكيرات النشطة',
  'status.scheduled': 'مجدول',
  'status.overdue': 'متأخر',
  'frequency.once': 'مرة واحدة',
  'frequency.every': 'كل {value} {unit}',
  'unit.day.one': 'يوم',
  'unit.day.other': 'أيام',
  'unit.hour.one': 'ساعة',
  'unit.hour.other': 'ساعات',
  'unit.minute.one': 'دقيقة',
  'unit.minute.other': 'دقائق',
  'unit.second.one': 'ثانية',
  'unit.second.other': 'ثوانٍ',
  'relative.now': 'يستحق الآن',
  'relative.future': 'خلال {value} {unit}',
  'relative.overdue': 'متأخر منذ {value} {unit}',
}

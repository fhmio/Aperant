/** `job` namespace dictionaries. */

/** Dictionary namespace owned by this plugin. */
export const NS = 'job'

/** English dictionary (the key-set source of truth). */
export const en = {
  'count.live.one': '{count} background job running',
  'count.live.other': '{count} background jobs running',
  'count.idle.one': '{count} background job',
  'count.idle.other': '{count} background jobs',
  'list.aria': 'Background jobs',
  'status.running': 'running',
  'status.stopping': 'stopping',
  'status.completed': 'completed',
  'status.killed': 'cancelled',
  'status.failed': 'failed',
  'duration.seconds': '{seconds}s',
  'duration.minutes': '{minutes}m {seconds}s',
  'duration.hours': '{hours}h {minutes}m',
  'duration.title.live': 'Running for {duration}',
  'duration.title.done': 'Took {duration}',
} as const

/** Key domain of the `job` namespace (en is the source of truth). */
export type JobKey = keyof typeof en

/** Arabic dictionary, key-identical to the English source of truth. */
export const ar: Record<JobKey, string> = {
  'count.live.one': '{count} مهمة في الخلفية قيد التشغيل',
  'count.live.other': '{count} مهام في الخلفية قيد التشغيل',
  'count.idle.one': '{count} مهمة في الخلفية',
  'count.idle.other': '{count} مهام في الخلفية',
  'list.aria': 'مهام الخلفية',
  'status.running': 'قيد التشغيل',
  'status.stopping': 'جارٍ الإيقاف',
  'status.completed': 'مكتملة',
  'status.killed': 'ملغاة',
  'status.failed': 'فاشلة',
  'duration.seconds': '{seconds} ث',
  'duration.minutes': '{minutes} د {seconds} ث',
  'duration.hours': '{hours} س {minutes} د',
  'duration.title.live': 'قيد التشغيل منذ {duration}',
  'duration.title.done': 'استغرقت {duration}',
}

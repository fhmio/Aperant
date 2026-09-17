/** `workflowRun` namespace dictionaries. */

/** Dictionary namespace owned by this plugin. */
export const NS = 'workflowRun'

/** English dictionary (the key-set source of truth). */
export const en = {
  'run.title': '{name}',
  'run.members.one': '{count} member',
  'run.members.other': '{count} members',
  'run.empty': 'No members started',
  'phase.unassigned': 'Unphased',
  'phase.empty': 'Empty phase name',
  'statusCount.running': 'Running {count}',
  'statusCount.completed': 'Completed {count}',
  'statusCount.failed': 'Failed {count}',
  'statusCount.cancelled': 'Cancelled {count}',
  'statusCount.interrupted': 'Interrupted {count}',
  'member.empty': 'Empty member name',
  'member.open': 'Open {name}',
  'status.running': 'Running',
  'status.completed': 'Completed',
  'status.failed': 'Failed',
  'status.cancelled': 'Cancelled',
  'status.interrupted': 'Interrupted',
} satisfies Record<string, string>

/** Union of this namespace's dictionary keys. */
export type WorkflowRunKey = keyof typeof en

/** Arabic dictionary (checked complete against en). */
export const ar: Record<WorkflowRunKey, string> = {
  'run.title': '{name}',
  'run.members.one': 'عضو واحد',
  'run.members.other': '{count} أعضاء',
  'run.empty': 'لم يبدأ أي عضو',
  'phase.unassigned': 'بدون مرحلة',
  'phase.empty': 'اسم مرحلة فارغ',
  'statusCount.running': 'قيد التشغيل {count}',
  'statusCount.completed': 'مكتمل {count}',
  'statusCount.failed': 'فشل {count}',
  'statusCount.cancelled': 'ملغى {count}',
  'statusCount.interrupted': 'مقاطع {count}',
  'member.empty': 'اسم عضو فارغ',
  'member.open': 'فتح {name}',
  'status.running': 'قيد التشغيل',
  'status.completed': 'مكتمل',
  'status.failed': 'فشل',
  'status.cancelled': 'ملغى',
  'status.interrupted': 'تمت المقاطعة',
}

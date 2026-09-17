/** `approval` namespace dictionaries. */

/** English dictionary and key-set source of truth. */
export const en = {
  waiting: 'Waiting for approval',
  'detail.aria': 'Approval details',
  escalation: 'Tool {toolName} requests privileged execution',
  reject: 'Reject',
  allowOnce: 'Allow once',
} satisfies Record<string, string>

/** Approval dictionary key union. */
export type ApprovalKey = keyof typeof en

/** Arabic dictionary, checked against the English key set. */
export const ar = {
  waiting: 'في انتظار الموافقة',
  'detail.aria': 'تفاصيل الموافقة',
  escalation: 'تطلب الأداة {toolName} إذناً تشغيلياً بصلاحيات أعلى',
  reject: 'رفض',
  allowOnce: 'سماح لمرة واحدة',
} satisfies Record<ApprovalKey, string>

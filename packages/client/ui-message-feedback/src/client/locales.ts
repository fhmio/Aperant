/** `feedback` namespace dictionaries. */

/** English dictionary (the key-set source of truth). */
export const en = {
  'action.like': 'Good response',
  'action.likeActive': 'Remove rating',
  'action.dislike': 'Bad response',
  'action.dislikeActive': 'Remove rating',
  'dialog.title': 'Submit feedback',
  'dialog.categories': 'Feedback category',
  'dialog.detail': 'Feedback details',
  'dialog.hint': 'Add details to help us improve. Your submission will include the current conversation log.',
  'category.task-result': 'Task result',
  'category.instruction-following': 'Instruction understanding and following',
  'category.product-interaction': 'Product features and interaction',
  'category.service-stability': 'Stability and speed',
  'category.resource-cost': 'Resource usage and cost',
  'category.security-privacy-permission': 'Security, privacy, and permissions',
  'category.other': 'Other',
  'toast.recorded': 'Thanks for your feedback',
  'error.conflict': 'This feedback changed elsewhere; the latest state is shown',
  'error.load': 'Could not load feedback',
  'error.generic': 'Could not save feedback',
  'error.noteTooLarge': 'The description is too long; shorten it and submit again',
} satisfies Record<string, string>

/** The feedback namespace key union. */
export type MessageFeedbackKey = keyof typeof en

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** The feedback surface's copy: the message controls, the dialog, and the acknowledgement. */
    feedback: MessageFeedbackKey
  }
}

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'action.like': 'إجابة جيدة',
  'action.likeActive': 'إزالة التقييم',
  'action.dislike': 'إجابة سيئة',
  'action.dislikeActive': 'إزالة التقييم',
  'dialog.title': 'إرسال ملاحظات',
  'dialog.categories': 'فئة الملاحظات',
  'dialog.detail': 'تفاصيل الملاحظات',
  'dialog.hint': 'أضف تفاصيل لمساعدتنا على التحسين. سيتضمن إرسالك سجل المحادثة الحالي.',
  'category.task-result': 'نتيجة المهمة',
  'category.instruction-following': 'فهم التعليمات واتباعها',
  'category.product-interaction': 'ميزات المنتج والتفاعل',
  'category.service-stability': 'الاستقرار والسرعة',
  'category.resource-cost': 'استهلاك الموارد والتكلفة',
  'category.security-privacy-permission': 'الأمان والخصوصية والصلاحيات',
  'category.other': 'أخرى',
  'toast.recorded': 'شكراً لملاحظاتك',
  'error.conflict': 'تم تعديل هذه الملاحظات في مكان آخر؛ تظهر الآن الحالة الأحدث',
  'error.load': 'تعذر تحميل الملاحظات',
  'error.generic': 'تعذر حفظ الملاحظات',
  'error.noteTooLarge': 'الوصف طويل جداً؛ يرجى تقصيره وإعادة الإرسال',
} satisfies Record<MessageFeedbackKey, string>

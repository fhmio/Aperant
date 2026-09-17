/** `question` namespace dictionaries. */

/** English dictionary (the key-set source of truth). */
export const en = {
  'error.incomplete': 'Please complete this question first.',
  'error.unanswered': 'Please select an option or enter a custom answer.',
  'nav.prev': 'Previous question',
  'nav.next': 'Next question',
  'nav.minimize': 'Collapse the question card',
  'nav.maximize': 'Expand the question card',
  'nav.cancel': 'Dismiss all questions',
  'option.recommended': 'Recommended',
  'custom.placeholder': 'Type your answer',
  'action.skip': 'Skip this question',
  'action.next': 'Next',
  'plan.header': 'Plan review',
  'plan.approve': 'Approve',
  'plan.decline': 'Refuse',
  'plan.discuss': 'Chat about it',
} satisfies Record<string, string>

/** The question namespace key union. */
export type QuestionKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'error.incomplete': 'يرجى إكمال هذا السؤال أولاً.',
  'error.unanswered': 'يرجى اختيار أحد الخيارات أو إدخال إجابة مخصصة.',
  'nav.prev': 'السؤال السابق',
  'nav.next': 'السؤال التالي',
  'nav.minimize': 'طي بطاقة السؤال',
  'nav.maximize': 'توسيع بطاقة السؤال',
  'nav.cancel': 'إلغاء كافة الأسئلة',
  'option.recommended': 'موصى به',
  'custom.placeholder': 'اكتب إجابتك هنا',
  'action.skip': 'تخطي هذا السؤال',
  'action.next': 'التالي',
  'plan.header': 'مراجعة خطة العمل',
  'plan.approve': 'موافقة',
  'plan.decline': 'رفض',
  'plan.discuss': 'مناقشة في المحادثة',
} satisfies Record<QuestionKey, string>

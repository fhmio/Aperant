/**
 * `command` namespace dictionaries: the composer menu's section headings,
 * the client face (title, description, claim token) of the built-in Host
 * commands whose catalog descriptors carry English text only, and the
 * popupSelect shell's copy.
 */

/** English dictionary (the key-set source of truth). */
export const en = {
  'section.add': 'Add',
  'section.commands': 'Commands',
  'label.goal': 'Goal',
  'label.plan': 'Plan',
  'label.feedback': 'Feedback',
  'label.compact': 'Compact',
  'label.permission': 'Permission',
  'label.export': 'Export',
  'description.goal': 'Set or view the goal for a long-running task',
  'description.plan': 'Enter or leave plan mode',
  'description.feedback': 'Record feedback about this session',
  'description.compact': 'Compact older conversation history',
  'description.permission': 'Switch the permission preset (sandbox mode + approval policy)',
  'description.export': 'Download this Session log as a ZIP archive',
  'token.goal': 'goal',
  'token.plan': 'plan',
  'token.feedback': 'feedback',
  'token.compact': 'compact',
  'token.permission': 'permission',
  'token.export': 'export',
  'search.placeholder': 'Search…',
  'search.aria': 'Filter options',
  'status.loading': 'Loading options…',
  'status.applying': 'Applying…',
  'status.empty': 'No options',
  'overlay.aria': '/{command} options',
  'listbox.aria': '/{command} matches',
  'notice.attachmentsUnsupported': '/{command} does not accept attachments; remove them first',
} satisfies Record<string, string>

/** The command namespace key union. */
export type CommandKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'section.add': 'إضافة',
  'section.commands': 'الأوامر',
  'label.goal': 'الهدف',
  'label.plan': 'الخطة',
  'label.feedback': 'ملاحظات',
  'label.compact': 'ضغط',
  'label.permission': 'الصلاحيات',
  'label.export': 'تصدير',
  'description.goal': 'تعيين أو عرض هدف المهمة طويلة المدى',
  'description.plan': 'الدخول في وضع الخطة أو الخروج منه',
  'description.feedback': 'تسجيل ملاحظات حول هذه الجلسة',
  'description.compact': 'ضغط سجل المحادثة السابق',
  'description.permission': 'تبديل الإعداد المسبق للصلاحيات (وضع العزل وسياسة الموافقة)',
  'description.export': 'تنزيل سجل هذه الجلسة كملف أرشفة ZIP',
  'token.goal': 'goal',
  'token.plan': 'plan',
  'token.feedback': 'feedback',
  'token.compact': 'compact',
  'token.permission': 'permission',
  'token.export': 'export',
  'search.placeholder': 'بحث…',
  'search.aria': 'تصفية الخيارات',
  'status.loading': 'جارٍ تحميل الخيارات…',
  'status.applying': 'جارٍ التطبيق…',
  'status.empty': 'لا توجد خيارات',
  'overlay.aria': 'خيارات /{command}',
  'listbox.aria': 'مطابقات /{command}',
  'notice.attachmentsUnsupported': 'لا يقبل /{command} المرفقات؛ يُرجى إزالتها أولاً',
} satisfies Record<CommandKey, string>

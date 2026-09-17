/** `settings.permission` namespace dictionaries (the Permission row's copy). */

/** English dictionary (the key-set source of truth). */
export const en = {
  'title': 'Permission',
  'description': 'Choose the default permission mode for new sessions',
  'loading': 'Loading',
  'unavailable': 'Unavailable',
  'preset.readOnly': 'Read Only',
  'preset.workspaceWrite': 'Workspace Write',
  'preset.fullAccess': 'Full access',
  'confirm.title': 'Enable Full access?',
  'confirm.description': 'Full access lets new sessions reduce confirmation steps and perform more actions directly, including sensitive operations, file changes, or external commands. Only use it when you trust subsequent tasks.',
  'confirm.acknowledge': 'I understand the risks and want to continue',
  'confirm.cancel': 'Cancel',
  'confirm.enable': 'Enable Full access',
} satisfies Record<string, string>

/** The settings.permission namespace key union. */
export type PermissionSettingsKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'title': 'الصلاحيات',
  'description': 'اختر وضع الصلاحيات الافتراضي للجلسات الجديدة',
  'loading': 'جارٍ التحميل',
  'unavailable': 'غير متوفر',
  'preset.readOnly': 'للقراءة فقط',
  'preset.workspaceWrite': 'كتابة في مساحة العمل',
  'preset.fullAccess': 'وصول كامل',
  'confirm.title': 'هل تريد تفعيل الوصول الكامل؟',
  'confirm.description': 'يسمح الوصول الكامل للجلسات الجديدة بتقليل خطوات التأكيد وتنفيذ المزيد من الإجراءات مباشرةً، بما في ذلك العمليات الحساسة، وتعديل الملفات، أو تشغيل الأوامر الخارجية. يُنصح باستخدامه فقط عندما تثق في المهام اللاحقة.',
  'confirm.acknowledge': 'أدرك المخاطر وأرغب في المتابعة',
  'confirm.cancel': 'إلغاء',
  'confirm.enable': 'تفعيل الوصول الكامل',
} satisfies Record<PermissionSettingsKey, string>

/** English dictionary for the current-session popup gate. */
export const accessEn = {
  'preset.readOnly': 'Read Only',
  'preset.workspaceWrite': 'Workspace Write',
  'preset.fullAccess': 'Full access',
  'confirm.title': 'Enable Full access?',
  'confirm.description': 'Full access reduces confirmation steps and lets the agent perform more actions directly, including sensitive operations, file changes, or external commands. Only use it when you trust the current task.',
  'confirm.acknowledge': 'I understand the risks and want to continue',
  'confirm.cancel': 'Cancel',
  'confirm.enable': 'Enable Full access',
} satisfies Record<string, string>

/** Current-session popup-gate key union. */
export type PermissionAccessKey = keyof typeof accessEn

/** Arabic dictionary for the current-session popup gate. */
export const accessAr = {
  'preset.readOnly': 'للقراءة فقط',
  'preset.workspaceWrite': 'كتابة في مساحة العمل',
  'preset.fullAccess': 'وصول كامل',
  'confirm.title': 'هل تريد تفعيل الوصول الكامل؟',
  'confirm.description': 'يقلل الوصول الكامل من خطوات التأكيد ويتيح للوكيل تنفيذ المزيد من الإجراءات مباشرةً، بما في ذلك العمليات الحساسة، وتعديل الملفات، أو تشغيل الأوامر الخارجية. يُنصح باستخدامه فقط عندما تثق في المهمة الحالية.',
  'confirm.acknowledge': 'أدرك المخاطر وأرغب في المتابعة',
  'confirm.cancel': 'إلغاء',
  'confirm.enable': 'تفعيل الوصول الكامل',
} satisfies Record<PermissionAccessKey, string>

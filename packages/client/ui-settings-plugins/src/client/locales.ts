/** Locale bundles for the plugin configuration section and its plugin cards. */

/** Locale keys these surfaces render. */
export type PluginsSettingsLocaleKey =
  | 'nav' | 'title' | 'intro' | 'tabs' | 'configurableTab' | 'empty'
  | 'overridden' | 'reset' | 'readOnly' | 'expand' | 'collapse'
  | 'save' | 'saving' | 'discard' | 'unsaved' | 'saveFailed' | 'invalidNumber'
  | 'bashTitle' | 'bashDescription' | 'bashTimeoutMs' | 'bashTimeoutMsHint'
  | 'bashMaxOutputBytes' | 'bashMaxOutputBytesHint'
  | 'agentLoopTitle' | 'agentLoopDescription' | 'agentLoopMaxParallel' | 'agentLoopMaxParallelHint'
  | 'webSearchTitle' | 'webSearchDescription'
  | 'webSearchApiKey' | 'webSearchApiKeyHint' | 'webSearchApiKeySet' | 'webSearchApiKeyUnset'
  | 'webSearchBaseUrl' | 'webSearchBaseUrlHint' | 'webSearchMaxUses' | 'webSearchMaxUsesHint'
  | 'subagentModelSelectionTitle' | 'subagentModelSelectionDescription'
  | 'subagentModelSelectionToggle' | 'subagentModelSelectionChoose' | 'subagentModelSelectionAllowed'
  | 'subagentModelSelectionLoading' | 'subagentModelSelectionLoadFailed' | 'subagentModelSelectionRetry'
  | 'subagentModelSelectionPartial' | 'subagentModelSelectionUnavailable'
  | 'subagentModelSelectionUnavailableGroup' | 'subagentModelSelectionEmpty'
  | 'subagentModelSelectionRequired' | 'subagentModelSelectionConflict' | 'subagentModelSelectionOff'

/** English copy. */
export const en: Record<PluginsSettingsLocaleKey, string> = {
  nav: 'Plugins',
  title: 'Plugins',
  intro: 'Configure and inspect the plugins installed in this deployment.',
  tabs: 'Plugin views',
  configurableTab: 'Plugin configuration',
  empty: 'This deployment exposes no plugin settings.',
  overridden: 'Overridden',
  reset: 'Reset to default',
  readOnly: 'This deployment stores settings read-only.',
  expand: 'Show settings',
  collapse: 'Hide settings',
  save: 'Save',
  saving: 'Saving…',
  discard: 'Discard',
  unsaved: 'Unsaved',
  saveFailed: 'The deployment did not accept these values; they were left for you to correct.',
  invalidNumber: 'Enter a number, or leave blank to use the default.',
  bashTitle: 'Shell',
  bashDescription: 'Limits every command the agent runs.',
  bashTimeoutMs: 'Command timeout (ms)',
  bashTimeoutMsHint: 'How long one command may run before it is terminated.',
  bashMaxOutputBytes: 'Output cap per stream (bytes)',
  bashMaxOutputBytesHint: 'Output beyond this spills to a temporary file rather than being lost.',
  agentLoopTitle: 'Agent loop',
  agentLoopDescription: 'How the agent dispatches tool calls.',
  agentLoopMaxParallel: 'Parallel tool calls',
  agentLoopMaxParallelHint: 'Upper bound on parallel-safe calls running at once within one step.',
  webSearchTitle: 'Web search',
  webSearchDescription: 'The DeepSeek search provider.',
  webSearchApiKey: 'API key',
  webSearchApiKeyHint: 'Stored outside the settings file. Leave blank to keep the current key.',
  webSearchApiKeySet: 'A key is configured.',
  webSearchApiKeyUnset: 'No key is configured; search is unavailable until one is.',
  webSearchBaseUrl: 'Endpoint',
  webSearchBaseUrlHint: 'Leave blank to use the provider default.',
  webSearchMaxUses: 'Max searches per request',
  webSearchMaxUsesHint: 'How many times one request may search before it must answer.',
  subagentModelSelectionTitle: 'Subagent',
  subagentModelSelectionDescription: 'Control which models agents may choose for subagents.',
  subagentModelSelectionToggle: 'Allow agents to choose models for subagents',
  subagentModelSelectionChoose: 'When enabled, agents can choose a provider, model, and reasoning effort for each subagent from the authorized models below. Applies only to new sessions.',
  subagentModelSelectionAllowed: 'Models agents may choose',
  subagentModelSelectionLoading: 'Loading models…',
  subagentModelSelectionLoadFailed: 'Models could not be loaded.',
  subagentModelSelectionRetry: 'Retry',
  subagentModelSelectionPartial: 'Some model providers could not be loaded; saved choices remain removable.',
  subagentModelSelectionUnavailable: 'Currently unavailable',
  subagentModelSelectionUnavailableGroup: 'Saved but currently unavailable',
  subagentModelSelectionEmpty: 'No model provider currently advertises a model.',
  subagentModelSelectionRequired: 'Select at least one model before saving.',
  subagentModelSelectionConflict: 'Settings changed elsewhere. Discard your draft and try again.',
  subagentModelSelectionOff: 'Subagents use configured defaults or inherit the parent agent\'s model. Saved model choices are retained.',
}

/** Arabic copy. */
export const ar: Record<PluginsSettingsLocaleKey, string> = {
  nav: 'الإضافات',
  title: 'الإضافات',
  intro: 'تكوين وفحص الإضافات المثبتة في هذا التثبيت.',
  tabs: 'طرق عرض الإضافات',
  configurableTab: 'تكوين الإضافات',
  empty: 'لا يعرض هذا التثبيت أي إعدادات للإضافات.',
  overridden: 'تم التجاوز',
  reset: 'استعادة الإعدادات الافتراضية',
  readOnly: 'يخزن هذا التثبيت الإعدادات للقراءة فقط.',
  expand: 'إظهار الإعدادات',
  collapse: 'إخفاء الإعدادات',
  save: 'حفظ',
  saving: 'جارٍ الحفظ…',
  discard: 'تجاهل التغييرات',
  unsaved: 'غير محفوظ',
  saveFailed: 'لم يقبل التثبيت هذه القيم؛ تُركت لتتمكن من تصحيحها.',
  invalidNumber: 'أدخل رقماً، أو اتركه فارغاً لاستخدام القيمة الافتراضية.',
  bashTitle: 'الطرفية (Shell)',
  bashDescription: 'يضع حدوداً لكل أمر ينفذه الوكيل.',
  bashTimeoutMs: 'مهلة الأمر (مللي ثانية)',
  bashTimeoutMsHint: 'المدة الزمنية المسموح بها لتشغيل أمر واحد قبل إنهائه.',
  bashMaxOutputBytes: 'الحد الأقصى للمخرجات لكل تدفق (بايت)',
  bashMaxOutputBytesHint: 'المخرجات التي تتجاوز هذا الحد تُنقل إلى ملف مؤقت بدلاً من فقدانها.',
  agentLoopTitle: 'حلقة الوكيل (Agent loop)',
  agentLoopDescription: 'كيفية توزيع استدعاءات الأدوات بواسطة الوكيل.',
  agentLoopMaxParallel: 'استدعاءات الأدوات المتوازية',
  agentLoopMaxParallelHint: 'الحد الأقصى للاستدعاءات الآمنة المتزامنة داخل خطوة واحدة.',
  webSearchTitle: 'البحث على الويب',
  webSearchDescription: 'مزود بحث DeepSeek.',
  webSearchApiKey: 'مفتاح API',
  webSearchApiKeyHint: 'مخزن خارج ملف الإعدادات. اتركه فارغاً للاحتفاظ بالمفتاح الحالي.',
  webSearchApiKeySet: 'تم تكوين المفتاح.',
  webSearchApiKeyUnset: 'لم يتم تكوين مفتاح؛ البحث غير متوفر حتى يتم إدخال مفتاح.',
  webSearchBaseUrl: 'نقطة النهاية (Endpoint)',
  webSearchBaseUrlHint: 'اتركه فارغاً لاستخدام القيمة الافتراضية للمزود.',
  webSearchMaxUses: 'الحد الأقصى للبحث لكل طلب',
  webSearchMaxUsesHint: 'عدد مرات البحث المسموح بها لطلب واحد قبل وجوب تقديم الإجابة.',
  subagentModelSelectionTitle: 'الوكيل الفرعي (Subagent)',
  subagentModelSelectionDescription: 'التحكم في النماذج التي يمكن للوكلاء اختيارها للوكلاء الفرعيين.',
  subagentModelSelectionToggle: 'السماح للوكلاء باختيار نماذج للوكلاء الفرعيين',
  subagentModelSelectionChoose: 'عند التفعيل، يمكن للوكلاء اختيار المزود والنموذج ومستوى التفكير لكل وكيل فرعي من النماذج المصرح بها أدناه. ينطبق فقط على الجلسات الجديدة.',
  subagentModelSelectionAllowed: 'النماذج المسموح للوكلاء باختيارها',
  subagentModelSelectionLoading: 'جارٍ تحميل النماذج…',
  subagentModelSelectionLoadFailed: 'تعذر تحميل النماذج.',
  subagentModelSelectionRetry: 'إعادة المحاولة',
  subagentModelSelectionPartial: 'تعذر تحميل بعض مزودي النماذج؛ تظل الخيارات المحفوظة قابلة للإزالة.',
  subagentModelSelectionUnavailable: 'غير متوفر حالياً',
  subagentModelSelectionUnavailableGroup: 'محفوظ ولكن غير متوفر حالياً',
  subagentModelSelectionEmpty: 'لا يعلن أي مزود نماذج حالياً عن أي نموذج.',
  subagentModelSelectionRequired: 'حدد نموذجاً واحداً على الأقل قبل الحفظ.',
  subagentModelSelectionConflict: 'تغيرت الإعدادات في مكان آخر. تجاهل مسودتك وأعد المحاولة.',
  subagentModelSelectionOff: 'يستخدم الوكلاء الفرعيون الإعدادات الافتراضية المحددة أو يرثون نموذج الوكيل الرئيسي. يتم الاحتفاظ بخيارات النماذج المحفوظة.',
}

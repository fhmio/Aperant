/**
 * `model` namespace dictionaries.
 *
 * `trigger.selectAria` intentionally matches `trigger.fallback` but remains a
 * separate key: the visible fallback label and the accessible name of
 * an unset trigger are free to diverge per locale, and folding it into
 * `trigger.aria` would announce the degenerate "Select model, current Select
 * model".
 */

/** English dictionary (the key-set source of truth). */
export const en = {
  'command.label': 'Model',
  'command.description': 'Select the model for this conversation',
  'option.loadError': 'Catalog failed to load: {message}',
  'option.deepseekV4Flash.description': 'Fast, efficient, and economical; suited to focused, routine, or parallel tasks.',
  'option.deepseekV4Pro.description': 'Stronger agentic coding, knowledge, and difficult reasoning; suited to complex or quality-critical tasks at higher cost.',
  'trigger.fallback': 'Select model',
  'trigger.loading': 'Loading models…',
  'trigger.selectAria': 'Select model',
  'trigger.aria': 'Select model, current {model}',
  'trigger.ariaEffort': 'Select model, current {model}, reasoning effort {effort}',
  'menu.aria': 'Model and reasoning effort',
  'menu.model': 'Model',
  'menu.effort': 'Effort',
  'effort.providerDefault': 'Default',
  'status.loading': 'Refreshing model list…',
  'error.action': 'Model operation failed: {message}',
  'action.reload': 'Reload',
  'warning.groupLoad': '{name} failed to load: {message}',
  'empty.models': 'No models available.',
  'blocked.composer': 'This model is unavailable — select one to continue',
  'empty.efforts': 'This model provides no reasoning effort levels.',
} satisfies Record<string, string>

/** The model namespace key union. */
export type ModelKey = keyof typeof en

/** Arabic dictionary, checked complete against the en key set. */
export const ar = {
  'command.label': 'النموذج',
  'command.description': 'حدد النموذج لهذه المحادثة',
  'option.loadError': 'فشل تحميل الدليل: {message}',
  'option.deepseekV4Flash.description': 'سريع وفعال واقتصادي؛ مناسب للمهام المركزة أو الروتينية أو المتوازية.',
  'option.deepseekV4Pro.description': 'قدرات برمجية وتحليلية أعمق، ومعرفة وتفكير منطقي معقد؛ مناسب للمهام المعقدة أو الحساسة للجودة بتكلفة أعلى.',
  'trigger.fallback': 'اختر نموذجاً',
  'trigger.loading': 'جارٍ تحميل النماذج…',
  'trigger.selectAria': 'اختر نموذجاً',
  'trigger.aria': 'اختيار النموذج، الحالي {model}',
  'trigger.ariaEffort': 'اختيار النموذج، الحالي {model}، مستوى التفكير {effort}',
  'menu.aria': 'النموذج ومستوى التفكير المنطقي',
  'menu.model': 'النموذج',
  'menu.effort': 'مستوى التفكير',
  'effort.providerDefault': 'افتراضي',
  'status.loading': 'جارٍ تحديث قائمة النماذج…',
  'error.action': 'فشلت عملية النموذج: {message}',
  'action.reload': 'إعادة التحميل',
  'warning.groupLoad': 'فشل تحميل {name}: {message}',
  'empty.models': 'لا تتوفر نماذج.',
  'blocked.composer': 'هذا النموذج غير متوفر — اختر نموذجاً للمتابعة',
  'empty.efforts': 'لا يوفر هذا النموذج مستويات للتفكير المنطقي.',
} satisfies Record<ModelKey, string>

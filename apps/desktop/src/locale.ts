/** Typed English and Chinese copy owned by the Electron shell. */

export const en = {
  application: 'Application',
  startupFailed: 'Aperant could not start',
  startupLoading: 'Starting Aperant…',
  startupLoadingDescription: 'Your workspace will open when it is ready.',
  startupErrorDescription: 'Choose a recovery action below. Disabling third-party plugins retains their files.',
  startupReinstallAdvice: 'If application files are missing or damaged, close the application and reinstall it. Your tasks are stored separately.',
  startupConfigurationAdvice: 'Reset Desktop deletes all Desktop profile configuration and third-party plugins without a backup, then starts a fresh profile. Shared tasks and settings are retained.',
  restartApplication: 'Close and restart',
  resetConfiguration: 'Reset Desktop and retry',
  disableThirdPartyPlugins: 'Disable all third-party plugins and retry',
  pluginsMenu: 'Desktop Plugins…',
  pluginsMenuPackagedOnly: 'Desktop Plugins… (available in packaged applications)',
  checkUpdatesMenu: 'Check for Updates…',
  updateCheckFailedTitle: 'Update Check Failed',
  unknownError: 'Unknown error',
  updateCheckTitle: 'Check for Updates',
  updateCurrent: 'You already have the latest version.',
  updateTitle: 'Aperant Update',
  updateAvailable: 'An update is available',
  updateDetail: 'Aperant {version}\n\nThis release includes its matching dsh version. The application will restart after installation.',
  installAndRestart: 'Install and Restart',
  later: 'Later',
  updateFailedTitle: 'Update Failed',
  pluginManagerTitle: 'Desktop Plugins',
  pluginWindowTitle: 'Aperant — Desktop Plugins',
  pluginManagerDescription: 'Plugins are installed only in the Desktop node_modules and are managed by the bundled pnpm.',
  refresh: 'Refresh',
  enable: 'Enable',
  disable: 'Disable',
  disabled: 'Disabled',
  retry: 'Retry startup',
  disableAll: 'Disable all plugins and retry',
  recoveryDescription: 'The backend could not start. Update or disable incompatible plugins, then retry. Installed plugins and configuration are retained.',
  changingActivation: 'Changing plugin activation…',
  npmPackage: 'npm package',
  install: 'Install',
  installed: 'Installed',
  noPlugins: 'No Desktop plugins are installed.',
  remove: 'Remove',
  update: 'Update',
  targetVersion: 'Enter the target version for {name}',
  removing: 'Removing {name}…',
  updating: 'Updating {name}…',
  installing: 'Installing {spec}…',
  operationComplete: 'Done. The Desktop backend has restarted.',
  refreshing: 'Refreshing…',
  refreshed: 'Plugin list refreshed.',
  loadingPlugins: 'Reading Desktop plugins…',
} as const

/** Every Desktop locale supplies the complete English key set. */
export type DesktopMessages = { readonly [Key in keyof typeof en]: string }

export const ar = {
  application: 'التطبيق',
  startupFailed: 'تعذر تشغيل Aperant',
  startupLoading: 'جارٍ تشغيل Aperant…',
  startupLoadingDescription: 'سيتم فتح مساحة العمل تلقائياً بمجرد أن تصبح جاهزة.',
  startupErrorDescription: 'اختر أحد إجراءات الاسترداد أدناه. تعطيل الإضافات الخارجية يحتفظ بملفاتها.',
  startupReinstallAdvice: 'إذا كانت ملفات التطبيق مفقودة أو تالفة، أغلق التطبيق وأعد تثبيته. يتم حفظ بيانات مهامك بشكل منفصل.',
  startupConfigurationAdvice: 'إعادة تعيين التطبيق تحذف جميع إعدادات ملف التعريف والإضافات الخارجية دون نسخ احتياطي، ثم تبدأ ملف تعريف جديد. يتم الاحتفاظ بالمهام والإعدادات المشتركة.',
  restartApplication: 'إغلاق وإعادة التشغيل',
  resetConfiguration: 'إعادة تعيين التطبيق وإعادة المحاولة',
  disableThirdPartyPlugins: 'تعطيل جميع الإضافات الخارجية وإعادة المحاولة',
  pluginsMenu: 'إضافات التطبيق…',
  pluginsMenuPackagedOnly: 'إضافات التطبيق… (متاحة في التطبيق المثبت فقط)',
  checkUpdatesMenu: 'التحقق من وجود تحديثات…',
  updateCheckFailedTitle: 'فشل التحقق من التحديثات',
  unknownError: 'خطأ غير معروف',
  updateCheckTitle: 'التحقق من التحديثات',
  updateCurrent: 'لديك أحدث إصدار بالفعل.',
  updateTitle: 'تحديث Aperant',
  updateAvailable: 'يتوفر تحديث جديد',
  updateDetail: 'Aperant {version}\n\nيتضمن هذا الإصدار حزمة dsh المطابقة له. سيعاد تشغيل التطبيق بعد اكتمال التثبيت.',
  installAndRestart: 'تثبيت وإعادة التشغيل',
  later: 'لاحقاً',
  updateFailedTitle: 'فشل التحديث',
  pluginManagerTitle: 'إضافات التطبيق',
  pluginWindowTitle: 'Aperant — إضافات التطبيق',
  pluginManagerDescription: 'تُثبّت الإضافات فقط في node_modules الخاصة بسطح المكتب وتُدار عبر pnpm المدمج.',
  refresh: 'تحديث',
  enable: 'تفعيل',
  disable: 'تعطيل',
  disabled: 'معطل',
  retry: 'إعادة محاولة البدء',
  disableAll: 'تعطيل جميع الإضافات وإعادة المحاولة',
  recoveryDescription: 'تعذر تشغيل الواجهة الخلفية. يرجى تحديث الإضافات غير المتوافقة أو تعطيلها، ثم إعادة المحاولة. يتم الاحتفاظ بالإضافات والإعدادات المثبتة.',
  changingActivation: 'جارٍ تغيير حالة الإضافة…',
  npmPackage: 'حزمة npm',
  install: 'تثبيت',
  installed: 'مثبت',
  noPlugins: 'لا توجد إضافات مثبتة لسطح المكتب.',
  remove: 'إزالة',
  update: 'تحديث',
  targetVersion: 'أدخل الإصدار المستهدف لـ {name}',
  removing: 'جارٍ إزالة {name}…',
  updating: 'جارٍ تحديث {name}…',
  installing: 'جارٍ تثبيت {spec}…',
  operationComplete: 'اكتملت العملية. تمت إعادة تشغيل الواجهة الخلفية بنجاح.',
  refreshing: 'جارٍ التحديث…',
  refreshed: 'تم تحديث قائمة الإضافات.',
  loadingPlugins: 'جارٍ قراءة إضافات سطح المكتب…',
} as const satisfies DesktopMessages

/** Locale payload exposed to the Desktop-owned renderer. */
export interface DesktopLocale {
  readonly id: 'en' | 'ar'
  readonly messages: DesktopMessages
}

/** Resolve Electron's locale to one shipped Desktop dictionary. */
export function resolveDesktopLocale(locale: string): DesktopLocale {
  return locale.toLowerCase().startsWith('ar')
    ? { id: 'ar', messages: ar }
    : { id: 'en', messages: en }
}

/** Replace named placeholders in one locale-owned message. */
export function formatDesktopMessage(
  message: string,
  values: Readonly<Record<string, string>>,
): string {
  return message.replaceAll(/\{([^{}]+)\}/gu, (placeholder, key: string) => values[key] ?? placeholder)
}

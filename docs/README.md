يخضع مجلد التوثيق لقواعد حوكمة صارمة جداً (وفق [docs/AGENTS.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/AGENTS.md))؛ حيث تأتي الوثائق بنظام النسخ المتطابقة ثنائية اللغة (الإنجليزية والصينية)، ويتم توليد الكثير من الفهارس والمخططات تلقائياً والتحقق من حداثتها في كل دورة بناء عبر أوامر الفحص (`doc-sync` و `verify-doc-refs`).

---

# فهرس أقسام التوثيق

1. [الوثائق المعمارية والمرجعية الأساسية في الجذر (`docs/*.md`)](#1-الوثائق-المعمارية-والمرجعية-الأساسية-في-الجذر-docsmd)
2. [وثائق النظم الفرعية (`docs/subsystems/*.md`)](#2-وثائق-النظم-الفرعية-docssubsystemsmd)
3. [كتيبات التطوير والإرشاد (`docs/cookbook/*.md`)](#3-كتيبات-التطوير-والإرشاد-docscookbookmd)
4. [دروس إطار العمل كوردس (`docs/cordis-tutorial/*.md`)](#4-دروس-إطار-العمل-كوردس-docscordis-tutorialmd)
5. [تقارير تحليل الحوادث المعمارية (`docs/postmortem/*.md`)](#5-تقارير-تحليل-الحوادث-المعمارية-docspostmortemmd)

---

# 1. الوثائق المعمارية والمرجعية الأساسية في الجذر (`docs/*.md`)

### 1. [architecture.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/architecture.md) — المعمارية الكلية للمشروع
* **الهدف والمضمون:** الوثيقة الأم للمشروع بأكمله. تشرح كيفية عمل إطار **Cordis** كنظام إضافات موحد، وكيفية إقلاع التطبيق عبر الطبقات المتراكمة (Profiles & Bundles)، وآلية انطلاق التطبيقات الحصرية عبر أمر `dsh`، ومعمارية تطبيق سطح المكتب (Electron) والأنابيب الثنائية المحمية.
* **الأهمية الهندسية:** تقدم جدول التوزيع الأساسي لدورة حياة الوكيل (`turn/*` و `step/*`) ومبدأ **«Model-visible ⟺ Logged»**.

### 2. [AGENTS.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/AGENTS.md) — قواعد توثيق الوكلاء والمطورين
* **الهدف والمضمون:** يحدد القواعد الصارمة لكتابة التوثيق: توثيق الحالة الحالية للبرنامج وتجنب سرد تاريخ التغييرات (عدم كتابة "كان كذا وأصبح كذا")، ووجوب إرفاق مذكرة هندسية (Agent Note) مع أي تعديل غير تافه، وقواعد المحاذاة اللغوية مع النسخ الصينية (`.zh.md`).

### 3. [agent-lifecycle.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/agent-lifecycle.md) — دورة حياة تفاعل الوكيل
* **الهدف والمضمون:** تفصيل دقيق لمراحل تنفيذ الطلب خطوة بخطوة من خلال مخططات تسلسلية (Sequence Diagrams): فتح الـ Turn، استلام المدخلات من صندوق الوارد، تجهيز مسودة الاتصال (`prepareCall`)، بث استجابة النموذج، وحتى استدعاء الأدوات وإغلاق الخطوة.

### 4. [capability-seams.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/capability-seams.md) — فواصل الإمكانيات والخدمات
* **الهدف والمضمون:** وثيقة مولدة آلياً ترسم خريطة بيانية لجميع الخدمات في النظام؛ تشرح قاعدة الفواصل الثلاثية: (تعريف الخدمة `Service Definition`، مزود الخدمة `Service Provider`، ومستهلك الخدمة `Consumer`).

### 5. [tool-execution-pipeline.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/tool-execution-pipeline.md) — خط أنابيب تنفيذ الأدوات
* **الهدف والمضمون:** تشريح مرحلي دقيق لخطوات تشغيل أي أداة يستدعيها النموذج: التحقق الأمني المسبق (`tools/pre-execute`)، التنفيذ الفعلي المحمي (`tools/execute`)، ومعالجة وحفظ المخرجات وضبط السياسات (`tools/post-execute`).

### 6. [api-gateway.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/api-gateway.md) — بوابة الاتصال البرمجي RPC
* **الهدف والمضمون:** يشرح هندسة الاتصال بين خادم الـ Host والواجهة الأمامية (Client). يعتمد على محرك `Typert` لتوليد RPC ثنائي الاتجاه عبر WebSockets لنقل الأحداث واستدعاء الدوال بنوعية بيانات صارمة وبدون طبقات ترجمة يدوية.

### 7. [deepseek-llm-api-wire-extensions.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/deepseek-llm-api-wire-extensions.md) — الامتدادات المخصصة لنماذج ديب سيك
* **الهدف والمضمون:** يوثق بروتوكول الاتصال الفريد بنماذج DeepSeek؛ يتناول كيفية التعامل مع بث وسوم التفكير المنطقي الاستدلالي (`reasoning_content` / Thinking tags)، وتقنية التخزين المؤقت للبادئات (Prefix Caching) لخفض تكلفة وزمن الرد.

### 8. [cordis-primer.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cordis-primer.md) — الدليل التمهيدي لإطار Cordis
* **الهدف والمضمون:** المرجع السريع لأهم 5 مفاهيم في إطار العمل: الخدمات، السياق المشترك، حقن التبعيات، التأثيرات القابلة للعكس، وأوضاع توزيع الأحداث الخمسة (`emit`, `waterfall`, `parallel`, `serial`, `bail`).

### 9. [defensive-patterns.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/defensive-patterns.md) — أنماط البرمجة الدفاعية
* **الهدف والمضمون:** إرشادات صارمة لحماية الذاكرة والعمليات: كيفية تفكيك الموارد وتجنب تسريب المستمعين (Event Listeners)، وإدارة دورات إغلاق العمليات الفرعية بأمان دون تعليق النظام.

### 10. [development.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/development.md) — دليل التطوير الشامل
* **الهدف والمضمون:** مرجع المطور لإعداد البيئة: متطلبات Node.js و pnpm، تقسيم مشاريع TypeScript بين وجه العميل والخادم، أوامر البناء واختبارات الجودة، وكيفية إضافة إضافات جديدة.

### 11. [testing.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/testing.md) — سياسة واستراتيجية الاختبارات
* **الهدف والمضمون:** يوضح فلسفة الاختبارات: فرض نسبة تغطية 100% لكل ملف كود تحت `packages/*/src`، واختبارات إعادة تشغيل الجلسات المسجلة الحتمية (Snapshots)، واختبارات الـ E2E الحقيقية التي تتخطى تلقائياً في حال غياب مفتاح API.

### 12. [event-producer-consumer.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/event-producer-consumer.md) — جدول منتجي ومستهلكي الأحداث
* **الهدف والمضمون:** فهرس شامل يوضح كل حدث يطلقه النظام، من هي الحزمة المنتجة له (Producer)، ومن هي الحزم التي تستمع إليه (Consumers).

### 13. [tool-catalog.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/tool-catalog.md) — كتالوج أدوات الذكاء الاصطناعي
* **الهدف والمضمون:** وثيقة مولدة آلياً تحاكي إقلاع كل أداة في بيئة حقيقية وقراءة مخططها، وتعرض جميع الأدوات المتاحة للنموذج مع تفاصيل مُعاملاتها وأوصافها الـ JSON Schema الدقيقة.

### 14. [config-catalog.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/config-catalog.md) — كتالوج الإعدادات والخيارات
* **الهدف والمضمون:** فهرس ضخم يغطي جميع الحقول والخيارات القابلة للتخصيص في ملفات إعدادات الحزم و`cordis.yml`.

### 15. [persistence-catalog.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/persistence-catalog.md) — كتالوج بيانات التخزين الدائم
* **الهدف والمضمون:** يوثق كافة السجلات والبيانات التي يتم حفظها على القرص في قواعد بيانات SQLite وملفات JSONL لضمان تعافي البيانات.

### 16. [session-format-status.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/session-format-status.md) — مواصفات صيغ الجلسات
* **الهدف والمضمون:** يوثق تاريخ ومواصفات إصدارات ملفات الجلسة (`v0`, `v1`, `v2`, `v3`)، ويشرح استراتيجية "الهجرة المجاورة" (Adjacent Migrations) التي ترقي الملفات دون الكتابة فوق النسخ القديمة أو حذفها.

### 17. [module-graph.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/module-graph.md) & [graph-atlas.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/graph-atlas.md) — أطلس العلاقات بين الحزم
* **الهدف والمضمون:** رسوم بيانية تفاعلية (Mermaid) تتبع شجرة الاعتماديات الدائرية والمباشرة بين أكثر من 50 حزمة لتفادي التداخل المحظور.

### 18. [glossary.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/glossary.md) — معجم مصطلحات المشروع
* **الهدف والمضمون:** تعريف المصطلحات المحورية الموحدة مثل: `Turn`, `Step`, `Seam`, `Bundle`, `Profile`, `Disposer`, `Projection`.

### 19. [rescope.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/rescope.md) — نطاقات الحزم والـ Vendoring
* **الهدف والمضمون:** يوضح قواعد حصر جميع الحزم المدمجة من المجتمع الخارجي تحت نطاق `@deepseek-ai/*` لضمان استقلالية وتوافق المستودع.

### 20. [web-styling.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/web-styling.md) — دليل تصميم واجهات الويب
* **الهدف والمضمون:** يحدد رموز التصميم (Tokens)، والخطوط الرسمية، وتدرجات الألوان، ومبادئ العرض الرسومي لواجهات المتصفح وسطح المكتب.

---

# 2. وثائق النظم الفرعية (`docs/subsystems/*.md`)

يحتوي مجلد [subsystems](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems) على 53 وثيقة متخصصة تغطي تشريح كل قدرة داخل المنظومة:

| الوثيقة | النظام الفرعي المشروح | الدور والمحتوى المعماري |
|---|---|---|
| **[core.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/core.md)** | النواة ومحرك الوكيل | شرح كائن `Agent`، محرك `agent-loop`، إدارة صندوق الرسائل، وأحداث التشغيل. |
| **[session.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/session.md)** | سجل الجلسة والأحداث | سجل الأحداث غير القابل للتعديل، خريطة الأحداث `SessionEventMap`، والبث المباشر. |
| **[system-prompt.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/system-prompt.md)** | محرك موجه النظام | تجميع أقسام التعليمات، مخططات الأدوات، وحقن السياق في الـ System Prompt ديناميكياً. |
| **[tools.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/tools.md)** | مسجل الأدوات | مسجل الأدوات `ctx.tools`، فلاتر الأمان، وحصانة تنفيذ الأدوات. |
| **[llm-streaming.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/llm-streaming.md)** | بث النماذج | بث أجزاء الرد في الوقت الفعلي والتعامل مع انقطاع الشبكة وإعادة التوصيل. |
| **[code-runtime.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/code-runtime.md)** | بيئة تشغيل الكود (PTC) | آلية تشغيل الأكواد البرمجية مباشرة واستدعاء الأدوات محلياً بسرعات قياسية. |
| **[subagent.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/subagent.md)** | الوكلاء الفرعيون | تفويض المهام المستقلة لوكلاء أبناء مخصصين، وتفريخ الجلسات المعزولة. |
| **[agent-team.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/agent-team.md)** | فرق الوكلاء المتعددين | إدارة فرق العمل (Lead/Teammates)، لوحة المهام التشاركية، وصناديق البريد. |
| **[filesystem.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/filesystem.md)** | نظام الملفات | سياسات التعامل مع الملفات، الحماية من التعديل الأعمى، والبحث السريع. |
| **[shell.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/shell.md)** | بيئات الشل والأوامر | تنفيذ أوامر Bash (يونكس) و PowerShell (ويندوز) بطريقة عابرة للمنصات. |
| **[terminal.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/terminal.md)** | الطرفية التفاعلية PTY | إدارة جلسات الطرفية الحية التي تحتفظ بحالتها ومدخلاتها ومخرجاتها عبر الخطوات. |
| **[subprocess.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/subprocess.md)** | إدارة العمليات | التحكم في شجرة العمليات لمنع العمليات اليتيمة عبر إضافات C/C++ و Win32 Jobs. |
| **[sandbox.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/sandbox.md)** | العزل الأمني | فرض قيود الوصول للمسارات عبر Landlock (لينكس) و Seatbelt (ماك). |
| **[compaction.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/compaction.md)** | ضغط السياق | خوارزميات تلخيص وتقليص تاريخ الجلسة عند امتلاء نافذة السياق للنموذج. |
| **[persistence.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/persistence.md)** | التخزين الدائم | منافذ التخزين وحفظ السجلات بصيغ مضغوطة قابلة للاسترجاع. |
| **[session-projection.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/session-projection.md)** | إسقاط الجلسة | تحويل سجل الأحداث الخام إلى كائنات وحالات يسهل عرضها في الواجهة. |
| **[session-query.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/session-query.md)** | استرجاع الجلسات | البحث النصي الكامل (SQLite FTS) وتتبع شجرة الجلسات والرسائل السابقة. |
| **[session-telemetry.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/session-telemetry.md)** | القياس والتتبع | تصدير مؤشرات الأداء والأخطاء واستهلاك الموارد عبر معيار OpenTelemetry. |
| **[session-title.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/session-title.md)** | استنتاج العناوين | توليد عناوين ذكية ومختصرة للجلسات تلقائياً عبر استقراء الأسئلة الأولى. |
| **[approval.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/approval.md)** | موافقة المستخدم | إدارة طلبات إذن المستخدم لتنفيذ أوامر خطيرة أو تعديلات حساسة. |
| **[permission-presets.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/permission-presets.md)** | قوالب الصلاحيات | إعدادات مسبقة للتحكم في درجات الأمان (تأكيد كل شيء، تأكيد الأوامر فقط، مؤتمت). |
| **[commands.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/commands.md)** | أوامر المستخدم | أوامر سريعة من المستخدم (مثل `/compact`, `/goal`) تُنفذ دون استدعاء النموذج. |
| **[user-questions.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/user-questions.md)** | استجواب المستخدم | النافذة التفاعلية التي يطرح من خلالها الوكيل خيارات متعددة على المستخدم. |
| **[feedback.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/feedback.md)** | التقييم والملاحظات | جمع تقييمات المستخدم الإيجابية والسلبية على كل رسالة وربطها بالجلسة. |
| **[attachment.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/attachment.md)** | المرفقات الثنائية | تخزين الصور والملفات المرفقة وتسميتها ببصمة محتواها الفريدة (CAS). |
| **[workspace.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/workspace.md)** | إدارة مساحة العمل | كيان المجلد المفتوح ومتابعة الملفات والتعليمات المرفقة للمشروع. |
| **[settings.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/settings.md)** | إعدادات المستخدم | قراءة وحفظ تفضيلات المطور في ملفات إعداد محلية. |
| **[credentials.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/credentials.md)** | إدارة الأسرار | قراءة مفاتيح الـ API من `.env` والتعامل الآمن مع المصادقة. |
| **[skills.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/skills.md)** | نظام المهارات | اكتشاف وتثبيت كتالوجات المهارات المتخصصة وتقديمها للوكيل عند الطلب. |
| **[storage.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/storage.md)** | التخزين العام | خدمات التخزين الداخلية لقواعد بيانات JSON و SQLite للأمور خارج الجلسات. |
| **[jobs.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/jobs.md)** | المهام الخلفية | مراقبة العمليات الطويلة ومتابعة مخرجاتها وإيقافها عند الحاجة. |
| **[goal.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/goal.md)** | أهداف الجلسة | تحديد الأهداف الكبرى ومراقبة نسبة تحقيقها عبر خطوات الحوار. |
| **[plan.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/plan.md)** | وضع التخطيط | الدخول في وضع صياغة الخطة وعرضها للمستخدم للمراجعة قبل أي تنفيذ. |
| **[todo.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/todo.md)** | قائمة المهام | أداة تتبع الخطوات التنفيذية على شكل قائمة مهام ديناميكية مرئية. |
| **[token-meter.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/token-meter.md)** | عداد التوكنز | حساب التكلفة واستهلاك التوكنز في المحادثات الحيّة واختبارات الإعادة. |
| **[spill.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/spill.md)** | حماية المخرجات الضخمة | تفريغ مخرجات الأدوات الهائلة في ملفات مؤقتة وتمرير رابطها لتفادي انفجار السياق. |
| **[typert.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/typert.md)** | نظام أنواع RPC | فحص مخططات الـ RPC في وقت التشغيل والربط بين الخادم والمتصفح. |
| **[web.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/web.md)** | محرك الويب | أدوات البحث في الإنترنت وجلب محتويات المواقع وتجريدها من كود HTML. |
| **[web-server.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/web-server.md)** | خادم الويب | خادم Express الخلفي لخدمة صفحات الواجهة وبوابات WebSocket. |
| **[web-client.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/web-client.md)** | عميل الويب | إطار عمل المتصفح المبني على تقنيات الويب الأصلية وإدارة الحالة. |
| **[client-modules.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/client-modules.md)** | وحدات الواجهة | الوحدات الوظيفية القابلة للتحميل التلقائي في الواجهة الأمامية. |
| **[client-resources.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/client-resources.md)** | موارد الواجهة | الاشتراكات ومصادر البيانات التفاعلية في شاشات العميل. |
| **[sidebar-right.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/sidebar-right.md)** | الشريط الجانبي | عرض شجرة الملفات، المخرجات المسلّمة، والوثائق المنشأة. |
| **[slots.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/slots.md)** | شقوق الواجهة (Slots) | نقاط توسعة مرنة في واجهة المستخدم تسمح للإضافات بحقن أزرار وقوائم جديدة. |
| **[extensions.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/extensions.md)** | التعديل الذاتي | قدرة الوكيل على فحص إضافات Cordis الخاصة به وتركيب أو إلغاء حزم برمجية حياً. |
| **[webhook.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/webhook.md)** | محرك الويب هوك | استقبال تنبيهات الخدمات الخارجية الموثقة وتشغيل جلسات أوتوماتيكية لمراجعة الكود. |
| **[workflow.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/workflow.md)** | تدفقات العمل | تشغيل خطط برمجية معقدة عبر خيوط عمل عازلة ومنفصلة (Worker Threads). |
| **[lsp.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/lsp.md)** | خوادم اللغات | التكامل مع بروتوكول Language Server Protocol للتحقق من الأخطاء البرمجية. |
| **[scope.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/scope.md)** | عزل النطاقات | آليات Cordis لحصر الموارد والأدوات داخل وكيل معين وتحريرها عند الانتهاء. |
| **[invariants.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/subsystems/invariants.md)** | ثوابت التشغيل | شروط أمان حتمية تُفحص دورياً للتأكد من عدم حدوث أي تناقض في حالة النظام. |

---

# 3. كتيبات التطوير والإرشاد (`docs/cookbook/*.md`)

كتيبات عملية تقدم حلولاً معيارية خطوة بخطوة لأبرز مهام التطوير:

* **[extension-cookbook.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/extension-cookbook.md)**: الفهرس العام لكتيبات التوسعة؛ يوضح كيف تختار المكون المناسب لكل ميزة جديدة تريد برمجتها.
* **[adding-a-package.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/adding-a-package.md)**: الدليل الإرشادي لبناء حزمة جديدة من الصفر: إنشاء المجلد، كتابة `package.json`، وضبط اختبارات التغطية الكاملة 100%.
* **[adding-a-tool.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/adding-a-tool.md)**: كيفية إضافة أداة ذكاء اصطناعي جديدة للوكيل: كتابة الـ JSON Schema، ربطها بالسياق، وتصميم بطاقة عرضها في الواجهة الرسومية.
* **[adding-an-llm-adapter.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/adding-an-llm-adapter.md)**: كيفية بناء محول جديد لمزود ذكاء اصطناعي لربطه مع `ctx.llm`.
* **[adding-a-remote-api.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/adding-a-remote-api.md)**: خطوات تعريف استدعاء برمجيات عن بعد (RPC) جديد لربط الواجهة الأمامية بالخلفية عبر محرك Typert.
* **[adding-a-session-format-version.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/adding-a-session-format-version.md)**: كيفية ترقية صيغة ملفات الجلسات وكتابة مسار الترقية المتسلسل (Migration Step).
* **[adding-a-settings-card.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/adding-a-settings-card.md)**: خطوات تصميم بطاقة إعدادات تفاعلية جديدة تظهر في واجهة المستخدم.
* **[adding-a-vendored-package.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/adding-a-vendored-package.md)**: قواعد إدراج وتثبيت كود حزمة خارجية داخل مجلد `vendor/` وتطبيق تعديلات الأمان عليها.
* **[maintaining-dsh-code-review.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/maintaining-dsh-code-review.md)**: المعايير الصارمة لمراجعة طلبات السحب (PRs) وفحص الثغرات المحتملة.
* **[responding-to-pr-review-on-a-stack.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cookbook/responding-to-pr-review-on-a-stack.md)**: كيفية التعامل مع سلاسل طلبات السحب المعتمدة على بعضها (Stacked PRs) وتفادي تعارضات Git.

---

# 4. دروس إطار العمل كوردس (`docs/cordis-tutorial/*.md`)

سلسلة تعليمية تدريجية تبدأ من الصفر لتعليم المطور كيفية بناء تطبيقات وإضافات فوق **Cordis**:

* **[01-first-plugin.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cordis-tutorial/01-first-plugin.md)**: إنشاء أول إضافة بسيطة وفهم دالة `apply(ctx)`.
* **[02-lifecycle-and-effects.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cordis-tutorial/02-lifecycle-and-effects.md)**: فهم دورات الحياة وتنظيف الموارد وتفادي التسريبات عبر `ctx.effect()`.
* **[03-services.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cordis-tutorial/03-services.md)**: بناء خدمة مخصصة ونشرها على السياق وحقنها عبر `inject`.
* **[04-events.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cordis-tutorial/04-events.md)**: العمل مع الأحداث وسلاسل `waterfall` واعتراض البيانات قبل وبعد تنفيذها.
* **[05-config.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cordis-tutorial/05-config.md)**: جعل الإضافة قابلة للتخصيص عبر مخططات Schemastery وملفات الإعدادات.
* **[06-composition-and-hmr.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cordis-tutorial/06-composition-and-hmr.md)**: دمج الإضافات المتعددة وتجربة التحديث الحي الفوري (Hot Module Reload).
* **[07-into-the-harness.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/cordis-tutorial/07-into-the-harness.md)**: دمج الإضافة رسمياً داخل DeepSeek Harness والاتصال بخدمات الوكيل الفعلية.

---

# 5. تقارير تحليل الحوادث المعمارية (`docs/postmortem/*.md`)

توثق هذه التقارير مشاكل برمجية معقدة حدثت أثناء تطوير المشروع والدروس المستفادة منها لمنع تكرارها:

* **[0001-acp-default-export-drops-inject.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/postmortem/0001-acp-default-export-drops-inject.md)**: تحليل حادثة سقوط حقول `inject` في خادم ACP بسبب نمط التصدير الافتراضي، وكيف تم تصحيح ربط التبعيات.
* **[0002-js-expression-disabled-filesystem-tools.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/postmortem/0002-js-expression-disabled-filesystem-tools.md)**: تحليل خطأ تعطيل أدوات الملفات عند تقييم تعبيرات JS في ملفات الإعداد وكيف تم تحصين معالج التكوين.
* **[0003-web-agent-gui-feedback-loop.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/postmortem/0003-web-agent-gui-feedback-loop.md)**: حل مشكلة حلقة التغذية الراجعة اللانهائية في الواجهة الرسومية عند بث الأحداث المتزامنة.
* **[0004-landlock-partial-notice-misclassified-child-failures.md](file:///c:/Users/mazen/OneDrive/Documents/deepseek-harness-master/docs/postmortem/0004-landlock-partial-notice-misclassified-child-failures.md)**: تشخيص تعارضات في نظام العزل Landlock على لينكس أدت لتصنيف خاطئ لفشل العمليات الفرعية وطرق علاجها بنواة C++.

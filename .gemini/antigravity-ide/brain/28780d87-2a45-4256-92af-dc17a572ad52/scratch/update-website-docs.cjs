const fs = require('fs');
const path = require('path');

const file = path.resolve('website/docs.ts');
let content = fs.readFileSync(file, 'utf8');

// Replace Chinese labels and sections in homeAndGuide
content = content.replace(
  `const homeAndGuide = pairedPages([
  {
    source: 'docs/user/index.md',
    route: 'index.md',
    label: { root: 'DeepSeek Harness', en: 'DeepSeek Harness' },
    sidebar: { root: null, en: null },
    section: { root: '首页', en: 'Home' },
    order: 0,
  },
  {
    source: 'docs/user/guide/index.md',
    route: 'guide/quickstart.md',
    label: { root: '使用 Web UI', en: 'Use the Web UI' },
    sidebar: { root: 'zh-guide', en: 'en-guide' },
    section: { root: '入门', en: 'Guide' },
    order: 1,
    sourceAliases: ['docs/user/guide'],
  },
  {
    source: 'docs/user/guide/providers.md',
    route: 'guide/providers.md',
    label: { root: '配置模型', en: 'Configure models' },
    sidebar: { root: 'zh-guide', en: 'en-guide' },
    section: { root: '入门', en: 'Guide' },
    order: 2,
  },
  {
    source: 'docs/user/guide/network-proxy.md',
    route: 'guide/network-proxy.md',
    label: { root: '网络代理', en: 'Network proxy' },
    sidebar: { root: 'zh-guide', en: 'en-guide' },
    section: { root: '入门', en: 'Guide' },
    order: 3,
  },
  {
    source: 'docs/user/guide/python-sdk.md',
    route: 'guide/python-sdk.md',
    label: { root: 'Python', en: 'Python' },
    sidebar: { root: 'zh-guide', en: 'en-guide' },
    section: { root: 'SDK', en: 'SDK' },
    order: 1,
  },
  {
    source: 'docs/user/guide/github-review.md',
    route: 'guide/github-review.md',
    label: { root: 'GitHub 评审会话', en: 'GitHub review sessions' },
    sidebar: { root: 'zh-guide', en: 'en-guide' },
    section: { root: '自动化', en: 'Automation' },
    order: 1,
  },
  {
    source: 'docs/user/guide/schedule.md',
    route: 'guide/schedule.md',
    label: { root: '会话内提醒', en: 'Session reminders' },
    sidebar: { root: 'zh-guide', en: 'en-guide' },
    section: { root: '自动化', en: 'Automation' },
    order: 2,
  },
  {
    source: 'docs/user/guide/mcp-memory.md',
    route: 'guide/mcp-memory.md',
    label: { root: '记忆 MCP', en: 'Memory MCP' },
    sidebar: { root: 'zh-guide', en: 'en-guide' },
    section: { root: '集成', en: 'Integrations' },
    order: 1,
  },
])`,
  `const homeAndGuide = pairedPages([
  {
    source: 'docs/user/index.md',
    route: 'index.md',
    label: { root: 'DeepSeek Harness', en: 'DeepSeek Harness' },
    sidebar: { root: null, en: null },
    section: { root: 'Home', en: 'Home' },
    order: 0,
  },
  {
    source: 'docs/user/guide/index.md',
    route: 'guide/quickstart.md',
    label: { root: 'Use the Web UI', en: 'Use the Web UI' },
    sidebar: { root: 'en-guide', en: 'en-guide' },
    section: { root: 'Guide', en: 'Guide' },
    order: 1,
    sourceAliases: ['docs/user/guide'],
  },
  {
    source: 'docs/user/guide/providers.md',
    route: 'guide/providers.md',
    label: { root: 'Configure models', en: 'Configure models' },
    sidebar: { root: 'en-guide', en: 'en-guide' },
    section: { root: 'Guide', en: 'Guide' },
    order: 2,
  },
  {
    source: 'docs/user/guide/network-proxy.md',
    route: 'guide/network-proxy.md',
    label: { root: 'Network proxy', en: 'Network proxy' },
    sidebar: { root: 'en-guide', en: 'en-guide' },
    section: { root: 'Guide', en: 'Guide' },
    order: 3,
  },
  {
    source: 'docs/user/guide/python-sdk.md',
    route: 'guide/python-sdk.md',
    label: { root: 'Python', en: 'Python' },
    sidebar: { root: 'en-guide', en: 'en-guide' },
    section: { root: 'SDK', en: 'SDK' },
    order: 1,
  },
  {
    source: 'docs/user/guide/github-review.md',
    route: 'guide/github-review.md',
    label: { root: 'GitHub review sessions', en: 'GitHub review sessions' },
    sidebar: { root: 'en-guide', en: 'en-guide' },
    section: { root: 'Automation', en: 'Automation' },
    order: 1,
  },
  {
    source: 'docs/user/guide/schedule.md',
    route: 'guide/schedule.md',
    label: { root: 'Session reminders', en: 'Session reminders' },
    sidebar: { root: 'en-guide', en: 'en-guide' },
    section: { root: 'Automation', en: 'Automation' },
    order: 2,
  },
  {
    source: 'docs/user/guide/mcp-memory.md',
    route: 'guide/mcp-memory.md',
    label: { root: 'Memory MCP', en: 'Memory MCP' },
    sidebar: { root: 'en-guide', en: 'en-guide' },
    section: { root: 'Integrations', en: 'Integrations' },
    order: 1,
  },
])`
);

// Replace develop
content = content.replace(
  `const develop = pairedPages([
  {
    source: 'docs/user/develop/basic/index.md',
    route: 'develop/basic/index.md',
    label: { root: '第一个 Harness 插件', en: 'Your first Harness plugin' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '基础', en: 'Basics' },
    order: 1,
    sourceAliases: ['docs/user/develop/basic'],
  },
  {
    source: 'docs/user/develop/basic/tool.md',
    route: 'develop/basic/tool.md',
    label: { root: '开发一个 Tool', en: 'Build a tool' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '基础', en: 'Basics' },
    order: 2,
  },
  {
    source: 'docs/user/develop/basic/config.md',
    route: 'develop/basic/config.md',
    label: { root: '插件配置', en: 'Plugin configuration' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '基础', en: 'Basics' },
    order: 3,
  },
  {
    source: 'docs/user/develop/basic/publish.md',
    route: 'develop/basic/publish.md',
    label: { root: '打包与安装插件', en: 'Package and install' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '基础', en: 'Basics' },
    order: 4,
  },
  {
    source: 'docs/user/develop/framework/index.md',
    route: 'develop/framework/index.md',
    label: { root: '插件与生命周期', en: 'Plugin lifecycle' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '框架能力', en: 'Framework' },
    order: 1,
    sourceAliases: ['docs/user/develop/framework'],
  },
  {
    source: 'docs/user/develop/framework/service.md',
    route: 'develop/framework/service.md',
    label: { root: '服务与依赖', en: 'Services and dependencies' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '框架能力', en: 'Framework' },
    order: 2,
  },
  {
    source: 'docs/user/develop/framework/events.md',
    route: 'develop/framework/events.md',
    label: { root: '事件系统', en: 'Event system' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '框架能力', en: 'Framework' },
    order: 3,
  },
  {
    source: 'docs/user/develop/practice/index.md',
    route: 'develop/practice/index.md',
    label: { root: '能力的三层拆分', en: 'Capability layering' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '实战', en: 'Practice' },
    order: 1,
    sourceAliases: ['docs/user/develop/practice'],
  },
  {
    source: 'docs/user/develop/practice/llm-adapter.md',
    route: 'develop/practice/llm-adapter.md',
    label: { root: 'LLM 适配器', en: 'LLM adapter' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '实战', en: 'Practice' },
    order: 2,
  },
  {
    source: 'docs/user/develop/practice/dynamic-cordis.md',
    route: 'develop/practice/dynamic-cordis.md',
    label: { root: '运行时 Cordis 工具', en: 'Runtime Cordis tools' },
    sidebar: { root: 'zh-develop', en: 'en-develop' },
    section: { root: '实战', en: 'Practice' },
    order: 3,
  },
])`,
  `const develop = pairedPages([
  {
    source: 'docs/user/develop/basic/index.md',
    route: 'develop/basic/index.md',
    label: { root: 'Your first Harness plugin', en: 'Your first Harness plugin' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Basics', en: 'Basics' },
    order: 1,
    sourceAliases: ['docs/user/develop/basic'],
  },
  {
    source: 'docs/user/develop/basic/tool.md',
    route: 'develop/basic/tool.md',
    label: { root: 'Build a tool', en: 'Build a tool' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Basics', en: 'Basics' },
    order: 2,
  },
  {
    source: 'docs/user/develop/basic/config.md',
    route: 'develop/basic/config.md',
    label: { root: 'Plugin configuration', en: 'Plugin configuration' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Basics', en: 'Basics' },
    order: 3,
  },
  {
    source: 'docs/user/develop/basic/publish.md',
    route: 'develop/basic/publish.md',
    label: { root: 'Package and install', en: 'Package and install' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Basics', en: 'Basics' },
    order: 4,
  },
  {
    source: 'docs/user/develop/framework/index.md',
    route: 'develop/framework/index.md',
    label: { root: 'Plugin lifecycle', en: 'Plugin lifecycle' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Framework', en: 'Framework' },
    order: 1,
    sourceAliases: ['docs/user/develop/framework'],
  },
  {
    source: 'docs/user/develop/framework/service.md',
    route: 'develop/framework/service.md',
    label: { root: 'Services and dependencies', en: 'Services and dependencies' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Framework', en: 'Framework' },
    order: 2,
  },
  {
    source: 'docs/user/develop/framework/events.md',
    route: 'develop/framework/events.md',
    label: { root: 'Event system', en: 'Event system' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Framework', en: 'Framework' },
    order: 3,
  },
  {
    source: 'docs/user/develop/practice/index.md',
    route: 'develop/practice/index.md',
    label: { root: 'Capability layering', en: 'Capability layering' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Practice', en: 'Practice' },
    order: 1,
    sourceAliases: ['docs/user/develop/practice'],
  },
  {
    source: 'docs/user/develop/practice/llm-adapter.md',
    route: 'develop/practice/llm-adapter.md',
    label: { root: 'LLM adapter', en: 'LLM adapter' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Practice', en: 'Practice' },
    order: 2,
  },
  {
    source: 'docs/user/develop/practice/dynamic-cordis.md',
    route: 'develop/practice/dynamic-cordis.md',
    label: { root: 'Runtime Cordis tools', en: 'Runtime Cordis tools' },
    sidebar: { root: 'en-develop', en: 'en-develop' },
    section: { root: 'Practice', en: 'Practice' },
    order: 3,
  },
])`
);

// Replace cordisTutorial
content = content.replace(
  `const cordisTutorial = pairedPages(([
  ['index.md', '总览', 'Overview'],
  ['01-first-plugin.md', '1. 第一个插件', '1. Your first plugin'],
  ['02-lifecycle-and-effects.md', '2. 生命周期与副作用', '2. Lifecycle and effects'],
  ['03-services.md', '3. 服务', '3. Services'],
  ['04-events.md', '4. 事件', '4. Events'],
  ['05-config.md', '5. 配置', '5. Configuration'],
  ['06-composition-and-hmr.md', '6. 组合与热重载', '6. Composition and HMR'],
  ['07-into-the-harness.md', '7. 进入 Harness', '7. Into the harness'],
] as const).map(([file, rootLabel, enLabel], order): PairedPage => ({
  source: \`docs/cordis-tutorial/\${file}\`,
  route: \`develop/cordis-tutorial/\${file}\`,
  label: { root: rootLabel, en: enLabel },
  sidebar: { root: 'zh-develop', en: 'en-develop' },
  section: { root: 'Cordis 框架教程', en: 'Cordis framework tutorial' },
  order,
  ...(file === 'index.md' ? { sourceAliases: ['docs/cordis-tutorial'] } : {}),
})))`,
  `const cordisTutorial = pairedPages(([
  ['index.md', 'Overview', 'Overview'],
  ['01-first-plugin.md', '1. Your first plugin', '1. Your first plugin'],
  ['02-lifecycle-and-effects.md', '2. Lifecycle and effects', '2. Lifecycle and effects'],
  ['03-services.md', '3. Services', '3. Services'],
  ['04-events.md', '4. Events', '4. Events'],
  ['05-config.md', '5. Configuration', '5. Configuration'],
  ['06-composition-and-hmr.md', '6. Composition and HMR', '6. Composition and HMR'],
  ['07-into-the-harness.md', '7. Into the harness', '7. Into the harness'],
] as const).map(([file, rootLabel, enLabel], order): PairedPage => ({
  source: \`docs/cordis-tutorial/\${file}\`,
  route: \`develop/cordis-tutorial/\${file}\`,
  label: { root: rootLabel, en: enLabel },
  sidebar: { root: 'en-develop', en: 'en-develop' },
  section: { root: 'Cordis framework tutorial', en: 'Cordis framework tutorial' },
  order,
  ...(file === 'index.md' ? { sourceAliases: ['docs/cordis-tutorial'] } : {}),
})))`
);

// Replace cordisPrimerReference
content = content.replace(
  `const cordisPrimerReference = pairedPages([
  {
    source: 'docs/cordis-primer.md',
    route: 'reference/cordis-primer.md',
    label: { root: 'Cordis 入门', en: 'Cordis primer' },
    sidebar: { root: 'zh-reference', en: 'en-reference' },
    section: { root: '概念', en: 'Concepts' },
    order: 1,
  },
])`,
  `const cordisPrimerReference = pairedPages([
  {
    source: 'docs/cordis-primer.md',
    route: 'reference/cordis-primer.md',
    label: { root: 'Cordis primer', en: 'Cordis primer' },
    sidebar: { root: 'en-reference', en: 'en-reference' },
    section: { root: 'Concepts', en: 'Concepts' },
    order: 1,
  },
])`
);

// Replace subsystemGroups & subsystemsReference
const oldSubsystems = `const subsystemGroups = [
  ['总览', 'Overview', [
    ['README.md', '子系统', 'Subsystems'],
  ]],
  ['内核与作用域', 'Core and scopes', [
    ['core.md', '核心', 'Core'],
    ['scope.md', '作用域', 'Scopes'],
    ['invariants.md', '运行时不变式', 'Runtime invariants'],
  ]],
  ['会话与持久化', 'Sessions and persistence', [
    ['session.md', '会话', 'Sessions'],
    ['session-query.md', '会话查询', 'Session query'],
    ['session-reference.md', '会话引用', 'Session references'],
    ['session-title.md', '会话标题', 'Session titles'],
    ['session-projection.md', '会话投影', 'Session projections'],
    ['persistence.md', '会话持久化', 'Session persistence'],
    ['spill.md', 'Spill 存储', 'Spill storage'],
    ['session-telemetry.md', '遥测', 'SessionTelemetryBackend'],
  ]],
  ['模型与上下文', 'Model and context', [
    ['llm-streaming.md', 'LLM 流式响应', 'LLM streaming'],
    ['token-meter.md', 'Token 计量', 'Token metering'],
    ['system-prompt.md', '系统提示词', 'System prompts'],
    ['compaction.md', '上下文压缩', 'Compaction'],
  ]],
  ['执行与工具', 'Execution and tools', [
    ['tools.md', '工具', 'Tools'],
    ['shell.md', 'Bash 执行', 'Bash execution'],
    ['subprocess.md', '子进程', 'Subprocesses'],
    ['terminal.md', 'PTY 会话', 'PTY sessions'],
    ['jobs.md', '后台任务', 'Background jobs'],
    ['filesystem.md', '文件系统', 'Filesystem'],
    ['lsp.md', 'LSP 导航', 'LSP navigation'],
    ['code-runtime.md', '代码运行时', 'Code runtime'],
    ['web.md', 'Web 访问', 'Web access'],
    ['skills.md', '技能', 'Skills'],
    ['workflow.md', '工作流', 'Workflows'],
    ['subagent.md', '子代理', 'Subagents'],
  ]],
  ['策略与交互', 'Policy and interaction', [
    ['approval.md', '审批', 'Approvals'],
    ['permission-presets.md', '权限预设', 'Permission presets'],
    ['sandbox.md', '沙箱', 'Sandboxing'],
    ['plan.md', '计划模式', 'Plan mode'],
    ['user-questions.md', '用户交互', 'User interaction'],
    ['commands.md', '命令', 'Human commands'],
    ['goal.md', '目标', 'Goals'],
    ['schedule.md', '定时提醒', 'Scheduled reminders'],
  ]],
  ['平台与接入', 'Platform and access', [
    ['web-server.md', 'HTTP 服务器', 'HTTP server'],
    ['web-client.md', 'Web Client 架构', 'Web Client architecture'],
    ['client-modules.md', '客户端模块', 'Client modules'],
    ['slots.md', '客户端 Slots', 'Client slots'],
    ['client-resources.md', '客户端资源', 'Client resources'],
    ['sidebar-right.md', '右侧 Sidebar', 'Right Sidebar'],
    ['conversation.md', 'Conversation 组装', 'Conversation assembly'],
    ['typert.md', 'Typert', 'Typert'],
    ['storage.md', '存储', 'Storage'],
    ['workspace.md', '工作区', 'Workspaces'],
    ['settings.md', '用户设置', 'User settings'],
    ['credentials.md', '用户凭据', 'User credentials'],
  ]],
] as const

const subsystemsReference = subsystemGroups.flatMap(([rootSection, enSection, files]) => pairedPages(
  files.map(([file, rootLabel, enLabel], order): PairedPage => ({
    source: \`docs/subsystems/\${file}\`,
    route: file === 'README.md' ? 'reference/subsystems/index.md' : \`reference/subsystems/\${file}\`,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'zh-reference', en: 'en-reference' },
    section: { root: rootSection, en: enSection },
    order,
    // Subsystem pages carry long third-level sections a two-level outline reaches.
    outline: [2, 3],
    ...(file === 'README.md' ? { sourceAliases: ['docs/subsystems'] } : {}),
  })),
))`;

const newSubsystems = `const subsystemGroups = [
  ['Overview', 'Overview', [
    ['README.md', 'Subsystems', 'Subsystems'],
  ]],
  ['Core and scopes', 'Core and scopes', [
    ['core.md', 'Core', 'Core'],
    ['scope.md', 'Scopes', 'Scopes'],
    ['invariants.md', 'Runtime invariants', 'Runtime invariants'],
  ]],
  ['Sessions and persistence', 'Sessions and persistence', [
    ['session.md', 'Sessions', 'Sessions'],
    ['session-query.md', 'Session query', 'Session query'],
    ['session-reference.md', 'Session references', 'Session references'],
    ['session-title.md', 'Session titles', 'Session titles'],
    ['session-projection.md', 'Session projections', 'Session projections'],
    ['persistence.md', 'Session persistence', 'Session persistence'],
    ['spill.md', 'Spill storage', 'Spill storage'],
    ['session-telemetry.md', 'SessionTelemetryBackend', 'SessionTelemetryBackend'],
  ]],
  ['Model and context', 'Model and context', [
    ['llm-streaming.md', 'LLM streaming', 'LLM streaming'],
    ['token-meter.md', 'Token metering', 'Token metering'],
    ['system-prompt.md', 'System prompts', 'System prompts'],
    ['compaction.md', 'Compaction', 'Compaction'],
  ]],
  ['Execution and tools', 'Execution and tools', [
    ['tools.md', 'Tools', 'Tools'],
    ['shell.md', 'Bash execution', 'Bash execution'],
    ['subprocess.md', 'Subprocesses', 'Subprocesses'],
    ['terminal.md', 'PTY sessions', 'PTY sessions'],
    ['jobs.md', 'Background jobs', 'Background jobs'],
    ['filesystem.md', 'Filesystem', 'Filesystem'],
    ['lsp.md', 'LSP navigation', 'LSP navigation'],
    ['code-runtime.md', 'Code runtime', 'Code runtime'],
    ['web.md', 'Web access', 'Web access'],
    ['skills.md', 'Skills', 'Skills'],
    ['workflow.md', 'Workflows', 'Workflows'],
    ['subagent.md', 'Subagents', 'Subagents'],
  ]],
  ['Policy and interaction', 'Policy and interaction', [
    ['approval.md', 'Approvals', 'Approvals'],
    ['permission-presets.md', 'Permission presets', 'Permission presets'],
    ['sandbox.md', 'Sandboxing', 'Sandboxing'],
    ['plan.md', 'Plan mode', 'Plan mode'],
    ['user-questions.md', 'User interaction', 'User interaction'],
    ['commands.md', 'Human commands', 'Human commands'],
    ['goal.md', 'Goals', 'Goals'],
    ['schedule.md', 'Scheduled reminders', 'Scheduled reminders'],
  ]],
  ['Platform and access', 'Platform and access', [
    ['web-server.md', 'HTTP server', 'HTTP server'],
    ['web-client.md', 'Web Client architecture', 'Web Client architecture'],
    ['client-modules.md', 'Client modules', 'Client modules'],
    ['slots.md', 'Client slots', 'Client slots'],
    ['client-resources.md', 'Client resources', 'Client resources'],
    ['sidebar-right.md', 'Right Sidebar', 'Right Sidebar'],
    ['conversation.md', 'Conversation assembly', 'Conversation assembly'],
    ['typert.md', 'Typert', 'Typert'],
    ['storage.md', 'Storage', 'Storage'],
    ['workspace.md', 'Workspaces', 'Workspaces'],
    ['settings.md', 'User settings', 'User settings'],
    ['credentials.md', 'User credentials', 'User credentials'],
  ]],
] as const

const subsystemsReference = subsystemGroups.flatMap(([rootSection, enSection, files]) => pairedPages(
  files.map(([file, rootLabel, enLabel], order): PairedPage => ({
    source: \`docs/subsystems/\${file}\`,
    route: file === 'README.md' ? 'reference/subsystems/index.md' : \`reference/subsystems/\${file}\`,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'en-reference', en: 'en-reference' },
    section: { root: rootSection, en: enSection },
    order,
    // Subsystem pages carry long third-level sections a two-level outline reaches.
    outline: [2, 3],
    ...(file === 'README.md' ? { sourceAliases: ['docs/subsystems'] } : {}),
  })),
))`;

content = content.replace(oldSubsystems, newSubsystems);

// Replace reference
const oldReference = `const reference = [
  // \`docs/deepseek-llm-api-wire-extensions.md\` is a repository-only provider protocol reference.
  // Projected links intentionally resolve to its GitHub source instead of a public site route.
  ...pairedPages(([
    ['docs/architecture.md', 'reference/index.md', '架构', 'Architecture', 0],
  ] as const).map(([source, route, rootLabel, enLabel, order]): PairedPage => ({
    source,
    route,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'zh-reference', en: 'en-reference' },
    section: { root: '概念', en: 'Concepts' },
    order,
  }))),
  ...pairedPages(([
    ['docs/capability-seams.md', 'reference/capability-seams.md', '能力服务', 'Capability services', 2],
    ['docs/agent-lifecycle.md', 'reference/agent-lifecycle.md', 'Agent 生命周期', 'Agent lifecycle', 3],
    ['docs/tool-execution-pipeline.md', 'reference/tool-execution-pipeline.md', 'Tool 执行', 'Tool execution', 4],
    ['docs/api-gateway.md', 'reference/api-gateway.md', 'API Gateway', 'API Gateway', 5],
  ] as const).map(([source, route, rootLabel, enLabel, order]): PairedPage => ({
    source,
    route,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'zh-reference', en: 'en-reference' },
    section: { root: '概念', en: 'Concepts' },
    order,
  }))),
  ...pairedPages(([
    ['docs/config-catalog.md', 'reference/config-catalog.md', '插件配置', 'Plugin configuration'],
    ['docs/tool-catalog.md', 'reference/tool-catalog.md', 'Tool Schema', 'Tool schemas'],
    ['docs/persistence-catalog.md', 'reference/persistence-catalog.md', '持久化事件', 'Persistence events', 'deep'],
  ] as const).map(([source, route, rootLabel, enLabel, outline], order): PairedPage => ({
    source,
    route,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'zh-reference', en: 'en-reference' },
    section: { root: '生成参考', en: 'Generated reference' },
    order,
    ...(outline === undefined ? {} : { outline }),
  }))),
  ...pairedPages(([
    ['context.md', 'Context', 'Context'],
    ['events.md', 'Events', 'Events'],
    ['fiber.md', 'Fiber', 'Fiber'],
    ['registry.md', 'Plugin Registry', 'Plugin Registry'],
    ['service.md', 'Service', 'Service'],
  ] as const).map(([file, rootLabel, enLabel], order): PairedPage => ({
    source: \`docs/cordis-api/\${file}\`,
    route: \`reference/cordis-api/\${file}\`,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'zh-reference', en: 'en-reference' },
    section: { root: 'Cordis API', en: 'Cordis Core API' },
    order,
  }))),
  ...mirroredPages(([
    ['inherited.md', '继承接口面', 'Inherited surface'],
  ] as const).map(([file, rootLabel, enLabel], order): MirroredPage => ({
    source: \`docs/cordis-api/\${file}\`,
    route: \`reference/cordis-api/\${file}\`,
    contentLocale: 'en-US',
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'zh-reference', en: 'en-reference' },
    section: { root: 'Cordis API', en: 'Cordis Core API' },
    order: order + 5,
  }))),
  ...pairedPages(([
    ['adding-a-package.md', '新增 Package', 'Adding a package'],
    ['adding-a-tool.md', '新增 Tool', 'Adding a tool'],
    ['adding-an-llm-adapter.md', '新增 LLM Adapter', 'Adding an LLM adapter'],
    ['adding-a-settings-card.md', '新增设置卡片', 'Adding a settings card'],
    ['extension-cookbook.md', '扩展模式', 'Extension patterns'],
  ] as const).map(([file, rootLabel, enLabel], order): PairedPage => ({
    source: \`docs/cookbook/\${file}\`,
    route: \`reference/cookbook/\${file}\`,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'zh-reference', en: 'en-reference' },
    section: { root: '开发手册', en: 'Cookbook' },
    order,
  }))),
]`;

const newReference = `const reference = [
  // \`docs/deepseek-llm-api-wire-extensions.md\` is a repository-only provider protocol reference.
  // Projected links intentionally resolve to its GitHub source instead of a public site route.
  ...pairedPages(([
    ['docs/architecture.md', 'reference/index.md', 'Architecture', 'Architecture', 0],
  ] as const).map(([source, route, rootLabel, enLabel, order]): PairedPage => ({
    source,
    route,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'en-reference', en: 'en-reference' },
    section: { root: 'Concepts', en: 'Concepts' },
    order,
  }))),
  ...pairedPages(([
    ['docs/capability-seams.md', 'reference/capability-seams.md', 'Capability services', 'Capability services', 2],
    ['docs/agent-lifecycle.md', 'reference/agent-lifecycle.md', 'Agent lifecycle', 'Agent lifecycle', 3],
    ['docs/tool-execution-pipeline.md', 'reference/tool-execution-pipeline.md', 'Tool execution', 'Tool execution', 4],
    ['docs/api-gateway.md', 'reference/api-gateway.md', 'API Gateway', 'API Gateway', 5],
  ] as const).map(([source, route, rootLabel, enLabel, order]): PairedPage => ({
    source,
    route,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'en-reference', en: 'en-reference' },
    section: { root: 'Concepts', en: 'Concepts' },
    order,
  }))),
  ...pairedPages(([
    ['docs/config-catalog.md', 'reference/config-catalog.md', 'Plugin configuration', 'Plugin configuration'],
    ['docs/tool-catalog.md', 'reference/tool-catalog.md', 'Tool schemas', 'Tool schemas'],
    ['docs/persistence-catalog.md', 'reference/persistence-catalog.md', 'Persistence events', 'Persistence events', 'deep'],
  ] as const).map(([source, route, rootLabel, enLabel, outline], order): PairedPage => ({
    source,
    route,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'en-reference', en: 'en-reference' },
    section: { root: 'Generated reference', en: 'Generated reference' },
    order,
    ...(outline === undefined ? {} : { outline }),
  }))),
  ...pairedPages(([
    ['context.md', 'Context', 'Context'],
    ['events.md', 'Events', 'Events'],
    ['fiber.md', 'Fiber', 'Fiber'],
    ['registry.md', 'Plugin Registry', 'Plugin Registry'],
    ['service.md', 'Service', 'Service'],
  ] as const).map(([file, rootLabel, enLabel], order): PairedPage => ({
    source: \`docs/cordis-api/\${file}\`,
    route: \`reference/cordis-api/\${file}\`,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'en-reference', en: 'en-reference' },
    section: { root: 'Cordis Core API', en: 'Cordis Core API' },
    order,
  }))),
  ...mirroredPages(([
    ['inherited.md', 'Inherited surface', 'Inherited surface'],
  ] as const).map(([file, rootLabel, enLabel], order): MirroredPage => ({
    source: \`docs/cordis-api/\${file}\`,
    route: \`reference/cordis-api/\${file}\`,
    contentLocale: 'en-US',
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'en-reference', en: 'en-reference' },
    section: { root: 'Cordis Core API', en: 'Cordis Core API' },
    order: order + 5,
  }))),
  ...pairedPages(([
    ['adding-a-package.md', 'Adding a package', 'Adding a package'],
    ['adding-a-tool.md', 'Adding a tool', 'Adding a tool'],
    ['adding-an-llm-adapter.md', 'Adding an LLM adapter', 'Adding an LLM adapter'],
    ['adding-a-settings-card.md', 'Adding a settings card', 'Adding a settings card'],
    ['extension-cookbook.md', 'Extension patterns', 'Extension patterns'],
  ] as const).map(([file, rootLabel, enLabel], order): PairedPage => ({
    source: \`docs/cookbook/\${file}\`,
    route: \`reference/cookbook/\${file}\`,
    label: { root: rootLabel, en: enLabel },
    sidebar: { root: 'en-reference', en: 'en-reference' },
    section: { root: 'Cookbook', en: 'Cookbook' },
    order,
  }))),
]`;

content = content.replace(oldReference, newReference);

// Replace localeCollections and sections
const oldSections = `export const localeCollections = {
  root: ['zh-guide', 'zh-develop', 'zh-reference'],
  en: ['en-guide', 'en-develop', 'en-reference'],
} as const satisfies Record<DocsLocale, readonly DocsSidebar[]>

/** A sidebar group, matched to pages by \`label\`. */
export interface DocsSection {
  /** Group heading, equal to the \`section\` field of every page it holds. */
  label: string
  /** Render the group collapsed until it holds the page being read. */
  collapsed?: boolean
}

/**
 * Every sidebar group, in the order its locale renders it.
 *
 * The subsystem groups collapse because together they outnumber the rest of the
 * reference sidebar; expanded, they push every other group below the fold.
 */
const sections: Record<DocsLocale, readonly DocsSection[]> = {
  root: [
    { label: '入门' }, { label: 'SDK' }, { label: '自动化' }, { label: '集成' },
    { label: '基础' }, { label: '框架能力' }, { label: '实战' }, { label: 'Cordis 框架教程' },
    { label: '概念' }, { label: '生成参考' }, { label: 'Cordis API' }, { label: '开发手册' },
    { label: '总览' },
    { label: '内核与作用域', collapsed: true },
    { label: '会话与持久化', collapsed: true },
    { label: '模型与上下文', collapsed: true },
    { label: '执行与工具', collapsed: true },
    { label: '策略与交互', collapsed: true },
    { label: '平台与接入', collapsed: true },
  ],
  en: [
    { label: 'Guide' }, { label: 'SDK' }, { label: 'Automation' }, { label: 'Integrations' },
    { label: 'Basics' }, { label: 'Framework' }, { label: 'Practice' }, { label: 'Cordis framework tutorial' },
    { label: 'Concepts' }, { label: 'Generated reference' }, { label: 'Cordis Core API' }, { label: 'Cookbook' },
    { label: 'Overview' },
    { label: 'Core and scopes', collapsed: true },
    { label: 'Sessions and persistence', collapsed: true },
    { label: 'Model and context', collapsed: true },
    { label: 'Execution and tools', collapsed: true },
    { label: 'Policy and interaction', collapsed: true },
    { label: 'Platform and access', collapsed: true },
  ],
}`;

const newSections = `export const localeCollections = {
  root: ['en-guide', 'en-develop', 'en-reference'],
  en: ['en-guide', 'en-develop', 'en-reference'],
} as const satisfies Record<DocsLocale, readonly DocsSidebar[]>

/** A sidebar group, matched to pages by \`label\`. */
export interface DocsSection {
  /** Group heading, equal to the \`section\` field of every page it holds. */
  label: string
  /** Render the group collapsed until it holds the page being read. */
  collapsed?: boolean
}

/**
 * Every sidebar group, in the order its locale renders it.
 *
 * The subsystem groups collapse because together they outnumber the rest of the
 * reference sidebar; expanded, they push every other group below the fold.
 */
const sections: Record<DocsLocale, readonly DocsSection[]> = {
  root: [
    { label: 'Guide' }, { label: 'SDK' }, { label: 'Automation' }, { label: 'Integrations' },
    { label: 'Basics' }, { label: 'Framework' }, { label: 'Practice' }, { label: 'Cordis framework tutorial' },
    { label: 'Concepts' }, { label: 'Generated reference' }, { label: 'Cordis Core API' }, { label: 'Cookbook' },
    { label: 'Overview' },
    { label: 'Core and scopes', collapsed: true },
    { label: 'Sessions and persistence', collapsed: true },
    { label: 'Model and context', collapsed: true },
    { label: 'Execution and tools', collapsed: true },
    { label: 'Policy and interaction', collapsed: true },
    { label: 'Platform and access', collapsed: true },
  ],
  en: [
    { label: 'Guide' }, { label: 'SDK' }, { label: 'Automation' }, { label: 'Integrations' },
    { label: 'Basics' }, { label: 'Framework' }, { label: 'Practice' }, { label: 'Cordis framework tutorial' },
    { label: 'Concepts' }, { label: 'Generated reference' }, { label: 'Cordis Core API' }, { label: 'Cookbook' },
    { label: 'Overview' },
    { label: 'Core and scopes', collapsed: true },
    { label: 'Sessions and persistence', collapsed: true },
    { label: 'Model and context', collapsed: true },
    { label: 'Execution and tools', collapsed: true },
    { label: 'Policy and interaction', collapsed: true },
    { label: 'Platform and access', collapsed: true },
  ],
}`;

content = content.replace(oldSections, newSections);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated website/docs.ts');

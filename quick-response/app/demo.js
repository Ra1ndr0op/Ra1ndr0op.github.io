import { documents, scenarios, matchScenario, searchDocuments } from './demo-data.js';

const ids = [
  'chatView', 'knowledgeView', 'chatScroll', 'welcome', 'messages',
  'conversationList', 'scenarioLabel', 'scenarioBar', 'messageInput',
  'sendButton', 'stopButton', 'newChat', 'copyAnswer', 'handoffButton',
  'composerStatus', 'knowledgeCount', 'documentCount', 'documentList',
  'knowledgeQuery', 'knowledgeSearch', 'knowledgeSearchResults',
  'sidebar', 'mobileScrim', 'openSidebar', 'closeSidebar', 'viewTitle'
];
const ui = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
const mobileLayout = window.matchMedia('(max-width: 760px)');
const demoNote = '这是预设场景回复，未调用实时AI；输入不会上传。';
const typedNote = '仅供理解流程，不代表对你输入问题的实际判断。';
let currentScenario = null;
let latestAnswer = '';
let handoffShown = false;
let sidebarOpen = false;

function node(tag, className = '', text = '') {
  const result = document.createElement(tag);
  if (className) result.className = className;
  if (text) result.textContent = text;
  return result;
}

function paragraphs(container, text) {
  String(text).split(/\n\n+/u).forEach((paragraph) => {
    container.append(node('p', '', paragraph));
  });
}

function status(text) {
  ui.composerStatus.textContent = text;
}

function setHidden(element, hidden) {
  element.hidden = hidden;
  element.classList.toggle('hidden', hidden);
}

function resizeInput() {
  ui.messageInput.style.height = 'auto';
  ui.messageInput.style.height = `${Math.min(ui.messageInput.scrollHeight, 140)}px`;
  ui.sendButton.disabled = !ui.messageInput.value.trim();
}

async function copyText(text) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    status('已复制这段预设示例回复。');
  } catch {
    status('当前浏览器无法自动复制。请选中回复文字后手动复制。');
  }
}

function copyButton(text) {
  const button = node('button', '', '复制回复');
  button.type = 'button';
  button.addEventListener('click', () => copyText(text));
  return button;
}

function renderCitations(container, sourceIds) {
  const sources = sourceIds.map((id) => documents.find((item) => item.id === id)).filter(Boolean);
  if (!sources.length) return;
  const details = node('details', 'citation-list');
  details.append(node('summary', '', `查看示例依据 · ${sources.length} 份文档`));
  sources.forEach((source) => {
    const item = node('div', 'citation-item');
    item.append(node('strong', '', source.title), node('span', '', source.excerpt));
    const button = node('button', 'quiet-button', '阅读完整示例文档');
    button.type = 'button';
    button.addEventListener('click', () => openDocument(source.id));
    item.append(button);
    details.append(item);
  });
  container.append(details);
}

function message(role, text, scenario, isTyped = false) {
  const wrapper = node('article', `message ${role}`);
  if (role !== 'user') {
    wrapper.append(node('div', 'message-avatar', role === 'human' ? '人' : 'Q'));
  }
  const body = node('div', 'message-body');
  const label = role === 'user'
    ? (isTyped ? '你的输入（仅在本地显示）' : '示例客户')
    : (role === 'human' ? '人工接管示例' : `${scenario.agent} · 预设参考回复`);
  body.append(node('div', 'message-label', label));
  if (role === 'assistant') {
    body.append(node('p', 'message-note', demoNote));
    if (isTyped) body.append(node('p', 'message-note', typedNote));
  }
  paragraphs(body, text);
  if (role === 'assistant') {
    const tools = node('div', 'message-tools');
    tools.append(node('span', 'tool-chip', scenario.agent));
    tools.append(node('span', 'tool-chip', scenario.handoff ? '缺少例外授权 · 人工审核' : '固定示例 · 知识引用'));
    body.append(tools);
    renderCitations(body, scenario.sourceIds);
    body.append(node('p', 'message-next', `下一步（示例）：${scenario.next}`));
    const meta = node('div', 'message-meta');
    meta.append(copyButton(`${demoNote}\n${isTyped ? `${typedNote}\n` : ''}${text}\n\n下一步（示例）：${scenario.next}`));
    body.append(meta);
  }
  if (role === 'human') {
    body.append(node('p', 'message-note', '固定文案，仅在本地展示；未通知真人客服。'));
    const meta = node('div', 'message-meta');
    meta.append(copyButton(text));
    body.append(meta);
  }
  wrapper.append(body);
  ui.messages.append(wrapper);
}

function updateScenarioControls() {
  document.querySelectorAll('button[data-scenario]').forEach((button) => {
    const selected = button.dataset.scenario === currentScenario?.id;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  ui.copyAnswer.disabled = !latestAnswer;
  setHidden(ui.handoffButton, !currentScenario?.handoff);
  ui.handoffButton.disabled = !currentScenario?.handoff || handoffShown;
}

function showScenario(scenario, question = scenario.question, isTyped = false) {
  currentScenario = scenario;
  handoffShown = false;
  latestAnswer = `${demoNote}\n${isTyped ? `${typedNote}\n` : ''}${scenario.answer}\n\n下一步（示例）：${scenario.next}`;
  ui.messages.replaceChildren();
  setHidden(ui.welcome, true);
  setHidden(ui.scenarioBar, false);
  ui.scenarioLabel.textContent = `${scenario.title} · 预设场景`;
  message('user', question, scenario, isTyped);
  message('assistant', scenario.answer, scenario, isTyped);
  updateScenarioControls();
  setView('chat');
  ui.chatScroll.scrollTop = 0;
  status(isTyped ? `${demoNote}${typedNote}` : demoNote);
}

function newConversation() {
  currentScenario = null;
  latestAnswer = '';
  handoffShown = false;
  ui.messages.replaceChildren();
  setHidden(ui.welcome, false);
  setHidden(ui.scenarioBar, true);
  ui.scenarioLabel.textContent = '选择一个预设场景';
  ui.messageInput.value = '';
  resizeInput();
  updateScenarioControls();
  setView('chat');
  ui.chatScroll.scrollTop = 0;
  status('请选择退款、配送、技术支持或转人工案例。输入仅在本地匹配场景，不会上传。');
  ui.messageInput.focus();
}

function sendInput() {
  const query = ui.messageInput.value.trim();
  if (!query) return;
  const scenario = matchScenario(query);
  if (!scenario) {
    status('演示版仅提供退款、配送、技术支持与转人工四种预设场景。请选择一个案例。你的输入已保留，不会上传。');
    return;
  }
  showScenario(scenario, query, true);
  ui.messageInput.value = '';
  resizeInput();
  ui.messageInput.focus();
}

function showHandoff() {
  if (!currentScenario?.handoff || handoffShown) return;
  message('human', currentScenario.handoffReply, currentScenario);
  handoffShown = true;
  updateScenarioControls();
  ui.chatScroll.scrollTop = ui.chatScroll.scrollHeight;
  status('已展示人工接管示例。这是固定文案，没有通知真人客服或发起审批。');
}

function renderDocuments() {
  ui.documentList.replaceChildren();
  ui.knowledgeCount.textContent = String(documents.length);
  ui.documentCount.textContent = String(documents.length);
  documents.forEach((source) => {
    const details = node('details', 'document-details');
    details.id = `document-${source.id}`;
    const summary = node('summary', 'document-row');
    summary.append(node('span', 'doc-icon', '▤'));
    const copy = node('span', 'doc-copy');
    copy.append(node('strong', '', source.title), node('small', '', source.excerpt));
    summary.append(copy);
    const content = node('div', 'document-content');
    paragraphs(content, source.text);
    details.append(summary, content);
    ui.documentList.append(details);
  });
}

function openDocument(id) {
  const details = document.getElementById(`document-${id}`);
  if (!details) return;
  setView('knowledge');
  details.open = true;
  details.querySelector('summary').focus();
  details.scrollIntoView({ block: 'start' });
}

function searchKnowledge() {
  const query = ui.knowledgeQuery.value.trim();
  const matches = searchDocuments(query);
  ui.knowledgeSearchResults.replaceChildren();
  setHidden(ui.knowledgeSearchResults, false);
  const description = query
    ? `本地示例检索：找到 ${matches.length} 份文档。结果仅来自这 4 份虚构示例文档。`
    : '本地示例检索：显示全部 4 份虚构示例文档。可输入退款、配送、401、特殊折扣或政策关键词。';
  ui.knowledgeSearchResults.append(node('p', 'message-note', description));
  if (!matches.length) {
    ui.knowledgeSearchResults.append(node('p', 'search-result', '未找到匹配条目。试试“退款”“配送”“401”或“特殊折扣”；多个关键词用空格分隔。'));
    return;
  }
  matches.forEach((source) => {
    const result = node('div', 'search-result');
    result.append(node('strong', '', source.title), node('span', '', source.excerpt));
    const button = node('button', 'quiet-button', '查看示例全文');
    button.type = 'button';
    button.addEventListener('click', () => openDocument(source.id));
    result.append(button);
    ui.knowledgeSearchResults.append(result);
  });
}

function setView(view) {
  const isChat = view === 'chat';
  setHidden(ui.chatView, !isChat);
  setHidden(ui.knowledgeView, isChat);
  ui.viewTitle.textContent = isChat ? '客服工作台 · 场景演示' : '示例知识库';
  document.querySelectorAll('button[data-view]').forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  setSidebar(false);
}

function setSidebar(open) {
  sidebarOpen = Boolean(open && mobileLayout.matches);
  if (!sidebarOpen && mobileLayout.matches && ui.sidebar.contains(document.activeElement)) {
    ui.openSidebar.focus();
  }
  ui.sidebar.classList.toggle('open', sidebarOpen);
  ui.sidebar.inert = mobileLayout.matches && !sidebarOpen;
  ui.sidebar.setAttribute('aria-hidden', String(mobileLayout.matches && !sidebarOpen));
  ui.mobileScrim.classList.toggle('visible', sidebarOpen);
  setHidden(ui.mobileScrim, !sidebarOpen);
  ui.openSidebar.setAttribute('aria-expanded', String(sidebarOpen));
  document.body.style.overflow = sidebarOpen ? 'hidden' : '';
  if (sidebarOpen) ui.closeSidebar.focus();
}

function renderConversationList() {
  ui.conversationList.replaceChildren();
  scenarios.forEach((scenario) => {
    const button = node('button', 'conversation-item', scenario.title);
    button.type = 'button';
    button.dataset.scenario = scenario.id;
    button.title = `${scenario.title} · 预设场景`;
    ui.conversationList.append(button);
  });
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-scenario]');
  if (!button) return;
  const scenario = scenarios.find((item) => item.id === button.dataset.scenario);
  if (scenario) showScenario(scenario);
});
document.querySelectorAll('button[data-view]').forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view));
});
ui.newChat.addEventListener('click', newConversation);
ui.sendButton.addEventListener('click', sendInput);
ui.messageInput.addEventListener('input', resizeInput);
ui.messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey && !event.metaKey && !event.altKey && !event.isComposing && event.keyCode !== 229) {
    event.preventDefault();
    sendInput();
  }
});
ui.copyAnswer.addEventListener('click', () => {
  if (latestAnswer) copyText(latestAnswer);
});
ui.handoffButton.addEventListener('click', showHandoff);
ui.knowledgeSearch.addEventListener('click', searchKnowledge);
ui.knowledgeQuery.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.isComposing && event.keyCode !== 229) {
    event.preventDefault();
    searchKnowledge();
  }
});
ui.openSidebar.addEventListener('click', () => setSidebar(true));
ui.closeSidebar.addEventListener('click', () => setSidebar(false));
ui.mobileScrim.addEventListener('click', () => setSidebar(false));
mobileLayout.addEventListener('change', () => setSidebar(false));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && sidebarOpen) {
    event.preventDefault();
    setSidebar(false);
  }
  if ((event.ctrlKey || event.metaKey) && !event.altKey && !event.shiftKey && event.key.toLowerCase() === 'k' && !event.isComposing) {
    event.preventDefault();
    newConversation();
  }
  if (event.key === 'Tab' && sidebarOpen) {
    const focusable = [...ui.sidebar.querySelectorAll('button, a[href], input, textarea, [tabindex="0"]')]
      .filter((item) => !item.disabled && !item.closest('[hidden]'));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
});

setHidden(ui.stopButton, true);
setHidden(ui.knowledgeSearchResults, true);
renderDocuments();
renderConversationList();
resizeInput();
showScenario(scenarios.find((scenario) => scenario.id === 'refund'));

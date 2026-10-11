(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('#themeToggle');
  const themeLabel = document.querySelector('.theme-label');
  const nav = document.querySelector('#primaryNav');
  const menuButton = document.querySelector('#menuToggle');
  const form = document.querySelector('#demoForm');
  const status = document.querySelector('#formStatus');

  document.documentElement.classList.add('has-js');
  document.querySelector('#currentYear').textContent = new Date().getFullYear();

  let savedTheme = '';
  try { savedTheme = localStorage.getItem('qr-site-theme') || ''; } catch { /* Storage may be disabled. */ }
  if (savedTheme === 'dark' || savedTheme === 'light') root.dataset.theme = savedTheme;

  function updateThemeLabel() {
    const dark = root.dataset.theme === 'dark';
    if (themeLabel) themeLabel.textContent = dark ? '浅色模式' : '深色模式';
    themeButton.setAttribute('aria-label', dark ? '切换浅色模式' : '切换深色模式');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#101817' : '#f4f7f3');
  }
  updateThemeLabel();
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('qr-site-theme', root.dataset.theme); } catch { /* Theme still applies for this visit. */ }
    updateThemeLabel();
  });

  const examples = {
    policy: {
      question: '“知识库支持上传哪些文档？”', agent: '知识问答 Agent', route: '匹配知识库使用说明',
      source: '知识库接入说明', sourceDetail: '匹配文件格式与上传限制', next: '说明支持范围',
      nextDetail: '提醒文档仍需符合上传限制', answer: '支持 TXT、Markdown、JSON、可搜索 PDF 和 DOCX。文件大小、页数和文本长度也有上限，上传前应先检查。',
      excerpt: '知识库支持 TXT、Markdown、JSON、可搜索 PDF 与 DOCX。上传仍受文件大小、页数和文本长度限制。', handoff: false,
    },
    billing: {
      question: '“订阅费用好像重复扣款了，能直接退款吗？”', agent: '账单 Agent', route: '识别为重复扣费咨询',
      source: '账单处理规范 · 重复扣费', sourceDetail: '匹配账单核验与处理流程', next: '提示转人工核验',
      nextDetail: '退款由人工按授权流程处理', answer: '建议先核对支付记录与订单状态。确认重复扣费后，转人工按团队流程核验。',
      excerpt: '先核对支付记录与订单状态。涉及账户核验或退款执行时，由人工按授权流程处理。', handoff: true,
    },
    missing: {
      question: '“我上周申请的特殊折扣，能再延长一个月吗？”', agent: '通用 Agent', route: '识别为例外政策咨询',
      source: '未找到明确的知识依据', sourceDetail: '避免根据相似条款推测答案', next: '提示转人工确认',
      nextDetail: '知识不足时不承诺政策结果', answer: '我暂时找不到适用于这项特殊折扣的明确说明，建议转人工确认后再答复。',
      excerpt: '此示例没有对应政策材料。应由业务人员补充知识或确认是否需要接入人工处理。', handoff: true,
    },
  };
  const exampleTabs = [...document.querySelectorAll('[data-example]')];
  const recordPanel = document.querySelector('#recordPanel');
  const recordFields = {
    recordQuestion: 'question', recordAgent: 'agent', recordRoute: 'route',
    recordSource: 'source', recordSourceDetail: 'sourceDetail', recordNext: 'next',
    recordNextDetail: 'nextDetail', recordAnswer: 'answer', recordExcerpt: 'excerpt',
  };
  function selectExample(name, focus = false) {
    const example = examples[name];
    if (!example) return;
    const selectedTab = exampleTabs.find((tab) => tab.dataset.example === name);
    exampleTabs.forEach((tab) => {
      const selected = tab === selectedTab;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    Object.entries(recordFields).forEach(([id, key]) => {
      document.querySelector(`#${id}`).textContent = example[key];
    });
    recordPanel.classList.toggle('has-handoff', example.handoff);
    recordPanel.querySelectorAll('.record-flow li').forEach((item, index) => {
      item.classList.toggle('record-handoff', index === 2 && example.handoff);
    });
    recordPanel.setAttribute('aria-labelledby', selectedTab.id);
    if (focus) selectedTab.focus();
  }
  exampleTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectExample(tab.dataset.example));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? exampleTabs.length - 1
        : (index + (event.key === 'ArrowRight' ? 1 : exampleTabs.length - 1)) % exampleTabs.length;
      selectExample(exampleTabs[next].dataset.example, true);
    });
  });

  const costForm = document.querySelector('#costForm');
  const costOutput = document.querySelector('#costResult');
  const costExplanation = document.querySelector('#costExplanation');
  const money = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY', maximumFractionDigits: 0 });
  function updateCost() {
    if (!costForm || !costForm.checkValidity() || [...costForm.elements].some((field) => field.name && field.value === '')) {
      costOutput.textContent = '待填写';
      costExplanation.textContent = '填写五项数据后计算；正值表示估算的人工工时价值扣除月费后仍为正，负值表示月费更高。';
      return;
    }
    const values = new FormData(costForm);
    const cases = Number(values.get('cases'));
    const baseline = Number(values.get('baseline'));
    const review = Number(values.get('review'));
    const hourly = Number(values.get('hourly'));
    const fees = Number(values.get('fees'));
    const net = cases * (baseline - review) / 60 * hourly - fees;
    costOutput.textContent = `${net < 0 ? '−' : ''}${money.format(Math.abs(net))}`;
    costExplanation.textContent = net >= 0
      ? '按填写数据估算，人工工时成本差额高于月度费用；不代表实际现金节省。'
      : '按填写数据估算，人工工时成本差额未覆盖月度费用。';
  }
  costForm?.addEventListener('input', updateCost);
  costForm?.addEventListener('change', updateCost);

  document.querySelector('#downloadChecklist')?.addEventListener('click', () => {
    const rows = [
      ['检查项', '建议核验方式', '建议留存证据', '双方确认阈值', '负责人', '结果'],
      ['问题范围', '明确纳入与转人工的问题', '脱敏样本和升级规则', '', '', ''],
      ['回答质量', '业务人员复核答案和引用', '固定样本、判定规则、失败个案', '', '', ''],
      ['服务效率', '对照人工处理基线', '响应时间和评估周期', '', '', ''],
      ['人工接管', '检查应转人工的个案是否交接', '接管记录和漏转个案', '', '', ''],
      ['完整成本', '合并模型、服务、维护和复核费用', '用量记录、费用账单、成本测算', '', '', ''],
      ['停止与扩展', '试点开始前由双方确认决策条件', '验收会议纪要和后续决定', '', '', ''],
    ];
    const csv = '\uFEFF' + rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'quick-response-pilot-acceptance-checklist.csv';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? '打开导航' : '关闭导航');
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '打开导航');
  }));

  const revealNodes = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' });
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  }

  function requestErrorMessage(response, result) {
    if (typeof result.detail === 'string') return result.detail;
    if (Array.isArray(result.detail)) {
      const labels = { name: '称呼', company: '公司或团队', email: '工作邮箱', team_size: '团队规模', scenario: '优先场景' };
      const fields = [...new Set(result.detail.map((issue) => labels[issue.loc?.at(-1)]).filter(Boolean))];
      if (fields.length) return `请检查：${fields.join('、')}。`;
      return '申请信息格式有误，请检查后重试。';
    }
    return response.status === 503 ? '预约服务暂不可用，请稍后重试。' : '提交失败，请检查网络后重试。';
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = '';
    status.dataset.state = '';
    if (!form.reportValidity()) return;

    const submitButton = form.querySelector('[type="submit"]');
    const originalLabel = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.textContent = '正在提交…';
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      team_size: String(formData.get('team_size') || ''),
      scenario: String(formData.get('scenario') || ''),
      consent: formData.get('consent') === 'on',
      website: String(formData.get('website') || '').trim(),
    };

    try {
      const response = await fetch('/api/quick-response-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(requestErrorMessage(response, result));
      status.dataset.state = 'success';
      status.textContent = '申请已保存。当前站点未接入邮件或 CRM 自动通知，需由工作人员查看后手动跟进。';
      form.reset();
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = error.message || '暂时无法提交，请稍后重试。';
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalLabel;
    }
  });
})();

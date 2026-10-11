// Every policy, order and conversation below is fictional demonstration data.
export const documents = [
  {
    id: 'refund-policy',
    title: '订阅退款政策（示例）',
    excerpt: '首次购买后 7 个自然日内，尚未使用的订阅可申请退款；审核通过后原路退回。',
    text: '虚构商店：青禾商店。本文件只用于展示示例知识引用流程。\n\n退款政策：首次购买的订阅，在付款后 7 个自然日内且尚未使用服务，可以提交退款申请。示例订单 QRM-DEMO-1001 于昨日付款，服务尚未使用，因此符合示例申请条件。\n\n处理方式：客户在订单页提交申请，客服核对订单与使用记录。审核通过后，款项在 1–3 个工作日内原路退回。申请不等于退款已完成。\n\n未列明的特殊退款条件必须交由人工审核；客服不得承诺例外。本演示不会访问、创建或修改真实订单。'
  },
  {
    id: 'delivery-policy',
    title: '配送与物流说明（示例）',
    excerpt: '实物商品在付款后 2 个工作日内发货，发货后通常需 3–5 个工作日送达。',
    text: '虚构商店：青禾商店。本文件只用于展示示例知识引用流程。\n\n配送政策：实物商品在付款后 2 个工作日内发货，发货后通常需 3–5 个工作日送达。此时效仅为示例，不是对真实物流的承诺。\n\n物流更新：运单在发货后可能需 24–48 小时更新。如果客户反馈发货已过 48 小时仍无更新，客服应核对运单，并联系承运商确认。\n\n示例订单 QRM-DEMO-1002 已发货 2 个工作日，暂未更新运单。建议先核对物流信息，无法确认时转人工处理；不得编造包裹位置。本演示未连接订单或物流系统。'
  },
  {
    id: 'technical-401',
    title: '接口 401 排查指南（示例）',
    excerpt: '401 表示鉴权未通过；优先检查凭据有效期、请求头和环境配置。',
    text: '虚构服务：青禾商店示例接口。本文件只用于展示技术支持流程。\n\n技术支持政策：接口返回 HTTP 401 时，先检查 API Key 或访问凭据是否过期、是否撤销，以及 Authorization 请求头的格式是否符合服务文档。\n\n排查步骤：在实际服务控制台确认凭据状态；如已过期，在控制台安全地更新凭据。检查应用环境配置后重试。不要将完整 API Key、Token 或其他凭据发送给客服。\n\n如果仍然出现 401，应提供已脱敏的错误信息、发生时间和请求标识，由人工排查。本演示没有凭据设置或接口调用功能。'
  },
  {
    id: 'handoff-policy',
    title: '政策例外与人工审核规则（示例）',
    excerpt: '知识库未覆盖特殊折扣或延长退款期时，不作承诺，说明缺口并交由人工审核。',
    text: '虚构商店：青禾商店。本文件只用于展示示例人工接管流程。\n\n人工审核政策：当客户请求特殊折扣、延长退款期或其他政策例外时，如果知识库没有明确授权，客服不能自行批准，也不能编造可用优惠。\n\n当前示例知识库没有企业采购 100 个席位可享 40% 折扣的条款，也没有将退款期延长至 30 天的条款。可引用本文件作为转人工的依据，不能把它当作折扣或退款批准依据。\n\n交接内容应包括客户需求、已找到的政策、缺少的授权与待核对事项。本演示的人工接管是固定文案，不会联系或通知真人客服。'
  }
];

export const scenarios = [
  {
    id: 'refund',
    title: '退款申请',
    subtitle: '从政策中找到条件与处理步骤',
    icon: '↩',
    tone: 'mint',
    question: '我昨天首次购买了订阅，还没有使用。示例订单 QRM-DEMO-1001 可以退款吗？',
    answer: '您好，根据示例退款政策，首次购买后 7 个自然日内且尚未使用服务的订阅，可以提交退款申请。这个虚构订单符合示例申请条件。\n\n建议在订单页提交申请，由客服核对订单与使用记录。审核通过后，款项将在 1–3 个工作日内原路退回。\n\n这里展示的是建议回复，本演示没有提交退款申请或修改订单。',
    agent: '售后助手（示例）',
    sourceIds: ['refund-policy'],
    next: '建议客户提交退款申请，再由客服核对；此演示不执行退款。',
    handoff: false,
    handoffReply: ''
  },
  {
    id: 'delivery',
    title: '配送查询',
    subtitle: '引用配送时效，不编造物流状态',
    icon: '▱',
    tone: 'blue',
    question: '示例订单 QRM-DEMO-1002 已经发货 2 个工作日了，物流一直没有更新，应该怎么办？',
    answer: '您好，示例配送说明中，发货后通常需 3–5 个工作日送达，运单信息可能需 24–48 小时更新。\n\n如果发货已过 48 小时仍无更新，建议客服核对运单并联系承运商确认；无法确认时交由人工处理。仅凭这份示例说明，不能判断包裹当前在哪里。\n\n本演示未连接订单或物流系统，没有查询真实运单。',
    agent: '配送助手（示例）',
    sourceIds: ['delivery-policy'],
    next: '核对运单和发货时间；超过示例更新时间时联系承运商或转人工。',
    handoff: false,
    handoffReply: ''
  },
  {
    id: 'technical',
    title: '技术支持',
    subtitle: '根据 401 指南整理排查建议',
    icon: '⌘',
    tone: 'amber',
    question: '调用接口时返回 401，之前可以使用。这个示例中应该先检查什么？',
    answer: '您好，根据示例排查指南，HTTP 401 表示鉴权未通过。建议先检查凭据是否过期或撤销，再核对 Authorization 请求头与应用的环境配置。\n\n如确认凭据已过期，请在实际服务控制台安全地更新后重试。不要把完整 API Key 或 Token 发到聊天窗口。\n\n如果仍然报错，可向人工客服提供脱敏的错误信息、发生时间和请求标识。本演示未调用接口，也不能确认真实故障原因。',
    agent: '技术支持助手（示例）',
    sourceIds: ['technical-401'],
    next: '按指南核对凭据与配置；问题持续时整理脱敏信息交由人工排查。',
    handoff: false,
    handoffReply: ''
  },
  {
    id: 'handoff',
    title: '转人工处理',
    subtitle: '缺少政策授权时停止承诺',
    icon: '↗',
    tone: 'rose',
    question: '我们想采购 100 个席位，能给 40% 的特殊折扣，并把退款期延长到 30 天吗？',
    answer: '当前示例知识库没有支持这项特殊折扣或延长退款期的授权条款，因此不能承诺批准。\n\n可以引用人工审核规则，说明这是政策例外请求，并将采购数量、期望折扣和退款期要求整理给人工审核。该规则只支持转人工，不支持批准优惠。\n\n点击“查看人工接管示例”，可以看到交接后如何继续沟通；这不会通知真人客服。',
    agent: '人工转接助手（示例）',
    sourceIds: ['handoff-policy'],
    next: '说明知识缺口，交接采购需求与待审批事项；不承诺折扣或延长退款期。',
    handoff: true,
    handoffReply: '人工接管示例：以下内容来自原预设案例，不是从你输入的问题中提取的信息。在该虚构案例中，客户希望采购 100 个席位，申请 40% 特殊折扣，并将退款期延长至 30 天。\n\n现有示例政策未授权这两项例外。真实服务中，人工客服应核对采购需求与审批权限后，再反馈是否可提供方案。\n\n这是一段固定的人工回复示例，没有发起审批、发送通知或联系真人客服。'
  }
];

// A match selects a preset example. It never judges or answers the actual input.
export function matchScenario(query) {
  const value = String(query).trim().toLowerCase();
  const rules = [
    ['handoff', /转人工|人工客服|人工处理|特殊折扣|企业折扣|政策例外|延长退款|40%|human|handoff/],
    ['technical', /401|技术支持|鉴权|未授权|authorization|api\s*key|token\s*过期|接口.{0,8}(报错|错误|失败)/],
    ['refund', /退款|退货|返款|refund/],
    ['delivery', /配送|物流|快递|包裹|运单|发货|delivery|shipping/]
  ];
  const match = rules.find(([, expression]) => expression.test(value));
  return match ? scenarios.find((scenario) => scenario.id === match[0]) : null;
}

export function searchDocuments(query) {
  const terms = String(query).toLowerCase().trim().split(/[\s,，、;；]+/u).filter(Boolean);
  return documents.filter((document) => {
    const content = `${document.title}\n${document.text}`.toLowerCase();
    return terms.every((term) => content.includes(term));
  });
}

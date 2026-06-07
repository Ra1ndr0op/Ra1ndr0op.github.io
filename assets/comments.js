(function () {
  const article = document.querySelector(".letter-article");
  if (!article || window.Ra1ndropCommentSystem) return;

  window.Ra1ndropCommentSystem = true;

  const slug = document.body.dataset.postSlug || location.pathname.split("/").pop().replace(/\.html$/, "");
  const footer = article.querySelector(".letter-footer");
  const section = document.createElement("section");
  section.className = "comments-section";
  section.setAttribute("aria-labelledby", "comments-title");
  section.innerHTML = `
    <div class="comments-head">
      <p class="spaced-label">C O M M E N T S</p>
      <h2 id="comments-title">Leave A Note</h2>
      <p>匿名也可以写。把你的补充、反驳、问题或使用场景留下来。</p>
    </div>
    <form class="comment-form" id="comment-form">
      <label>
        <span>昵称，可不填</span>
        <input name="author" type="text" maxlength="32" autocomplete="nickname" placeholder="匿名用户" />
      </label>
      <label>
        <span>评论</span>
        <textarea name="body" maxlength="800" rows="5" placeholder="写下你真正想补充的一句话..." required></textarea>
      </label>
      <div class="comment-form-bar">
        <p class="comment-message" role="status" aria-live="polite"></p>
        <button type="submit">发布评论</button>
      </div>
    </form>
    <div class="comments-list" aria-live="polite"></div>
  `;

  if (footer) {
    article.insertBefore(section, footer);
  } else {
    article.appendChild(section);
  }

  const form = section.querySelector("#comment-form");
  const message = section.querySelector(".comment-message");
  const list = section.querySelector(".comments-list");
  const submit = form.querySelector("button");

  function setMessage(text, type) {
    message.textContent = text;
    message.dataset.type = type;
  }

  function formatDate(value) {
    try {
      return new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(value));
    } catch {
      return "";
    }
  }

  function renderComment(comment) {
    const card = document.createElement("article");
    card.className = "comment-card";

    const meta = document.createElement("div");
    meta.className = "comment-meta";

    const author = document.createElement("strong");
    author.textContent = comment.author || "匿名用户";

    const time = document.createElement("time");
    time.dateTime = comment.createdAt || "";
    time.textContent = formatDate(comment.createdAt);

    const body = document.createElement("p");
    body.textContent = comment.body || "";

    meta.append(author, time);
    card.append(meta, body);
    return card;
  }

  function renderEmpty() {
    const empty = document.createElement("p");
    empty.className = "comments-empty";
    empty.textContent = "还没有评论。第一条可以很短，但最好是真话。";
    list.replaceChildren(empty);
  }

  async function readJson(response) {
    const contentType = response.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return { error: "评论服务暂时不可用，请稍后再试。" };
    }
    return response.json();
  }

  async function loadComments() {
    setMessage("正在读取评论...", "neutral");
    try {
      const response = await fetch(`/api/comments?postSlug=${encodeURIComponent(slug)}`);
      const data = await readJson(response);
      if (!response.ok) {
        renderEmpty();
        setMessage(data.error || "评论暂时读取失败，稍后刷新再试。", "error");
        return;
      }
      const comments = Array.isArray(data.comments) ? data.comments : [];
      if (comments.length === 0) {
        renderEmpty();
      } else {
        list.replaceChildren(...comments.map(renderComment));
      }
      setMessage("", "neutral");
    } catch {
      renderEmpty();
      setMessage("评论暂时读取失败，稍后刷新再试。", "error");
    }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const author = String(formData.get("author") || "").trim();
    const body = String(formData.get("body") || "").trim();

    if (body.length < 2) {
      setMessage("评论至少写两个字。", "error");
      return;
    }

    submit.disabled = true;
    setMessage("正在发布...", "neutral");

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postSlug: slug, author, body }),
      });
      const data = await readJson(response);

      if (!response.ok) {
        setMessage(data.error || "评论发布失败，请稍后重试。", "error");
        return;
      }

      const node = renderComment(data.comment);
      const empty = list.querySelector(".comments-empty");
      if (empty) {
        list.replaceChildren(node);
      } else {
        list.prepend(node);
      }
      form.reset();
      setMessage(data.message || "评论已发布。", "success");
    } catch {
      setMessage("网络连接失败，请稍后重试。", "error");
    } finally {
      submit.disabled = false;
    }
  });

  loadComments();
})();

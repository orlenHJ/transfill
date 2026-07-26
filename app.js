const App = {
  currentView: 'home',
  currentLevel: 'beginner',
  currentSentence: null,
  currentIndex: 0,
  sentences: [],
  blanks: [],
  hintCount: 0,
  stats: { total: 0, correct: 0, streak: 0 },
  bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]'),
  isChecked: false,

  init() {
    this.loadStats();
    this.bindNav();
    this.showView('home');
  },

  // Navigation
  bindNav() {
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', () => this.showView(btn.dataset.view));
    });
  },

  showView(view) {
    this.currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${view}`).classList.add('active');
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
    document.querySelector(`.nav button[data-view="${view}"]`)?.classList.add('active');

    if (view === 'review') this.renderReview();
    if (view === 'settings') this.renderSettings();
  },

  // Start practice
  async startPractice(level) {
    this.currentLevel = level;
    this.currentIndex = 0;
    this.sentences = [];

    if (aiService.isConfigured()) {
      this.showLoading(true);
      const aiSentences = await aiService.generateSentences(level, 10);
      this.showLoading(false);
      if (aiSentences) {
        this.sentences = aiSentences;
      }
    }

    if (this.sentences.length === 0) {
      const pool = SENTENCES.filter(s => s.level === level);
      this.sentences = this.shuffle(pool).slice(0, 20);
    }

    this.showView('practice');
    this.loadSentence();
  },

  // Load and display a sentence
  loadSentence() {
    if (this.currentIndex >= this.sentences.length) {
      this.showComplete();
      return;
    }

    this.currentSentence = this.sentences[this.currentIndex];
    this.isChecked = false;
    this.hintCount = 0;

    document.getElementById('chinese-text').textContent = this.currentSentence.chinese;

    const words = this.currentSentence.english.split(' ');
    this.blanks = this.selectBlanks(words);

    this.renderSentence(words);
    this.updateProgress();
    this.updateBookmarkBtn();
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('feedback').textContent = '';
  },

  selectBlanks(words) {
    const count = Math.max(1, Math.ceil(words.length * 0.4));
    const indices = [];
    const available = words.map((_, i) => i).filter(i => words[i].length > 2);

    if (available.length === 0) {
      return [0];
    }

    const shuffled = this.shuffle([...available]);
    return shuffled.slice(0, Math.min(count, shuffled.length)).sort((a, b) => a - b);
  },

  renderSentence(words) {
    const area = document.getElementById('sentence-area');
    area.innerHTML = '';

    words.forEach((word, i) => {
      if (this.blanks.includes(i)) {
        const input = document.createElement('input');
        input.type = 'text';
        input.dataset.index = i;
        input.dataset.answer = word;
        input.style.width = Math.max(60, word.length * 12 + 20) + 'px';
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') this.checkAnswer();
        });
        area.appendChild(input);
      } else {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = word;
        area.appendChild(span);
      }
    });

    const firstInput = area.querySelector('input');
    if (firstInput) firstInput.focus();
  },

  updateProgress() {
    const total = this.sentences.length;
    const current = this.currentIndex + 1;
    document.getElementById('progress-text').textContent = `${current} / ${total}`;
    document.getElementById('progress-fill').style.width = `${(current / total) * 100}%`;
    document.getElementById('level-badge').textContent =
      { beginner: '初级', intermediate: '中级', advanced: '高级' }[this.currentLevel];
  },

  // Check answers
  checkAnswer() {
    if (this.isChecked) return;
    this.isChecked = true;
    this.stats.total++;

    const inputs = document.querySelectorAll('#sentence-area input');
    let allCorrect = true;

    inputs.forEach(input => {
      const answer = input.dataset.answer;
      const userAnswer = input.value.trim();

      const cleanAnswer = answer.replace(/[.,!?;:'"]/g, '').toLowerCase();
      const cleanUser = userAnswer.replace(/[.,!?;:'"]/g, '').toLowerCase();

      if (cleanUser === cleanAnswer) {
        input.classList.add('correct');
      } else {
        input.classList.add('wrong');
        allCorrect = false;
        const hint = document.createElement('span');
        hint.className = 'answer-hint';
        hint.textContent = answer;
        input.parentNode.insertBefore(hint, input.nextSibling);
      }
    });

    const feedback = document.getElementById('feedback');
    if (allCorrect) {
      this.stats.correct++;
      this.stats.streak++;
      feedback.textContent = '正确！干得漂亮！';
      feedback.className = 'feedback show success';
    } else {
      this.stats.streak = 0;
      feedback.textContent = '有些地方不对，正确答案已标出。';
      feedback.className = 'feedback show error';
    }

    this.saveStats();
    this.renderStats();
  },

  // Hint
  giveHint() {
    if (this.isChecked) return;
    const inputs = document.querySelectorAll('#sentence-area input');
    const emptyInputs = Array.from(inputs).filter(i => !i.value);
    const target = emptyInputs[0] || inputs[0];

    if (target) {
      const answer = target.dataset.answer;
      this.hintCount++;
      const revealCount = Math.min(this.hintCount, answer.length);
      target.value = answer.substring(0, revealCount);
      target.focus();
      target.style.borderColor = 'var(--warning)';
    }
  },

  // Next sentence
  nextSentence() {
    this.currentIndex++;
    this.loadSentence();
  },

  // Show answer
  showAnswer() {
    const inputs = document.querySelectorAll('#sentence-area input');
    inputs.forEach(input => {
      input.value = input.dataset.answer;
      input.classList.add('correct');
    });
    this.isChecked = true;
    const feedback = document.getElementById('feedback');
    feedback.textContent = '答案已显示，继续下一题吧。';
    feedback.className = 'feedback show error';
  },

  // Bookmark
  toggleBookmark() {
    const s = this.currentSentence;
    if (!s) return;

    const idx = this.bookmarks.findIndex(b => b.chinese === s.chinese);
    if (idx >= 0) {
      this.bookmarks.splice(idx, 1);
    } else {
      this.bookmarks.push({ chinese: s.chinese, english: s.english, level: s.level });
    }

    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    this.updateBookmarkBtn();
  },

  updateBookmarkBtn() {
    const btn = document.getElementById('btn-bookmark');
    if (!btn || !this.currentSentence) return;
    const isMarked = this.bookmarks.some(b => b.chinese === this.currentSentence.chinese);
    btn.classList.toggle('bookmark-active', isMarked);
    btn.textContent = isMarked ? '已标记' : '标记';
  },

  // Completion screen
  showComplete() {
    const area = document.getElementById('sentence-area');
    const accuracy = this.stats.total > 0 ? Math.round((this.stats.correct / this.stats.total) * 100) : 0;
    area.innerHTML = `
      <div class="empty-state">
        <h3>本轮练习完成！</h3>
        <p>正确率: ${accuracy}%</p>
        <button class="btn btn-primary" onclick="App.startPractice('${this.currentLevel}')" style="margin-top:16px">再来一轮</button>
        <button class="btn btn-secondary" onclick="App.showView('home')" style="margin-top:16px">返回首页</button>
      </div>
    `;
    document.getElementById('chinese-text').textContent = '';
    document.getElementById('feedback').className = 'feedback';
  },

  // Loading state
  showLoading(show) {
    const el = document.getElementById('loading');
    if (el) el.style.display = show ? 'flex' : 'none';
  },

  // Review
  renderReview() {
    const list = document.getElementById('review-list');
    if (this.bookmarks.length === 0) {
      list.innerHTML = '<div class="empty-state"><p>还没有标记的句子</p><p>练习时点击"标记"按钮收藏句子</p></div>';
      return;
    }

    list.innerHTML = this.bookmarks.map((b, i) => `
      <div class="review-item">
        <div class="zh">${b.chinese}</div>
        <div class="en">${b.english}</div>
        <div class="review-actions">
          <button class="btn btn-secondary" onclick="App.removeBookmark(${i})">移除</button>
        </div>
      </div>
    `).join('');
  },

  removeBookmark(index) {
    this.bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    this.renderReview();
  },

  // Settings
  renderSettings() {
    document.getElementById('api-key').value = aiService.apiKey;
    document.getElementById('api-endpoint').value = aiService.endpoint;
    document.getElementById('api-model').value = aiService.model;
    this.updateApiStatus();
  },

  saveSettings() {
    const key = document.getElementById('api-key').value.trim();
    const endpoint = document.getElementById('api-endpoint').value.trim();
    const model = document.getElementById('api-model').value.trim();
    aiService.saveConfig(key, endpoint, model);
    this.updateApiStatus();
    alert('设置已保存！');
  },

  updateApiStatus() {
    const status = document.getElementById('api-status');
    if (status) {
      status.textContent = aiService.isConfigured() ? '已配置' : '未配置';
      status.style.color = aiService.isConfigured() ? 'var(--success)' : 'var(--error)';
    }
  },

  // Stats
  loadStats() {
    const saved = localStorage.getItem('practiceStats');
    if (saved) this.stats = JSON.parse(saved);
  },

  saveStats() {
    localStorage.setItem('practiceStats', JSON.stringify(this.stats));
  },

  renderStats() {
    document.getElementById('stat-total').textContent = this.stats.total;
    document.getElementById('stat-correct').textContent = this.stats.correct;
    document.getElementById('stat-streak').textContent = this.stats.streak;
  },

  // Utility
  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
  App.renderStats();
});

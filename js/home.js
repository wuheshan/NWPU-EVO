(function () {
  var slides = [
    {
      title: '欢迎访问侯廷军教授课题组网站',
      description: '本课题组致力于人工智能辅助和计算机辅助药物分子设计方法和应用研究，加速新药发现。',
    },
    {
      title: 'AI + 物理双驱动的小分子药物设计',
      description: '我们融合深度学习与分子模拟，构建高效可解释的药物设计与优化平台。',
    },
    {
      title: '混合式逆合成与药物发现平台',
      description: '开发完整的逆合成规划、酶推荐与可行性评估系统，推进绿色合成与新药开发。',
    },
  ];

  var current = 0;
  var titleEl = document.getElementById('hero-title');
  var descriptionEl = document.getElementById('hero-description');
  var dotsContainer = document.querySelector('.hero-dots');
  var prevButton = document.getElementById('hero-prev');
  var nextButton = document.getElementById('hero-next');

  function setSlide(index) {
    current = (index + slides.length) % slides.length;
    var slide = slides[current];
    if (!slide) return;
    titleEl.classList.remove('o-100');
    descriptionEl.classList.remove('o-100');

    titleEl.style.opacity = '0.2';
    descriptionEl.style.opacity = '0.2';

    window.setTimeout(function () {
      titleEl.textContent = slide.title;
      descriptionEl.textContent = slide.description;
      titleEl.style.opacity = '1';
      descriptionEl.style.opacity = '1';
    }, 120);

    var dots = dotsContainer.querySelectorAll('.hero-dot');
    dots.forEach(function (dot, idx) {
      dot.classList.toggle('is-active', idx === current);
    });
  }

  function createDots() {
    slides.forEach(function (_, idx) {
      var dot = document.createElement('button');
      dot.className = 'hero-dot bn bg-transparent';
      dot.setAttribute('aria-label', 'Slide ' + (idx + 1));
      dot.addEventListener('click', function () {
        setSlide(idx);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function nextSlide() {
    setSlide(current + 1);
  }

  function prevSlide() {
    setSlide(current - 1);
  }

  function startAutoRotate() {
    return window.setInterval(nextSlide, 8000);
  }

  if (!titleEl || !descriptionEl || !dotsContainer) {
    return;
  }

  createDots();
  setSlide(0);
  var intervalId = startAutoRotate();

  nextButton.addEventListener('click', function () {
    nextSlide();
    window.clearInterval(intervalId);
    intervalId = startAutoRotate();
  });

  prevButton.addEventListener('click', function () {
    prevSlide();
    window.clearInterval(intervalId);
    intervalId = startAutoRotate();
  });
})();

(function() {
  const selectors = [
    '[data-testid="frontpage-sidebar"]',
    '[data-testid="post-container"]',
    '[data-testid="feed-sidebar"]',
    '.promotedlink'
  ];

  function hide() {
    selectors.forEach(s => {
      document.querySelectorAll(s).forEach(el => {
        el.style.display = 'none';
      });
    });
  }

  const observer = new MutationObserver(hide);
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
  hide();
})();

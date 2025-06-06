(function() {
  const selectors = [
    '#related',
    'ytd-watch-next-secondary-results-renderer',
    'ytd-merch-shelf-renderer',
    'ytd-rich-item-renderer'
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
  document.addEventListener('yt-navigate-finish', hide);
  hide();
})();

(function() {
  const hideSelectors = [
    '#related',
    'ytd-watch-next-secondary-results-renderer',
    'ytd-merch-shelf-renderer',
    'ytd-rich-item-renderer',
    'div.html5-endscreen.ytp-player-content.videowall-endscreen.ytp-show-tiles'
  ];

  const removeSelectors = ['#secondary'];

  function hide() {
    hideSelectors.forEach(s => {
      document.querySelectorAll(s).forEach(el => {
        el.style.display = 'none';
      });
    });

    removeSelectors.forEach(s => {
      document.querySelectorAll(s).forEach(el => el.remove());
    });
  }

  const observer = new MutationObserver(hide);
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
  document.addEventListener('yt-navigate-finish', hide);
  hide();
})();

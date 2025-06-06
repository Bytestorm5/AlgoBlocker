(function() {
  const allowed = ['/', '/r/popular', '/r/all'];

  function onTargetPage() {
    const path = location.pathname.replace(/\/$/, '');
    return allowed.includes(path);
  }

  function hide() {
    if (!onTargetPage()) {
      return;
    }
    document.querySelectorAll('shreddit-feed').forEach(el => {
      el.remove();
    });
  }

  const observer = new MutationObserver(hide);
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });
  hide();
})();

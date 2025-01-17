(function () {
  function checkAndOpenIntercom() {
    if (window.Intercom && window.location.hash === "#intercom") {
      window.Intercom("show");
      // Remove the hash without triggering a page reload
      history.replaceState(
        null,
        null,
        window.location.pathname + window.location.search
      );
    }
  }

  // Check when page loads
  window.addEventListener("load", checkAndOpenIntercom);

  // Also check when route changes (for single-page app navigation)
  window.addEventListener("mintlify:route-change", checkAndOpenIntercom);
})();

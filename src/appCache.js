function onUpdateReady() {
  if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
    // Browser downloaded a new app cache.
    window.location.reload();
  } else {
    // Manifest didn't changed. Nothing new to server.
  }
}

function onLoad() {
  window.applicationCache.addEventListener('updateready', onUpdateReady, false);
}

// Check if a new cache is available on page load.
window.addEventListener('load', onLoad, false);
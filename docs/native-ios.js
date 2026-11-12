// FINLAB in the native iOS app: the web view cannot download files, so every file the app saves
// (PDF report, Excel workbook, notebook .json, CSV) is written to the app's cache and handed to the iOS
// share sheet, where the user picks "Save to Files", AirDrop, Mail and so on. Does nothing in a browser.
(function () {
  var C = window.Capacitor;
  if (!C || !C.isNativePlatform || !C.isNativePlatform()) return;
  var P = C.Plugins || {};

  function toBase64(blob) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onload = function () { res(String(r.result).split(',')[1] || ''); };
      r.onerror = function () { rej(r.error); };
      r.readAsDataURL(blob);
    });
  }
  function safeName(n) { return (n || 'FINLAB-file').replace(/[\\/:*?"<>|]+/g, '-'); }

  async function share(href, name) {
    var blob = await (await fetch(href)).blob();
    var file = await P.Filesystem.writeFile({ path: safeName(name), data: await toBase64(blob), directory: 'CACHE' });
    await P.Share.share({ title: safeName(name), files: [file.uri] });
  }

  function intercept(a) {
    if (!(a instanceof HTMLAnchorElement) || !a.hasAttribute('download') || !/^(blob|data):/.test(a.href)) return false;
    share(a.href, a.getAttribute('download')).catch(function (e) {
      var m = String((e && e.message) || e);
      if (!/cancel/i.test(m)) alert('The file could not be saved: ' + m);
    });
    return true;
  }

  // Programmatic downloads: a.click() (notebook export) and a.dispatchEvent(click) (jsPDF, SheetJS).
  var click = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () { if (!intercept(this)) return click.call(this); };
  var dispatch = EventTarget.prototype.dispatchEvent;
  EventTarget.prototype.dispatchEvent = function (e) {
    if (e && e.type === 'click' && intercept(this)) return true;
    return dispatch.call(this, e);
  };
  // Downloads the user taps directly.
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[download]');
    if (a && intercept(a)) e.preventDefault();
  }, true);
})();

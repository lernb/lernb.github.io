if (screen.width >= 768) {
  let bar = document.getElementsByClassName('bar-in')[0],
    pgtimer;
  document.addEventListener('readystatechange', function () {
    if (document.readyState == "interactive") {
      let w = 20;
      bar.style.width = 20 + '%';
      pgtimer = setInterval(function () {
        w += .1;
        if (w <= 95) {
          bar.style.width = w + '%';
        }
      }, 50);
    } else {
      bar.style.width = 100 + '%';
      clearInterval(pgtimer);
      setTimeout(function () {
        bar.parentElement.style.display = 'none';
      }, 301);
    }
  });
}
let bar = document.getElementsByClassName('bar-in')[0];
let pgtimer;
document.addEventListener('readystatechange', function () {
  if (document.readyState == "interactive") {
    let w = 60;
    bar.style.width = 60 + '%';
    pgtimer = setInterval(function () {
      w += .1;
      if (w <= 95) {
        bar.style.width = w + '%';
      }
    }, 500);
  } else {
    bar.style.width = 100 + '%';
    setTimeout(function () {
      bar.parentElement.style.display = 'none';
    }, 300);
    clearInterval(pgtimer);
  }
});
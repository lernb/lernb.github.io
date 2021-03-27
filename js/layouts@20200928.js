if (screen.width >= 768) {
  let bar = document.getElementsByClassName('bar-in')[0],
    pgtimer,
    opa = false,
    w = 20;
  document.addEventListener('readystatechange', function () {
    if (document.readyState == "interactive") {
      // bar.style.width = w + '%';
      // pgtimer = setInterval(function () {
      //   w += .1;
      //   if (w <= 95) {
      //     bar.style.width = w + '%';
      //   }
      // }, 50);
      console.log("interactive");
    } else {
      // clearInterval(pgtimer);
      // bar.style.width = 100 + '%';
      // setTimeout(function () {
      //   bar.style.opacity = "0";
      //   opa = true;
      // }, 2000);
      // if (opa) {
      //   bar.parentElement.style.display = 'none';
      // }
    }
  });
}
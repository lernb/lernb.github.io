var pre = document.getElementsByTagName('pre');
var h2 = document.getElementsByTagName('h2');
for (let i = 0; i < pre.length; i++) {
  pre[i].className = 'prettyprint linenums';
}
for (let i = 0; i < h2.length; i++) {
  let h2Pa = document.createElement('div');
  h2Pa.setAttribute('class', 't-h');
  h2Pa.setAttribute('style', 'margin-bottom: 23px; border-bottom: 1px solid #eaeaea;');
  h2[i].parentNode.insertBefore(h2Pa, h2[i].nextElementSibling);
  h2Pa.appendChild(h2[i]);
}
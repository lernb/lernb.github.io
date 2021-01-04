function $(cName) {
  return document.getElementsByClassName(cName);
}
const pre = document.getElementsByTagName('pre'),
  h2 = document.getElementsByTagName('h2'),
  headhead = document.getElementsByClassName('headhead')[0],
  table = document.getElementsByTagName('table');
let downFlag = null, upFlag = null;
// for (let i = 0; i < pre.length; i++) {
//   pre[i].className = 'prettyprint linenums';
// }

for (let i = 0; i < pre.length; i++) {
  let preHeight = pre[i].currentStyle ? pre[i].currentStyle.height : window.getComputedStyle(pre[i], null).height;
  if (preHeight.match(/\d+/g)[0] > 700) {
    let preWrap = document.createElement('div'),
      preBg = document.createElement('div'),
      preBtn = document.createElement('div');
    preWrap.setAttribute('class', 'pre-wrap');
    pre[i].style.height = '700px';
    pre[i].className += ' preAfter';
    pre[i].parentNode.insertBefore(preWrap, pre[i]);
    preWrap.appendChild(pre[i]);
    preWrap.appendChild(preBg);
    preWrap.appendChild(preBtn);
    preWrap.className += ' .plusBtn';
    preBg.setAttribute('class', 'preBg');
    preBtn.setAttribute('class', 'preBtn');
    preBtn.onclick = function () {
      pre[i].style.height = 'auto';
      pre[i].style.overflow = 'auto';
      preBg.style.display = 'none';
      preBtn.style.display = 'none';
    }
  }
}

for (let i = 0; i < h2.length; i++) {
  let h2Pa = document.createElement('div');
  h2Pa.setAttribute('class', 't-h');
  h2Pa.setAttribute('style', 'margin: 35px 0 20px; border-bottom: 1px solid #eaeaea;');
  h2[i].parentNode.insertBefore(h2Pa, h2[i].nextElementSibling);
  h2Pa.appendChild(h2[i]);
}
for (let i = 0; i < table.length; i++) {
  let tableWrap = document.createElement('div');
  tableWrap.setAttribute('class', 'table-wrap');
  table[i].parentNode.insertBefore(tableWrap, table[i]);
  tableWrap.appendChild(table[i]);
}

function getPageScroll() {
  let xScroll, yScroll;
  if (self.pageYOffset) {
    yScroll = self.pageYOffset;
    xScroll = self.pageXOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
    yScroll = document.documentElement.scrollTop;
    xScroll = document.documentElement.scrollLeft;
  } else if (document.body) {// all other Explorers
    yScroll = document.body.scrollTop;
    xScroll = document.body.scrollLeft;
  }
  arrayPageScroll = yScroll;
  return arrayPageScroll;
};

let scrollAction = { x: 'undefined', y: 'undefined' }, scrollDirection;
function scrollFunc() {
  if (typeof scrollAction.x == 'undefined') {
    scrollAction.x = window.pageXOffset;
    scrollAction.y = window.pageYOffset;
  }
  let diffX = scrollAction.x - window.pageXOffset,
    diffY = scrollAction.y - window.pageYOffset;
  if (diffX < 0) {
    // Scroll right
    scrollDirection = 'right';
  } else if (diffX > 0) {
    // Scroll left
    scrollDirection = 'left';
  } else if (diffY < 0) {
    // Scroll down
    scrollDirection = 'down';
  } else if (diffY > 0) {
    // Scroll up
    scrollDirection = 'up';
  } else {
    // First scroll event
  }
  scrollAction.x = window.pageXOffset;
  scrollAction.y = window.pageYOffset;
}

window.addEventListener('scroll', function () {
  scrollFunc(0);
  if (scrollDirection == 'down') {
    //页面向下滚动
    // console.log("页面向下滚动");
    // console.log(headhead);
    upFlag = null;
    if (downFlag == null) {
      downFlag = document.body.scrollTop + document.documentElement.scrollTop;
    }
    let pageScroll = document.body.scrollTop + document.documentElement.scrollTop,
      far = pageScroll - downFlag;
    if (far >= 100 && pageScroll >= 100) {
      headhead.setAttribute('style', 'position: fixed; top: -84px;');
    }
  }
  else if (scrollDirection == 'up') {
    //页面向上滚动
    // console.log("页面向上滚动");
    downFlag = null;
    if (upFlag == null) {
      upFlag = document.body.scrollTop + document.documentElement.scrollTop;
    }
    let pageScroll = document.body.scrollTop + document.documentElement.scrollTop,
      far = pageScroll - upFlag;
    if (far <= -100) {
      headhead.setAttribute('style', 'position: fixed; top: 0;');
    }
  }
});
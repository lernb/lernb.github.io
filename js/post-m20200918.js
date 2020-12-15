var pre = document.getElementsByTagName('pre');
var h2 = document.getElementsByTagName('h2');
var headhead = document.getElementsByClassName('headhead')[0];
var downFlag = null, upFlag = null;
// for (let i = 0; i < pre.length; i++) {
//   pre[i].className = 'prettyprint linenums';
// }
for (let i = 0; i < h2.length; i++) {
  let h2Pa = document.createElement('div');
  h2Pa.setAttribute('class', 't-h');
  h2Pa.setAttribute('style', 'margin-bottom: 23px; border-bottom: 1px solid #eaeaea;');
  h2[i].parentNode.insertBefore(h2Pa, h2[i].nextElementSibling);
  h2Pa.appendChild(h2[i]);
}

function getPageScroll() {
  var xScroll, yScroll;
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

var scrollAction = { x: 'undefined', y: 'undefined' }, scrollDirection;
function scrollFunc() {
  if (typeof scrollAction.x == 'undefined') {
    scrollAction.x = window.pageXOffset;
    scrollAction.y = window.pageYOffset;
  }
  var diffX = scrollAction.x - window.pageXOffset;
  var diffY = scrollAction.y - window.pageYOffset;
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
    var pageScroll = document.body.scrollTop + document.documentElement.scrollTop;
    var far = pageScroll - downFlag;
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
    var pageScroll = document.body.scrollTop + document.documentElement.scrollTop;
    var far = pageScroll - upFlag;
    if (far <= -100) {
      headhead.setAttribute('style', 'position: fixed; top: 0;');
    }
  }
});
function $(cName) {
  return document.getElementsByClassName(cName);
}

const pre = document.getElementsByTagName('pre'),
  h2 = document.getElementsByTagName('h2'),
  menuTitle = $('post-title-menu')[0],
  post = $('post-text')[0].getElementsByTagName('*'),
  post2 = $('post-text')[0].getElementsByTagName('h2');
let h2Flag = false,
  timer;
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

// 文章目录
for (let i = 0; i < post.length; i++) {
  if (post[i].className == 't-h') {
    let h2Node = post[i].getElementsByTagName('h2')[0],
      h2Id,
      h2Text,
      h2TextNode,
      offsetTop,
      postScroll,
      h2Li = document.createElement('li'),
      h2Href = document.createElement('a');
    h2Node.setAttribute('id', 'h2-' + i);
    h2Id = h2Node.getAttribute('id');
    h2Text = h2Node.innerText;
    h2TextNode = document.createTextNode(h2Text);
    h2Href.setAttribute('class', 'm-hTitle');
    postScroll = document.body.scrollTop + document.documentElement.scrollTop;
    offsetTop = document.getElementById(h2Id).offsetTop - postScroll;

    // h2目录标题随航文章标题
    if (offsetTop <= 100) {
      let mHTitle = $('m-hTitle');
      for (let i = 0; i < mHTitle.length; i++) {
        mHTitle[i].style.color = '#062743bd';
        mHTitle[i].setAttribute('class', 'm-hTitle');
      }
      h2Href.style.color = '#18a0db';
      h2Href.setAttribute('class', 'aHover m-hTitle');
    }
    window.addEventListener('scroll', function () {
      postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      offsetTop = document.getElementById(h2Id).offsetTop - postScroll;
      // let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if (offsetTop <= 100) {
        let mHTitle = $('m-hTitle');
        for (let i = 0; i < mHTitle.length; i++) {
          mHTitle[i].style.color = '#062743bd';
          mHTitle[i].setAttribute('class', 'm-hTitle');
        }
        h2Href.style.color = '#18a0db';
        h2Href.setAttribute('class', 'aHover m-hTitle');
      }
    });

    // 目录点击事件
    h2Href.addEventListener('click', function () {
      postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      offsetTop = document.getElementById(h2Id).offsetTop - postScroll;
      // window.addEventListener('scroll', function () {
      //   postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      //   offsetTop = document.getElementById(h2Id).offsetTop - postScroll;
      // });
      if (offsetTop != 68) {
        if (offsetTop > 68) {
          window.scrollBy({
            top: offsetTop - 68,
            behavior: "smooth"
          });
        } else if (offsetTop < 68) {
          window.scrollBy({
            top: offsetTop - 68,
            behavior: "smooth"
          });
        }
      }
    });
    h2Href.appendChild(h2TextNode);
    h2Li.appendChild(h2Href);
    menuTitle.appendChild(h2Li);
    h2Flag = true;
  } else if (post[i].tagName == 'H3') {
    let h2Li = menuTitle.lastElementChild,
      h3Id,
      h3Text,
      h3TextNode,
      h3Href,
      postScroll,
      offsetTop;
    post[i].setAttribute('id', 'h3-' + i);
    h3Id = post[i].getAttribute('id');
    h3Text = post[i].innerText;
    h3TextNode = document.createTextNode(h3Text);
    h3Href = document.createElement('a');
    h3Href.setAttribute('class', 'm-hTitle');
    postScroll = document.body.scrollTop + document.documentElement.scrollTop;
    offsetTop = document.getElementById(h3Id).offsetTop - postScroll;

    // h3目录标题随航文章标题
    if (offsetTop <= 100) {
      let mHTitle = $('m-hTitle');
      for (let i = 0; i < mHTitle.length; i++) {
        mHTitle[i].style.color = '#062743bd';
        mHTitle[i].setAttribute('class', 'm-hTitle');
      }
      h3Href.style.color = '#18a0db';
      h3Href.setAttribute('class', 'aHover m-hTitle');
    }
    window.addEventListener('scroll', function () {
      let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      offsetTop = document.getElementById(h3Id).offsetTop - postScroll;
      if (offsetTop <= 100) {
        let mHTitle = $('m-hTitle');
        for (let i = 0; i < mHTitle.length; i++) {
          mHTitle[i].style.color = '#062743bd';
          mHTitle[i].setAttribute('class', 'm-hTitle');
        }
        h3Href.style.color = '#18a0db';
        h3Href.setAttribute('class', 'aHover m-hTitle');
      }
    });

    // 目录点击事件
    h3Href.addEventListener('click', function () {
      postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      offsetTop = document.getElementById(h3Id).offsetTop - postScroll;
      // window.addEventListener('scroll', function () {
      //   postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      //   offsetTop = document.getElementById(h3Id).offsetTop - postScroll;
      // });
      if (offsetTop != 70) {
        if (offsetTop > 70) {
          window.scrollBy({
            top: offsetTop - 70,
            behavior: "smooth"
          });
        } else if (offsetTop < 70) {
          window.scrollBy({
            top: offsetTop - 70,
            behavior: "smooth"
          });
        }
      }
    });
    h3Href.appendChild(h3TextNode);
    let h2LiUl = h2Li.firstElementChild.nextElementSibling,
      h3Li = document.createElement('li');
    if (h2LiUl) {
      h3Li.appendChild(h3Href);
      h2LiUl.appendChild(h3Li);
    } else {
      let h3Ul = document.createElement('ul');
      h3Li.appendChild(h3Href);
      h3Ul.appendChild(h3Li);
      h2Li.appendChild(h3Ul);
      menuTitle.appendChild(h2Li);
    }
  }
}

if (!h2Flag) {
  let pNoTitle = document.createElement('p'),
    noTitle;
  pNoTitle.style.fontWeight = "bold";
  pNoTitle.style.cursor = "default";
  noTitle = document.createTextNode('无标题');
  pNoTitle.appendChild(noTitle);
  menuTitle.appendChild(pNoTitle);
}

// 文章目录滚动固定
let ptmf = $('post-title-menu-flag')[0],
  toTop = document.getElementById('toTop'),
  scrolled = ptmf.offsetTop - 78;
window.addEventListener('scroll', function () {
  let scroll = document.body.scrollTop + document.documentElement.scrollTop;
  if (scroll >= scrolled) {
    ptmf.setAttribute('style', 'position: fixed; top: 78px; width: 300px;');
    toTop.style.right = '15px';
  } else {
    ptmf.setAttribute('style', 'position: initial; top: initial;');
    toTop.style.right = '-50px';
  }
  toTop.addEventListener('click', function () {
    window.scrollBy({
      top: -scroll,
      behavior: "smooth"
    });
  });
});
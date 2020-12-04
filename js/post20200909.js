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

// 文章目录
let menuTitle = document.getElementsByClassName('post-title-menu')[0];
let post = document.getElementsByClassName('post-text')[0].getElementsByTagName('*');
let post2 = document.getElementsByClassName('post-text')[0].getElementsByTagName('h2');
console.log('post2:' + post2);
let h2Flag = false;
let timer;
for (let i = 0; i < post.length; i++) {
  if (post[i].className == 't-h') {
    let h2Node = post[i].getElementsByTagName('h2')[0];
    h2Node.setAttribute('id', 'h2-' + i);
    let h2Id = h2Node.getAttribute('id');
    let h2Text = h2Node.innerText;
    let h2TextNode = document.createTextNode(h2Text);
    let h2Li = document.createElement('li');
    let h2Href = document.createElement('a');
    h2Href.setAttribute('class', 'm-hTitle');

    // h2目录标题随航文章标题
    let postScroll = document.body.scrollTop + document.documentElement.scrollTop;
    let offsetTop = document.getElementById(h2Id).offsetTop - postScroll;
    if (offsetTop <= 280) {
      let mHTitle = document.getElementsByClassName('m-hTitle');
      for (let i = 0; i < mHTitle.length; i++) {
        mHTitle[i].style.color = '#062743bd';
        mHTitle[i].setAttribute('class','m-hTitle');
      }
      h2Href.style.color = '#18a0db';
      h2Href.setAttribute('class','aHover m-hTitle');
    }
    window.addEventListener('scroll', function () {
      postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      offsetTop = document.getElementById(h2Id).offsetTop - postScroll;
      // let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if (offsetTop <= 280) {
        let mHTitle = document.getElementsByClassName('m-hTitle');
        for (let i = 0; i < mHTitle.length; i++) {
          mHTitle[i].style.color = '#062743bd';
          mHTitle[i].setAttribute('class','m-hTitle');
        }
        h2Href.style.color = '#18a0db';
        h2Href.setAttribute('class','aHover m-hTitle');
      }
    });

    // 目录点击事件
    h2Href.addEventListener('click', function () {
      let postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      let offsetTop = document.getElementById(h2Id).offsetTop - postScroll;
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
    let h2Li = menuTitle.lastElementChild;
    post[i].setAttribute('id', 'h3-' + i);
    let h3Id = post[i].getAttribute('id');
    let h3Text = post[i].innerText;
    let h3TextNode = document.createTextNode(h3Text);
    let h3Href = document.createElement('a');
    h3Href.setAttribute('class', 'm-hTitle');

    // h3目录标题随航文章标题
    let postScroll = document.body.scrollTop + document.documentElement.scrollTop;
    let offsetTop = document.getElementById(h3Id).offsetTop - postScroll;
    if (offsetTop <= 280) {
      let mHTitle = document.getElementsByClassName('m-hTitle');
      for (let i = 0; i < mHTitle.length; i++) {
        mHTitle[i].style.color = '#062743bd';
        mHTitle[i].setAttribute('class','m-hTitle');
      }
      h3Href.style.color = '#18a0db';
      h3Href.setAttribute('class','aHover m-hTitle');
    }
    window.addEventListener('scroll', function () {
      let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      let postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      let offsetTop = document.getElementById(h3Id).offsetTop - postScroll;
      if (offsetTop <= 280) {
        let mHTitle = document.getElementsByClassName('m-hTitle');
        for (let i = 0; i < mHTitle.length; i++) {
          mHTitle[i].style.color = '#062743bd';
          mHTitle[i].setAttribute('class','m-hTitle');
        }
        h3Href.style.color = '#18a0db';
        h3Href.setAttribute('class','aHover m-hTitle');
      }
    });

    // 目录点击事件
    h3Href.addEventListener('click', function () {
      let postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      let offsetTop = document.getElementById(h3Id).offsetTop - postScroll;
      // window.addEventListener('scroll', function () {
      //   postScroll = document.body.scrollTop + document.documentElement.scrollTop;
      //   offsetTop = document.getElementById(h3Id).offsetTop - postScroll;
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
    h3Href.appendChild(h3TextNode);
    let h2LiUl = h2Li.firstElementChild.nextElementSibling;
    let h3Li = document.createElement('li');
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
  let pNoTitle = document.createElement('p');
  pNoTitle.style.fontWeight = "bold";
  pNoTitle.style.cursor = "default";
  let noTitle = document.createTextNode('无标题');
  pNoTitle.appendChild(noTitle);
  menuTitle.appendChild(pNoTitle);
}

// 文章目录滚动固定
let ptmf = document.getElementsByClassName('post-title-menu-flag')[0];
let toTop = document.getElementById('toTop');
let scrolled = ptmf.offsetTop - 78;
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
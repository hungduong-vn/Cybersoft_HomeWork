function getEleId(id) {
  return document.getElementById(id);
}
function getEle(selector) {
  return document.querySelector(selector);
}

window.onscroll = function () {
  console.log(scrollY);
  if (window.scrollY > 250) {
    getEleId("logo").style.display = "none";
    // getEle(".logo__mobile img").style.display = "none";
    document.querySelectorAll(".nav-item").forEach(function (ele) {
      ele.classList.add("scrollNavItem");
    });
    getEle("header").style.backgroundColor = "white";
    if (window.innerWidth > 1199) {
      getEle("header").style.position = "fixed";
    }
  } else {
    getEleId("logo").style.display = "block";
    // getEle(".logo__mobile img").style.display = "block";
    document.querySelectorAll(".nav-item").forEach(function (ele) {
      ele.classList.remove("scrollNavItem");
    });
    if (window.innerWidth > 1199) {
      getEle("header").style.backgroundColor = "transparent";
      getEle("header").style.position = 'absolute';
    }
  }
};

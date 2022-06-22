const remove = (className) => {
  let el = document.getElementsByClassName(className);
  if (el) {
    el[0].click();
    console.log("登录弹窗关闭");
  }
};

window.addEventListener("load", (Event) => {
  console.log("window loaded");
  remove("Modal-closeButton");
});

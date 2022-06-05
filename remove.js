function remove(classname) {
  el = document.getElementsByClassName(classname);

  if (el !== null) {
    console.log(typeof el);
    el[0].parentNode.removeChild(el[0]);
  }
}

remove("signFlowModal");
remove("Modal-backdrop");

const remove = (className) => {
  let el = document.getElementsByClassName(className);
  if( el ) {
    el[0].click();
  }
}

remove("Modal-closeButton");
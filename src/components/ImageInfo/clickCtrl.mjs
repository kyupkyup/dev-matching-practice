function closeCtrl (setPopupOpen, className, keyCode) {
  function clickCloseBtn (e) {
      if(e.target.className === className) setPopupOpen(false)
      
  }
  function keyEsc(e) {
      if(e.keyCode === keyCode) setPopupOpen(false)
  }

  return {
      clickCloseBtn,
      keyEsc
  }
}

export default closeCtrl;
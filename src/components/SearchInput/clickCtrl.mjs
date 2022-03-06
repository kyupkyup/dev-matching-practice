function clickCtrl (className) {
  function onClick (e) {
      if(e.target.className === className){
          if(e.target.value !== ''){
              e.target.value = ''
          }
      }
  }
  return {
      onClick
  }
}

export default clickCtrl;
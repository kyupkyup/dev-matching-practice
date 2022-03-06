function clickCtrl (currentIdx, setCurrentIdx) {
  function clickBannerMove (e) {
      const maxLength = document.querySelectorAll('.banner .item').length;
      console.log(maxLength)
      if(e.target.className === 'left-arrow') {
          if(currentIdx <= 0) {
              alert('첫번째 사진입니다.');
              return;
          }
          setCurrentIdx(currentIdx - 1)

      }
      else if(e.target.className === 'right-arrow'){
          if(currentIdx >= maxLength){
              alert('마지막 사진입니다.');
              return;
          }
          setCurrentIdx(currentIdx + 1)
      }
  }

  return {
      clickBannerMove,
  }
}

export default clickCtrl;
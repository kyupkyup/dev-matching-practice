import Header from './components/Header.mjs'
import AppBody from './components/AppBody.mjs'
// import Loading from './components/Loading.mjs'
// import ImageViewer from './components/ImageViewer.mjs'

import api from './api.mjs'
import isEmpty from './utils/isEmpty.mjs'

class App{
/////////111/////////
  constructor($app){
    this.$target = $app
    this.state = {
      history : ['root'],
      historyId : [-1],
      isRoot : true,
      currentData : [],
      clickedFile : {},
      loading : false,
      modalOpen : false,
    } //class에 종속되는 속성들을 위에 ///////111///////로 표시해놓은 부분에 미리 설정해두면 더 알아보기 쉬울것 같아보여요!
    this.render()

    this.fetchRoot()
  }

  underComponentUpdate(nextState){
    this.Header.setState(nextState) //헤더와 appbody에 둘이 같은 데이터를 넣어주는 것보다 각각 컴포넌트에서 필요한 데이터만을 넘겨주면 더 쉽게 사용이 가능하지 않을까 생각했습니다!
    this.AppBody.setState(nextState)
  }

  clearDOM(){
    const $root = document.querySelector('.App'); //class는 겹치게 설정될 가능성이 있으니 id값으로 찾아오는건 어떨까요?
    const $oldNodes= $root.childNodes 
    $oldNodes.forEach($item => $item.remove())
  }

  setState(nextState){
    if(JSON.stringify(this.state) === JSON.stringify(nextState)) return;
    this.clearDOM()
    this.state = nextState
    if(this.underComponentUpdate) this.underComponentUpdate(nextState)
    this.render()
  }

  async fetchRoot() {
    if(isEmpty(this.state.currentData) && !this.state.loading){
      //여기에서 로딩바 때문에 새롭게 객체를 복사해서 사용하는 것보다 로딩은 따로 관리하는 것이 어떨까요?
      const newState = {...this.state}
      newState.loading = true
      this.setState(newState)
      api.fetchRoot().then(res => {
        console.log(res)
        const newState = {...this.state}
        newState.currentData = res
        newState.loading = false
        this.setState(newState)
      })
    }
  }

  render(){
    const $el = document.createElement('div') //div로 한번 더 묶지 않고 app div 바로 밑에 header와 appbody를 추가 해도 괜찮을것 같습니다!

    this.Header = new Header($el, this.state)
    this.AppBody = new AppBody($el, this.state)
    this.$target.appendChild($el)

  }

}

export default App;

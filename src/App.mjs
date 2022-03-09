import Header from './components/Header.mjs'
import AppBody from './components/AppBody.mjs'
// import Loading from './components/Loading.mjs'
// import ImageViewer from './components/ImageViewer.mjs'

import api from './api.mjs'
import isEmpty from './utils/isEmpty.mjs'

class App{

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
    }
    this.render()

    this.fetchRoot()
  }

  underComponentUpdate(nextState){
    this.Header.setState(nextState)
    this.AppBody.setState(nextState)
  }

  clearDOM(){
    const $root = document.querySelector('.App');
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
    const $el = document.createElement('div')

    this.Header = new Header($el, this.state)
    this.AppBody = new AppBody($el, this.state)
    this.$target.appendChild($el)

  }

}

export default App;
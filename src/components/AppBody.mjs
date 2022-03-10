import Component from './Component.mjs'
import Back from "./Back.mjs"
import Folder from "./Folder.mjs"
import File from "./File.mjs"
import api from '../api.mjs'

class AppBody extends Component{
  constructor($target, initialState){
    super()
    this.$target = $target
    this.state = initialState

    this.render()
  }

  underComponentUpdate(nextState){
    console.log(this.back)
    this.back.setState(nextState);
    this.contents.forEach(content => {
      content.setState(nextState)
    })
  }

  clearDOM(){
    const $oldNodes= this.$target.childNodes 
    $oldNodes.forEach($item => $item.remove())
  }

  setState(nextState){
    this.clearDOM()
    if(JSON.stringify(this.state) === JSON.stringify(nextState)) return;
    this.state = nextState
    if(this.underComponentUpdate) this.underComponentUpdate(nextState)
    this.render()
  }

  clickFolder(e) {
    const newState = {...this.state}
    newState.loading = true
    this.setState(newState)
    api.fetchById(e.target.id).then(res => {
      newState.isRoot = false
      newState.history = [...this.state.history, e.target.name]
      newState.historyId = [...this.state.historyId, e.target.id]
      newState.currentData = res
      newState.loading = true
      this.setState(newState)
      console.log(this.state)
    })
  }

  render(){
    const $el = document.createElement('div')
    $el.setAttribute('class', 'Nodes')

    this.back = new Back($el, this.state)
    this.contents = this.state.currentData.map(item => {
      if(item.type === 'DIRECTORY') return new Folder($el, this.state, item, this.clickFolder.bind(this))
      if(item.type === 'FILE') return new File($el, this.state, item)
    })
    this.$target.appendChild($el)
    
  }
}

export default AppBody;
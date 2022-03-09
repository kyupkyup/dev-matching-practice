import Component from './Component.mjs'
import api from '../api.mjs'

class Folder  extends Component {
  constructor($target, initialState, item, clickFolder){
    super()
    this.$target = $target
    this.state = initialState
    this.item = item
    this.clickFolder = clickFolder

    this.render()
  }

  eventBind ($element){
    $element.addEventListener('click', this.clickFolder)
  } 

  render(){
    const $el = document.createElement('div')
    $el.setAttribute('class', 'Node')
    
    const $img = document.createElement('img')
    $img.setAttribute('src', './assets/directory.png')
    $img.setAttribute('name', this.item.name)
    $img.setAttribute('id', this.item.id)
    this.eventBind($img)

    const $name = document.createElement('div')
    $name.textContent = this.item.name

    $el.appendChild($img)
    $el.appendChild($name)
    this.$target.appendChild($el)
  }
}

export default Folder;
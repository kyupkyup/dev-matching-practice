import Component from './Component.mjs'

class File extends Component  {
  constructor($target, initialState, item){
    super()
    this.$target = $target
    this.state = initialState
    this.item = item

    this.render()
  }

  underComponentUpdate(nextState){
    this.back.setState(nextState);
    this.contents.forEach(content => {
      content.setState(nextState)
    })
  }

  render(){
    const $el = document.createElement('div')
    $el.setAttribute('class', 'Node')
    
    const $img = document.createElement('img')
    $img.setAttribute('src', './assets/file.png')
    $img.setAttribute('name', this.item.name)

    const $name = document.createElement('div')
    $name.textContent = this.item.name

    $el.appendChild($img)
    $el.appendChild($name)
    this.$target.appendChild($el)
  }
}

export default File;
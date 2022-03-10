import Component from './Component.mjs'

class Back extends Component {
  constructor($target, initialState){
    super()
    this.$target = $target
    this.state = initialState

    if(!this.state.isRoot) this.render()
  }



  render(){
    const $el = document.createElement('div')
    $el.setAttribute('class', 'Node')
    
    const $img = document.createElement('img')
    $img.setAttribute('src', './assets/back.png')


    const $name = document.createElement('div')
    $name.textContent = '뒤로 가기'

    $el.appendChild($img)
    $el.appendChild($name)
    this.$target.appendChild($el)
  }
}

export default Back;
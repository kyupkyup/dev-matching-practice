import Component from './Component.mjs'

class Route  extends Component {
  constructor($target, initialState, routeName){
    super()
    console.log(routeName)
    this.$target = $target
    this.state = initialState
    this.routeName = routeName

    this.render()
  }

  render(){
    const $el = document.createElement('div')
    $el.textContent = this.routeName
    this.$target.appendChild($el)
  }
} 

export default Route;
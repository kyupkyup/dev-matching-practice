import Route from './Route.mjs'
import Component from './Component.mjs'

class Header extends Component  {
  constructor($target, initialState){
    super()
    this.$target = $target
    this.state = initialState

    this.render()
  }

  underComponentUpdate(nextState){
    this.routes.forEach(route => {
      route.setState(nextState)
    })
  }
  
  render(){
    const $el = document.createElement('nav')
    $el.setAttribute('class', 'Breadcrumb')

    this.routes = this.state.history.map(routeName => new Route($el, this.state, routeName))
    console.log(this.routes)
    this.$target.appendChild($el)
  }
} 

export default Header;
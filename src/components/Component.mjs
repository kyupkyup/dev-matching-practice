
class Component{

  clearDOM(){
    const $root = document.querySelector('.App');
    const $oldNodes= $root.childNodes 
    $oldNodes.forEach($item => $item.remove())
  }
  setState(nextState){
    if(JSON.stringify(this.state) === JSON.stringify(nextState)) return;
    this.state = nextState
    if(this.underComponentUpdate) this.underComponentUpdate(nextState)
    this.render()
  }

}

export default Component
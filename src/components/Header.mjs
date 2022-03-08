
function Header (history) {
  console.log(history)
  

  return {
      type:'nav',
      props:[{class: 'Breadcrumb'}],
      children: history.map(name => ({
                  type:'div',
                  props: [],
                  children: [name]
              }))
  }
}

export default Header;
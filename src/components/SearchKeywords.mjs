
function SearchKeywords () {

  const data = ['hi', 'hello', 'cat']
  return{
      type:'ul',
      props:[],
      children:data.map(item => ({
          type:'li',
          props:[],
          children:[item]
      }))
  }
}

export default SearchKeywords;
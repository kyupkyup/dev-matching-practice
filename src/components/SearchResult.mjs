
function SearchResult () {
  const data = []
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

export default SearchResult;
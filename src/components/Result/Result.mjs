
function Result (url, name) {

  return {
      type: 'item',
      props: [{class: 'item'}],
      children: [
          {
              type: 'img',
              props: [{src: url}, {alt: name}],
              children:[]
          }
      ]
  }
}
export default Result;
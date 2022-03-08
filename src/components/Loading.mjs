
function Loading () {

  return {
      type:'div',
      props:[{class: 'loading'}],
      children:[{
              type:'img',
              props:[{src: './assets/file.png'}],
              children:[]
          },
          {
              type:'div',
              props:[],
              children:['로딩 중 입니다...']
          }
      ]
  }
}

export default Loading;
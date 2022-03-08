import api from '../api.mjs'

function File (item, setModalOpen, setClickedFile) {
  const clickFile = (e) => {
    setClickedFile(e.target.name)
    setModalOpen(true)
  }
  return {
      type:'div',
      props:[{class: 'Node'}],
      children:[{
              type:'img',
              props:[{src: './assets/file.png'}, {name: item.filePath}, {onclick: clickFile}],
              children:[]
          },
          {
              type:'div',
              props:[],
              children:[item.name]
          }
      ]
  }
}

export default File;
import Loading from "./Loading.mjs";

function ImageViewer (clickedFile, setModalOpen) {
  const closeModal = (e) => {
    if(e.target.className === 'Modal' ){
      setModalOpen(false)
    }
  } 
  return {
      type:'div',
      props:[{class: 'Modal'}, {onclick: closeModal}],
      children:[{ 
          type:'div',
          props:[{class: 'ImageViewer'}],
          children:[{
            type:'div',
            props:[{class: 'content'}],
            children:[{
              type:'img',
              props:[{src: `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${clickedFile}`}],
              children:[]
            }
            ]
          }]
        }
      ]
  }
}

export default ImageViewer;
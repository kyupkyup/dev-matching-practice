import Back from './Back.mjs'
import File from './File.mjs'
import Folder from './Folder.mjs'


function AppBody (
  isRoot, 
  setIsRoot, 
  currentData, 
  setCurrentData, 
  history, 
  setHistory, 
  historyId, 
  setHistoryId, 
  setLoading, 
  setModalOpen, 
  setClickedFile
  ) {

    return {
        type:'div',
        props:[{class: 'Nodes'}],
        children:[
            !isRoot ? Back(history, setHistory, setCurrentData,  historyId, setHistoryId, setIsRoot, setLoading): '',
            ...currentData.map(item => {
                if(item.type === 'DIRECTORY') return Folder(item, setIsRoot, history, setHistory, currentData, setCurrentData,  historyId, setHistoryId, setLoading)
                if(item.type === 'FILE') return File(item, setModalOpen, setClickedFile)
            })
        ]
    }
}

export default AppBody;
import Header from './components/Header.mjs'
import AppBody from './components/AppBody.mjs'
import Loading from './components/Loading.mjs'
import ImageViewer from './components/ImageViewer.mjs'

import api from './api.mjs'
import hooks from './hooks/hooks.mjs'
import isEmpty from './utils/isEmpty.mjs'

function App () {
    const [history, setHistory] = hooks.useState(['root'])
    const [historyId, setHistoryId] = hooks.useState([-1])
    const [isRoot, setIsRoot] = hooks.useState(true)
    const [currentData, setCurrentData] = hooks.useState([])
    const [clickedFile, setClickedFile] = hooks.useState({})
    const [loading, setLoading] = hooks.useState(false)
    const [modalOpen, setModalOpen] = hooks.useState(false)

    if(isEmpty(currentData) && !loading){
      setLoading(true)          
      api.fetchRoot().then(res => {
          setCurrentData(res)
          setLoading(false)
      })
    }

    return {
        type:'div',
        props:[],
        children:[
            Header(history),
            loading ? Loading(): AppBody(
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
              ),
            modalOpen ? ImageViewer(clickedFile, setModalOpen) : ''
        ]
    }
}

export default App;
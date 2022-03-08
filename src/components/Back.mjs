import api from '../api.mjs'

function Back (history, setHistory, setCurrentData, historyId, setHistoryId, setIsRoot, setLoading) {
    const clickBack = () => {
      setLoading(true)          
      const execute = (res) => {
        setCurrentData(res)
        setHistory(history.filter((_, index) => index !== history.length - 1))
        setHistoryId(historyId.filter((_, index) => index !== historyId.length - 1))
        console.log(history)
        if(history.length === 2){
            setIsRoot(true)
        }
        setLoading(false)
      }

      if(historyId[historyId.length - 2] === -1 ){
        api.fetchRoot().then(res => {
          execute(res)
        })
      }
      else{
        api.fetchById(historyId[historyId.length - 2]).then(res => {
          execute(res)
        })
      }
    }

    return {
        type:'div',
        props:[{class: 'Node'}],
        children:[{
                type:'img',
                props:[{src: './assets/prev.png'}, {onclick: clickBack}],
                children:[]
            }
        ]
    }
}

export default Back;
import api from '../api.mjs'

function Folder (item, setIsRoot, history, setHistory, currentData, setCurrentData, historyId, setHistoryId, setLoading) {
    const clickFolder = (e) => {
        setLoading(true)
        api.fetchById(e.target.id).then(res => {
            setIsRoot(false)
            setHistory([...history, e.target.name])
            setHistoryId([...historyId, e.target.id])
            setCurrentData(res)
            setLoading(false)
        })
    }
    return {
        type:'div',
        props:[{class: 'Node'}],
        children:[{
                type:'img',
                props:[{src: './assets/directory.png'}, {'onclick': clickFolder}, {id:item.id}, {name: item.name}],
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

export default Folder;
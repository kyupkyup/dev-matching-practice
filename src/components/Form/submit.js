import {fetchCats} from '../../api.mjs';

const submitController = (keywords, setKeywords, setResult) => {
    const submit = (e) => {
        e.preventDefault()
        if(e.key === 'Enter'){
            const $keyword = document.querySelector('.search-input')
            console.log(keywords.length)
            if($keyword.value.length === 0) return;
            try{
                const res = fetchCats($keyword.value)
                res.then((result) => {
                    if(keywords.length < 5){
                        setKeywords([...keywords, $keyword.value])
                    }
                    else{
                        setKeywords([...keywords, $keyword.value].shift())
                    }
                    setResult(result)
                })
                
            }
            catch(err){
                console.error(err)
            }
        }
    }
    return {
        submit
    }
}


export default submitController;


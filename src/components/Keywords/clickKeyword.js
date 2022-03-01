import submitController from "../Form/submit.mjs"

const submitByKeyword = (keyword) => {
    try{
        const res = fetchCats(keyword)
        return res
    }
    catch(err){
        console.error(err)
    }
}

const clickController = (setResult) => {
    const clickKeyword = (e) => {
        const $keywords = document.querySelectorAll('.keyword')
        $keywords.forEach(($keyword) => {
            if($keyword.textContent === e.target.value) submitByKeyword(e.target.value).then(res => setResult(res))
        })
    }
    return clickKeyword;
} 


export default clickController
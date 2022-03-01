import eventHandler from "../../handler/eventHandler.mjs";
import clickKeyword from './clickKeyword.mjs'

function Keywords (keywords, setResult) {

    eventHandler.addEvent('click', clickController(setResult).clickKeyword);

    return{
        type:'div',
        props:[{class: 'keywords'}],
        children: keywords.map(keyword => ({
            type:'div',
            props:[{class: 'keyword'}],
            children:[keyword]
        }))
    }
}

export default Keywords;
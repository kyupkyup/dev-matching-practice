import eventHandler from '../../handler/eventHandler.mjs'
import clickCtrl from './clickCtrl.mjs';

function SearchInput () {
    eventHandler.addEvent('click', clickCtrl('search-input').onClick)
    
    return{
        type:'input',
        props:[{class:'search-input'}, {'autofocus':''}],
        children:[]
    }
}

export default SearchInput;
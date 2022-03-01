import SearchInput from './SearchInput.mjs'
import SearchResult from './SearchResult.mjs'
import hooks from '../../hooks/hooks.mjs'
import eventHandler from '../../handler/eventHandler.mjs';
import submitController from './submit.mjs';

function Form (keywords, setKeywords, result, setResult) {
    eventHandler.addEvent('keyup', submitController(keywords, setKeywords).submit)

    return {
        type: 'form',
        props: [{onSubmit: 'return false'}],
        children: [
            SearchInput(setResult), 
            SearchResult(result)
        ]
    }
}

export default Form;
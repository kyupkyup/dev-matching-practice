import eventHandler from '../../handler/eventHandler.mjs'
import closeCtrl from './clickCtrl.mjs'

function ImageInfo (setPopupOpen) {
    eventHandler.addEvent('click', () => closeCtrl(setPopupOpen, 'close-button').clickCloseBtn)
    eventHandler.addEvent('keyup', () => closeCtrl(setPopupOpen, '', '27').keyEsc)

    return{
        type:'div',
        props:[{class:'image-info'}],
        children:[
            {
                type:'p',
                props:[{class:'title'}],
                children:['hello']
            },
            {
                type:'p',
                props:[{class:'description'}],
                children:['description'],
            },
            {
                type:'div',
                props:[{class:'content-wrapper'}],
                children:[
                    {
                        type:'img',
                        props:[],
                        children:[]
                    }
                ]
            },
            {
                type: 'span',
                props:[{class:'close-button'}],
                children:['닫기']
            }
        ]
    }
}

export default ImageInfo;
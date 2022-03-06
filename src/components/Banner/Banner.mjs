import hooks from '../../hooks/hooks.mjs'
import eventHandler from '../../handler/eventHandler.mjs'
import clickCtrl from './clickCtrl.mjs'
import Loading from '../Loading.mjs'

function Banner (isBannerLoading, bannerData) {
    const [currentIdx, setCurrentIdx] = hooks.useState(0)
    if(bannerData.length === 0){
        eventHandler.addEvent('click', clickCtrl(currentIdx, setCurrentIdx).clickBannerMove)
    }

    return isBannerLoading ? Loading() : 
        {
            type:'div',
            props:[{class:'banner'}],
            children: [...bannerData.map((item, index) => currentIdx + 5 > index && index >= currentIdx ? ({
                type: 'img',
                props:[{class: 'item'}, {src: item.url}, {id:item.id}],
                children:[]
            }) : ''),
            {
                type:'span',
                props:[{class:'left-arrow'}],
                children:['왼쪽']
            },
            {
                type:'span',
                props:[{class:'right-arrow'}],
                children:['오른쪽']
            }
        ]
    }
}

export default Banner;
import isEmpty from '../../utils/isEmpty.mjs'

function Banner (bannerData) {
    console.log(bannerData)
    return {
        type: 'div',
        props:[{class:'Banner'}],
        children: bannerData.map((data, index) => index < 5 ? ({
            type:'img',
            props:[{src: data.url}],
            children:[]
        }): '')
    }
}
export default Banner;
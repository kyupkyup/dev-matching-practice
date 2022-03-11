import api from "../api.mjs";

function ProductListPage (listData, setCurrentPage, setCurrentDetailData, setLoading) {
    console.log(listData)
    const clickItem = (e) => {
        setLoading(true)
        api.fetchDetail(e.currentTarget.id).then(res => {            
            setCurrentDetailData(res)
            setCurrentPage('detail')
            setLoading(false)
        })
    }

    return {
        type: 'div',
        props:[{class: 'ProductListPage'}],
        children: [
            {
                type: 'h1',
                props:[],
                children: ['상품 목록']
            },
            {
                type: 'ul',
                props:[],
                children: listData.map(data => ({
                    type: 'li',
                    props:[{class: 'Product'}, {onclick: clickItem}, {id: data.id}],
                    children: [
                        {
                            type: 'img',
                            props: [{src: data.imageUrl}],
                            children:[]
                        },
                        {
                            type: 'div',
                            props: [{class: 'Product__info'}],
                            children: [
                                {
                                    type: 'div',
                                    props:[],
                                    children: [data.name]
                                },
                                {
                                    type: 'div',
                                    props:[],
                                    children: [data.price]
                                }
                            ]
                        }
                    ]
                }))
            }
        ]
    }
}

export default ProductListPage;
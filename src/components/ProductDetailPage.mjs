import hooks from "../hooks/hooks.mjs";
import formatOption from '../utils/formatOption.mjs'
function ProductDetailPage (currentDetailData) {
    const [selectedOptions, setSelectedOptions] = hooks.useState([]);
    const [totalPrice, setTotalPrice] = hooks.useState(currentDetailData.price);

    const selectOption = (e) => {
        const [price, name, stock, count] = e.target.value.split(' ')
        if(Number(stock) === 0) return;
        if(!(selectedOptions.includes(e.target.value))) setSelectedOptions([...selectedOptions, e.target.value])
        calculate()
    }

    const calculate = () => {
        const result = selectedOptions.reduce((acc, option) => {
            const [price, _, __, count] = option.split(' ')
            return acc + price * count
        }, 0)
        setTotalPrice(result + totalPrice)
    }

    const inputCount = (e) => {
        selectedOptions.forEach((item, index) => {
            if(e.currentTarget.id === item){
                const newArr = [...selectedOptions]
                const newItem = item.split(' ')
                newItem[3] = e.target.value
                newArr[index] = newItem.join(' ')
                console.log(newArr)
                setSelectedOptions(newArr)
            }
        })
        // const total = selectedOptions.reduce((acc, payList) => {
        //     console.log(payList)
        //     const [price, _, __, count] = payList.id.split(' ')
        //     return acc + (Number(price) * Number(count))
        // }, 0)
        // console.log(total)
        calculate()
    }

    const order = () => {

    } 

    return {
        type: 'div',
        props: [{class : 'ProductDetailPage'}],
        children:[
            {
                type: 'h1',
                props: [],
                children:[`${currentDetailData.name} 상품 정보`]
            },
            {
                type: 'div',
                props: [{class: 'ProductDetail'}],
                children: [
                    {
                        type: 'img',
                        props: [{src: currentDetailData.imageUrl}],
                        children: []
                    },
                    {
                        type: 'div',
                        props: [{class: 'ProductDetail__info'}],
                        children: [
                            {
                                type: 'h2',
                                props:[],
                                children:[currentDetailData.name]
                            },
                            {
                                type: 'div',
                                props: [{class: 'ProductDetail__price'}],
                                children:[totalPrice]
                            },
                            {
                                type: 'select',
                                props: [{onchange: selectOption}],
                                children: [
                                    {
                                        type:'option',
                                        props:[],
                                        children: ['선택하세요.']
                                    },
                                    ...currentDetailData.productOptions.map(({price, name, stock}) => ({
                                        type: 'option',
                                        props:[{value: `${price} ${name} ${stock} ${1}`}],
                                        children: [formatOption(price, currentDetailData.name, name, stock)]
                                    }))
                                ]
                            },
                            {
                                type: 'div',
                                props: [{class: 'ProductDetail__selectedOptions'}],
                                children: [
                                    {
                                        type: 'h3',
                                        props: [],
                                        children:['선택된 상품']
                                    },
                                    {
                                        type: 'ul',
                                        props:[],
                                        children: selectedOptions.map(option => {
                                            const [price, name, stock, count] = option.split(' ')
                                            return {
                                                type: 'li',
                                                props:[{id: option}, {onchange: inputCount}],
                                                children:[
                                                    name,
                                                    price,
                                                    {
                                                        type: 'div',
                                                        props:[],
                                                        children:[
                                                            {
                                                                type: 'input',
                                                                props: [{type: 'number'}, {value: count}],
                                                                children:[]
                                                            },
                                                            '개'
                                                        ]
                                                    }
                                                ]
                                            }
                                        })
                                    },
                                    {
                                        type: 'div',
                                        props: [{class: 'ProductDetail__totalPrice'}],
                                        children: ['']
                                    },
                                    {
                                        type: 'button',
                                        props: [{class: 'OrderButton'}],
                                        children:['주문하기']
                                    }
                                ]
                            }

                        ]
                    }
                ]
            }
        ]
    }
}

export default ProductDetailPage;
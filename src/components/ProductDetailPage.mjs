import hooks from "../hooks/hooks.mjs";
import formatOption from '../utils/formatOption.mjs'
function ProductDetailPage (currentDetailData) {
    const [selectedOptions, setSelectedOptions] = hooks.useState([]);
    const [totalPrice, setTotalPrice] = hooks.useState(currentDetailData.price);

    const selectOption = (e) => {
        const [price, name, stock, count] = e.target.value.split(', ')
        if(Number(stock) === 0) return;
        if(!(selectedOptions.includes(e.target.value))) {
            const newOptions = [...selectedOptions]
            newOptions.push(e.target.value)
            setSelectedOptions(newOptions)
        }
    }

    const calculate = () => {
        const result = selectedOptions.reduce((acc, option) => {
            const [price, _, __, count] = option.split(', ')
            return acc + price * count
        }, 0)

        setTotalPrice(result + currentDetailData.price)
    }

    const inputCount = (e) => {
        let temp;
        let tempIdx;
        selectedOptions.forEach((item, index) => {
            if(e.currentTarget.id === item){
                temp = item
                tempIdx = index;
            }
        })

        const newArr = [...selectedOptions]
        const newItem = temp.split(', ')
        newItem[3] = e.target.value
        newArr[tempIdx] = newItem.join(', ')
        setSelectedOptions(newArr)
    }

    const order = () => {
        const newItem = JSON.parse(localStorage.getItem('product_carts'))
        console.log(newItem)
        selectedOptions.forEach(option => {
            const [price, name, stock, count, id] = option.split(', ')
            newItem.push({
                productId: currentDetailData.id,
                optionId: id,
                quantity: count
            })
        })
        localStorage.setItem('product_carts', JSON.stringify(newItem))
    } 

    calculate()
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
                                    ...currentDetailData.productOptions.map(({price, name, stock, id}) => ({
                                        type: 'option',
                                        props:[{value: `${price}, ${name}, ${stock}, ${1}, ${id}`}],
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
                                            const [price, name, stock, count] = option.split(', ')
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
                                        props: [{class: 'OrderButton'}, {onclick: order}],
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
import formatMoney from './formatMoney.mjs'

function formatOption (price, productName, optionName, stock) {
    if(stock === 0 )return `(품절) ${productName} ${optionName}`
    else{
        if(price === 0) return `${productName} ${optionName}`
        else if(price > 0) return `${productName} ${optionName} (+${formatMoney(price)})`
    }
}

export default formatOption
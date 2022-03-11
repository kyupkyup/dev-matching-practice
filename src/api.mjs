const URL = 'https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products'

const api = (() => {
    const fetchList = async () => {
        const data = await fetch(`${URL}`)
        return data.json()
    }

    const fetchDetail = async (id) => {
        const data = await fetch(`${URL}/${id}`)
        return data.json()
    } 
    return {
        fetchList,
        fetchDetail
    }
})();

export default api;
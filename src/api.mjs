const URL = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/'

const api = (() => {
    const fetchRoot = async () => {
        const data = await fetch(`${URL}`)
        return data.json()
    }

    const fetchById = async (id) => {
        const data = await fetch(`${URL}/${id}`)
        return data.json()
    } 
    return {
        fetchRoot,
        fetchById
    }
})();

export default api;
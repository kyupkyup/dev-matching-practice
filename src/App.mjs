import api from "./api.mjs";
import CartPage from "./components/CartPage.mjs";
import Loading from "./components/Loading.mjs";
import ProductDetailPage from "./components/ProductDetailPage.mjs";
import ProductListPage from "./components/ProductListPage.mjs";
import hooks from "./hooks/hooks.mjs";
import isEmpty from './utils/isEmpty.mjs'

function App () {
    const [currentPage, setCurrentPage] = hooks.useState('none')
    const [loading, setLoading] = hooks.useState(false);
    const [listData, setListData] = hooks.useState([]);
    const [currentDetailData, setCurrentDetailData] = hooks.useState({})

    if(!loading && isEmpty(listData)){
        setLoading(true)
        api.fetchList().then(res => {
            setListData(res)
            setCurrentPage('list')
            setLoading(false)
        })
    }

    return {
        type: 'div',
        props:[],
        children: [
            loading ? Loading() :(
                currentPage === 'cart' ? CartPage() :(
                currentPage === 'detail' ? ProductDetailPage(currentDetailData): (
                currentPage === 'list' ? ProductListPage(listData, setCurrentPage, setCurrentDetailData, setLoading) : ''
                ))
            )
        ]
    }
}

export default App;
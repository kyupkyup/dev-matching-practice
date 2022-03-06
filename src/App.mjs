console.log("app is running!");
import hooks from './hooks/hooks.mjs'
import Banner from './components/Banner/Banner.mjs';
import SearchInput from './components/SearchInput/SearchInput.mjs';
import RandomBtn from './components/RandomBtn.mjs';
import SearchKeywords from './components/SearchKeywords.mjs';
import SearchResult from './components/SearchResult.mjs';
import ImageInfo from './components/ImageInfo/ImageInfo.mjs';
import Loading from './components/Loading.mjs'
import {fetchRandom50} from './api.mjs'
import isEmpty from './utils/isEmpty.mjs'

function App () {
  const [isPopupOpen, setPopupOpen] = hooks.useState(false);
  const [isLoading, setLoading] = hooks.useState(false);
  const [isBannerLoading, setBannerLoading] = hooks.useState(true);
  const [bannerData, setBannerData] = hooks.useState([]);
  if(isEmpty(bannerData)){
      fetchRandom50().then(res => {
          setBannerData(res)
          setBannerLoading(false);

        })
        .catch(err => {
          console.error(err)
        })
  }


  return {
    type:'div',
    props:[],
    children:[
      Banner(isBannerLoading, bannerData) ,
      SearchInput(), 
      RandomBtn(),
      SearchKeywords(),
      isLoading ? Loading() : SearchResult(),
      isPopupOpen ? ImageInfo(setPopupOpen) : ''
    ],
  }
}

export default App;



// class App {
//   $target = null;
//   data = [];

//   constructor($target) {
//     this.$target = $target;

//     this.searchInput = new SearchInput({
//       $target,
//       onSearch: keyword => {
//         api.fetchCats(keyword).then(({ data }) => this.setState(data));
//       }
//     });

//     this.searchResult = new SearchResult({
//       $target,
//       initialData: this.data,
//       onClick: image => {
//         this.imageInfo.setState({
//           visible: true,
//           image
//         });
//       }
//     });

//     this.imageInfo = new ImageInfo({
//       $target,
//       data: {
//         visible: false,
//         image: null
//       }
//     });
//   }

//   setState(nextData) {
//     console.log(this);
//     this.data = nextData;
//     this.searchResult.setState(nextData);
//   }
// }

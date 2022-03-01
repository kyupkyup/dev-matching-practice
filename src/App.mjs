console.log("app is running!");

import ImageInfo from './components/ImageInfo.mjs'
import Form from './components/Form/Form.mjs'
import Banner from './components/Banner/Banner.mjs'
import Keywords from './components/Keywords/index.mjs'
import hooks from './hooks/hooks.mjs'
import {fetchRandom50} from './api.mjs'
import isEmpty from './utils/isEmpty.mjs'

function App () {
  const [bannerData, setBannerData] = hooks.useState([]);
  const [keywords, setKeywords] = hooks.useState([]);
  const [result, setResult] = hooks.useState([]);
  if(isEmpty(bannerData)){
    const result = fetchRandom50();
    result.then(res => setBannerData(res))
  }

  return {
    type: 'div',
    props:[],
    children: [
      Banner(bannerData), Form(keywords, setKeywords, result, setResult), Keywords(keywords, setResult), ImageInfo(),
    ]
  }
}

export default App;

// class App2 {
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

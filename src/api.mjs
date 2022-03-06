const API_ENDPOINT =
"https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const fetchRandom50 = async () => {
  try{
    const res = await fetch(`${API_ENDPOINT}/api/cats/random50`);
    const {data} = await res.json();
    return data;
  }
  catch(err){
    console.error(err)
  }
};

const fetchCats = async (q) => {
  try{
    const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${q}`);
    const {data} = await res.json();
    return data;
  }
  catch(err){
    console.error(err)
  }
}

const fetchCatById = async (id) => {
  try{
    const res = await fetch(`${API_ENDPOINT}/api/cats/search?id=${id}`);
    const {data} = await res.json();
    return data;
  }
  catch(err){
    console.error(err)
  }
}


export {fetchRandom50, fetchCats, fetchCatById};
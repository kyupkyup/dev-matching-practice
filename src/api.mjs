
const API_ENDPOINT =
"https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const fetchRandom50 = async () => {
  const res = await fetch(`${API_ENDPOINT}/api/cats/random50`);
  const {data} = await res.json();
  return data;
};

const fetchCats = async (q, cb) => {
  const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${q}`);
  const {data} = await res.json();
  
  return data;
}

const fetchCatById = async (id) => {
  const res = await fetch(`${API_ENDPOINT}/api/cats/search?id=${id}`);
  const {data} = await res.json();
  return data;
}


export {fetchRandom50, fetchCats, fetchCatById};
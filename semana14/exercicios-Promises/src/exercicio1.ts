import axios from 'axios'
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// a) GET /subscribers/all

// b) Promise<any[]>

async function getSubscribers(): Promise<any[]> {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
};

getSubscribers().then((res) => {
  console.log(res)
})
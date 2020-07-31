import axios from 'axios'
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// a) A função nomeada assíncrona temos o then(quando deu tudo certo) e o catch(quando volta erro).
//    Já a arrow function assíncrona temos o async/await, e usamos o try/catch como verficação.

const getSubscribers = async (): Promise<any[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
};

(async () => {
  console.log(await getSubscribers())
})();
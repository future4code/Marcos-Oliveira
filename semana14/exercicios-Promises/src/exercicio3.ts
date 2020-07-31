import axios from 'axios'
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// a) Não haverá erro, porque a função get do axios devolve uma Promise<any>, então, não importa qual
//    requisição fizermos, o Typescript não vai indicar erro

// b) Quando usamos funções assíncronas que devolvem Promise<any>, fazemos o mapeamento do
//    resultado na mão, para garantir que devolveremos o que a função indica

type User = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
};

(async () => {
    console.log(await getSubscribers())
})();

import axios from 'axios'
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// a) Pode dar alguns problemas usando o forEach, porque nenhum dos métodos
//    de array (map, filter, find) foi feito para se mexer com funções assíncronas
//    Quando for necessário rodar uma função assíncrona em um loop, devemos usar o
//    for básico.

/*type User = {
  subscriberId: number,
  message: string
}


const sendNotifications = async (
    users: User[],
    message: string
  ): Promise<void> => {
    const promiseArray: Promise<any>[] = [];
    for (const user of users) {
      await axios.post(`${baseUrl}/notifications/send`, {
       // subscriberId: user.id, 
        message: message,
      });
    }
  
    console.log("All notifications sent");
  };
*/
import axios from 'axios'
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// a)  O método Promisse.all retorna uma única Promise que resolve quando todas 
//     as promises no argumento iterável forem resolvidas ou quando o iterável passado 
//     como argumento não contém promises.

// b) As notificações poderão ser enviadas paralelamente.

/*type User = {
    subscriberId: string,
    message: string
  }

const sendNotifications = async (
    users: User[],
    message: string
  ): Promise<void> => {
    const promiseArray = [];
    for (const user of users) {
      promiseArray.push(
        axios.post(`${baseUrl}/notifications/send`, {
          //subscriberId: user.id,
          message: message,
        })
      );
    }
  
    await Promise.all(promiseArray);
  };*/
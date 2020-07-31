import axios from 'axios'
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// a) Do tipo Promise<void>, porque não retorna nada depois da sua execução

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
      title,
      content, 
      date
    });
}


createNews("Nova notícia","blablabla",1596067200)

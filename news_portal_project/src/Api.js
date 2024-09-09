import axios from "axios";

const base_url ="https://newsapi.org/v2"
const api_Key = "c8dc6fdb114245dcb6e84f35b40ee4a1"


export const getNewsList = async() => {
    const news = await axios.get(`${base_url}/top-headlines?country=us&apiKey=${api_Key}`)
    return news.data.articles; 
}

export const getCatList = async(page, catList) => {
    const news = await axios.get(`${base_url}/everything?q=${catList}&page=${page}&pageSize=36&apiKey=${api_Key}`)
    return news.data.articles;
}

// export const searchNews = async() => {
//     const search = await axios.get()
//     return
// }
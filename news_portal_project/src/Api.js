import axios from "axios";

const base_url ="https://newsapi.org/v2"
const api_Key = "30788c48d65b4ed7803ad66cf60698fb"


export const getNewsList = async() => {
    const news = await axios.get(`${base_url}/top-headlines?country=id&apiKey=${api_Key}`)
    return news.data.articles; 
}

export const getCatList = async() => {
    const news = await axios.get(`${base_url}/everything?q=bitcoin&apiKey=${api_Key}`)
    return news.data.articles
}

// export const searchNews = async() => {
//     const search = await axios.get()
//     return
// }
import axios from "axios";

const base_url ="https://newsapi.org/v2"
const api_Key = "30788c48d65b4ed7803ad66cf60698fb"


export const getNewsList = async() => {
    const news = await axios.get(`${base_url}/top-headlines?country=us&apiKey=${api_Key}`)
    return news.data.articles; 
}

export const getCatList = async(catList) => {
    const news = await axios.get(`${base_url}/everything?q=${catList}&pageSize=36&apiKey=${api_Key}`)
    return news.data.articles;
}

export const searchNews = async(q) => {
    const news = await axios.get(`${base_url}/everything?q=${q}&pageSize=99&apiKey=${api_Key}`)
    console.log(news)
    return news.data.articles;
}
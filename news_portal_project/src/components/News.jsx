import { useEffect, useState } from "react"
import { getNewsList } from "../Api"


export default function News(){
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsList().then((result) => {
            setNews(result)
        })
    }, [])

    console.log(news)

    const search = (q) => {
        console.log({q})
    }
    
    const NewsList = () => {
        return news.map((news, i) => {
            return (
                <div className="bg-[#ffffff]" key={i}>
                        <h2 className="news-title">{news.title}</h2>
                        <img className="news-image" src="" alt="" />
                        <p className="news-author">{news.author}</p>
                        <p className="news-date">{news.publishedAt}</p>
                    </div>
            )
        })
    }

    return(
        <div className="bg-[#E2DAD6] flex justify-center">
            <div className="bg-[#F5EDED] flex flex-col justify-center items-center w-[1366px] p-[30px]"> 
                <input 
                    type="text" 
                    placeholder="search your favorite news..." 
                    className="w-[600px] h-[35px] text-center mb-[20px]" 
                    onChange={({target}) => search(target.value)}
                />
                <div className="news-container grid grid-cols-3 gap-5 ">                   
                    <NewsList />
                </div>   
            </div>
        </div>
    )
}
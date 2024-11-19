import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchNews } from "../Api";
import Footer from "../components/Footer";

export default function SearchPage(){

    // const [page, setPage] = useState(1)
    const [newsList, setNewsList] = useState([])
    const { id } = useParams()
    

    useEffect(() => {
        searchNews(id).then((result) => {
            setNewsList(result)
        })
    }, [id])

    // const prevButton = () => {
    //     setPage(page <= 1 ? 1 : page - 1)
    //     scrollTop()
    // }

    // const nextButton = () => {
    //     setPage(page + 1)
    //     scrollTop()
    // }

    // const scrollTop = () => {
    //     scrollTo({
    //         behavior: "smooth",
    //         top: 0
    //     })
    // }

    return(
        <>
            <Header />
            <div className="flex flex-col justify-center items-center bg-[#021526] pb-[30px]">
                <div className="bg-[#E2E2B6] w-[1366px] my-[20px] p-[20px] rounded text-[#021526]">
                    <p className="font-semibold text-[18px]">{`Search for  "${id}" `}</p>
                </div>
                <div className="w-[1366px] bg-[#6EACDA] p-[15px] grid grid-cols-3 gap-5 rounded">               
                    {
                        newsList.map((news, i) => {
                            return(
                                <div key={i} className="h-[500px]">
                                    <Link to={news.url}>
                                        <div className="news-list bg-[#ffffff] p-[10px] h-[100%] hover:scale-105 hover:transition rounded cursor-pointer" >
                                            <div className="flex flex-col justify-between ">
                                                <img src={news.urlToImage} alt="" className="h-[250px] bg-cover" />
                                                <h2 className="news-title text-[20px] font-semibold">{news.title}</h2>
                                                <p className="text-[#555555] mt-[5px]">{news.description}</p>
                                            </div>
                                            <div>
                                                <p className="news-author text-[#ababab]">{news.author}</p>
                                                <p className="news-date text-[14px]">Published at: {news.publishedAt}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <div className="flex justify-between items-center gap-4 w-[1366px] bg-[#F5EDED] p-[15px]">
                    <button className="bg-[#7FA1C3] py-1 px-10 text-[white] hover:opacity-75 rounded" onClick={prevButton}>Previous</button>
                        <p>Page {page}</p>
                    <button className="bg-[#7FA1C3] py-1 px-10 text-[white] hover:opacity-75 rounded" onClick={nextButton}>next</button>
                </div> */}
            </div>
            <Footer />
        </>
    )
}
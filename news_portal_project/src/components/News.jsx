import { useEffect, useState } from "react"
import { getNewsList } from "../Api"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


export default function News(){
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsList().then((result) => {
            setNews(result)
        })
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return(
        <div className="bg-[#021526] flex justify-center">
            <div className="bg-[#E2E2B6] flex flex-col justify-center items-center w-[1366px] px-[30px] pb-[50px] pt-[20px] rounded-[15px] shadow-2xl"> 
                <h1 className="font-bold text-[24px] mb-[20px]">TOP HEADLINES</h1>
                <div className="news-container w-[100%]">
                <Slider {...settings}>
                {
                    news.map((news, i) => {
                        return (
                            <div key={i} className="h-[200px]">
                                <Link to={news.url} target="_blank">
                                    <div className="news-list bg-[#ffffff] h-[100%] p-[10px] hover:scale-105 hover:transition rounded-[15px] cursor-pointer" >
                                        {/* <img src={news.urlToImage} alt="" className="h-[200px]" /> */}
                                        <h2 className="news-title text-[20px] font-semibold">{news.title}</h2>
                                        <div>
                                            <p className="news-author text-[#ababab]">{news.author}</p>
                                            <p className="news-date">{news.publishedAt}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })            
                }
                </Slider>
                </div>   
            </div>
        </div>
    )
}
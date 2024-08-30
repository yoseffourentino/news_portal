import { useEffect, useState } from "react"
import { getCatList } from "../Api"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Category(){

    const [category, setCategory] = useState([])
    
    useEffect(() => {
        getCatList().then((result) => {
            setCategory(result)
        })
    }, [])

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
    };
    
    return(
        <div className="bg-[#E2DAD6] flex flex-col justify-center items-center">
            <div className="w-[1366px] bg-[#F5EDED] m-[30px] p-[15px]">
                <ul className="flex gap-10 justify-around">
                    <li>business</li>
                    <li>entertainment</li>
                    <li>general</li>
                    <li>health</li>
                    <li>science</li>
                    <li>sport</li>
                    <li>technology</li>
                </ul>
            </div>
            <div className="w-[1366px] bg-[#F5EDED] p-[15px] grid grid-cols-3 gap-5">
                {/* <Slider {...settings}> */}
                {
                    category.map((cat, i) => {
                        return(
                            <div key={i} className="h-[450px]">
                                <div className="news-list bg-[#ffffff] p-[10px] h-[100%]" >
                                    <div className="flex flex-col justify-between">
                                        <h2 className="news-title text-[18px] font-semibold">{cat.title}</h2>
                                        <img src={cat.urlToImage} alt="" className="w-[500px]" />
                                    </div>
                                    <div>
                                        <p className="news-author text-[#ababab]">{cat.author}</p>
                                        <p className="news-date">{cat.publishedAt}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* </Slider> */}
            </div>
        </div>
    )
}
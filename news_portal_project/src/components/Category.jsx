import { useEffect, useState } from "react"
import { getCatList } from "../Api"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Category(){

    const [category, setCategory] = useState([])
    // const [page, setPage] = useState(1)
    const [catList, setCatList] = useState("business")
    const [activeCategory, setActiveCategory] = useState("business")

    useEffect(() => {
        getCatList(catList).then((result) => {
            setCategory(result)
        })
    }, [catList])
    
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
    //         top: 900
    //     })
    // }

    const categoryHandler = (e) => {
        setCatList(e.target.id)
        setActiveCategory(e.target.id)
        
    }

    return(
        <div className="bg-[#021526] flex flex-col justify-center items-center pb-[30px]">
            <div className="w-[1366px] bg-[#E2E2B6] m-[30px] p-[15px] rounded-[15px] shadow-2xl">
                <ul className="flex gap-10 justify-around">
                    <li 
                        className={`catButton ${activeCategory === "business" ? "active" : ""}`} 
                        id="business" 
                        onClick={categoryHandler}>
                        business
                    </li>
                    <li 
                        className={`catButton ${activeCategory === "entertainment" ? "active" : ""}`} 
                        id="entertainment" 
                        onClick={categoryHandler}>
                        entertainment
                    </li>
                    <li 
                        className={`catButton ${activeCategory === "general" ? "active" : ""}`} 
                        id="general" 
                        onClick={categoryHandler}>
                        general
                    </li>
                    <li 
                        className={`catButton ${activeCategory === "health" ? "active" : ""}`} 
                        id="health" 
                        onClick={categoryHandler}>
                        health
                    </li>
                    <li 
                        className={`catButton ${activeCategory === "science" ? "active" : ""}`} 
                        id="science" 
                        onClick={categoryHandler}>
                        science
                    </li>
                    <li 
                        className={`catButton ${activeCategory === "sport" ? "active" : ""}`} 
                        id="sport" 
                        onClick={categoryHandler}>
                        sport
                    </li>
                    <li 
                        className={`catButton ${activeCategory === "technology" ? "active" : ""}`} 
                        id="technology" 
                        onClick={categoryHandler}>
                        technology
                    </li>
                </ul>
            </div>
            <div className="w-[1366px] bg-[#6EACDA] p-[30px] grid grid-cols-3 gap-5 rounded-[15px] shadow-2xl">               
                {
                    category.map((cat, i) => {
                        return(
                            <div key={i} className="h-[500px]">
                                <Link to={cat.url} target="_blank">
                                    <div className="news-list bg-[#ffffff] p-[10px] h-[100%] hover:scale-105 hover:transition rounded-[15px] shadow-2xl cursor-pointer" >
                                        <div className="flex flex-col justify-between ">
                                            <img src={cat.urlToImage} alt="" className="h-[250px] bg-cover" />
                                            <h2 className="news-title text-[20px] font-semibold">{cat.title}</h2>
                                            <p className="text-[#555555] mt-[5px]">{cat.description}</p>
                                        </div>
                                        <div>
                                            <p className="news-author text-[#ababab]">{cat.author}</p>
                                            <p className="news-date text-[14px]">Published at: {cat.publishedAt}</p>
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
    )
}
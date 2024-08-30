import { useEffect } from "react"
import { getNewsList } from "../Api"


export default function News(){
    useEffect(() => {
        getNewsList()
    }, [])

    const search = (q) => {
        console.log({q})
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
                    <div className="bg-[#ffffff]">
                        <h2 className="news-title">Stock market today: Dow hits record high while tech shares stumble ahead of Nvidia earnings</h2>
                        <img className="news-image" src="" alt="" />
                        <p className="news-desc">The Dow hit a record high on Monday. Tech shares edged lower ahead of the hotly anticipated Nvidia earning report scheduled for Wednesday</p>
                        <p className="news-date">2024-08-26T20:10:10Z</p>
                    </div>
                </div>   
            </div>
        </div>
    )
}
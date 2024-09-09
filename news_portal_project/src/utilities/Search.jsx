import searchbtn from "../assets/search.png"

export default function Search(){
    return(
        <div className="flex gap-3 items-center bg-[#7FA1C3] rounded pr-3">
            <input className="w-[400px] py-2 px-4 rounded" type="search" placeholder="news keyword..." />
            <button className="bg-[#7FA1C3] hover:opacity-50">
                <img className="max-w-[20px]" src={searchbtn} alt="" />
            </button>
        </div>
    )
}
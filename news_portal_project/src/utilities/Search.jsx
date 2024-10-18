import searchbtn from "../assets/search.png"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Search(){

    const [keyInput, setKeyInput] = useState('')


    const search = (q) => {
        setKeyInput(q)
    }

    return(
        <div className="flex gap-3 items-center bg-[#7FA1C3] rounded-[10px] pr-3">
            <input className="w-[400px] py-2 px-4 rounded-l-lg focus:outline-none" type="search" placeholder="news keyword..." onChange={({target}) => search(target.value)} />
                <Link to={`/search/${keyInput}`}>
                    <button className="bg-[#7FA1C3] hover:opacity-50">
                            <img className="max-w-[20px] p-1 " src={searchbtn} alt="" />
                    </button>
                </Link>
        </div>
    )
}
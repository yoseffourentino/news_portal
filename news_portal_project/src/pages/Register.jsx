/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

export default function Register(){
    return(
        <div className="bg-[#021526] flex justify-center items-center h-[100vh]">
            <div className="bg-[#7FA1C3] w-[800px] h-[500px] flex flex-col justify-center items-center gap-6 p-[10px] rounded-[15px] shadow-2xl">
                <h2 className="text-[40px]">Register</h2>
                <input type="text" placeholder="Username" className="w-[500px] p-[10px] rounded-[15px]"/>
                <input type="text" placeholder="Email" className="w-[500px] p-[10px] rounded-[15px]"/>
                <input type="text" placeholder="Password" className="w-[500px] p-[10px] rounded-[15px]"/>
                <button className="bg-[#EAD8B1] px-[20px] py-[10px] w-[300px] rounded-[15px] hover:bg-[#b8a784] transition">Register</button>
                <div className="flex flex-row gap-5">
                    <p>Already have an account?  <Link to="/login"><button className="text-[#4563ff] underline underline-offset-1">Login</button></Link></p>    
                </div>
            </div>
        </div>
    )
}
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

export default function Login(){
    return(
        <div className="bg-[#021526] flex justify-center items-center h-[100vh]">
            <div className="bg-[#7FA1C3] w-[800px] h-[400px] flex flex-col justify-center items-center gap-6 p-[10px] rounded-[15px] shadow-2xl">
                <h2 className="text-[40px]">Login</h2>
                <input type="text" placeholder="username" className="w-[500px] p-[10px] rounded-[15px]"/>
                <input type="text" placeholder="password" className="w-[500px] p-[10px] rounded-[15px]"/>
                <button className="bg-[#EAD8B1] px-[20px] py-[10px] w-[300px] rounded-[15px] hover:bg-[#b8a784] transition">Login</button>
                <div className="flex flex-row gap-5">
                    <p>Don't have an account?  <Link to="/register"><button className="text-[#4563ff] underline underline-offset-1">Register</button></Link></p>
                    <p>Login as a guest? <Link to="/"><button className="text-[#4563ff] underline underline-offset-1">Home</button></Link></p>    
                </div>
            </div>
        </div>
    )
}
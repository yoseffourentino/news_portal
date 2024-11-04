import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import hotnews from "../assets/hot-news.png"
import wiinnicodelogo from "../assets/winnicode_logo.png"
import instagram from "../assets/instagram-black.png"
import twitter from "../assets/twitter-black.png"
import linkedin from "../assets/linkedin-black.png"
import github from "../assets/github.png"
import { Link } from "react-router-dom";

export default function About(){
    return(
        <div>
                <Header />
            <div className="flex flex-col justify-center items-center bg-[#03346E] pb-[30px]">
                <Hero />
                <div className="w-[1366px] bg-[#E2E2B6] flex justify-around items-center p-[20px] mb-[30px] rounded-[15px] shadow-2xl">
                    <div className="">
                        <img src={hotnews} alt="" className="max-w-[400px]" />
                    </div>
                    <div className="max-w-[600px]">
                        <h1 className="font-bold text-xl">So Many Hot News</h1>
                        <p className="text-[#555555]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet cumque doloremque, dolorum quas asperiores architecto. Libero odit voluptatum amet accusamus itaque sunt omnis est nihil, sapiente temporibus quas quos!</p>
                    </div>
                </div>
                <div className="w-[1366px] bg-[#ffff] flex justify-around items-center p-[20px] rounded-[15px] shadow-2xl">
                    <div className="max-w-[600px]">
                        <h1 className="font-bold text-xl">PT. Winnicode Garuda Teknologi</h1>
                        <p className="text-[#555555]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet cumque doloremque, dolorum quas asperiores architecto. Libero odit voluptatum amet accusamus itaque sunt omnis est nihil, sapiente temporibus quas quos!</p>
                    </div>
                    <div className="">
                        <img src={wiinnicodelogo} alt="" className="max-w-[400px]" />
                    </div>
                </div>
                <div className="flex flex-col gap-7 justify-center items-center mt-[20px]">
                    <h2 className="text-[#E2E2B6]">Connect With Us at:</h2>
                    <div className="flex gap-5">
                        <img src={instagram} alt="" className="max-w-[30px] cursor-pointer hover:opacity-70"/>
                        <img src={twitter} alt="" className="max-w-[30px] cursor-pointer hover:opacity-70" />
                        <img src={linkedin} alt="" className="max-w-[30px] cursor-pointer hover:opacity-70" />
                        <img src={github} alt="" className="max-w-[30px] cursor-pointer hover:opacity-70" />
                    </div>
                    <div className="p-[10px]">
                        <p className="text-[#E2E2B6]">Or you can contact us in here:
                            <Link to="/contact">
                                <button className="bg-[#000000] p-[9px] ml-[5px] rounded text-[#fff] hover:opacity-70">Contact Us</button>
                            </Link> 
                        </p>
                    </div>
                </div>
            </div>
            
                <Footer />
        </div>
    )
}
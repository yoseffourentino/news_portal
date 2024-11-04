import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact(){
    return(
        <div>
            <Header />
            <div className="bg-[#03346E] flex justify-center">
                <div className="w-[1366px] bg-[#6EACDA] flex flex-col items-center justify-center my-[30px] py-[30px] rounded-[15px] shadow-2xl">
                    <h1 className="font-bold text-[30px] mb-[20px]">Can we help you?</h1>
                    <div className="flex flex-col items-center gap-4">
                        <p className="font-semibold text-[20px] w-[1000px]">Submit Request</p>
                        <input type="text" placeholder="your email..." className="w-[1000px] p-[10px] rounded" />
                        <textarea 
                            name="postMessage" 
                            placeholder="write us a message..." 
                            className="w-[1000px] p-[10px] rounded"
                            rows={10} 
                        />
                        <button className="bg-[#E2E2B6] px-[20px] py-[10px] w-[300px] rounded-[15px] hover:bg-[#b8a784] transition">Submit</button>                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
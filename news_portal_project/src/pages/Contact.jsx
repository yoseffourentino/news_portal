import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact(){
    return(
        <div>
            <Header />
            <div className="bg-[#E2DAD6] flex justify-center">
                <div className="w-[1366px] bg-[#7FA1C3] flex flex-col items-center justify-center my-[30px] py-[30px]">
                    <h1 className="font-bold text-[30px] mb-[20px]">Can we help you?</h1>
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-[20px]">Submit Request</p>
                        <input type="text" placeholder="your email..." className="w-[1000px] p-[10px] rounded" />
                        <textarea 
                            name="postMessage" 
                            placeholder="write us a message...8" 
                            className="w-[1000px] p-[10px] rounded"
                            rows={10} 
                        />                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
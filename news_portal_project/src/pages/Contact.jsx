import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact(){
    const [isLoading, setIsLoading] = useState(false)
    const [contactData, setContactData] = useState({
        email: '',
        subject:'',
        message: ''
    })

    const handleInput = (e) => {
        const {name, value} = e.target 
        if(name === 'email')setContactData({...contactData, email: value})
        if(name === 'subject')setContactData({...contactData, subject: value})
        if(name === 'message')setContactData({...contactData, message: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const body = {
            email: contactData.email,
            subject: contactData.subject,
            message: contactData.message
        }
        
        setIsLoading(true)

        const response = await fetch('http://localhost:4000/api/articles/contact', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type':'application/json'
            }
        })

        if (!response.ok) {
            throw new Error("Failed to send message. Please try again later.");
        }
    
        const result = await response.json();

        console.log(result)
        setIsLoading(false)
    }
    return(
        <div>
            <Header />
            <div className="bg-[#021526] flex justify-center">
                <div className="w-[1366px] bg-[#6EACDA] flex flex-col items-center justify-center my-[30px] py-[30px] rounded-[15px] shadow-2xl">
                    <h1 className="font-bold text-[30px] mb-[20px]">Can we help you?</h1>
                    <div className="flex flex-col items-center gap-4">
                        <p className="font-semibold text-[20px] w-[1000px]">Submit Request</p>
                        <form 
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center gap-5
                        ">
                            <div>
                                <input 
                                    type="text"
                                    name="email"
                                    placeholder="your email..." 
                                    className="w-[1000px] p-[10px] rounded" 
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    name="subject"
                                    placeholder="Subject" 
                                    className="w-[1000px] p-[10px] rounded" 
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <textarea 
                                    name="message" 
                                    placeholder="write us a message..." 
                                    className="w-[1000px] p-[10px] rounded"
                                    rows={10}
                                    onChange={handleInput}
                                />
                            </div>
                            <button
                            className={`px-[20px] py-[10px] w-[300px] rounded-[15px] transition ${
                                isLoading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#E2E2B6] text-black hover:bg-[#b8a784]"
                                }`}
                            disabled={isLoading}
                            >
                                Submit
                            </button>                    
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
/* eslint-disable react/no-unescaped-entities */
import heroImg from '../assets/newspaper.png'

export default function Hero(){
    return(
        <div className="bg-[#021526] flex justify-center items-center">
            <div className="w-[1366px] bg-[#6EACDA] m-[30px] rounded-[15px] shadow-2xl">
                <div className='flex p-[20px] items-center justify-around'>
                    <div className='max-w-[600px]'>
                        <h1 className='font-bold text-xl'>This is NEWS portal website</h1>
                        <p className='text-[#ededed] text-justify'>Welcome to our News Portal, a trusted platform where information meets innovation. As a modern hub for journalism, our mission is to deliver accurate, reliable, and engaging news that keeps you informed about the world around you. Whether it's breaking news, insightful analysis, or inspiring stories, we are committed to bringing you the best content tailored to your interests.</p>
                    </div>
                    <img src={heroImg} alt="" className='max-w-[400px]' />
                </div>
            </div>
        </div>
    )
}
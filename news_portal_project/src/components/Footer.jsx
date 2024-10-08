import newslogo from '../assets/newsLogo2.png'
import instagramlogo from '../assets/instagram.png'
import twiterlogo from '../assets/twitter.png'
import githublogo from '../assets/github.png'

export default function Footer(){
    return(
        <div className="h-[450px] bg-[#6482AD]">
            <div className='flex justify-around p-[50px]'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <img src={newslogo} alt="" className='w-[200px]'/>
                    <p className='font-semibold'>Connect With Us</p>
                    <div className='flex gap-4'>
                        <img src={instagramlogo} alt="" className='w-[30px]' />
                        <img src={twiterlogo} className='w-[30px]' alt="" />
                        <img src={githublogo} className='w-[30px]' alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='mb-3 text-[20px] font-semibold'>Category</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[#ededed]'>business</li>
                        <li className='text-[#ededed]'>entertainment</li>
                        <li className='text-[#ededed]'>general</li>
                        <li className='text-[#ededed]'>helath</li>
                        <li className='text-[#ededed]'>sciende</li>
                        <li className='text-[#ededed]'>sport</li>
                        <li className='text-[#ededed]'>technology</li>
                    </ul>
                </div>
                <div className='max-w-[600px]'>
                    <h2 className='mb-3 text-[20px] font-semibold'>News Portal</h2>
                    <p className='text-[#ededed] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque est laboriosam quod ad error voluptatum at! Dicta, laboriosam ex saepe nostrum sint deserunt voluptate, ducimus repellat esse a ullam?</p>
                </div>
            </div>
        </div>
    )
}
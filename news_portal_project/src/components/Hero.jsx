import heroImg from '../assets/newspaper.png'

export default function Hero(){
    return(
        <div className="bg-[#021526] flex justify-center items-center">
            <div className="w-[1366px] bg-[#6EACDA] m-[30px] rounded-[15px] shadow-2xl">
                <div className='flex p-[20px] items-center justify-around'>
                    <div className='max-w-[600px]'>
                        <h1 className='font-bold text-xl'>This is NEWS portal website</h1>
                        <p className='text-[#ededed]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit temporibus hic amet quibusdam a debitis similique placeat porro maxime! Ut, possimus dignissimos! Dicta necessitatibus, illo iusto distinctio commodi ipsa. Saepe.</p>
                    </div>
                    <img src={heroImg} alt="" className='max-w-[400px]' />
                </div>
            </div>
        </div>
    )
}
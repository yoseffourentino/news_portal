import heroImg from '../assets/newspaper.png'

export default function Hero(){
    return(
        <div className="bg-[#E2DAD6] flex justify-center items-center">
            <div className="w-[1366px] bg-[#7FA1C3] m-[30px]">
                <div className='flex p-[20px] items-center justify-around'>
                    <div className='max-w-[600px]'>
                        <h1 className='font-bold text-xl'>This is NEWS portal website</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit temporibus hic amet quibusdam a debitis similique placeat porro maxime! Ut, possimus dignissimos! Dicta necessitatibus, illo iusto distinctio commodi ipsa. Saepe.</p>
                    </div>
                    <img src={heroImg} alt="" className='max-w-[400px]' />
                </div>
            </div>
        </div>
    )
}
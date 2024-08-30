import saveLogo from '../assets/save-logo.png';
import userLogo from '../assets/user-logo.png'

export default function Header(){
    return(
        <div>
            <div className="navbar flex justify-around p-[20px] items-center bg-[#E2DAD6]">
                <h1 className='text-xl font-bold'>News Portal</h1>
                <ul className='flex gap-10'>
                    <li className="nav-items">Home</li>
                    <li className="nav-items">About</li>
                    <li className="nav-items">Contact</li>
                </ul>
                <div className='flex gap-3'>
                    <button className='max-w-[30px]'><img src={saveLogo} alt="" /></button>
                    <button className='max-w-[30px]'><img src={userLogo} alt="" /></button>
                </div>
            </div>
        </div>
    )
}
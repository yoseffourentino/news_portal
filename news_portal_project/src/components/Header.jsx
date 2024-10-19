import saveLogo from '../assets/save-logo.png';
import userLogo from '../assets/user-logo.png'
import Search from '../utilities/Search';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div>
            <div className="navbar flex justify-around p-[20px] items-center bg-[#E2DAD6]">
                <h1 className='text-xl font-bold'>News Portal</h1>
                    <ul className='flex gap-10'>
                        <Link to="/">
                            <li className="nav-items">Home</li>
                        </Link>
                        <Link to="/about">
                            <li className="nav-items">About</li>
                        </Link>
                        <Link to="/contact">
                            <li className="nav-items">Contact</li>
                        </Link>
                    </ul>
                    <Search />
                <div className='flex gap-3'>
                    <button className='max-w-[50px] rounded-[15px] p-[10px] hover:bg-[#7FA1C3] hover:shadow-2xl transition'><img src={saveLogo} alt="" /></button>
                    <Link to="/login">
                        <button className='max-w-[50px] rounded-[15px] p-[10px] hover:bg-[#7FA1C3] hover:shadow-2xl transition'><img src={userLogo} alt="" /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
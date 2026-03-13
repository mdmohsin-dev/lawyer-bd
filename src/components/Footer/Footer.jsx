import logo from "../../../src/assets/images/logo.png"
import { NavLink } from 'react-router';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {

    const footerLinks = <>
        <NavLink className="text-[16px]" to='/'>Home</NavLink>
        <NavLink className="text-[16px]" to='/'>My-Bookings</NavLink>
        <NavLink className="text-[16px]" to='/'>Blogs</NavLink>
        <NavLink className="text-[16px]" to='/'>Contact Us</NavLink>
    </>

    return (
        <div className='bg-black py-24 px-20'>
            <footer>
                <div className='flex items-center justify-center gap-1'>
                    <img src={logo} alt="" />
                    <h3 className='text-3xl font-bold'>Law.BD</h3>
                </div>

                <div className='hidden md:flex justify-center mt-10'>
                    <ul className="flex gap-9 justify-center">
                        {footerLinks}
                    </ul>
                </div>

                <div className="border-t-2 border-dashed border-gray-500 my-10"></div>
                <div className='mt-10 flex justify-center items-center gap-6'>
                    <FaFacebook size={36} />
                    <FaLinkedin size={36} />
                    <FaYoutube size={36} />
                </div>
            </footer>
        </div>
    );
};

export default Footer;
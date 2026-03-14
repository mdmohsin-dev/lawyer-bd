import logo from "../../../src/assets/images/logo.png"
import { NavLink } from 'react-router';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink className="text-[16px]" to='/'>Home</NavLink></li>
        <li><NavLink className="text-[16px]" to='/myBookings'>My-Bookings</NavLink></li>
        <li><NavLink className="text-[16px]" to='/blogs'>Blogs</NavLink></li>
        <li><NavLink className="text-[16px]" to='/contact'>Contact Us</NavLink></li>
    </>

    return (
        <div>
            <div className="drawer text-black">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="navbar w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>

                        <div className="navbar-start">
                            <div className='flex items-center gap-1'>
                                <img src={logo} alt="" />
                                <h3 className='text-3xl font-bold'>Law.BD</h3>
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="flex gap-9">
                                {navLinks}
                            </ul>
                        </div>

                        <div className="navbar-end">
                            <button className='btn bg-[#0EA106] border-none rounded-3xl'>Contact now</button>
                        </div>


                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="bg-[#CBDF27] min-h-full w-70 p-4 flex flex-col gap-4">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
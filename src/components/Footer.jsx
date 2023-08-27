import React, { useContext } from 'react';
import Logo from "../assets/icon/Logo.png";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const Footer = () => {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <>
            <section className="flex justify-around align-middle bg-black text-white px-10 pt-8 pb-2">
                <div >
                    <Link to={"/"}><img src={Logo} alt="" width={"96px"} height={"240px"} className='pb-2' /></Link>
                </div>
                <div>
                    <ul className="flex gap-10 ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        {currentUser
                            ? <li><Link onClick={logout}>Logout</Link></li>
                            : <li><Link to="/register">Login / Register</Link></li>}
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Footer
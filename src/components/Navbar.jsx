import React, { useContext, useState } from 'react';
import Logo from "../assets/icon/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext';


const Navbar = () => {
    const [err, setError] = useState(null);
    const { currentUser, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            navigate("/register");
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <>
            <div className='px-32 bg-amber-300'>
                <nav className="flex justify-between items-center px-10 py-5 w-[100%] bg-amber-300 text-white font-semibold">
                    <div className='px-10'>
                        <Link to={"/"}><img src={Logo} alt="logo" width={"196px"} height={"360px"} /></Link>
                    </div>

                    <div className='px-10'>
                        <ul className="flex gap-10 ">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div class="flex gap-2">
                        {currentUser && <div className='py-3 mr-4'>Hey, {currentUser?.username}!</div>}

                        {currentUser ?
                            (<button className="bg-orange-500 px-2 py-3 rounded-xl flex" onClick={logout}>
                                Logout
                            </button>) :
                            (<button className="bg-orange-500 px-2 py-3 rounded-xl flex" onClick={handleSubmit}>
                                Login / Register
                            </button>)
                        }
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
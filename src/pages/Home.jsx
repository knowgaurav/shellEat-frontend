import { React, useRef, useState } from 'react';
import Logo from "../assets/icon/Logo.png";
import backgroundImg from "../assets/photo/frontCards-less-opacity.png";
import rightArrow from "../assets/icon/RightArrow.svg";
import fiveStar from "../assets/icon/5stars.svg";
import fourStar from "../assets/icon/4stars.svg";
import DollarCircle from "../assets/icon/dollar-circle.svg";
import CloudAdd from "../assets/icon/cloud-add.svg";
import Lock from "../assets/icon/lock.svg";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    const features = useRef(null);

    const [err, setError] = useState(null);

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
            <div className="mx-auto bg-neutral-500">

                <section className="bg-amber-300 text-white h-[100vh] flex flex-col pt-32 pb-20 z-[20] px-32">
                    <img className="z-20 absolute  top-[5%] left-[40%] h-[90%] w-[50%]  text-opacity-100  overflow-hidden max-sm:hidden" src={backgroundImg} alt="" />

                    <div className="w-[65%] ml-20 text-7xl  pb-10 max-sm:text-4xl">
                        <p>Simplify All Your Food Transactions using <span className="text-orange-500 font-bold text-opacity-100">One Card</span></p>
                    </div>

                    <div className="w-2/5 ml-20">
                        <p className="text-md text-white pb-10">
                            Hurry up and join now, with you can manage your daily finances easily and safely
                        </p>

                        <button className="flex text-xl bg-orange-500 px-3 py-4 rounded-xl" onClick={handleSubmit}>
                            GET STARTED
                            <img className="mt-2 ml-2 max-sm:hidden" src={rightArrow} alt="" />
                        </button>

                        <div className="text-l mt-10 mb-20 max-md:hidden ">
                            <span className="mr-5">42K
                                <span className="text-orange-500">+</span>
                                Happy Active Employees
                            </span>
                            <span>|</span>
                            <span className="ml-5 font-bold z-[100]">
                                5y
                                <span className="text-orange-500">+</span>
                                Years in the Business
                            </span>
                        </div>
                    </div>
                </section>

                <section className="flex bg-orange-500  max-md:flex-col justify-around p-5">
                    <img className="p-5" src={Logo} alt="" />
                    <img className="p-5" src={Logo} alt="" />
                    <img className="p-5" src={Logo} alt="" />
                    <img className="p-5" src={Logo} alt="" />
                    <img className="p-5" src={Logo} alt="" />
                </section>


                <section className="bg-amber-300 text-white pt-20 pb-10 px-32" ref={features}>
                    <div className="flex max-md:flex-col">
                        <p className="text-6xl ml-16 mx-md:text-md">The best payment service for <span className="text-orange-500  mx-md:text-sm">your food transactions.</span></p>

                        <p className="text-2xl m-10  mx-md:text-md">The following are the services we offer to users, and it is our hope that they will be happy with what we offer.</p>

                    </div>
                    <div className="grid grid-cols-3 m-5 max-md:flex max-md:flex-col mt-20">
                        <div className="h-[250px] w-[300px] bg-gray-500 m-5  text-center text-2xl mt-16 border-y-2 border-l-4 border-lime-400"> <img className="ml-16" src={DollarCircle} alt="" />Zero transactions fee</div>

                        <div className="h-[250px] w-[300px] bg-gray-500 m-5 text-center text-2xl border-y-2 border-l-4 border-lime-400"> <img className="ml-16" src={CloudAdd} alt="" />Easy to access anytime and anywhere</div>

                        <div className="h-[250px] w-[300px] bg-gray-500 m-5 text-center text-2xl mt-16 border-y-2 border-l-4 border-teal-400"> <img className="ml-16" src={Lock} alt="" />Guaranteed Safety</div>
                    </div>
                </section>

                <section className="flex flex-col bg-orange-500 text-white text-center pt-10 px-32">

                    <p className="text-6xl p-5">Customer are satisfied with</p>

                    <p className="text-5xl p-5"><span className="text-amber-300">the features </span>we provide</p>

                    <p className="pt-10 text-white ">With the various features that we provide ,therefore many customer like the features that we are provide.</p>

                    <div className="grid grid-cols-2 max-md:flex max-md:flex-col p-5">

                        <div className="flex flex-col h-[400px] w-[400px] bg-amber-300 m-5 text-2xl mt-16 border-y-2 border-l-4 border-orange-700 max-sm:w-[250px] max-md:h-[400px] p-5">

                            <div className="p-5"> <img src={fiveStar} alt="" /></div>
                            <div className="p-5 text-md "><p>This is the best platfrom I've ever found lots of features that definatily make more satisfied</p></div>
                            <div className=" text-sm mr-[50%]">
                                <p>Ranjeet Singh</p>
                                <p>Lucknow,India</p>
                            </div>

                        </div>

                        <div className="flex flex-col h-[400px] w-[400px] bg-amber-300 m-5 text-2xl mt-16 border-y-2 border-l-4 border-orange-700 max-sm:w-[250px] max-md:h-[400px] p-5">

                            <div className="p-5"> <img src={fourStar} alt="" /></div>
                            <div className="p-5 text-md "><p>This is the best platfrom I've ever found lots of features that definatily make more satisfied</p></div>
                            <div className=" text-sm mr-[50%]">
                                <p>Ranjeet Singh</p>
                                <p>Lucknow,India</p>
                            </div>

                        </div>

                        <div className="flex flex-col h-[400px] w-[400px] bg-amber-300 m-5 text-2xl mt-16 border-y-2 border-l-4 border-orange-700 max-sm:w-[250px] max-md:h-[400px] p-5">

                            <div className="p-5"> <img src={fiveStar} alt="" /></div>
                            <div className="p-5 text-md "><p>This is the best platfrom I've ever found lots of features that definatily make more satisfied</p></div>
                            <div className=" text-sm mr-[50%]">
                                <p>Ranjeet Singh</p>
                                <p>Lucknow,India</p>
                            </div>

                        </div>


                        <div className="flex flex-col h-[400px] w-[400px] bg-amber-300 m-5 text-2xl mt-16 border-y-2 border-l-4 border-orange-700 max-sm:w-[250px] max-md:h-[400px] p-5">

                            <div className="p-5"> <img src={fourStar} alt="" /></div>
                            <div className="p-5 text-md "><p>This is the best platfrom I've ever found lots of features that definatily make more satisfied</p></div>
                            <div className=" text-sm mr-[50%]">
                                <p>Ranjeet Singh</p>
                                <p>Lucknow,India</p>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="h-[55vh] bg-amber-300 px-32">
                    <div className="relative">
                        {/* <img className="absolute bg-black " src={rect6773} alt="" /> */}
                        <div className="relative">
                            {/* <img className="absolute " src={rect6774} alt="" /> */}
                            <div className="absolute mt-52 max-md:mt-28  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <p className="text-white text-5xl max-md:text-xl font-bold">Get your own
                                    <span className="text-orange-500"> ShellEat's</span> Card now!
                                </p>
                                <button className="  mt-16 text-xl max-md:mt-4 max-md:px-4 max-md:py-2 max-sm:px-2  bg-orange-500 text-white px-7 py-4 rounded-xl" onClick={handleSubmit}>
                                    GET STARTED
                                </button>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
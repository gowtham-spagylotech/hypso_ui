import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginImg from "@/public/img/login-img.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = ({ onCloseSignUpPopup, onSignInRequest,  }) => {

    const [showSignIn, setShowSignIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignInClick = () => {
        setShowSignIn(true);
        onSignInRequest(); // Request the parent to show SignUp
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };


    return (
        <div className="signup-section">
            <button className="close-btn" onClick={onCloseSignUpPopup}>
                <i className="las la-times-circle text-3xl p-5"></i>
            </button>
            <div className="w-full lg:w-full">
                <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
                    <form className="pt-8" action="#">
                        <h3 className="mb-4 h3"> Let’s Get Started! </h3>
                        <p className="mb-10">
                            Please enter your Whatsapp Number to join us
                        </p>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-6">
                                <label
                                    htmlFor="first-name"
                                    className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                                    placeholder="Enter First Name"
                                    id="first-name"
                                />
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <label
                                    htmlFor="last-name"
                                    className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                                    placeholder="Enter Last Name"
                                    id="last-name"
                                />
                            </div>
                            <div className="col-span-12">
                                <label
                                    htmlFor="enter-whatsappnumber"
                                    className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
                                    Enter Your WhatsApp Number
                                </label>
                                <input
                                    type="number"
                                    className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                                    placeholder="Enter Your WhatsApp Number"
                                    id="enter-whatsappnumber"
                                />
                            </div>
                            <div className="col-span-12">
                            <label
                                    htmlFor="enter-password"
                                    className="text-base sm:text-lg md:text-xl font-medium block mb-3"
                                >
                                    Enter Your Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 mb-3"
                                        placeholder="Enter Your Password"
                                        id="enter-password"
                                    />
                                    <span
                                        className="absolute top-6 right-5 transform -translate-y-1/2 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash className="text-2xl" /> : <FaEye className="text-2xl" />}
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <p className="mb-0">
                                    Do you have an account?
                                    <Link
                                        href="#"
                                        onClick={handleSignInClick}
                                        className="link font-semibold text-primary">
                                        Signin
                                    </Link>
                                </p>
                            </div>
                            <div className="col-span-12">
                                <Link
                                    href="#"
                                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                                    <span className="inline-block"> Signup </span>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

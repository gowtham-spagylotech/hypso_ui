import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginImg from "@/public/img/login-img.png";
import SignUp from "./SignUp";
import SignInWithOtp from "./SignInWithOtp";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = ({ onCloseSignInPopup, onSignUpRequest, handleSignInWithOtpClick, onForgotPasswordClick }) => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUpClick = () => {
        setShowSignUp(true);
        onSignUpRequest(); // Request the parent to show SignUp
    };

    const handleSignInWithOtp = () => {
        onCloseSignInPopup(); // Close the SignIn popup
        handleSignInWithOtpClick(); // Trigger display of SignInWithOtp popup in the parent (HeaderTop)
    };

    const handleForgotPasswordClick = () => {
        onCloseSignInPopup(); // Close the SignIn popup
        onForgotPasswordClick(); // Notify the parent to show ForgotPassword
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="signup-section">
            <button className="close-btn" onClick={onCloseSignInPopup}>
                <i className="las la-times-circle text-3xl p-5"></i>
            </button>
            <div className="w-full">
                <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
                    <form className="pt-8" action="#">
                        <h3 className="mb-4 h3"> Welcome Back! </h3>
                        <p className="mb-10"> Sign in to your account and join us </p>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12">
                                <label
                                    htmlFor="enter-whatsappnumber"
                                    className="text-base sm:text-lg md:text-xl font-medium block mb-3"
                                >
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
                                <Link
                                    href="#"
                                    onClick={handleForgotPasswordClick}
                                    className="link block text-sm text-primary :clr-primary-400 text-end"
                                >
                                    Forget password
                                </Link>
                            </div>
                            <div className="col-span-12">
                                <p className="mb-0">
                                    Don&apos;t have an account?{" "}
                                    <Link
                                        href="#"
                                        onClick={handleSignUpClick}
                                        className="link font-semibold text-primary">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                            <div className="col-span-12 choice-login">
                                <Link
                                    href="#"
                                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                                    <span className="inline-block"> Sign in </span>
                                </Link>
                                <p className="text-center">Or</p>
                                <Link
                                    href="#"
                                    onClick={handleSignInWithOtp}
                                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold"
                                >
                                    <span className="inline-block"> Log in with OTP </span>
                                </Link>
                            </div>
                            {showSignUp && (
                                <SignUp onCloseSignUpPopup={() => setShowSignUp(false)} />
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
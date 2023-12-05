import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginImg from "@/public/img/login-img.png";
import SignUp from "./SignUp";

const GenerateOtp = ({ onSignUpRequest, onCloseSignInWithOtpPopup, onSignUpFromGenerateOtp, onBackToSignIn }) => {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSignUpClick = () => {
        setShowSignUp(true);
        onSignUpFromGenerateOtp();  // Trigger the function to open SignUp popup in HeaderTop
    };

    const handleBackToSignIn = () => {
        onCloseSignInWithOtpPopup(); // Close the current GenerateOtp popup
        onBackToSignIn(); // Trigger the function to show the SignIn popup in HeaderTop
    };


    return (
        <div className="signup-section">
            <button className="close-btn" onClick={onCloseSignInWithOtpPopup}>
                <i className="las la-times-circle text-3xl p-5"></i>
            </button>
            <div className="w-full">
                <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
                    <form className="pt-8" action="#">
                        <h3 className="mb-4 h3"> Welcome Back! </h3>
                        <p className="mb-10"> Sign in with OTP to your account and join us </p>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12">
                                <label
                                    htmlFor="enter-otp"
                                    className="text-base sm:text-lg md:text-xl font-medium block mb-3">
                                    Enter Your OTP
                                </label>
                                <input
                                    type="number"
                                    className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                                    placeholder="Enter Your OTP sended to your WhatsApp Number"
                                    id="enter-otp"
                                />
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
                                    <span className="inline-block"> Sign In </span>
                                </Link>
                                <p className="text-center">Or</p>
                                <Link
                                    href="#"
                                    onClick={handleBackToSignIn}
                                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                                    <span className="inline-block"> Back to Sign in </span>
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

export default GenerateOtp;

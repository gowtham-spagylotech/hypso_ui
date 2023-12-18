import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginImg from "@/public/img/login-img.png";
import SignUp from "./SignUp";
import { SignInWithOtpdata } from "@/public/data/signinwithotp";
import Number from "@/components/Number";

interface SignInWithOtpProps {
    onSignInRequest: () => void;
    onSignUpRequest: () => void;
    onCloseSignInWithOtpPopup: () => void;
    handleGenerateOtpClick: () => void;
    onSignUpFromSignInWithOtp: () => void;
    onBackToSignIn: () => void;
    showSignInWithOtp: () => void;
}

const SignInWithOtp: React.FC<SignInWithOtpProps> = ({
    onSignInRequest,
    onCloseSignInWithOtpPopup,
    onSignUpFromSignInWithOtp,
    onBackToSignIn,
}) => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [otp, setOtp] = useState("");

    const handleSignUpClick = () => {
        setShowSignUp(true);
        onSignUpFromSignInWithOtp();  // Trigger the function to open SignUp popup in HeaderTop
    };

    const handleBackToSignInClick = () => {
        onBackToSignIn();  // Call the provided function for "Back to Sign in" click
    };

    const handlesendoptClick = () => {
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
                        <div className="grid grid-cols-12 gap-3">

                            {SignInWithOtpdata.sections[0].fields.map((field, index) => (
                                <div className="col-span-12" key={index}>
                                    <label
                                        htmlFor={`signup-${field.label.toLowerCase().replace(/\s/g, "-")}`}
                                        className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3"
                                    >
                                        {field.label}
                                    </label>
                                    {field.type === "number" && (
                                        <>
                                            <Number
                                                className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 mb-3 md:col-span-12"
                                                placeholder={`Enter ${field.label}`}
                                                value={whatsappNumber}
                                                onChange={(value) => setWhatsappNumber(value)}
                                            />
                                            {field.label === "Enter Your WhatsApp Number" && (
                                                <Link
                                                    href="#"
                                                    onClick={handlesendoptClick}
                                                    className="link block text-md text-primary :clr-primary-400 text-end "
                                                >
                                                    Send OTP
                                                </Link>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}

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
                                    onClick={handleBackToSignInClick}
                                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                                    <span className="inline-block">Sign in with password </span>
                                </Link>
                            </div>
                            {showSignUp && (
                                <SignUp onSignInRequest={onSignInRequest} onCloseSignUpPopup={() => setShowSignUp(false)} />
                            )}


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInWithOtp;
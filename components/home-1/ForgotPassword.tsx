import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginImg from "@/public/img/login-img.png";
import SignUp from "./SignUp";
import { ForgotPassworddata } from "@/public/data/forgotpassword";
import Number from "@/components/Number";

interface ForgotPasswordProps {
    onSignInRequest: () => void;
    onSignUpRequest: () => void;
    onCloseForgotPasswordPopup: () => void;
    handleGenerateOtpClick: () => void;
    onSignUpFromSignInWithOtp: () => void;
    onBackToSignIn: () => void;
    onSignUpClick: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
    onSignInRequest,
    onSignUpRequest,
    onCloseForgotPasswordPopup,
    handleGenerateOtpClick,
    onSignUpFromSignInWithOtp,
    onBackToSignIn,
    onSignUpClick,
}) => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [whatsappNumber, setWhatsappNumber] = useState("");

    const handleSignUpClick = () => {
        setShowSignUp(true);
        onSignUpFromSignInWithOtp(); // Trigger the function to open SignUp popup in HeaderTop
    };

    const handleGenerateOtp = () => {
        handleGenerateOtpClick(); // Call the provided function to handle "Generate OTP" click
    };

    const handleBackToSignIn = () => {
        onCloseForgotPasswordPopup(); // Close the ForgotPassword component
        onBackToSignIn(); // Call the provided function for "Back to Sign in" click
    };

    // Call the provided function for "Sign up" click
    const handleSignUpLinkClick = () => {
        onCloseForgotPasswordPopup(); // Close the ForgotPassword component
        onSignUpClick();
    };

    return (
        <div className="signup-section">
            <button className="close-btn" onClick={onCloseForgotPasswordPopup}>
                <i className="las la-times-circle text-3xl p-5"></i>
            </button>
            <div className="w-full">
                <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
                    <form className="pt-8" action="#">
                        <h3 className="mb-4 h3"> Welcome Back! </h3>
                        <p className="mb-10"> Forgot your password? No Worries! </p>
                        <div className="grid grid-cols-12 gap-4">
                            {ForgotPassworddata.sections[0].fields.map((field, index) => (
                                <div className="col-span-12" key={index}>
                                    <label
                                        htmlFor={`signup-${field.label.toLowerCase().replace(/\s/g, "-")}`}
                                        className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3"
                                    >
                                        {field.label}
                                    </label>
                                    {field.type === "number" && (
                                        <Number
                                            className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 mb-3 md:col-span-12"
                                            placeholder={`Enter ${field.label}`}
                                            value={whatsappNumber}
                                            onChange={(value) => setWhatsappNumber(value)}
                                        />
                                    )}
                                </div>
                            ))}

                            <div className="col-span-12">
                                <p className="mb-0">
                                    Don&apos;t have an account?{" "}
                                    <Link
                                        href="#"
                                        onClick={handleSignUpLinkClick}
                                        className="link font-semibold text-primary">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                            <div className="col-span-12 choice-login">
                                <Link
                                    href="#"
                                    onClick={handleGenerateOtp}
                                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                                    <span className="inline-block"> Generate OTP </span>
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
                                <SignUp onSignInRequest={onSignInRequest} onCloseSignUpPopup={() => setShowSignUp(false)} />
                            )}

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
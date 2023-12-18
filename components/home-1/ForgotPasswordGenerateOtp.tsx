import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginImg from "@/public/img/login-img.png";
import SignUp from "./SignUp";
import { ForgotPasswordGenerateOtpdata } from "@/public/data/forgotpasswordgenerateotp";
import Number from "@/components/Number";

interface ForgotPasswordGenerateOtpProps {
    onCloseForgotPasswordGenerateOtpPopup: () => void;
    onSignUpFromGenerateOtp: () => void;
    onBackToSignIn: () => void;
}

const ForgotPasswordGenerateOtp: React.FC<ForgotPasswordGenerateOtpProps> = ({
    onCloseForgotPasswordGenerateOtpPopup,
    onSignUpFromGenerateOtp,
    onBackToSignIn }) => {
    const [otp, setOtp] = useState("");

    const handleBackToSignIn = () => {
        onCloseForgotPasswordGenerateOtpPopup(); // Close the current GenerateOtp popup
        onBackToSignIn(); // Trigger the function to show the SignIn popup in HeaderTop
    }

    return (
        <div className="signup-section">
            <button className="close-btn" onClick={onCloseForgotPasswordGenerateOtpPopup}>
                <i className="las la-times-circle text-3xl p-5"></i>
            </button>
            <div className="w-full">
                <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
                    <form className="pt-8" action="#">
                        <h3 className="mb-4 h3"> Welcome Back! </h3>
                        <p className="mb-10"> Forgot your password? No Worries! </p>
                        <div className="grid grid-cols-12">

                            {ForgotPasswordGenerateOtpdata.sections[0].fields.map((field, index) => (
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
                                            value={otp}
                                            onChange={(value) => setOtp(value)}
                                        />
                                    )}
                                </div>
                            ))}


                            <div className="col-span-12 choice-login mt-3">
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

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordGenerateOtp;

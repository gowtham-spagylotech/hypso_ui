// SignIn.tsx
import { useState } from "react";
import { signIn } from "@/public/data/signin";
import SignUp from "./SignUp";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Number from "@/components/Number";
import Password from "@/components/Password";

interface SignInProps {
    onCloseSignInPopup: () => void;
    onSignUpRequest: () => void;
    handleSignInWithOtpClick: () => void;
    onForgotPasswordClick: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onCloseSignInPopup, onSignUpRequest, handleSignInWithOtpClick, onForgotPasswordClick }) => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState(""); // State for the phone number input
    const [password, setPassword] = useState(""); // State for the password input

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
                            {signIn.sections.map((section, index) => (
                                <div key={index} className="col-span-12">
                                    {section.fields.map((field, fieldIndex) => (
                                        <div key={fieldIndex}>
                                            {field.type === "number" && (
                                                <label
                                                    htmlFor={field.label.toLowerCase().replace(/\s/g, "-")}
                                                    className="text-base sm:text-lg md:text-xl font-medium block mb-3"
                                                >
                                                    {field.label}
                                                </label>
                                            )}
                                            {field.type === "text" && (
                                                <label
                                                    htmlFor={field.label.toLowerCase().replace(/\s/g, "-")}
                                                    className="text-base sm:text-lg md:text-xl font-medium block mb-3"
                                                >
                                                    {field.label}
                                                </label>
                                            )}
                                            <div className="relative">
                                                {field.type === "number" && (
                                                    <Number
                                                        className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 mb-3"
                                                        placeholder={field.placeholder}
                                                        value={phoneNumber}
                                                        onChange={(value) => setPhoneNumber(value)}
                                                    />
                                                )}
                                                {field.type === "text" && (
                                                    <Password
                                                        onHideText={showPassword}
                                                        className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 mb-3"
                                                        placeholder={field.placeholder}
                                                        value={password}
                                                        onChange={(value) => setPassword(value)}
                                                    />
                                                )}
                                                {field.type === "text" && (
                                                    <span
                                                        className="absolute top-6 right-5 transform -translate-y-1/2 cursor-pointer"
                                                        onClick={togglePasswordVisibility}>
                                                        {showPassword ? <FaEyeSlash className="text-2xl" /> : <FaEye className="text-2xl" />}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <Link
                            href="#"
                            onClick={handleForgotPasswordClick}
                            className="link block text-sm text-primary :clr-primary-400 text-end"
                        >
                            Forget password
                        </Link>
                        <div className="col-span-12">
                            <p className="mt-2 mb-4">
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
                                <span className="inline-block"> Sign in with OTP </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
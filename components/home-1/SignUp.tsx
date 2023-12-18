// SignUp.tsx
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Number from "@/components/Number";
import Text from "@/components/Text";
import Password from "@/components/Password";
import { signUp } from "@/public/data/signup";

interface SignUpProps {
    onCloseSignUpPopup: () => void;
    onSignInRequest: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onCloseSignUpPopup, onSignInRequest }) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    // State variables for input values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleSignInClick = () => {
        setShowSignIn(true);
        onSignInRequest();
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
                        <p className="mb-10">Please enter your Whatsapp Number to join us</p>
                        <div className="grid grid-cols-12 gap-4">
                            {signUp.sections.map((section, index) => (
                                <div key={index} className="col-span-12 md:col-span-12">
                                    <div className="grid grid-cols-12 gap-4">
                                        {section.fields.map((field, fieldIndex) => (
                                            <div key={fieldIndex} className={`col-span-12 md:col-span-${field.label === "First Name" || field.label === "Last Name" ? "6" : "12"}`}>
                                                <div>
                                                    <label
                                                        htmlFor={`signup-${field.label.toLowerCase().replace(/\s/g, "-")}`}
                                                        className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3"
                                                    >
                                                        {field.label}
                                                    </label>
                                                    <div className="relative">
                                                        {field.type === "number" && (
                                                            <Number
                                                                className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 mb-3 md:col-span-12"
                                                                placeholder={`Enter ${field.label}`}
                                                                value={whatsappNumber}
                                                                onChange={(value) => setWhatsappNumber(value)}
                                                            />
                                                        )}
                                                        {field.type === "text" && (
                                                            <Text
                                                                className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 mb-3 md:col-span-6"
                                                                placeholder={`Enter ${field.label}`}
                                                                value={field.label === "First Name" ? firstName : lastName}
                                                                onChange={(value) => (field.label === "First Name" ? setFirstName(value) : setLastName(value))}
                                                            />
                                                        )}
                                                        {field.type === "password" && (
                                                            <Password
                                                                onHideText={showPassword}
                                                                className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 mb-3 md:col-span-12"
                                                                placeholder={`Enter ${field.label}`}
                                                                value={password}
                                                                onChange={(value) => setPassword(value)}
                                                            />
                                                        )}
                                                        {field.type === "password" && (
                                                            <span
                                                                className="absolute top-6 right-5 transform -translate-y-1/2 cursor-pointer"
                                                                onClick={togglePasswordVisibility}
                                                            >
                                                                {showPassword ? <FaEyeSlash className="text-2xl" /> : <FaEye className="text-2xl" />}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="col-span-12">
                                <p className="mb-0">
                                    Do you have an account?{" "}
                                    <Link href="#" onClick={handleSignInClick} className="link font-semibold text-primary">
                                         Sign in
                                    </Link>
                                </p>
                            </div>
                            <div className="col-span-12">
                                <Link
                                    href="#"
                                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold"
                                >
                                    <span className="inline-block"> Sign up </span>
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
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NotificationDropdown from "../NotificationDropdown";
import ProfileDropdown from "../ProfileDropdown";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SignInWithOtp from "./SignInWithOtp";
import GenerateOtp from "./GenerateOtp";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordGenerateOtp from "./ForgotPasswordGenerateOtp";

const HeaderTop = () => {
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);  // Add state for SignIn component
  const [showSignInWithOtpPopup, setShowSignInWithOtpPopup] = useState(false);
  const [showGenerateOtpPopup, setShowGenerateOtpPopup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showForgotPasswordGenerateOtp, setShowForgotPasswordGenerateOtp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpPopup(true);
  };

  const handleSignInClick = () => {
    setShowSignInPopup(true);
  };

  const handleCloseSignInPopup = () => {  // Function to handle closing SignIn popup
    setShowSignInPopup(false);
  };

  const handleCloseSignUpPopup = () => {
    setShowSignUpPopup(false);
  };

  const handleSignUpRequest = () => {
    setShowSignInPopup(false); // Close SignIn popup
    setShowSignUpPopup(true);  // Open SignUp popup
  };

  const handleSignInRequest = () => {
    setShowSignUpPopup(false); // Close SignIn popup
    setShowSignInPopup(true);  // Open SignUp popup
  };

  const handleSignInWithOtpClick = () => {
    setShowSignInWithOtpPopup(true);
  };

  const handleCloseSignInWithOtpPopup = () => {
    setShowSignInWithOtpPopup(false);
  };

  const handleSignUpFromSignInWithOtp = () => {
    setShowSignInWithOtpPopup(false);
    setShowSignUpPopup(true);
  };

  const handleGenerateOtpClick = () => {
    setShowGenerateOtpPopup(true);
    setShowSignInWithOtpPopup(false);
  };

  const handleSignUpFromGenerateOtp = () => {
    setShowGenerateOtpPopup(false);
    setShowSignUpPopup(true);
  };

  const handleCloseGenerateOtpPopup = () => {
    setShowGenerateOtpPopup(false);
  };

  const handleBackToSignIn = () => {
    setShowSignInWithOtpPopup(false);
    setShowSignInPopup(true)
  };


  // Function to show ForgotPassword component
  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  // Function to hide ForgotPassword component
  const handleCloseForgotPasswordPopup = () => {
    setShowForgotPassword(false);
  };

  // Function to show ForgotPasswordGenerateOtp component
  const handleForgotPasswordGenerateOtpClick = () => {
    setShowForgotPasswordGenerateOtp(true);
    setShowForgotPassword(false); // Close the ForgotPassword component if open
  };

  // Function to hide ForgotPasswordGenerateOtp component
  const handleCloseForgotPasswordGenerateOtpPopup = () => {
    setShowForgotPasswordGenerateOtp(false);
  };

  return (
    <>
      <Image
        className="absolute hidden xl:block top-0 left-0 z-10"
        width={131}
        height={454}
        src="/img/primary-hero-el-1.png"
        alt="image"
      />
      <Image
        className="absolute hidden xl:block top-0 right-0 z-10"
        width={251}
        height={151}
        src="/img/primary-hero-el-2.png"
        alt="image"
      />
      <div className="bg-[var(--bg-1)] boder-b-2 border-[var(--border)]">
        <div className="container mx-auto flex justify-between py-3 lg:py-5 gap-1">
          <Image
            src="/img/logo.png"
            className="self-center hidden xl:block"
            width={172}
            height={48}
            alt="logo"
            priority
          />
          <Image
            src="/img/favicon.png"
            className="self-center xl:hidden w-[40px] h-[40px] ml-3"
            width={56}
            height={40}
            alt="logo"
            priority
          />

          <div className="flex divide-x-[1px]">
            <div className="flex items-center gap-5 px-2 xl:px-4">
              <i className="las la-certificate bg-primary text-white text-4xl p-2 rounded-full"></i>
              <div className="flex-col hidden lg:flex">
                <span className="text-base">Add your shop/business</span>
              </div>
            </div>

            <div className="flex items-center gap-5 px-2 xl:px-4">
              <i className="las la-bullhorn bg-[var(--secondary)] text-[var(--neutral-700)] text-4xl p-2 rounded-full"></i>
              <div className="flex-col hidden lg:flex">
                <span className="text-base">Create an post</span>
              </div>
            </div>

          </div>
          <NotificationDropdown />
          <ProfileDropdown />
          <div className="sign">
            <Link href="#" onClick={handleSignInClick} className="font-semibold">
              <span className="inline-block z-30">Sign In</span>
            </Link>
            <p className="font-semibold">/</p>
            <Link href="#" onClick={handleSignUpClick} className="font-semibold">
              <span className="inline-block z-30">Sign Up</span>
            </Link>
          </div>

          {/* Showing the SignIn component as a popup */}
          {showSignInPopup && (
            <div className="z-9999 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <SignIn
                onCloseSignInPopup={handleCloseSignInPopup}
                onSignUpRequest={handleSignUpRequest}
                handleSignInWithOtpClick={handleSignInWithOtpClick}
                onSignUpFromSignInWithOtp={handleSignUpFromSignInWithOtp}
                onBackToSignIn={handleBackToSignIn}
                onForgotPasswordClick={handleForgotPasswordClick}
              />
            </div>
          )}

          {/* Showing the SignUp component as a popup */}
          {showSignUpPopup && (
            <div className="z-9999 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <SignUp onCloseSignUpPopup={handleCloseSignUpPopup}
                onSignInRequest={handleSignInRequest} />
            </div>
          )}

          {/* Showing the SignInWithOtp component as a popup */}
          {showSignInWithOtpPopup && (
            <div className="z-9999 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <SignInWithOtp
                onCloseSignInWithOtpPopup={handleCloseSignInWithOtpPopup}
                onSignUpRequest={handleSignUpRequest}
                handleGenerateOtpClick={handleGenerateOtpClick}
                onSignUpFromSignInWithOtp={handleSignUpFromSignInWithOtp}
                onBackToSignIn={handleBackToSignIn}
                showSignInWithOtp={showSignInWithOtpPopup}
              />
            </div>
          )}

          {showGenerateOtpPopup && (
            <div className="z-9999 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <GenerateOtp
                onCloseSignInWithOtpPopup={handleCloseGenerateOtpPopup}
                onSignUpRequest={handleSignUpRequest}
                onSignUpFromGenerateOtp={handleSignUpFromGenerateOtp}
                onBackToSignIn={handleBackToSignIn}
              />
            </div>
          )}

          {showForgotPassword && (
            <div className="z-9999 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <ForgotPassword
                onSignUpRequest={handleSignUpRequest}
                handleGenerateOtpClick={handleForgotPasswordGenerateOtpClick}
                onSignUpFromSignInWithOtp={handleSignUpFromSignInWithOtp}
                onBackToSignIn={handleBackToSignIn}
                onSignUpClick={handleSignUpClick}
                onCloseForgotPasswordPopup={handleCloseForgotPasswordPopup}
              />
            </div>
          )}

          {showForgotPasswordGenerateOtp && (
            <div className="z-9999 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <ForgotPasswordGenerateOtp
                onCloseForgotPasswordGenerateOtpPopup={handleCloseForgotPasswordGenerateOtpPopup}
                onSignUpFromGenerateOtp={handleSignUpFromGenerateOtp}
                onBackToSignIn={handleBackToSignIn}
              />
            </div>
          )}

        </div>
      </div>
    </>



  );
};

export default HeaderTop;

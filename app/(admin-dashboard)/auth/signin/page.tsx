"use client";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Image from "next/image";
import Link from "next/link";
import loginImg from "@/public/img/admin-signin.png";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Sign In </h2>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12">
          <div className="py-3 md:p-6 lg:p-10 rounded-2xl bg-white">
            <div className="flex flex-wrap items-center gap-6 xl:gap-8 mx-3">
              <div className="w-full md:w-7/12">
                <div className="bg-[var(--bg-1)] border rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
                  <form action="#">
                    <h3 className="mb-4 h3"> Welcome Back! </h3>
                    <p className="mb-10">
                      {" "}
                      Sign in to your account and join us{" "}
                    </p>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12">
                        <label
                          htmlFor="enter-email"
                          className="text-xl font-medium block mb-3">
                          Enter Your Email ID
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white border focus:outline-none rounded-full py-3 px-5"
                          placeholder="Enter Your Email"
                          id="enter-email"
                        />
                      </div>
                      <div className="col-span-12">
                        <label
                          htmlFor="enter-password"
                          className="text-xl font-medium block mb-3">
                          Enter Your Password
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white border focus:outline-none rounded-full py-3 px-5 mb-3"
                          placeholder="Enter Your Password"
                          id="enter-password"
                        />
                        <Link
                          href="signup"
                          className="link block text-sm text-primary :clr-primary-400 text-end">
                          Forget password
                        </Link>
                      </div>
                      <div className="col-span-12">
                        <p className="mb-0">
                          Don&apos;t have an account?{" "}
                          <Link
                            href="signup"
                            className="link font-semibold text-primary">
                            Signup
                          </Link>
                        </p>
                      </div>
                      <div className="col-span-12">
                        <Link
                          href="#"
                          className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                          <span className="inline-block"> Signin </span>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full md:w-4/12">
                <Image
                  src={loginImg}
                  className="w-full xxl:mr-[-200px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;

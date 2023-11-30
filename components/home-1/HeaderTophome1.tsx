import Image from "next/image";
import Link from "next/link";
import NotificationDropdown from "../NotificationDropdown";
import ProfileDropdown from "../ProfileDropdown";

const HeaderTop = () => {
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
            {/* <span className='inline-block h-full w-[1px] bg-[var(--border)]'></span> */}
            <div className="flex items-center gap-5 px-2 xl:px-4">
              <i className="las la-bullhorn bg-[var(--secondary)] text-[var(--neutral-700)] text-4xl p-2 rounded-full"></i>
              <div className="flex-col hidden lg:flex">
                <span className="text-base">Create an advertisement</span>
              </div>
            </div>
            {/* <span className='inline-block h-full w-[1px] bg-[var(--border)]'></span> */}
            <div className="flex items-center gap-5 px-2 xl:px-4">
              <i className="las la-user-plus bg-[var(--tertiary)] text-[var(--neutral-700)] text-4xl p-2 rounded-full"></i>
              <div className="flex-col hidden lg:flex">
                <span className="text-base">Post your requirement</span>
              </div>
            </div>
          </div>
          <NotificationDropdown />
          <ProfileDropdown />
        </div>
      </div>
    </>



  );
};

export default HeaderTop;

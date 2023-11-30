import CustomSwitch from "@/components/Switch";
import Link from "next/link";

const page = () => {
  return (
    <ul>
      <li>
        <div className="p-6 p-xl-10 rounded-2xl bg-white shadow-3">
          <h3 className="mb-0 h3 flex-grow"> Preferences </h3>
          <div className="hr-line my-6"></div>
          <form action="#" className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <label className="block mb-2 font-medium clr-neutral-500">
                Language :
              </label>
              <div className="border rounded-lg px-3 bg-transparent">
                <select
                  className="w-full bg-transparent px-5 py-3 focus:outline-none"
                  aria-label="Default select example">
                  <option>Select Language</option>
                  <option value="1">English</option>
                  <option value="2">Bangla</option>
                  <option value="3">Arabic</option>
                </select>
              </div>
            </div>
            <div className="col-span-12">
              <label
                htmlFor="time-zone"
                className="block mb-2 font-medium clr-neutral-500">
                Time zone :
              </label>
              <input
                type="text"
                id="time-zone"
                className="w-full border focus:outline-none py-3 px-6 rounded-lg"
                placeholder="GMT+01:00"
              />
            </div>
            <div className="col-span-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex-grow">
                  <h5 className="font-semibold mb-1"> Early release </h5>
                  <p className="mb-0 clr-neutral-500">
                    Get included on early releases for new Front features.
                  </p>
                </div>
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex-grow">
                  <h5 className="font-semibold mb-1">
                    See info about people who view my profile
                  </h5>
                  <p className="mb-0 text-primary font-semibold">
                    More about viewer info
                  </p>
                </div>
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="#"
                  className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                  Update Password
                </Link>
                <Link
                  href="#"
                  className="btn-outline text-primary font-semibold">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </li>
    </ul>
  );
};

export default page;

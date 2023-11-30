"use client";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import { SearchIcon } from "@/public/data/icons";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { taxdata } from "@/public/data/taxData";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Withdraw Earn</h2>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12 lg:col-span-6">
          <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <h3 className="border-b h3 pb-6">Calculate</h3>
            <form className="grid grid-cols-2 gap-3 gap-x-6 ">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Date :
                </label>
              </div>
              <div className="col-span-2 md:col-span-1 pb-3 md:pb-0">
                <input
                  type="text"
                  id="name"
                  placeholder="Start Date"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  type="text"
                  id="name"
                  placeholder="End Date"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-2 flex gap-3">
                <button type="submit" className="btn-primary mt-5 lg:mt-7">
                  Check
                </button>
                <button type="submit" className="btn-outline mt-5 lg:mt-7">
                  Reset
                </button>
              </div>
              <div className="col-span-2 flex flex-col gap-3 mt-6">
                <p>Total Earning : $94.80000000000001</p>
                <p>Current Month Earning : 0</p>
                <p>Last 30 Days Earning : 0</p>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
          <div className="flex flex-wrap gap-3 justify-between mb-7">
            <div className="flex items-center flex-wrap gap-3">
              <form className="border rounded-full pr-3 xl:pr-4 bg-[var(--bg-1)]">
                <select className="p-3 bg-transparent xl:pl-4 min-w-[160px] rounded-full focus:outline-none">
                  <option value="1">Bulk Actions</option>
                  <option value="2">Delete</option>
                  <option value="3">Publish</option>
                </select>
              </form>
              <button className="btn-primary">Apply</button>
            </div>
            <form className="flex flex-wrap items-center gap-3">
              <div className="border rounded-full flex items-center p-1 pr-2 xl:pr-4 bg-[var(--bg-1)]">
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-full bg-transparent focus:outline-none p-2 xl:px-4"
                />
                <SearchIcon />
              </div>
            </form>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-left bg-[var(--bg-1)] border-b border-dashed">
                  <th className="py-3 font-medium lg:py-4 px-2">
                    Order Number
                  </th>
                  <th className="py-3 font-medium lg:py-4 px-2">TxnId</th>
                  <th className="py-3 font-medium lg:py-4 px-2">Tax</th>
                  <th className="py-3 font-medium lg:py-4 px-2">
                    Tax Location
                  </th>
                  <th className="py-3 font-medium lg:py-4 px-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                {taxdata.map(
                  ({ id, createdAt, location, orderNumber, tax, txnId }) => (
                    <tr
                      key={id}
                      className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                      <td className="py-3 lg:py-4 px-2">{orderNumber}</td>
                      <td className="py-3 lg:py-4 px-2">{txnId}</td>
                      <td className="py-3 lg:py-4 px-2">{tax}</td>
                      <td className="py-3 lg:py-4 px-2">{location}</td>
                      <td className="py-3 lg:py-4 px-2">{createdAt}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;

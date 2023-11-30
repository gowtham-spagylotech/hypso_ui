import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-3 sm:p-4 lg:p-6 p-xl-10 rounded-2xl bg-white shadow-3">
      <h3 className="mb-0 h3 flex-grow"> My Address </h3>
      <div className="hr-line my-6"></div>
      <div className="w-full overflow-x-auto">
        <table className="table w-full mb-0">
          <thead className="table-light bg-[var(--primary-light)] text-left">
            <tr>
              <th className="px-5 py-4 font-medium"> Name </th>
              <th className="px-5 py-4 font-medium"> Status </th>
              <th className="px-5 py-4 font-medium"> Access </th>
              <th className="px-5 py-4 font-medium"> Action </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={96}
                      height={96}
                      src="/img/user-1.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Jenny Wilson{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      debra@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-user-lock"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-2.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Annette Black{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-3.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Courtney Henry{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[var(--tertiary)] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Inactive</option>
                    <option value="1">Active</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-4.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Cody Fisher{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-5.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Darlene Robertson{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-6.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Savannah Nguyen{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-1.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Jenny Wilson{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      debra@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-user-lock"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-2.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Annette Black{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-3.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Courtney Henry{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[var(--tertiary)] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Inactive</option>
                    <option value="1">Active</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-4.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Cody Fisher{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none  border-0 shrink-0 min-w-[70px]">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-5.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Darlene Robertson{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/img/user-6.jpg"
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="mb-1 text-xl font-semibold">
                      {" "}
                      Savannah Nguyen{" "}
                    </h5>
                    <span className="block text-xs clr-neutral-500">
                      michelle.@mail.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <div className="w-1 h-1 rounded-full bg-[#37D27A] shrink-0"></div>
                  <select className="w-full bg-transparent  focus:outline-none">
                    <option>Active</option>
                    <option value="1">Inactive</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <div className="inline-flex justify-center gap-2 items-center py-2 px-4 rounded-full border border-neutral-600 text-center">
                  <select className="w-full bg-transparent  focus:outline-none">
                    <option>Admin</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                  </select>
                </div>
              </td>
              <td className="px-5 py-3">
                <Link
                  href="#"
                  className="link inline-block text-center clr-neutral-500 hover:text-primary p-2 lh-1">
                  <i className="text-xl las la-trash-alt"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="hr-line my-6"></div>
      <div className="flex items-center gap-6 flex-wrap">
        <Link
          href="#"
          className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
          Save Changes
        </Link>
        <Link href="#" className="btn-outline text-primary font-semibold">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default page;

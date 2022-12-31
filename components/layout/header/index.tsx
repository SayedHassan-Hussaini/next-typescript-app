import { Fragment} from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const PageHeader = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
        <div className="flex flex-1 justify-between px-4">
          <div className="flex flex-1"></div>
          <div className="ml-4 flex items-center md:ml-6">
            {/* lan */}
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-10 mr-5">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <img
                    id="user-profile-photo"
                    className="w-10 h-10 rounded-full"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVBDRLS_H6nlLvURXVQ2YRSG9WEYzlVjjXHjxBefXvg&s"
                    }
                    alt="user avatar"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute -left-[70px] z-10 mt-2 w-[140px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <>
                      <Link
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 flex gap-3 cursor-pointer"
                        href="/user/profile"
                      >
                        Profile
                      </Link>
                      <button className="px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-200  flex gap-3 cursor-pointer">
                        Sign Out
                      </button>
                    </>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageHeader;

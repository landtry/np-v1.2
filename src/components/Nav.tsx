/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Avatar from "../icons/AvatarIcon";
import { signOut, useSession } from "next-auth/react";
import Logo from "../icons/Logo";
import MenuArrowIcon from "../icons/MenuArrowIcon";
import DownArrowIcon from "../icons/DownArrowIcon";
import NavLoader from "./NavLoader";
import { trpc } from "../utils/trpc";
import Link, { type LinkProps } from "next/link";
import ActiveLink from "./ActiveLink";

const navigation = [{ name: "Dashboard", href: "/" }];
const userNavigation = [
  { name: "Your Profile", href: "#", onClick: () => "" },
  { name: "Settings", href: "#", onClick: () => "" },
  { name: "Sign out", href: "#", onClick: () => signOut() },
];

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { status, data } = trpc.useQuery(["auth.getSession"]);

  // const data = null;

  if (!data) {
    return <NavLoader />;
  }

  return (
    <Disclosure
      as="nav"
      className="bg-white fixed top-0 w-screen border-b border-b-custom-slate-300 z-40">
      {({ open }: { open: boolean }) => (
        <>
          <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-6 ">
            <div className="flex justify-between h-16 lg:h-18">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Logo view="mobile" />
                  <Logo view="desktop" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:ml-0 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <ActiveLink
                      key={item.name}
                      href={item.href}
                      activeClassName="bg-custom-slate-200 hover:text-custom-slate-900">
                      <a className="px-5 py-3 rounded-full text-base font-bold text-custom-slate-900 hover:bg-custom-slate-200">
                        {item.name}
                      </a>
                    </ActiveLink>
                  ))}
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="m-5 relative ">
                    <div>
                      <Menu.Button className="bg-white flex items-center text-sm rounded-full h-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-custom-blue">
                        <span className="sr-only">Open user menu</span>
                        <span className=" ml-3 text-base font-bold">
                          Entities
                        </span>
                        <DownArrowIcon />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-90"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-90">
                      <Menu.Items className="origin-top-right absolute -left-12 mt-2 w-48 top-12 rounded-br rounded-bl shadow-custom py-1 bg-custom-blue ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuArrowIcon />
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }: { active: boolean }) => (
                              <Link href={item.href}>
                                <a className="block px-4 py-1 text-sm text-custom-slate-100 bg-custom-blue hover:bg-custom-blue-400">
                                  {item.name}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white flex items-center text-sm rounded-full h-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-custom-blue">
                        <span className="sr-only">Open user menu</span>
                        <Avatar image={data?.user?.image ?? ""} />
                        <span className=" ml-3 text-base font-bold">
                          {data?.user?.name ?? ""}
                        </span>
                        <DownArrowIcon />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 top-12 rounded-br rounded-bl shadow-custom py-1 bg-custom-blue ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuArrowIcon />
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }: { active: boolean }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-custom-blue-400" : "",
                                  "block px-4 py-1 text-sm text-custom-slate-100 w-full"
                                )}>
                                <span
                                  onClick={() => item.onClick()}
                                  className="w-full">
                                  {item.name}
                                </span>
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-full text-slate-400  hover:bg-custom-slate-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={""}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-custom-slate-300">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0 flex items-center">
                  <Avatar image={data?.user?.image ?? ""} />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-slate-800">
                    {data?.user?.name}
                  </div>
                  <div className="text-sm font-medium text-slate-800">
                    {data?.user?.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-slate-400  hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1 sm:px-3">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-full text-base font-medium text-slate-800 hover:bg-custom-slate-200">
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { PageProps } from "@/types";
import { linksByRole } from "@/utils/roleLinks";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";

export default function NewLayout({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage<PageProps>().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const links = linksByRole[user.idRol] || []
    return (
        <div className="min-h-screen bg-gray-50 ">
            <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="flex flex-col justify-center">
                                    <ApplicationLogo className="block h-12 w-auto fill-current text-yellow-300" />
                                    <span className="text-xl font-bold">SuperBill</span>
                                </Link>
                            </div>
                            <div className="hidden space-x-6 sm:ml-10 sm:flex">
                                {links.map((link) => (
                                    <NavLink
                                        key={link.route}
                                        href={route(`${link.route}`)}
                                        active={route().current(`${link.route}`)}
                                        className="rounded-md px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-blue-700 hover:text-yellow-200"
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                            >
                                                {user.name}
                                                <svg
                                                    className="-mr-1 ml-2 h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        {user.idRol === 1 && (
                                            <Dropdown.Link
                                                href={route('profile.edit')}
                                                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                                            >
                                                Profile
                                            </Dropdown.Link>
                                        )}
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown((prev) => !prev)
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden bg-blue-700'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        {links.map((link) => (
                            <ResponsiveNavLink
                                key={link.route}
                                href={route(`${link.route}`)}
                                active={route().current(`${link.route}`)}
                                className="block px-4 py-2 text-white hover:bg-blue-900"
                            >
                                {link.label}
                            </ResponsiveNavLink>
                        ))}
                    </div>

                    <div className="border-t border-blue-600 pb-3 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-white">{user.name}</div>
                            <div className="text-sm text-blue-200">{user.email}</div>
                        </div>
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                href={route('profile.edit')}
                                className="block px-4 py-2 text-white hover:bg-blue-900"
                            >
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                                className="block w-full text-left px-4 py-2 text-white hover:bg-blue-900"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="py-6 h-[calc(100vh-5rem)]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
        </div>
    )
}

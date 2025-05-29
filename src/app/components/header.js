"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, Menu } from "lucide-react"; // Optional: using Lucide icons

export default function Header() {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const paths = {
        "Home": "/",
        "About Us": "/about",
        "Our Services": "/services",
        "Contact": "/contact",
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Top Header */}
            <header className="fixed top-0 left-0 w-full bg-white shadow-md h-20 p-5 md:pl-20 md:pr-20 flex items-center justify-between z-50">
                <div className="logo flex items-center gap-3 text-2xl font-bold text-title font-extrabold tracking-wide animate-fadeIn">
                    <Link href="/" passHref>
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/logo.webp"
                                alt="Nailed It Construction Logo"
                                width={50}
                                height={50}
                                className="animate-scaleIn"
                            />
                            <span className="title cursor-pointer">True Set General Contracting</span>
                        </div>
                    </Link>
                </div>
                <nav className="hidden lg:flex gap-10">
                    {Object.entries(paths).map(([label, href]) => (
                        <Link
                            key={label}
                            href={href}
                            className={`font-bold ${pathname === href ? "text-title" : "text-passive"} hover:text-title transition-colors duration-300`}
                        >
                            {label.toUpperCase()}
                        </Link>
                    ))}
                </nav>
                {/* Hamburger button */}
<button className="lg:hidden" onClick={toggleSidebar} aria-label="Open menu">
    <svg
        className="w-8 h-8 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
</button>

            </header>

            {/* Sidebar Overlay */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-5 border-b">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={toggleSidebar}>
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col p-5 gap-6">
                    {Object.entries(paths).map(([label, href]) => (
                        <Link
                            key={label}
                            href={href}
                            className={`font-bold ${
                                pathname === href ? "text-title" : "text-passive"
                            } hover:text-title transition-colors duration-300`}
                            onClick={() => setSidebarOpen(false)}
                        >
                            {label.toUpperCase()}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Background overlay when sidebar is open */}
            {sidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
                />
            )}
        </>
    );
}

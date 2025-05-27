"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const pathname = usePathname();

    const paths = {
        "Home": "/",
        "About Us": "/about",
        "Our Services": "/services",
        "Contact": "/contact",
    };

    return (
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
            <nav>
                <ul className="gap-10 hidden lg:flex">
                    {Object.entries(paths).map(([label, href], index) => (
                        <li 
                            key={label} 
                            className={`animate-fadeIn delay-${index}`}
                        >
                            <Link 
                                href={href} 
                                className={`font-bold ${pathname === href ? 'text-title' : 'text-passive'} hover:text-title transition-colors duration-300`}
                            >
                                {label.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="lg:hidden animate-fadeIn">
                <Image
                    width={30}
                    height={30}
                    src="/images/hamburger-menu.png"
                    alt="Menu"
                />
            </button>
        </header>
    );
}
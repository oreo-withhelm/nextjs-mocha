"use client"
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h2 className="text-2xl font-bold mb-4">True Set General Contracting</h2>
                    <p className="text-gray-400">
Delivering top-quality concrete solutions for residential customers. From pool decks to durable driveways, we build with strength and lasting beauty.                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
                        <li><Link href="/services" className="hover:text-yellow-500 transition">Services</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-500 transition">About</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                    <p className="text-gray-400 mt-2">Email: <a href="mailto:truesetcontracting@gmail.com" className="hover:text-yellow-500">truesetcontracting@gmail.com</a></p>
                    <p className="text-gray-400">Phone: <a href="tel:+1(647)781-0017" className="hover:text-yellow-500">+1 (647) 781-0017</a></p>

                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com/truesetgeneralcontracting/" aria-label="Facebook" className="hover:text-yellow-500"><FaFacebookF /></a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} True Set General Contracting. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

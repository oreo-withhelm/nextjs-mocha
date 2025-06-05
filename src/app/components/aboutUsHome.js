"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
    return (
        <section className="bg-white py-32 px-4 sm:px-6 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 data-animate="fadeRight" className="start-invisible text-4xl font-extrabold text-gray-900 mb-6">
                        About Us
                    </h2>
                    <p data-animate="fadeRight" className="start-invisible text-lg text-gray-700 leading-relaxed">
With over 30 years of experience, we take immense pride in the quality of our work. Specializing in customer satisfaction, we deliver everything from broom finish to stamped concrete with color — ensuring every project is both beautiful and durable.


                    </p>

                    <p data-animate="fadeRight" className="start-invisible mt-4 text-lg text-gray-700 leading-relaxed">
We are a dedicated team of concrete, fencing, and decking specialists committed to craftsmanship and excellence. Whether it’s a backyard walkway, a decorative patio, or a custom fence, we build with precision and pride. Our mission is to bring your vision to life — combining strength, style, and lasting results.

                    </p>
                                        <p data-animate="fadeRight" className="start-invisible mt-4 text-lg text-gray-700 leading-relaxed">
Based in Hamilton, we’ve helped hundreds of homeowners and contractors transform their outdoor spaces with dependable service and thoughtful design.


                    </p>
                    <div data-animate="fadeIn" className="start-invisible flex justify-end">
                        <Link href="/contact" passHref>
                            <button className="cursor-pointer mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-300 text-black font-semibold rounded-xl transition duration-300">
                            CONTACT
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="delay-1 relative h-[500px] w-full" >
                    <div data-animate="fadeInUp" className="start-invisible absolute top-0 left-1/2 transform -translate-x-1/2 hover:scale-105 transition-transform duration-300 shadow-xl rounded-xl overflow-hidden w-40 h-40">
                        <Image
                            src="/images/portfolio/1.webp"
                            alt="Concrete Work 1"
                            fill
                            className="object-cover"
                            quality={10}
                        />
                    </div>

                    <div data-animate="fadeInUp" className="start-invisible delay-1 absolute top-32 left-1/4 transform -translate-x-1/2 hover:scale-105 transition-transform duration-300 shadow-xl rounded-xl overflow-hidden w-40 h-60">
                        <Image
                            src="/images/portfolio/2.webp"
                            alt="Concrete Work 2"
                            fill
                            className="object-cover"
                            quality={3}
                        />
                    </div>

                    <div data-animate="fadeInUp" className="start-invisible delay-2 absolute top-64 left-2/3 transform -translate-x-1/2 hover:scale-105 transition-transform duration-300 shadow-xl rounded-xl overflow-hidden w-48 h-48">
                        <Image
                            src="/images/portfolio/3.webp"
                            alt="Concrete Work 3"
                            fill
                            className="object-cover"
                            quality={10}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

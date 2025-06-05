"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const reviews = [
    {
        name: "Sarah M.",
        role: "Concreted Pool",
        image: "/images/logo.webp",
        text: "They turned our backyard into a dream oasis with the pool installation. Quality work and great team energy!",
        rating: "★★★★★",
    },
    {
        name: "James T.",
        role: "Concreted Pool",
        image: "/images/logo.webp",
        text: "They turned our backyard into a dream oasis with the pool installation. Quality work and great team energy!",
        rating: "★★★★★",
    },
    {
        name: "Linda K.",
        role: "Concreted Pool",
        image: "/images/logo.webp",
        text: "They turned our backyard into a dream oasis with the pool installation. Quality work and great team energy!",
        rating: "★★★★★",
    },
    {
        name: "Brian G.",
        role: "Concreted Pool",
        image: "/images/logo.webp",
        text: "They turned our backyard into a dream oasis with the pool installation. Quality work and great team energy!",
        rating: "★★★★★",
    },
];

const Reviews = () => {
    const [itemsPerView, setItemsPerView] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        const maxIndex = reviews.length;
        const newIndex = (currentIndex + itemsPerView) % maxIndex;
        setCurrentIndex(newIndex);
    };

    const handlePrev = () => {
        const maxIndex = reviews.length;
        const newIndex =
            (currentIndex - itemsPerView + maxIndex) % maxIndex;
        setCurrentIndex(newIndex);
    };

    const getVisibleReviews = () => {
        const visible = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % reviews.length;
            visible.push(reviews[index]);
        }
        return visible;
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Client Reviews</h2>
                <p className="text-xl text-gray-600">Hear from our customers.</p>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="flex space-x-4 justify-center transition-all duration-500">
                    {getVisibleReviews().map((review, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-xl p-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-between text-left shadow-md"
                        >
                            <div className="flex items-center mb-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                    <div className="text-yellow-400 text-sm mt-1">
                                        {review.rating}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-base">“{review.text}”</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black z-20 left-2 lg:-left-14"
                    aria-label="Previous review"
                >
                    &#10094;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black z-20 right-2 lg:-right-14"
                    aria-label="Next review"
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default Reviews;

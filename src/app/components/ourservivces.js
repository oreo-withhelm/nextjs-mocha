"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import services from "@/app/util/services.json";

const OurServices = () => {
    const [itemsPerView, setItemsPerView] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

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

        handleResize(); // Initial call
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Recalculate currentIndex when itemsPerView changes to prevent out-of-bounds
    useEffect(() => {
        setCurrentIndex(0); // Reset to first page when view mode changes
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: "auto" }); // Use auto for immediate jump
        }
    }, [itemsPerView]);


    const scrollToIndex = (index) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Ensure index is within bounds
        const maxPossibleIndex = Math.max(0, services.length - itemsPerView);
        const targetIndex = Math.min(Math.max(0, index), maxPossibleIndex);
        
        // Calculate scroll position more robustly
        // This assumes all items have roughly the same width within the flex container
        const scrollableWidth = carousel.scrollWidth - carousel.offsetWidth;
        const maxItemIndex = services.length - itemsPerView;
        
        let scrollLeft = 0;
        if (maxItemIndex > 0) { // Avoid division by zero if not enough items to scroll
            scrollLeft = (targetIndex / maxItemIndex) * scrollableWidth;
        }


        carousel.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
        });

        setCurrentIndex(targetIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex + 1; // Scroll one item at a time for smoother feel
        // Or scroll by itemsPerView: const newIndex = currentIndex + itemsPerView;
        const maxIndex = services.length - itemsPerView;
        scrollToIndex(newIndex > maxIndex ? 0 : newIndex); // Loop to start
    };

    const handlePrev = () => {
        const newIndex = currentIndex - 1; // Scroll one item at a time
        // Or scroll by itemsPerView: const newIndex = currentIndex - itemsPerView;
        const maxIndex = services.length - itemsPerView;
        scrollToIndex(newIndex < 0 ? maxIndex : newIndex); // Loop to end
    };

    const totalPages = Math.ceil(services.length / itemsPerView);
    // Current page for pagination dots, ensures it aligns with how user perceives pages
    const currentPage = Math.floor(currentIndex / itemsPerView);


    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden"> {/* Changed bg to slate-50 for a slightly cooler tone */}
            <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
                <h2
                    data-animate="fadeIn"
                    // Removed rounded-lg and p-2 from h2 as it's unusual for a title
                    className="start-invisible text-4xl font-bold text-slate-900 sm:text-5xl tracking-tight" // Bolder, tighter tracking
                >
                    Our Expert Services
                </h2>
                <p data-animate="fadeIn" className="start-invisible mt-4 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto"> {/* Slightly larger, constrained width */}
                    Comprehensive concrete and landscaping solutions for every need, from elegant pools to durable driveways.
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Removed shadow from this outer container, will apply to cards for better depth */}
                <div className="start-invisible overflow-hidden rounded-xl" 
                     data-animate="fadeInUp">
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar" // Added no-scrollbar utility if you want to hide it
                        // Style to hide scrollbar (add this to your global CSS if 'no-scrollbar' doesn't work):
                        // .no-scrollbar::-webkit-scrollbar { display: none; }
                        // .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 snap-start px-2 py-2 sm:px-3 ${ // Added small py-2 for spacing if cards have shadow
                                    itemsPerView === 1
                                        ? "w-full"
                                        : itemsPerView === 2
                                            ? "w-1/2"
                                            : "w-1/3"
                                    }`}
                            >
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full overflow-hidden"> {/* Added shadow here, hover effect */}
                                    <div className="relative w-full h-72 sm:h-80"> {/* Adjusted height slightly */}
                                        <Image
                                            src={service.imageUrl || "/placeholder-image.jpg"} // Added placeholder
                                            alt={service.title}
                                            layout="fill"
                                            objectFit="cover"
                                            // className="rounded-t-xl" // Image is flush, rounding on parent
                                        />
                                    </div>
                                    <div className="p-6 text-center flex-grow flex flex-col">
                                        <h3 className="text-2xl font-semibold text-slate-800 mb-3"> {/* Adjusted margin */}
                                            {service.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-grow mb-4"> {/* Smaller base text for description */}
                                            {service.description}
                                        </p>
                                        {/* Optional: Add a "Learn More" button or link here */}
                                        {/* <a href="#" className="mt-auto inline-block bg-yellow-500 text-slate-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors">Learn More</a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Improved Arrow Button Styling & Positioning */}
                {services.length > itemsPerView && ( // Only show arrows if there's something to scroll
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute top-1/2 -translate-y-1/2 bg-white/70 text-slate-700 p-3 rounded-full hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 z-20
                            left-4 md:left-0 lg:-left-5 transform" // Adjusted positioning
                            aria-label="Previous service"
                            data-animate="fadeInUp" // Assuming this handles delayed appearance
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 -translate-y-1/2 bg-white/70 text-slate-700 p-3 rounded-full hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 z-20
                            right-4 md:right-0 lg:-right-5 transform" // Adjusted positioning
                            aria-label="Next service"
                            data-animate="fadeInUp"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Pagination Dots - Improved Styling */}
             {services.length > itemsPerView && ( // Only show dots if there's more than one effective page
                <div className="flex justify-center mt-10 space-x-3" // Increased spacing
                    data-animate="fadeInUp"
                >
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <button
                            key={pageIndex}
                            onClick={() => scrollToIndex(pageIndex * itemsPerView)}
                            className={`w-3 h-3 rounded-full ${currentPage === pageIndex // Use currentPage for active state
                                    ? "bg-yellow-500 scale-110" // Active dot larger
                                    : "bg-slate-300 hover:bg-slate-400"
                                } transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400`}
                            aria-label={`Go to page ${pageIndex + 1}`}
                            aria-current={currentPage === pageIndex ? "page" : undefined}
                        ></button>
                    ))}
                </div>
            )}
        </section>
    );
};

export default OurServices;
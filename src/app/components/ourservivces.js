"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import services from "@/app/util/services.json"
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

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const scrollToIndex = (index) => {
		const carousel = carouselRef.current;
		if (!carousel) return;

		const itemWidth = carousel.offsetWidth / itemsPerView;
		carousel.scrollTo({
			left: index * itemWidth,
			behavior: "smooth",
		});

		setCurrentIndex(index);
	};

	const handleNext = () => {
		const maxIndex = services.length - itemsPerView;
		const newIndex = currentIndex + itemsPerView > maxIndex ? 0 : currentIndex + itemsPerView;
		scrollToIndex(newIndex);
	};

	const handlePrev = () => {
		const maxIndex = services.length - itemsPerView;
		const newIndex = currentIndex - itemsPerView < 0 ? maxIndex : currentIndex - itemsPerView;
		scrollToIndex(newIndex);
	};

	const totalPages = Math.ceil(services.length / itemsPerView);

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto text-center mb-12">
				<h2 
				data-animate="fadeIn"
				className="start-invisible text-4xl font-extrabold text-gray-900 sm:text-5xl rounded-lg p-2">
					Our Services
				</h2>
				<p data-animate="fadeIn" className="start-invisible mt-4 text-xl text-gray-600">
					Comprehensive concrete solutions for every need, from pools to driveways.
				</p>
			</div>

			<div className="relative max-w-7xl mx-auto">
				<div className="start-invisible overflow-hidden rounded-xl shadow-lg"
					data-animate="fadeInUp">
					<div
						ref={carouselRef}
						className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
					>
						{services.map((service, index) => (
							<div
								key={index}
								className={`flex-shrink-0 snap-start px-2 sm:px-4 ${itemsPerView === 1
									? "w-full"
									: itemsPerView === 2
										? "w-1/2"
										: "w-1/3"
									}`}
							>
								<div className="bg-white rounded-xl overflow-hidden flex flex-col h-full">
									<div className="relative w-full h-80">
										<Image
											src={service.imageUrl}
											alt={service.title}
											layout="fill"
											objectFit="cover"
											className="rounded-t-xl"
										/>
									</div>
									<div className="p-6 text-center flex-grow flex flex-col justify-between">
										<h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
											{service.title}
										</h3>
										<p className="text-base sm:text-lg text-gray-700 leading-relaxed">
											{service.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<button
					onClick={handlePrev}
					className="absolute top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black z-20
                left-2 lg:-left-14"
					aria-label="Previous service"
					data-animate="fadeInUp"
				>
					&#10094;
				</button>
				<button
					onClick={handleNext}
					className="absolute top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black z-20
                right-2 lg:-right-14"
					aria-label="Next service"
					data-animate="fadeInUp"
				>
					&#10095;
				</button>

			</div>

			<div className="flex justify-center mt-8 space-x-2"
				data-animate="fadeInUp"
			>
				{Array.from({ length: totalPages }).map((_, pageIndex) => (
					<button
						key={pageIndex}
						onClick={() => scrollToIndex(pageIndex * itemsPerView)}
						className={`w-3 h-3 rounded-full ${currentIndex >= pageIndex * itemsPerView &&
							currentIndex < (pageIndex + 1) * itemsPerView
							? "bg-yellow-500"
							: "bg-gray-300 hover:bg-gray-400"
							} transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
						aria-label={`Go to page ${pageIndex + 1}`}
					></button>
				))}
			</div>
		</section>
	);
};

export default OurServices;

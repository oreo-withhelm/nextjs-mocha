import services from "@/app/util/services.json";
import Image from "next/image";

export default function ServicesOne() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto space-y-16">
                {services.map((data, index) => (
                    <div key={index} className="text-center">
                        <h2
                            data-animate="fadeIn"
                            className="start-invisible text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
                        >
                            {data.title}
                        </h2>
                        <p
                            data-animate="fadeIn"
                            className="start-invisible text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            {data.description}
                        </p>
                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {data.images.map((image, imageIndex) => (
                            <div
                            data-animate="fadeInUp"
                            key={imageIndex}
                            className="relative w-full aspect-[1/1] start-invisible bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                            <Image
                                alt={data.title}
                                fill
                                src={image}
                                className="rounded object-cover"
                                quality={10}
                            />
                            </div>
                        ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

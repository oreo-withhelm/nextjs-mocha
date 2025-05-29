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
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {data.images.map((image, imageIndex) => (
                                <div
                                    data-animate="fadeInUp"
                                    key={imageIndex}
                                    className="start-invisible bg-white p-1 md:p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <Image
                                        alt={data.title}
                                        width={100}
                                        height={100}
                                        src={image}
                                        className="object-contain w-full h-auto rounded"
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

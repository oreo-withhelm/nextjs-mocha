import OurServices from "./components/ourservivces"
import AboutUS from "./components/aboutUsHome"
import Reviews from "./components/reviews"
import Link from 'next/link';

export default function Home() {
	return <div>
		<div className="relative h-[100dvh] overflow-hidden">
			<div
				className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center"
				style={{ backgroundImage: "url('/images/hero.webp')" }}
			/>

			<div className="relative z-10 h-full flex items-center justify-center px-4 py-8">
				<div className="animate-fadeInUp bg-black/60 p-6 md:p-10 rounded-2xl flex flex-col items-center backdrop-blur-md gap-4 md:gap-6 max-w-2xl w-full">
					<h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
						Beautiful & Durable Concrete Solutions
					</h1>
					<h4 className="text-gray-300 text-base sm:text-lg md:text-xl font-semibold text-center">
						Transforming Toronto homes with expert craftsmanship.
					</h4>
					<Link href="/contact" passHref>
						<button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-300 cursor-pointer text-black font-semibold rounded-xl transition duration-300">
							GET A FREE QUOTE
						</button>
					</Link>
				</div>
			</div>
		</div>

		<AboutUS />
		<OurServices />

		<Reviews />
	</div>
}

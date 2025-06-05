export default function Contact() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a question, project, or just want to connect? Fill out the form and we’ll get back to you shortly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6 text-left text-gray-700">
                        <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
                        <div className="space-y-2 text-lg">
                            <p><span className="font-medium">Phone:</span> (123) 456-7890</p>
                            <p><span className="font-medium">Email:</span> truesetcontracting@gmail.com</p>
                            <p><span className="font-medium">Address:</span> +1 (647) 781-0017</p>
                        </div>
                    </div>

                    <form 
                    action="https://formspree.io/f/xnnvaank" 
                    method="POST" 
                    className="space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="text-black mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="_replyto"
                                required
                                className="text-black mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="text-black mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

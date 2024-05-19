/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-teal-400'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.mensxp.com/media/content/2021/Jun/Indian-Men-Who-Have-A-Superbly-Paying-High-Profile-Job-Abroad-1200x900_60caf58f741d9.jpeg" />
                                <p className="leading-relaxed">I have been a loyal customer of GardenGrown Farming Supplies for over five years, and I cannot recommend them highly enough! As a small-scale household, finding quality products at reasonable prices is crucial for the success of my business. GardenGrown consistently provides a wide selection of high-quality fruits, vegetables, and farming products that meet all my needs</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sundar Pichai</h2>
                                <p className="text-gray-500">Software developer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.forbesindia.com/media/wpower_2021/Arundhati-Bhattacharya.jpg" />
                                <p className="leading-relaxed">One of the things I appreciate most is their commitment to sustainability. They offer a great range of eco-friendly products, which align perfectly with my farming practices. Knowing that I can rely on them for both traditional and innovative farming supplies gives me peace of mind.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Archana Singh</h2>
                                <p className="text-gray-500">Businesswoman</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa" />
                                <p className="leading-relaxed">Shipping is always prompt, and I love that they often have special deals and discounts that help me stay within my budget. Thanks to GardenGrown, my farm has thrived, and I've been able to produce healthier, more abundant crops each season.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rohit Mehra</h2>
                                <p className="text-gray-500">Real estate agent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
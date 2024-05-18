const Track = () => {
    return (
        <section>
            <div className=" container mx-auto px-5 py-10 md:py-14">
                {/* main  */}
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Track 1 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <svg className="text-green-600 w-12 h-12 mb-3 inline-block" xmlns="data:image/png;base64,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" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            <h2 className="title-font font-medium text-lg text-gray-900" >Organic products</h2>
                            <p className="leading-relaxed">Our groceries are 100% grown using natural fertilizers
                            </p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <svg className="text-green-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            <h2 className="title-font font-medium text-lg text-gray-900" >Ontime Delivery</h2>
                            <p className="leading-relaxed">Our delivery parters provide ontime deliveries.
                            </p>
                        </div>
                    </div>

                    {/* Track 3  */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <svg className="text-green-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            <h2 className="title-font font-medium text-lg text-gray-900" >Customer care</h2>
                            <p className="leading-relaxed">Every customer is provided a dedicated customer care support
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Track;

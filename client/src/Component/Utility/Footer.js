import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="container px-8 py-8 mt-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64  px-8 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">


                        <h1 className=" text-2xl font-bold font-header">Kustom Parts</h1>
                        <p className="mt-2 text-sm text-gray-500 font-header">Biker Bred , Baked Bike</p>
                        <p className="mt-2 text-sm text-gray-500"></p>
                        <p className="leading-normal my-5">Sector No. 3
                            <br />MP Coloney, BKN 334004
                        </p>

                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Get In Touch With Us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href='mailto:partskustom@gmail.com' className="text-gray-600 hover:text-gray-800 text-indigo-500">Mail Us</a>
                                </li>
                                <li>
                                    <a className="text-indigo-500">9672313305</a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Engine Oil</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href="/category/motul engine oil" className="text-gray-600 hover:text-gray-800">Motul</a>
                                </li>
                                <li>
                                    <a href="/category/castrol engine oil" className="text-gray-600 hover:text-gray-800">Castrol</a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Spare Parts</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href="/category/chain clean" className="text-gray-600 hover:text-gray-800">Chain Clean</a>
                                </li>
                                <li>
                                    <a href="/category/chain lube" className="text-gray-600 hover:text-gray-800">Chain Lube</a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Other Useful links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href='/about' className="text-gray-600 hover:text-gray-800">About us</a>
                                </li>
                                <li>
                                    <a href='/privacypolicy' className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href='/returnpolicy' className="text-gray-600 hover:text-gray-800">Return Policy</a>
                                </li>
                                <li>
                                    <a href='/shippingpolicy' className="text-gray-600 hover:text-gray-800">Shipping Policy</a>
                                </li>
                                <li>
                                    <a href='/t&c' className="text-gray-600 hover:text-gray-800">Terms & Conditions</a>
                                </li>


                            </nav>
                        </div>


                    </div>
                </div>

                <div className="bg-gray-100">
                    <div className="container mx-auto  py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 Kustom Parts  </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">


                            <a href="https://www.instagram.com/kustomparts.in/" className="ml-3 text-gray-500 ">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>

                        </span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer

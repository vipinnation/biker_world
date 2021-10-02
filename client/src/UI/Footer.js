import React from 'react'
import logo from '../Assets/Images/kustomPartsLogo.png'

const Footer = () => {
    return (
        <footer class="bg-white">
            <div class="container mx-auto px-8">
                <div class="w-full flex flex-col md:flex-row py-6">
                    <div class="flex-1 mb-6 text-black">
                        <a class="text-indigo-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                            <img src={logo} alt="Kustom Parts" srcset="" class="w-1/2 inline" />
                        </a> <br />
                        <span>Biker Bred, Bike Baked</span>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Useful Links</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/about" class="no-underline hover:underline text-gray-800 hover:text-indigo-500">About</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/about" class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Help</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/about"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/t&c" class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Terms</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/privacy-policy"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Privacy Policy</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/shipping-policy"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Shipping Policy</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/return-policy"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Return Policy</a>
                            </li>

                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Social</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Facebook</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.instagram.com/kustomparts.in"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Instagram</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Company</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/blog"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Official
                                    Blog</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/about" class="no-underline hover:underline text-gray-800 hover:text-indigo-500">About
                                    Us</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/contact"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer

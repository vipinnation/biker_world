import React from 'react'
import logo from '../Assets/Images/kustomPartsLogo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="bg-white">
            <div class="container mx-auto px-8 bg-gray-200">
                <div class="w-full flex flex-col md:flex-row py-6">
                    <div class="flex-1 mb-6 text-black">
                        <NavLink class="text-indigo-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" exact to="/">
                            <img src={logo} alt="Kustom Parts" srcset="" class="w-1/2 inline" />
                        </NavLink> <br />
                        <span>Biker Bred, Bike Baked</span>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Useful Links</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/about" class="no-underline hover:underline text-gray-800 hover:text-indigo-500">About</NavLink>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/about" class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Help</NavLink>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/about"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Support</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/t&c" class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Terms</NavLink>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/privacy-policy"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Privacy Policy</NavLink>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/shipping-policy"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Shipping Policy</NavLink>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/return-policy"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Return Policy</NavLink>
                            </li>

                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Social</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Facebook</NavLink>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="https://www.instagram.com/kustomparts.in"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Instagram</NavLink>
                            </li>

                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Company</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Official
                                    Blog</NavLink>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/about" class="no-underline hover:underline text-gray-800 hover:text-indigo-500">About
                                    Us</NavLink>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <NavLink exact to="/about"
                                    class="no-underline hover:underline text-gray-800 hover:text-indigo-500">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer

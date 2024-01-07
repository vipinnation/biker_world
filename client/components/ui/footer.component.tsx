import images from "@/utils/images.service";
import Link from "next/link";
import React from "react";

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8 bg-gray-200">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <Link
              className="text-indigo-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              <img
                src={images.logo.src}
                alt="Kustom Parts"
                className="w-1/2 inline"
              />
            </Link>
            <br />
            <span>Biker Bred, Bike Baked</span>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Useful Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/about-us"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  About
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/about-us"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Help
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/about-us"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/terms-and-condition"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Terms
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/privacy-policy"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/shipping-policy"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Shipping Policy
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/return-policy"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Facebook
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="https://www.instagram.com/kustomparts.in"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Official Blog
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/about-us"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  About Us
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/about-us"
                  className="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

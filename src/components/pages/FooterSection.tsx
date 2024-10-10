import "remixicon/fonts/remixicon.css";
import React from "react";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 font-lexend overflow-h -mt-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                height={33}
                width={33}
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Portfolio Muhammad Shayan
              </span>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center -mt-1 flex justify-center">
            © 2024 All Rights Reserved.
          </span>
          <div className="flex mt-4 justify-center space-x-5 sm:mt-0">
            <a
              href="https://www.instagram.com/iamshayan40/"
              target="_blank"
              className="text-gray-400 hover:text-pink-500"
              aria-label="Instagram page"
            >
              <i className="ri-instagram-fill w-4 h-4"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556393203323"
              target="_blank"
              className="text-gray-400 hover:text-blue-600"
              aria-label="Facebook page"
            >
              <i className="ri-facebook-fill w-4 h-4"></i>
            </a>
            <a
              href="https://pk.linkedin.com/in/iamshayan40"
              target="_blank"
              className="text-gray-400 hover:text-blue-400"
              aria-label="LinkedIn account"
            >
              <i className="ri-linkedin-fill w-4 h-4"></i>
            </a>
            <a
              href="https://discord.com/channels/iamshayan_40"
              target="_blank"
              className="text-gray-400 hover:text-blue-600"
              aria-label="Discord server"
            >
              <i className="ri-discord-fill w-4 h-4"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-blue-400"
              aria-label="Twitter page"
            >
              <i className="ri-twitter-fill w-4 h-4"></i>
            </a>
            <a
              href="https://github.com/iamshayan40"
              target="_blank"
              className="text-gray-400 hover:text-white"
              aria-label="GitHub account"
            >
              <i className="ri-github-fill w-4 h-4"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

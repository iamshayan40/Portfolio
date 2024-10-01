"use client";
import Slider from "./slider";
import React, { FormEvent, useState } from "react";

const ContactSection = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "0041bd31-002d-4d90-8939-4858fe07d7ce");

    const object: Record<string, any> = Object.fromEntries(formData);
    const json: string = JSON.stringify(object);

    console.log("Submitting form with data:", json);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    console.log("Response received:", res);

    if (res.success) {
      console.log("Success", res);
      setButtonText("Submitted✅"); // Change button text to 'Submitted'
      setIsSubmitted(true); // Set submitted state to true
    } else {
      console.error("Error", res.message);
    }
  };

  return (
    <section id="contact" className="relative mt-20 md:mt-8">
      <div className="mt-16 md:mt-12">
        <Slider />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-between py-14 px-4">
        {/* Left Section */}
        <div className="md:w-1/2 grid grid-cols-1 items-start p-6 sm:p-10 md:p-0 font-lexend">
          <div>
            <h1 className="text-gray-100 text-4xl sm:text-5xl font-poppins font-bold">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Connect!
              </span>
            </h1>
            <p className="text-md text-gray-300 font-lexend font-extralight mt-4 max-w-[500px]">
              I'm passionate about transforming your vision into reality.
              Whether you're launching a new project or need expert assistance
              to enhance your existing brand, I'd love to hear about your ideas
              and provide the support you need. Let's collaborate to bring your
              project to life!
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-between">
              {/* Email Section */}
              <div className="mr-12 mb-6 sm:mb-0">
                <h2 className="text-gray-100 text-base font-lexend font-extralight">
                  Email
                </h2>
                <ul className="mt-4 flex items-center">
                  <li className="flex items-center">
                    <div className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#007bff"
                        viewBox="0 0 479.058 479.058"
                      >
                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                      </svg>
                    </div>
                    <a
                      href="mailto:shayanwaseem.50@gmail.com"
                      className="text-[#868686] text-sm ml-4 transition-colors duration-300 hover:text-blue-500"
                    >
                      <label className="block font-lexend font-light">
                        Email
                      </label>
                      <strong className="font-lexend font-light">
                        shayanwaseem.50@gmail.com
                      </strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between">
              {/* Contact Section */}
              <div className="mr-12 mb-6 sm:mb-0">
                <h2 className="text-gray-100 text-base font-lexend font-extralight">
                  Contact
                </h2>
                <ul className="mt-4 flex items-center">
                  <li className="flex items-center">
                    <div className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#007bff"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.16 14.21c-1.16-1.16-2.79-1.17-4.01-.09-.38.32-.85.54-1.36.63-.44.08-.89.16-1.33.23-.3.05-.6.12-.89.2-.6.15-1.25.08-1.82-.24-.91-.5-1.58-1.16-2.08-2.07-.36-.66-.57-1.39-.64-2.16-.08-.81.02-1.61.3-2.38.08-.22.15-.44.23-.66.09-.27.16-.55.23-.83.09-.4.09-.83-.05-1.23-.11-.32-.27-.62-.48-.89-.24-.3-.49-.59-.75-.89-.4-.46-.97-.67-1.57-.55-.73.14-1.31.56-1.86 1.04C1.73 4.39 1.19 5.44 1.05 6.63c-.17 1.36.1 2.66.58 3.9.56 1.43 1.33 2.73 2.31 3.95.97 1.22 2.11 2.28 3.36 3.17.97.69 2.02 1.24 3.13 1.63.97.34 1.97.59 2.99.66.97.07 1.93-.08 2.84-.43 1.12-.43 2.04-1.16 2.8-2.07.3-.35.55-.74.75-1.16.23-.49.28-.98.16-1.49-.11-.5-.38-.9-.78-1.28-.41-.41-.82-.82-1.24-1.24z" />
                      </svg>
                    </div>
                    <a
                      href="https://wa.me/923102017585"
                      className="text-[#868686] text-sm ml-4 transition-colors duration-300 hover:text-blue-500"
                    >
                      <label className="block font-lexend font-light">
                        Contact No.
                      </label>
                      <strong className="font-lexend font-light">
                        92 310 2017585
                      </strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-end ">
          <div className="bg-transparent border-2 border-zinc-800 p-4 rounded-2xl shadow-lg w-full max-w-md max-h-fit">
            <h2 className="flex justify-center text-gray-300 text-2xl sm:text-3xl font-light font-poppins">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ml-2">
                touch!
              </span>
            </h2>

            <form onSubmit={onSubmit} className="mt-4">
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-light font-lexend mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border-2 border-zinc-800 rounded w-full py-2 px-3 bg-transparent text-gray-100 font-light font-lexend leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name" // Added name attribute
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-light font-lexend mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border-2 border-zinc-800 rounded w-full py-2 px-3 bg-transparent text-gray-100 font-light font-lexend leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email" // Added name attribute
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-light font-lexend mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border-2 border-zinc-800 rounded w-full py-2 px-3 bg-transparent text-gray-100 font-light font-lexend leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message" // Added name attribute
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-transparent border border-zinc-800 rounded-full text-white py-2 px-5 font-extralight font-lexend hover:bg-gray-700 transition duration-300"
                  type="submit"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

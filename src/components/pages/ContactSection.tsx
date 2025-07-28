"use client";
import Slider from "./slider";
import React, { FormEvent, useState } from "react";

const ContactSection = () => {
  const [buttonText, setButtonText] = useState("Submit Form");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "0041bd31-002d-4d90-8939-4858fe07d7ce");

    const object: Record<string, any> = Object.fromEntries(formData);
    const json: string = JSON.stringify(object);

    console.log("Submitting form with data:", json);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();
      console.log("Response received:", data);

      if (data.success) {
        console.log("Success", data);
        setButtonText("Form Submitted");
        setIsSubmitted(true);
        // Optionally reset the form fields here
      } else {
        console.error("Error", data.message);
        // You might want to set an error message state here to show to the user
      }
    } catch (error) {
      console.error("Submission failed:", error);
      // Handle fetch error
      // You might want to set an error message state here to show to the user
    }
  };

  return (
    <section id="contact" className="relative md:-mt-16">
      <div className="w-screen m-0 p-0">
        <Slider />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-between py-14 -mt-10 md:mt-8">
        {/* Left Section */}
        <div className="md:w-1/2 grid grid-cols-1 items-start p-6 ml-0 md:ml-12 font-lexend">
          <div>
            <h1 className="text-gray-100 text-4xl sm:text-5xl font-poppins font-bold">
              Let's{" "}
              <span className="text-green-500">
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
              <div className="mb-6 sm:mb-0">
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
                      className="text-[#868686] text-sm ml-4 transition-transform duration-300 hover:text-blue-500 ease-in-out hover:scale-105 active:scale-95"
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
              <div className="mb-6 sm:mb-0">
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
                      className="text-[#868686] text-sm ml-4 transition-transform duration-300 hover:text-blue-500 ease-in-out hover:scale-105 active:scale-95"
                    >
                      <label className="block font-lexend font-light">
                        Contact No.
                      </label>
                      <strong className="font-lexend font-light">
                        +92 310 2017585
                      </strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="w-full flex justify-center md:justify-end md:hidden -mt-6">
          <div className="w-full max-w-md max-h-fit">
            <h2 className="flex justify-center text-gray-300 text-[2.5rem] sm:text-3xl font-bold font-poppins pt-10">
              Get in{" "}
              <span className="text-green-500 ml-2">
                touch!
              </span>
            </h2>

            <form onSubmit={onSubmit} className="mt-2 px-6">
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-light font-lexend mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  className="shadow appearance-none border-2 border-zinc-800 rounded-xl w-full py-4 px-3 bg-transparent text-gray-100 font-light font-lexend leading-tight focus:outline-none focus:shadow-outline"
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
                  Email:
                </label>
                <input
                  className="shadow appearance-none border-2 border-zinc-800 rounded-xl w-full py-4 px-3 bg-transparent text-gray-100 font-light font-lexend leading-tight focus:outline-none focus:shadow-outline"
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
                  Message:
                </label>
                <textarea
  className="shadow appearance-none border-2 border-zinc-800 rounded-xl w-full min-h-[150px] pt-4 pb-2 px-3 bg-transparent text-gray-100 font-light font-lexend leading-tight focus:outline-none focus:shadow-outline align-top"
  id="message"
  name="message"
  placeholder="Your Message"
  required
></textarea>

              </div>
              <div className="relative group justify-center md:justify-start flex">
                <button className="relative inline-block p-px -space-y-3 mt-3 font-semibold font-lexend leading-6 text-white bg-gray-900 cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span className="relative z-10 block px-5 py-3 rounded-xl bg-gray-900">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        {buttonText}
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* LG CONTACT FORM */}
        <div className="w-full md:flex md:justify-end hidden mt-12">
          <div className="w-full max-w-md max-h-fit space-y-6">
            <h2 className="flex justify-center md:justify-start text-gray-300 text-2xl sm:text-[2.5rem] font-bold font-poppins">
              Get in{" "}
              <span className="text-green-500 ml-2">
                touch!
              </span>
            </h2>

            <form onSubmit={onSubmit} className="mt-4 space-y-5">
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-light font-lexend mb-2"
                  htmlFor="name"
                ></label>
                <input
                  className="shadow appearance-none border-2 border-zinc-800 rounded-xl w-10/12 py-3 px-3 bg-transparent text-gray-100 font-light font-lexend leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-light font-lexend mb-2"
                  htmlFor="email"
                ></label>
                <input
                  className="shadow appearance-none border-2 border-zinc-800 rounded-xl w-10/12 py-3 px-3 bg-transparent text-gray-100 font-light font-lexend leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-light font-lexend mb-2"
                  htmlFor="message"
                ></label>
                <textarea
                  className="shadow appearance-none border-2 border-zinc-800 rounded-xl w-10/12 py-4 px-3 bg-transparent text-gray-100 font-light font-lexend leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="relative group justify-center md:justify-start flex">
                <button className="relative inline-block p-px -space-y-3 font-semibold font-lexend leading-6 text-white bg-gray-900 cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span className="relative z-10 block px-5 py-3 rounded-xl bg-gray-900">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        {buttonText}
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
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

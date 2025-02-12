import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-yellow-50 text-yellow-700 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-2 gap-5">
          {/* Contact Form */}
          <div className="mt-12 bg-white p-8 shadow-lg rounded-xl w-full mx-auto">
            <h3 className="text-2xl font-semibold mb-4"> Contact With US </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
              <button className=" text-white py-3 rounded-lg">
                Send
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="grid grid-cols-1 gap-8 mt-8 bg-white p-6 shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold mb-8"> Contact With Us </h2>
            <p className="text-xl text-gray-700 mb-6"> Please contact us to enjoy our delicious food or if you have any questions. </p>
            {/* Phone */}
            <div className="flex flex-row items-center">
              <PhoneCall className="w-12 h-8 mb-4" />
              <p className="text-gray-600"> 01744-444444 </p>
            </div>

            {/* Email */}
            <div className="flex flex-row items-center">
              <Mail className="w-12 h-8 mb-4" />
              <p className="text-gray-600"> contact@foodshop.com </p>
            </div>

            {/* Address */}
            <div className="flex flex-row items-center">
              <MapPin className="w-12 h-8 mb-4" />
              <p className="text-gray-600"> House #44, Road #4, Dhaka </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
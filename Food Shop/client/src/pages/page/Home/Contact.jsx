import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-yellow-50 text-yellow-700 pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-3xl font-bold"> Contact With Us </h2>
          <p className="text-xl text-gray-700 text-center max-w-lg"> Please contact us to enjoy our delicious food or if you have any questions. </p>
          <div className="pb-8 w-full max-w-xl mx-auto">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
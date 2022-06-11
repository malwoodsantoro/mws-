import React from "react";
import contactImg from '../assets/contact.png'
export default function Contact() {

  return (
    <div className="bg-green-200 grid md:grid-cols-2 mt-[12%] m-auto">
      <form className="form rounded-lg bg-green-200 p-4 flex flex-col">
        <label htmlFor="name" className="text-sm text-gray-600 mx-4">
          {" "}
          Your Name
        </label>
        <input
          type="text"
          className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
          name="name"
        />
        <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
          Email
        </label>
        <input
          type="text"
          className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
          name="email"
        />
        <button
          type="submit"
          className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
        >
          Send Message
        </button>
      </form>
      <div>
        <img className='w-[80%] text-center' src={contactImg}/>
      </div>
    </div>

  );
}

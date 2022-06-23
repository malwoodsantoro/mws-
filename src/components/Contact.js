import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import contactImg from "../assets/contact.png"
var { SocialIcon } = require('react-social-icons');

function Contact() {
  const [state, handleSubmit] = useForm("xzbowyrd");
  if (state.succeeded) {
    return <p>I look forward to speaking with you!</p>;
  }
  return (
    <div>
      <div className="md:grid-cols-2 grid gap-4 bg-[#AE5D4C]">
        <div>
          <h2 id="projects" className="text-3xl font-bold mb-6 pt-6 md:pt-12 text-center">Contact</h2>
          <a href="#contact"> 
            <span aria-hidden="true" className="hidden">#</span>
            <span className="hidden">Section titled contact</span>
          </a>
          <form className="bg-zinc-100  shadow-md rounded px-8 pt-6 pb-8 mb-6 mx-3 md:ml-36 md:mr-36 mt-6" mt-4 onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Your email address:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-6" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-24 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className="mt-6 bg-[#00bcff] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
          <div className="w-full md:pb-6 flex flex-col justify-content text-[#79afcc]">
            <div className="flex content-end justify-center">
              <a href="https://github.com/malwoodsantoro/"><SocialIcon url="https://github.com/malwoodsantoro/" bgColor="#AE5D4C" fgColor="#79afcc" style={{ height: 60, width: 60 }} />@malwoodsantoro</a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/mal-wood-santoro/"><SocialIcon url="https://www.linkedin.com/in/mal-wood-santoro/" bgColor="#AE5D4C" fgColor="#79afcc" style={{ height: 60, width: 60 }} />mal-wood-santoro/</a>
            </div>
          </div>
        </div>
        <div>
          <img className="w-full h-full object-cover" src={contactImg} alt="Photograph of glacier in Tracy Arm, Juneau, Alaska." />
        </div>
      </div>
    </div>
  );
}

export default Contact;

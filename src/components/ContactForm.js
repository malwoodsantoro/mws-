import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import contactImg from "../assets/contact.png"
var { SocialIcon } = require('react-social-icons');

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbowyrd");

  if (state.succeeded) {
    return <p>Submitted</p>;
  }

  return (
    <div>
      <div className="md:grid-cols-2 grid bg-[#a4243b]">
        <div>
          <h2 id="projects" className="text-3xl font-bold mb-6 pt-6 md:pt-12 text-center">Contact</h2>
          <a href="#contact"> 
            <span aria-hidden="true" className="hidden">#</span>
            <span className="hidden">Section titled contact</span>
          </a>
          <form className="bg-zinc-100 shadow-md rounded px-8 pt-6 pb-8 mb-6 mx-3 ml-6 mr-6 md:ml-12 md:mr-12 mt-6" onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="email">
              Your email address:
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
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
              className="shadow appearance-none border rounded w-full pb-24 px-3 pt-3 text-gray-700 leading-tight"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className="mt-6 bg-[#273e47] text-white font-bold py-2 px-4 rounded" type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
          <div className="w-full md:pb-6 flex flex-col justify-content text-[#79afcc]">
            <div className="flex content-end justify-center">
              <a href="https://github.com/malwoodsantoro/"><SocialIcon url="https://github.com/malwoodsantoro/" bgColor="#a4243b" fgColor="#88aebe" style={{ height: 60, width: 60 }} />@malwoodsantoro</a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/mal-wood-santoro/"><SocialIcon url="https://www.linkedin.com/in/mal-wood-santoro/" bgColor="#a4243b" fgColor="#88aebe" style={{ height: 60, width: 60 }} />mal-wood-santoro/</a>
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

export default ContactForm;
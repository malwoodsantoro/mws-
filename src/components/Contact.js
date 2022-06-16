import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import contactImg from "../assets/contact.png"
import { CodeIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'

function Contact() {
  const [state, handleSubmit] = useForm("xzbowyrd");
  if (state.succeeded) {
    return <p>I look forward to speaking with you!</p>;
  }
  return (
    <div>
    <a name="contact"></a>
    <div class="md:grid-cols-2 grid gap-4 bg-[#ffc3ae]">
      <div>
        <div className="text-5xl ml-36 mt-6">Contact</div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6 ml-36 mr-36 mt-6" mt-4 onSubmit={handleSubmit}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
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
        <div className="w-full items-center py-6">
          <div className="flex">
            <CodeIcon className="h-8 text-[#4c82a7] px-2" /><a className="text-2xl" href="https://github.com/malwoodsantoro/">Github</a><br />
          </div>
          <div className="flex">
            <UserIcon className="h-6 text-[#4c82a7] px-2" /><a className="text-2xl" href="https://www.linkedin.com/in/mal-wood-santoro/">Linkedin</a>
          </div>
        </div>
      </div>
      <div>
        <img className="w-full h-full object-cover" src={contactImg} />
      </div>
    </div>
    </div>
  );
}

export default Contact;

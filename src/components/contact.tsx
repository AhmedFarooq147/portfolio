"use client"
import { useState } from 'react';
import Swal from 'sweetalert2'
export function Contact(){
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message,setMessage] = useState('')
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const nameInput = target.elements.namedItem('name') as HTMLInputElement;
    const emailInput = target.elements.namedItem('email') as HTMLInputElement;
    const messageInput = target.elements.namedItem('message') as HTMLTextAreaElement;

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "420dc55c-d50f-4b77-9fd7-9d3be14721b4",

            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        Swal.fire({
            title: "success!",
            text: "Foam sent successfully!",
            icon: "success"
        });
        setemail('');
        setname('')
        setMessage('')

    }
}
    return(
        <div id="Contact">
            <section className="text-gray-600 bg-gray-900 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-lg shadow-gray-800 ">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.8716352842357!2d66.955218824829!3d24.936442492213967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36ad0d097a30b%3A0x913dcb7f40ab0fd1!2sSector%209%20C%20Baldia%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1742322031975!5m2!1sen!2s"
        style={{ filter: "contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
          Sector 9/C Saeedabad Baldia Town Karachi.
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className=" text-blue-400 hover:text-blue-500 leading-relaxed">ahmedarain1697@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">0314-0333513</p>
        </div>
      </div>
    </div>
    <form onSubmit={handleSubmit} className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Contact-us
      </h2>
      <p className="leading-relaxed mb-5 text-gray-300">
        Feel free to Contact
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name} onChange={(e) => { setname(e.target.value) }}
          className="w-full bg-gray-800 text-white placeholder-gray-400  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email} onChange={(e) => { setemail(e.target.value) }}
          name="email"
          className="w-full bg-gray-800 text-white placeholder-gray-400  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          value={message} onChange={(e) => { setMessage(e.target.value) }}
          name="message"
          className="w-full  bg-gray-800 text-white placeholder-gray-400 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          required
        ></textarea>
      </div>
      <button  className="relative px-6 py-3 font-bold text-white uppercase bg-transparent border-2 border-blue-500 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
        Submit
      </button>
      
    </form>
  </div>
</section>

        </div>
    )
}
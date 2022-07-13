import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import validator from 'validator';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [loading, setLoading] = useState(false);
  const [names, setName] = useState(false);
  const [emails, setEmail] = useState(false);
  const [messages, setMessages] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});

  }
  
  const onSubmit = async () => {
    setLoading(true);
    if(!name && !email && !message) {
      setLoading(false);
      setName(true);
      setEmail(true);
      setMessages(true);
      setTimeout(() => {setName(false); setEmail(false); setMessages(false);}, 2000)
    }
    else if(name && !email && !message) {
      setLoading(false);
      setName(false);
      setEmail(true);
      setMessages(true);
      setTimeout(() => {setEmail(false); setMessages(false);}, 2000)
    }
    else if(name && email && !message) {
      setLoading(false);
      setEmail(false);
      setName(false);
      setMessages(true);
      setTimeout(() => setMessages(false), 2000)
    }
    else if(!name && !email && message) {
      setLoading(false);
      setEmail(true);
      setName(true);
      setMessages(false);
      setTimeout(() => {setEmail(false); setName(false);}, 2000)
    }
    else if(!name && email && message) {
      setLoading(false);
      setEmail(false);
      setName(true);
      setMessages(false);
      setTimeout(() => setName(false), 2000)
    }
    else if(!name && email && !message) {
      setLoading(false);
      setEmail(false);
      setName(true);
      setMessages(true);
      setTimeout(() => {setName(false); setMessages(false);}, 2000)
    }
    else {
      if(validator.isEmail(email)) {
        setName(false);
        setEmail(false);
        setMessages(false);

        try {
          const data = { name, email, message };
          const res = await axios.post(`${process.env.REACT_APP_URL}`, data);
          if (res) {
            setLoading(false);
            setIsFormSubmitted(true);
            toast.success('Successfully Submitted!');
          }
        } catch (err) {
          setLoading(false);
          toast.error("404 ❌");
        }
      } else {
        setLoading(false);
        setEmail(true);
        setName(false);
        setMessages(false);
        toast.error("Invalid Email!");
        setTimeout(() => setEmail(false), 2000);
      }
    }
  }

  return (
    <div className="bg-[#0a192f]">
      <ToastContainer />
      <div id="contact" className='max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12'>
        <h2 className='text-4xl font-bold px-4 md:px-0 text-center lg:text-start md:text-center text-[#ccd6f6] after:h-[1px] after:bg-[#233554] after:inline-block after:relative after:align-middle after:w-1/4 after:ml-6'>
          / Contact
        </h2>
        <h2 className='justify-center items-center mt-4 text-4xl font-bold px-4 md:px-0 text-center text-[#ccd6f6] hidden md:block'>
          Get In Touch
        </h2>
        {!isFormSubmitted ? (
          <motion.div whileInView={{ y: [80, 0], opacity: 1}} transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }}>
            <div className="flex flex-wrap -mx-3 mb-6 mt-8">
              <div className="w-full px-3">
                <input className="appearance-none block w-full bg-[#ccd6f6] text-gray-700 placeholder-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" name="name" placeholder="Your Name" value={name} onChange={handleChangeInput} required/>
              </div>
              {names && <p className='text-red-500 ml-2'>*Required</p>}
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 mt-8">
              <div className="w-full px-3">
                <input className="appearance-none block w-full bg-[#ccd6f6] text-gray-700 placeholder-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="email-address" type="email" name="email" placeholder="Your Email" value={email} onChange={handleChangeInput} required/>
              </div>
              {emails && <p className='text-red-500 ml-2'>*Required</p>}
            </div>
            <div className="mt-1">
              <textarea className="w-full h-32 px-3 py-2 bg-[#ccd6f6] text-gray-900 placeholder-gray-600 rounded-lg focus:outline-none" placeholder='Your Message' value={message} onChange={handleChangeInput} name="message" required></textarea>
              {messages && <p className='text-red-500 ml-2'>*Required</p>}
            </div>
            <div className='flex flex-wrap -mx-3 mb-6 mt-8 justify-center items-center'>
              <button type="button" className='border-2 border-[#64ffda] hover:bg-[#112240] text-[#64ffda] font-bold py-2 px-4 rounded inline-flex items-center text-2xl h-16' onClick={onSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
          </motion.div>
        ): (
          <div>
            <h3 className="pt-40 text-center text-4xl text-[#ccd6f6] justify-center font-bold">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact;
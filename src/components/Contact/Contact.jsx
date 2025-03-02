"use client";
import { useState } from "react";
import "@/styles/contact.css";
import "@/styles/stars.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "All fields are required."
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "Please enter a valid email address."
      });
      return;
    }

    // Start submission
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const form = e.target;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Reset form
        setFormState({ name: "", email: "", message: "" });
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "Something went wrong. Please try again later."
      });
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="Contact" className="contact-section relative flex flex-col justify-center tab animation-show py-16">
      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div className="font-body relative z-10 py-20">
        <h2 className="font-display animation-show text-2xl text-center">Contact Me</h2>
        <div className="border animation-show w-24 h-[10px] bg-[#da30a5fb] my-4 mx-auto"></div>

        {formStatus.isSubmitted ? (
          <div className="max-w-[1000px] m-auto px-[10vw] text-center py-10 animation-show">
            <h3 className="text-xl mb-4">Thank you for your message!</h3>
            <p>I'll get back to you as soon as possible.</p>
            <button
              className="mt-8 bg-[#da30a5fb] hover:bg-[#fc87d7fb] py-3 px-12 rounded-[20px] cursor-pointer duration-200"
              onClick={() => setFormStatus({ isSubmitting: false, isSubmitted: false, error: null })}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            className="contact-form animation-show max-w-[1000px] m-auto px-[10vw] overflow-hidden"
            action="https://formsubmit.co/gravityroom4@gmail.com"
            method="post"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="GRAVITY Message" />
            <input type="hidden" name="_autoresponse" value="Thank you for your question! I'll get back to you as soon as possible!" />
            <input type="hidden" name="_captcha" value="false" />

            {formStatus.error && (
              <div className="bg-red-900 text-white p-4 my-4 rounded animation-show">
                {formStatus.error}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="form-control contact-form-text block w-full box-border my-4 border-0 bg-[#111] py-5 px-10 outline-none duration-200"
                placeholder="Name"
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="form-control contact-form-text block w-full box-border my-4 border-0 bg-[#111] py-5 px-10 outline-none duration-200"
                placeholder="Email"
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="form-control contact-form-text block w-full box-border my-4 border-0 bg-[#111] py-5 px-10 outline-none duration-200 resize-none h-40"
                placeholder="Message"
                required
                aria-required="true"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus.isSubmitting}
              className={`contact-form-btn float-right border-0 bg-[#da30a5fb] hover:bg-[#fc87d7fb] py-3 px-12 rounded-[20px] cursor-pointer duration-200 mb-12 ${formStatus.isSubmitting ? 'opacity-70' : ''}`}
            >
              {formStatus.isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;

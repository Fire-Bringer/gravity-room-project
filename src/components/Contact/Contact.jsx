import "@/styles/contact.css"
import "@/styles/stars.css"

const Contact = () => {
  return (


    <div id="Contact" className="contact-section relative flex flex-col justify-center tab animation-show">

      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div className="font-body relative z-10 py-20">

        <h1 className="font-display animation-show text-2xl text-center">Contact Me</h1>
        <div className="border animation-show w-24 h-[10px] bg-[#da30a5fb] my-4 mx-auto"></div>
        <form className="contact-form animation-show max-w-[1000px] m-auto px-[10vw] overflow-hidden" action="https://formsubmit.co/gravityroom4@gmail.com" method="post">
        <input type="hidden" name="_subject" value="GRAVITY Message" />
        <input type="hidden" name="_autoresponse" value="Thank you for your question! I'll get back to you as soon as possible!" />
          <input type="text" name="name" className="form-control contact-form-text block w-full box-border my-4 border-0 bg-[#111] py-5 px-10 outline-none duration-200" placeholder="Name" />
          <input type="email" name="email" className="form-control contact-form-text block w-full box-border my-4 border-0 bg-[#111] py-5 px-10 outline-none duration-200" placeholder="Email" />
          <textarea name="message" className="form-control contact-form-text block w-full box-border my-4 border-0 bg-[#111] py-5 px-10 outline-none duration-200 resize-none h-40" placeholder="Message"></textarea>
          <input type="submit" className="contact-form-btn float-right border-0 bg-[#da30a5fb] hover:bg-[#fc87d7fb] py-3 px-12 rounded-[20px] cursor-pointer duration-200 mb-12" value="Send" />
        </form>

      </div>

    </div>
  );
};

export default Contact;

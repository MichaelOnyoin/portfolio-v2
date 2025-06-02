"use client";
import * as React from "react";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import emailjs from "@emailjs/browser";
import { SendHorizonal } from "lucide-react";
import { toast } from 'sonner';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

function ContactForm() {
    const form = React.useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    //e.preventDefault();
    if (!form.current) {
        console.error('Form reference is null');
        return;
      }
   
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, {
        publicKey: PUBLIC_KEY || '',
        
        limitRate:{
            throttle: 100000, // can't send more than one email per 100s
          }
      })
      .then(
        () => {
          console.log('Email sent!');
          //alert('Email Sent');
          toast.success( 'Message Sent Successfully!',{position: 'top-right'});
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error( 'Failed to Send Message!');
        },
      );
  };
  return (
    <div className="flex gap-8 container mx-auto items-center justify-center w-4/5 max-h-screen my-16 px-4" id="contact" >
        <div className=" flex-col items-center justify-center w-full mb-8">
        <h1 className="text-6xl font-bold text-zinc-100 mb-6 w-full">Got a project <span className="text-6xl w-full font-bold text-teal-500 mb-6">in mind?</span></h1>
        <img loading="lazy" src="Group 2372.svg" alt="Designer portrait" className="w-3/5 aspect-[0.83] max-md:mt-10 max-md:max-w-full" />
        </div>
        <form className="flex flex-col container mx-auto gap-6 items-start w-full" action={sendEmail} ref={form} >
        <div className="flex gap-6 justify-center items-start w-full max-sm:flex-col max-sm:gap-4">
            <input type="hidden" name="to_name" value={'Michael'} />
            <InputField
            label="Your name"
            type="text"
            placeholder="Name"
            name="from_name"
            
            />
            <InputField
            label="Your email"
            type="email"
            placeholder="Email"
            name="reply_to"
            />
        </div>
        <TextAreaField
            label="Your Message"
            placeholder="Message"
            name="message"
        />
        <button className="px-8 py-2.5 bg-teal-400 font-semibold text-shadow-lg rounded-3xl max-md:px-5 btn-primary">
            Send Message
            {/* <div  id="my-popover" className="opacity-0 starting:open:opacity-0 ...">
   
            </div> */}
            <SendHorizonal className="inline-block ml-2 h-5 w-5 text-white hover:rotate-1/2" role="button" />
        </button>
        </form>
    </div>
  );
}

export default ContactForm;


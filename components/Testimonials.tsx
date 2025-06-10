"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    title: "Mobile App Development",
    text: "I had the pleasure of working with Michael on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations.",
    name: "Michael - Technical Manager",
    position: "Marketing @ APPLE INC.",
    image: "/avatar1.jpg",
  },
  {
    title: "Web Optimization",
    text: "Michael's attention to detail and commitment to delivering high-quality work is unmatched. Our website's performance has significantly improved thanks to her optimization skills.",
    name: "Sarah - Project Lead",
    position: "Operations @ GOOGLE",
    image: "/avatar2.jpg",
  },
  {
    title: "AI Engineering",
    text: "Working with Michael on our AI project was an incredible experience. Her ability to simplify complex problems and deliver innovative solutions is truly remarkable.",
    name: "John - AI Specialist",
    position: "Research @ MICROSOFT",
    image: "/avatar3.jpg",
  },
];

export function TestimonialTest() {
  const [active, setActive] = React.useState(0);

  const currentTestimonial = testimonials[active];

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <h2 className="mb-4 text-4xl font-bold text-blue-gray-900">
            What <span className="text-teal-500">Clients</span> Say
          </h2>
          <p className="mx-auto w-full px-4 text-xl font-normal text-zinc-100 lg:w-8/12">
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </p>
        </div>
        <div className="py-8 lg:flex lg:flex-row">
          <div className="w-full lg:gap-10 h-full lg:flex justify-between">
            <div className="w-full mb-10 lg:mb-0">
              <h3 className="mb-4 text-3xl font-bold text-zinc-100 lg:max-w-xs">
                {currentTestimonial.title}
              </h3>
              <p className="mb-3 w-full text-lg text-zinc-100 lg:w-8/12">
                {currentTestimonial.text}
              </p>
              <h6 className="mb-0.5 text-lg font-semibold text-zinc-100">
                {currentTestimonial.name}
              </h6>
              <p className="mb-5 text-sm font-normal text-zinc-100">
                {currentTestimonial.position}
              </p>
              <div className="flex items-center gap-4">
                {testimonials.map((testimonial, idx) => (
                  <React.Fragment key={idx}>
                    <img
                      src={testimonial.image}
                      alt={`avatar ${idx + 1}`}
                      className={`cursor-pointer rounded-sm w-10 h-10 ${
                        active === idx ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setActive(idx)}
                    />
                    {idx < testimonials.length - 1 && (
                      <div className="w-[1px] h-[36px] bg-blue-gray-100"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={currentTestimonial.image}
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialTest;
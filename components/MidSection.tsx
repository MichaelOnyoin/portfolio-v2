'use client'
import React from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiVercel, SiGithub } from "react-icons/si";

const techs = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiGithub />, name: "GitHub" },
];

const Marquee = () => (
  <div className="overflow-hidden whitespace-nowrap w-full bg-gray-800 py-6 ">
    <div className="flex items-center gap-8 animate-marquee">
      {[...techs, ...techs].map((tech, i) => (
        <div key={i} className="flex flex-col backdrop-blur-sm rounded-lg bg-[rgba(38,38,38,0.5)] hover:border-2 hover:border-teal-400 items-center justify-between text-white text-3xl min-w-[150px] h-40">
          <span className=" items-center text-teal-400 mt-15">{tech.icon}</span>
          <span className="text-sm text-zinc-100 mt-2">{tech.name}</span>
        </div>
      ))}
    </div>
    <style jsx>{`
      .animate-marquee {
        display: flex;
        animation: marquee 18s linear infinite;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

const MidSection = () => (
  <section className="my-12">
    <h2 className="text-4xl font-bold text-center mb-6 text-zinc-100">Tech Stack</h2>
    <Marquee />
  </section>
);

export default MidSection;
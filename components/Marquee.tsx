import React from 'react';
// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiVercel, SiGithub } from "react-icons/si";

// const techs = [
//   { icon: <SiReact />, name: "React" },
//   { icon: <SiNextdotjs />, name: "Next.js" },
//   { icon: <SiTypescript />, name: "TypeScript" },
//   { icon: <SiTailwindcss />, name: "Tailwind CSS" },
//   { icon: <SiFramer />, name: "Framer Motion" },
//   { icon: <SiVercel />, name: "Vercel" },
//   { icon: <SiGithub />, name: "GitHub" },
// ];

const Marquee: React.FC = () => {
  return (
    <div className="marquee w-full object-contain self-center whitespace-nowrap ">
      <div className="marquee__inner items-center gap-8">
        <span>🚀 Feature 1 • Feature 2 • Feature 3 • Feature 4 •</span>
        <span>🚀 Feature A • Feature B • Feature C • Feature D •</span>
        <span>🚀 Feature I • Feature II • Feature III • Feature IV •</span>
        <span>🚀 Feature E • Feature F • Feature G • Feature H •</span>

      </div>
    </div>
  );
};

export default Marquee;

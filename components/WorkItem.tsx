import React from 'react';
import {motion} from 'framer-motion';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface WorkItemProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  link: string;
  github: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ src, alt, description, title, link, github }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="shadow-none"
    >
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full group hover:cursor-pointer relative ">
      <div className="flex flex-col grow justify-center px-12 py-16 w-full rounded-2xl backdrop-blur-[2px] bg-zinc-700 bg-opacity-50 max-md:px-5 max-md:mt-10">
        <img loading="lazy" src={src} alt={alt} className="w-full aspect-[1.67]" />
      </div>
      <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-black/50 p-4 mx-2 mb-4 float rounded-lg hidden group-hover:block'>
        <h4 className="gap-2.5 pt-5 pb-2.5 text-2xl font-bold tracking-tighter whitespace-nowrap text-white max-md:mt-10 max-md:text-lg">
          {title}
        </h4>
        <p className="text-white text-lg">{description}</p>
        <Link href={github} target='_blank' className="">
        <Github className="absolute bottom-4 right-4 text-white hover:text-teal-500 transition-colors duration-300" size={24} role='link' />
        </Link>
        <Link href={link} target='_blank' className="">
        <Globe className="absolute bottom-4 right-12 text-white hover:text-teal-500 transition-colors duration-300" size={24} role='link' />
        </Link>
      </div>
    </div>
    </motion.div>
  );
};

export default WorkItem;
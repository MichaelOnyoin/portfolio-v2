'use client'
import React,{useState} from 'react';
import WorkItem from './WorkItem';

type Category =  'All'| 'UI'| 'UX'| 'Web Design';

interface WorkItem {
  id: number;
  image: string;
  categories: Category[];
  description:string;
  title:string;
  link: string;
  github: string;
}


const workItems: WorkItem[] = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8ad5526321755d9963aa0dce470f313368f817f71b0d8cdc2f96d4ccc366767?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    categories: ["All", "UI", "UX"],
    description:"Portfolio built using UI/UX components of Figma",
    title:'Porfolio',
    link:'https://figma-portfolio-beta.vercel.app/',
    github:'https://github.com/MichaelOnyoin/Figma-portfolio',

  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/11a3d2220aec7d05a43243b8cd6ecde1024d615641b7c0bed3be8dee8b21ff13?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    categories: ["All", "UI","Web Design"],
    description:"Portfolio built for a marketing agent using Next.js and Figma",
    title:'Business Marketing Portfolio',
    link:'https://mariam.onyoin.com/',
    github:'https://github.com/MichaelOnyoin/mike-portfolio',
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f2707900aeeb97ceecdc72b465f7ec5d173a2ea49f2fb0873675518235a7eb8?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    categories: ["All", "UI","Web Design"],
    description:"Weather app built using Next.js, OpenWeather API and using laravel-api for backend",
    title:'Weather App',
    link:'https://weather-frontend-lime-rho.vercel.app/',
    github:'https://github.com/MichaelOnyoin/weather-frontend',
  },
  {
    id:4,
    image:'/careviewlogo(2).svg',
    categories:["All","Web Design"],
    description:"An online pharmacy to ensure you get your medications on time and at the right price from anywhere",
    title:'Careview E-pharmacy',
    link:'',
    github:'',


  },
  {
    id:5,
    image:'/chatbot.svg',
    categories:["All","Web Design"],
    description:"AI chatbot built using Next.js, Azure OpenAI and postgres",
    title:'AI Chatbot',
    link:'chat.onyoin.com',
    github:'https://github.com/MichaelOnyoin/chat',

  },
  {
    id:6,
    image:'https://cdn.builder.io/api/v1/image/assets/TEMP/aa10f7d7ae5cfb9ef954e6915aa1d901b8a54e148aed165e73c31dd96c32de4e?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&',
    categories:["All","UI","Web Design"],
    description:"E-commerce platform for buying and selling products online, built using Next.js and Figma",
    title:'Merxpress',
    link:'https://merxpress-seven.vercel.app/',
    github:'https://github.com/MichaelOnyoin/Merxpress',

  },
];

//const categories: Category[] = ["All", "UI", "UX", "Web Design"];

const filters: Category[] = ["All", "UI", "UX", "Web Design"];

const WorkFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  
    const filteredItems = workItems.filter((item) =>
      selectedCategory === "All" ? true : item.categories.includes(selectedCategory)
    );
  return (
    <div className='bg-[url(/devBg.svg)] bg-center bg-fixed mt-10' id='Projects'>
      <h2 className="container mx-auto self-start mt-28 text-6xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="text-zinc-100">My recent</span>{" "}
        <span className="text-teal-500">works</span>
      </h2>
     <div className="flex gap-4 self-start pr-14 mt-4 ml-10 text-lg font-bold text-zinc-100 max-md:flex-wrap max-md:pr-5">
      {filters.map((cat) => (
        <button
          key={cat}
          className={`px-8 py-2.5  whitespace-nowrap hover:bg-teal-500 rounded-3xl max-md:px-5 ${
            selectedCategory === cat ? 'bg-teal-500' : 'backdrop-blur-sm bg-zinc-700 bg-opacity-50'
          }`}
           onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      
        {filteredItems.map((item) => (
         
          <div className='mx-4 mt-10 hover:translate-y-[-5%] shadow-lg hover:shadow-indigo-500 rounded-xl transition-transform duration-300 ease-in-out mb-20'  key={item.id}>
            
            <WorkItem src={item.image} alt={`Work ${item.id}`} description={item.description} title={item.title} link={item.link} github={item.github}/>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFilter;
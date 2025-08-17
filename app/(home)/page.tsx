import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import WorkFilter from '@/components/WorkFilter';
import Skills from '@/components/Skills';
import ContactForm from '@/components/ContactPage';
import AboutMe from '@/components/About';
import Clients from '@/components/Clients';
import TechStack from '@/components/TechStack';
import FloatingChat from '../../components/FloatingChat';
import TestimonialTest from '../../components/Testimonials';
//import Border from '@/components/Border';
//import Resume from '@/components/Resume';
//import Marquee from '@/components/Marquee';

const Home: React.FC = () => {
  return (
    
    <Layout>
      <Hero />
      <AboutMe />
      <Skills/>
      <WorkFilter/>
      <TechStack />
      <Clients />
      <TestimonialTest/>
      <ContactForm/>
      {/* <Marquee /> */}
      {/* Uncomment the next line to include the Resume component */}
      {/* <Resume /> */}
      {/* <Border /> */}
      {/* Uncomment the next line to include the Resume component */}
      
      <FloatingChat />
      
    </Layout>
    
  );
};

export default Home;
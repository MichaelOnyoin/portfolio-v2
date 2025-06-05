import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import WorkFilter from '@/components/WorkFilter';
import Skills from '@/components/Skills';
import ContactForm from '@/components/ContactPage';
import AboutMe from '@/components/About';
import Clients from '@/components/Clients';
import TechStack from '@/components/TechStack';

const Home: React.FC = () => {
  return (
    
    <Layout>
      <Hero />
      <AboutMe />
      <Skills/>
      <WorkFilter/>
      <TechStack />
      <Clients />
      <ContactForm/>
    </Layout>
    
  );
};

export default Home;
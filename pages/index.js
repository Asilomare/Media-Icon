import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apex Marketing Agency</title>
        <meta name="description" content="Apex Marketing Agency - Transform your digital presence with our data-driven marketing strategies" />
      </Head>

      <SmoothScroll />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Testimonials />
      <Team />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
} 
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Apex<span className="text-purple-600">Marketing</span></h1>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#home" className="nav-link text-gray-800 hover:text-indigo-600 font-medium">Home</Link>
          <Link href="#services" className="nav-link text-gray-800 hover:text-indigo-600 font-medium">Services</Link>
          <Link href="#portfolio" className="nav-link text-gray-800 hover:text-indigo-600 font-medium">Portfolio</Link>
          <Link href="#testimonials" className="nav-link text-gray-800 hover:text-indigo-600 font-medium">Testimonials</Link>
          <Link href="#team" className="nav-link text-gray-800 hover:text-indigo-600 font-medium">Team</Link>
          <Link href="#contact" className="nav-link text-gray-800 hover:text-indigo-600 font-medium">Contact</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="#contact" className="btn-primary px-6 py-2 rounded-full text-white font-medium">Get Started</Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden" id="menu-btn">
          <button className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white w-full py-4 px-4 shadow-lg`} id="mobile-menu">
        <div className="flex flex-col space-y-4">
          <Link href="#home" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#services" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="#portfolio" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          <Link href="#testimonials" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
          <Link href="#team" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Team</Link>
          <Link href="#contact" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link href="#contact" className="btn-primary px-6 py-2 rounded-full text-white font-medium text-center" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
        </div>
      </div>
    </header>
  );
} 
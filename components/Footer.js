import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log('Newsletter subscription for:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Apex Marketing</h3>
            <p className="text-gray-400 mb-6">
              We help businesses transform their digital presence with data-driven marketing strategies that deliver real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Digital Strategy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">SEO Optimization</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Social Media</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Content Creation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">PPC Advertising</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Team</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest marketing insights.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-3 w-full bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 text-white px-4 rounded-r-lg hover:bg-indigo-700 transition duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Apex Marketing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
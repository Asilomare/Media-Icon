import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' }); // Reset form
        // Optionally keep the success message for a bit longer or handle UI differently
        alert('Thank you for your message! We will be in touch soon.');
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setSubmitStatus('error');
        alert('There was an error submitting your message. Please try again later.');
      }
    } catch (error) {
      console.error('Network or other error:', error);
      setSubmitStatus('error');
      alert('An unexpected error occurred. Please check your connection or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Ready to get started? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0" data-aos="fade-right">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none" 
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none" 
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="contact-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none" 
                  placeholder="Your Company"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none" 
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full py-3 rounded-lg text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {/* Optional: Display visual feedback based on submitStatus */}
              {submitStatus === 'success' && <p className="mt-4 text-green-600">Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>}
            </form>
          </div>
          
          <div className="md:w-1/2 md:pl-8" data-aos="fade-left">
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="mb-8">
                <p className="font-medium mb-2">Our Office</p>
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <p className="text-gray-600">
                    2821 Garefield Ave West Lawn<br />
                    PA, 19609
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="font-medium mb-2">Contact Information</p>
                <div className="flex items-start mb-4">
                  <div className="text-indigo-600 mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <p className="text-gray-600">
                    team@mediaicon.us
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <p className="text-gray-600">
                    +1 (610) 787-3182
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">Follow Us</p>
                <div className="flex space-x-4">
                  {/* <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition duration-300">
                    <i className="fab fa-facebook-f"></i>
                  </a> */}
                  {/* <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition duration-300">
                    <i className="fab fa-twitter"></i>
                  </a> */}
                  <a href="https://www.instagram.com/socialsbymediaicon" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/media-icon-llc" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
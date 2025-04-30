import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We provide a wide range of marketing services to help your business grow and thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
            <div className="text-primary mb-4">
              <i className="fas fa-globe text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Strategy</h3>
            <p className="text-gray-600 mb-4">
              We develop comprehensive digital strategies tailored to your business goals and target audience.
            </p>
            <Link href="#contact" className="text-primary font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="text-primary mb-4">
              <i className="fas fa-hashtag text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Social Media Marketing</h3>
            <p className="text-gray-600 mb-4">
            We manage, strategize, and grow your social presence with content that converts and connects.
            </p>
            <Link href="#contact" className="text-primary font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="300">
            <div className="text-primary mb-4">
              <i className="fas fa-camera text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Media Production</h3>
            <p className="text-gray-600 mb-4">
            High-quality content shoots, editing, and creative direction to bring your brand vision to life.
            </p>
            <Link href="#contact" className="text-primary font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="400">
            <div className="text-primary mb-4">
              <i className="fas fa-laptop-code text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Web Development </h3>
            <p className="text-gray-600 mb-4">
            From redesigns to full builds, we craft fast, optimized websites that convert and scale.
            </p>
            <Link href="#contact" className="text-primary font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="500">
            <div className="text-primary mb-4">
              <i className="fas fa-chart-line text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
            <p className="text-gray-600 mb-4">
              Data-driven insights to measure campaign performance and optimize your marketing efforts.
            </p>
            <Link href="#contact" className="text-primary font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="600">
            <div className="text-primary mb-4">
              <i className="fas fa-palette text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Graphic Design</h3>
            <p className="text-gray-600 mb-4">
            Custom graphics built to elevate your brand, boost engagement, and communicate with clarity.
            </p>
            <Link href="#contact" className="text-primary font-medium hover:underline">Learn More →</Link>
          </div>
        </div>
      </div>
    </section>
  );
} 
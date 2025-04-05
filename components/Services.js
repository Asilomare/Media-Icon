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
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-globe text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Strategy</h3>
            <p className="text-gray-600 mb-4">
              We develop comprehensive digital strategies tailored to your business goals and target audience.
            </p>
            <Link href="#contact" className="text-indigo-600 font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-hashtag text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Social Media Marketing</h3>
            <p className="text-gray-600 mb-4">
              Engage your audience and build brand loyalty through strategic social media campaigns.
            </p>
            <Link href="#contact" className="text-indigo-600 font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="300">
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-search text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
            <p className="text-gray-600 mb-4">
              Improve your search engine rankings and drive organic traffic to your website.
            </p>
            <Link href="#contact" className="text-indigo-600 font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="400">
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-paint-brush text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Content Creation</h3>
            <p className="text-gray-600 mb-4">
              Engaging, SEO-friendly content that resonates with your audience and drives conversions.
            </p>
            <Link href="#contact" className="text-indigo-600 font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="500">
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-chart-line text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
            <p className="text-gray-600 mb-4">
              Data-driven insights to measure campaign performance and optimize your marketing efforts.
            </p>
            <Link href="#contact" className="text-indigo-600 font-medium hover:underline">Learn More →</Link>
          </div>
          
          <div className="service-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="600">
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-ad text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">PPC Advertising</h3>
            <p className="text-gray-600 mb-4">
              Strategic paid advertising campaigns that maximize ROI and drive qualified leads.
            </p>
            <Link href="#contact" className="text-indigo-600 font-medium hover:underline">Learn More →</Link>
          </div>
        </div>
      </div>
    </section>
  );
} 
import Link from 'next/link';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Check out some of our recent projects and see how we've helped businesses like yours achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="portfolio-item rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <div className="relative">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Building/SVG/ic_fluent_building_retail_24_filled.svg" alt="E-commerce Project" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">E-commerce Redesign</h3>
                  <p className="mb-4">Complete website redesign with 40% increase in conversions</p>
                  <a href="#" className="inline-block px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300">View Details</a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E-commerce Redesign</h3>
              <p className="text-gray-600 mb-4">
                Complete website redesign with conversion optimization
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Web Design</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">E-commerce</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">UX/UI</span>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 2 */}
          <div className="portfolio-item rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <div className="relative">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Food/SVG/ic_fluent_food_24_filled.svg" alt="Restaurant Marketing Campaign" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Restaurant Marketing</h3>
                  <p className="mb-4">Integrated campaign with 200% ROI and increased foot traffic</p>
                  <a href="#" className="inline-block px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300">View Details</a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Restaurant Marketing</h3>
              <p className="text-gray-600 mb-4">
                Integrated marketing campaign for a local restaurant chain
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Social Media</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Local SEO</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Content</span>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 3 */}
          <div className="portfolio-item rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <div className="relative">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Book/SVG/ic_fluent_book_24_filled.svg" alt="Educational App" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Educational App Launch</h3>
                  <p className="mb-4">App launch campaign with 50K downloads in first month</p>
                  <a href="#" className="inline-block px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300">View Details</a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Educational App Launch</h3>
              <p className="text-gray-600 mb-4">
                Launch campaign for an educational mobile application
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Mobile</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">App Marketing</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">PPC</span>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 4 */}
          <div className="portfolio-item rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <div className="relative">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Sport/SVG/ic_fluent_sport_24_filled.svg" alt="Fitness Brand" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Fitness Brand Identity</h3>
                  <p className="mb-4">Complete rebrand with 85% positive customer feedback</p>
                  <a href="#" className="inline-block px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300">View Details</a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Fitness Brand Identity</h3>
              <p className="text-gray-600 mb-4">
                Complete rebrand for a fitness equipment company
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Branding</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Logo Design</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Packaging</span>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 5 */}
          <div className="portfolio-item rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <div className="relative">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Vehicle/SVG/ic_fluent_vehicle_car_24_filled.svg" alt="Automotive Campaign" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Automotive Campaign</h3>
                  <p className="mb-4">Digital campaign resulting in 45% sales increase</p>
                  <a href="#" className="inline-block px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300">View Details</a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Automotive Campaign</h3>
              <p className="text-gray-600 mb-4">
                Digital marketing campaign for a luxury car dealership
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Digital</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Advertising</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Video</span>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 6 */}
          <div className="portfolio-item rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <div className="relative">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Building/SVG/ic_fluent_building_bank_24_filled.svg" alt="Financial Services" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Financial Services SEO</h3>
                  <p className="mb-4">SEO strategy resulting in 310% organic traffic increase</p>
                  <a href="#" className="inline-block px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300">View Details</a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Financial Services SEO</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive SEO strategy for a financial services firm
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">SEO</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Content</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Analytics</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="#contact" className="btn-primary px-8 py-3 rounded-full text-white font-medium inline-block">View All Projects</Link>
        </div>
      </div>
    </section>
  );
} 
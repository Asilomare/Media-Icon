export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            See what our clients have to say about working with us and the results we've delivered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-quote-left text-4xl"></i>
            </div>
            <p className="text-gray-600 mb-6">
              "Apex Marketing transformed our online presence completely. Their strategic approach and creative solutions helped us increase our leads by 150% in just three months."
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">JD</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold">John Doe</h4>
                <p className="text-gray-600 text-sm">CEO, TechStartup Inc.</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="testimonial-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-quote-left text-4xl"></i>
            </div>
            <p className="text-gray-600 mb-6">
              "Working with Apex has been a game-changer for our business. Their social media strategy increased our engagement by 200% and directly contributed to a 35% increase in sales."
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">JS</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold">Jane Smith</h4>
                <p className="text-gray-600 text-sm">Marketing Director, Fashion Brand</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="testimonial-card bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="300">
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-quote-left text-4xl"></i>
            </div>
            <p className="text-gray-600 mb-6">
              "The Apex team is incredibly knowledgeable and professional. Their SEO work has put us on the first page of Google for our key terms, resulting in a significant boost in organic traffic."
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">RJ</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold">Robert Johnson</h4>
                <p className="text-gray-600 text-sm">Owner, Local Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
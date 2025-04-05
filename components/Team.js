export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Meet the talented professionals behind our successful campaigns and strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="team-member text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="relative rounded-lg overflow-hidden mb-4">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Person/SVG/ic_fluent_person_24_filled.svg" alt="Sarah Johnson" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-3">
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
            <p className="text-indigo-600 mb-3">CEO & Founder</p>
            <p className="text-gray-600">
              With 15+ years of experience in digital marketing and business strategy.
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div className="team-member text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="relative rounded-lg overflow-hidden mb-4">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Person/SVG/ic_fluent_person_24_filled.svg" alt="Michael Chen" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-3">
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
            <p className="text-indigo-600 mb-3">Creative Director</p>
            <p className="text-gray-600">
              Award-winning designer with a passion for creating impactful brand experiences.
            </p>
          </div>
          
          {/* Team Member 3 */}
          <div className="team-member text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="relative rounded-lg overflow-hidden mb-4">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Person/SVG/ic_fluent_person_24_filled.svg" alt="Emily Rodriguez" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-3">
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Emily Rodriguez</h3>
            <p className="text-indigo-600 mb-3">Digital Strategist</p>
            <p className="text-gray-600">
              Data-driven marketer specializing in SEO and content strategy.
            </p>
          </div>
          
          {/* Team Member 4 */}
          <div className="team-member text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="relative rounded-lg overflow-hidden mb-4">
              <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Person/SVG/ic_fluent_person_24_filled.svg" alt="David Kim" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-3">
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">David Kim</h3>
            <p className="text-indigo-600 mb-3">Social Media Expert</p>
            <p className="text-gray-600">
              Social media guru with expertise in community building and engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We follow a proven process to ensure the success of every project we undertake.
          </p>
        </div>
        
        <div className="relative">
          {/* Process Steps */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100"></div>
          
          <div className="space-y-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center" data-aos="fade-up">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-blue-800">Discovery</h3>
                <p className="text-gray-600">
                  We start by understanding your business, goals, target audience, and competitors to develop a strategic foundation.
                </p>
              </div>
              <div className="md:w-12 md:flex justify-center hidden">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl z-10">1</div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Search/SVG/ic_fluent_search_24_filled.svg" alt="Discovery Phase" className="w-40 h-40 mx-auto" />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-up">
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-left md:text-right">
                <h3 className="text-2xl font-bold mb-3 text-blue-800">Strategy</h3>
                <p className="text-gray-600">
                  We develop a tailored marketing strategy that aligns with your goals and resonates with your target audience.
                </p>
              </div>
              <div className="md:w-12 md:flex justify-center hidden">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl z-10">2</div>
              </div>
              <div className="md:w-1/2 md:pr-12">
                <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Board/SVG/ic_fluent_board_24_filled.svg" alt="Strategy Phase" className="w-40 h-40 mx-auto" />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center" data-aos="fade-up">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-blue-800">Creation</h3>
                <p className="text-gray-600">
                  Our creative team brings the strategy to life through compelling content, design, and campaigns.
                </p>
              </div>
              <div className="md:w-12 md:flex justify-center hidden">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl z-10">3</div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Document/SVG/ic_fluent_document_24_filled.svg" alt="Creation Phase" className="w-40 h-40 mx-auto" />
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-up">
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-left md:text-right">
                <h3 className="text-2xl font-bold mb-3 text-blue-800">Implementation</h3>
                <p className="text-gray-600">
                  We execute the strategy across all relevant channels, ensuring consistent messaging and branding.
                </p>
              </div>
              <div className="md:w-12 md:flex justify-center hidden">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl z-10">4</div>
              </div>
              <div className="md:w-1/2 md:pr-12">
                <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Rocket/SVG/ic_fluent_rocket_24_filled.svg" alt="Implementation Phase" className="w-40 h-40 mx-auto" />
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center" data-aos="fade-up">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-blue-800">Analysis & Optimization</h3>
                <p className="text-gray-600">
                  We continuously monitor performance and make data-driven adjustments to maximize results.
                </p>
              </div>
              <div className="md:w-12 md:flex justify-center hidden">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl z-10">5</div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/Data%20Histogram/SVG/ic_fluent_data_histogram_24_filled.svg" alt="Analysis Phase" className="w-40 h-40 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <img src="https://cdn.jsdelivr.net/gh/Microsoft/fluentui-system-icons/assets/People/SVG/ic_fluent_people_team_24_filled.svg" alt="About Us" className="w-full h-auto max-w-lg mx-auto" />
          </div>
          <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6">
            We’re not just another agency — we’re your creative growth partner.
            We specialize in strategic, organic content that connects with audiences and drives performance. Whether it’s media production, social strategy, design, or data — we turn content into your brand’s most powerful asset.
            </p>
            <p className="text-gray-600 mb-8">
            Our team blends creativity and strategy to help you grow with purpose.
            From ideation to execution, we build systems that scale — delivering content that doesn’t just look good, but drives real, measurable results. When you work with us, you’re not just getting content. You’re getting a team obsessed with your growth.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Our Mission</h3>
                <p className="text-gray-600">
                To inspire brands to realize their full potential through organic, strategic, and data-driven content.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Our Vision</h3>
                <p className="text-gray-600">
                To prove that the most powerful form of brand growth doesn’t require paid ads — just purpose, creativity, and consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
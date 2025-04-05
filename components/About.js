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
              Apex Marketing is a forward-thinking digital marketing agency dedicated to helping businesses of all sizes achieve their marketing goals. With a team of experienced professionals, we deliver innovative solutions that drive results.
            </p>
            <p className="text-gray-600 mb-8">
              Our approach combines creativity with data-driven strategies to create campaigns that not only look good but also perform exceptionally well in today's competitive landscape.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-indigo-600">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with innovative marketing solutions that drive growth and success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-indigo-600">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted partner for businesses seeking to transform their digital presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
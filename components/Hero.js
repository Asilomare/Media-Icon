import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-50 pt-24 md:pt-0">
      <div className="container mx-auto px-4 py-20 md:py-32 lg:mb-48">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Make Your <span className="gradient-text"><br/>Social Presence</span> <br/>Iconic
            </h1>
            <p className="text-lg text-gray-600 mb-8">
            We help brands grow by creating strategic, organic content that builds connection, drives engagement, and delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#contact" className="btn-primary px-8 py-3 rounded-full text-white font-medium text-center">
                Get Started
              </Link>
              <Link href="#contact" className="btn-outline px-8 py-3 rounded-full text-indigo-600 font-medium text-center">
                Our Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="1000">
            <img src="/hero.png" alt="Marketing Illustration" className="w-full h-auto max-w-lg mx-auto" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 
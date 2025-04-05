import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Ready to Transform Your Digital Presence?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Partner with us to create impactful marketing strategies that drive real results for your business.
        </p>
        <Link href="#contact" className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-100 transition duration-300" data-aos="fade-up" data-aos-delay="200">
          Get Started Today
        </Link>
      </div>
    </section>
  );
} 
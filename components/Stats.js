import Counter from './Counter';

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-aos="fade-up" data-aos-delay="100">
            <Counter id="counter1" end={150} />
            <p className="text-gray-600 text-lg font-medium">Happy Clients</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Counter id="counter2" end={430} />
            <p className="text-gray-600 text-lg font-medium">Projects Completed</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Counter id="counter3" end={25} />
            <p className="text-gray-600 text-lg font-medium">Team Members</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Counter id="counter4" end={32} />
            <p className="text-gray-600 text-lg font-medium">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
} 
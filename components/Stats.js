import Counter from './Counter';

export default function Stats() {
  return (
    <section className="pb-16 pt-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div data-aos="fade-up">
            <Counter id="counter1" end={426673186} duration={1000} />
            <p className="text-gray-600 text-xl font-medium mt-2">Views and counting!</p>
          </div>
        </div>
      </div>
    </section>
  );
} 
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function PatientTalks() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      id: 1,
      videoUrl: "/video1.mp4",
      name: "Sumetha",
      role: "Software Developer",
      location: "Hyderabad",
    },
    {
      id: 2,
      videoUrl: "/video2.mp4",
      name: "Sumetha",
      role: "Software Developer",
      location: "Hyderabad",
    },
    {
      id: 3,
      videoUrl: "/video3.mp4",
      name: "Sumetha",
      role: "Software Developer",
      location: "Hyderabad",
    },
    {
      id: 4,
      videoUrl: "/video4.mp4",
      name: "Sumetha",
      role: "Software Developer",
      location: "Hyderabad",
    },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Patients Love Us</h2>

      {/* Scrollable Container */}
      <div className="relative mt-6">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-6"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((testimonial) => (
            <VideoCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          ▶
        </button>
      </div>
    </section>
  );
}

// VideoCard Component with Lazy Loading
const VideoCard = ({ testimonial }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="snap-center w-64 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
    >
      {inView ? (
        <video
          src={testimonial.videoUrl}
          controls
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}

      <div className="p-4 text-left">
        <p className="text-gray-900 font-bold">{testimonial.name}</p>
        <p className="text-gray-700 text-sm">{testimonial.role}</p>
        <p className="text-gray-700 text-sm">{testimonial.location}</p>
      </div>
    </div>
  );
};

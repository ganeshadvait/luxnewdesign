'use client';
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import './patistyles.css';

export default function PatientTalks() {
  const scrollRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const testimonials = [
    { id: 1, videoUrl: "/bg-video.mp4", name: "Sumetha" },
    { id: 2, videoUrl: "/bg-video.mp4", name: "Sumetha" },
    { id: 3, videoUrl: "/bg-video.mp4", name: "Sumetha" },
    { id: 4, videoUrl: "/bg-video.mp4", name: "Sumetha" },
  ];

  return (
    <section 
      ref={ref} 
      className={`py-12 text-center transition-opacity duration-500 patient_section ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <h2 className="text-3xl sm:2xl font-500 text-gray-900">Patients Love Us</h2>

      <div className="relative mt-6 ">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" d="M10.5 2.5 5 8l5.5 5.5"/></svg>
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide  videos_boxex"
        >
          {testimonials.map((testimonial) => (
            <VideoCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" d="M5.5 2.5 11 8l-5.5 5.5"/></svg>
        </button>
      </div>
    </section>
  );
}

const VideoCard = ({ testimonial }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="snap-center w-64 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden shadow-lg video_box"
    >
      {inView ? (
        <video
          src={testimonial.videoUrl}
       
  muted 
  loop 
          className=" object-cover w-full h-[240px]"
        />
      ) : (
        <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}

      <div className="p-4 text-center">
        <p className="text-gray-900 font-bold">{testimonial.name}</p>
      </div>
    </div>
  );
};

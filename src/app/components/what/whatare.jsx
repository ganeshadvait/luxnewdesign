'use client';
import React from "react";
import './whatstyles.css';
import { useInView } from "react-intersection-observer";

export default function Whatare() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
});
  return (
    <section 
    ref={ref}
    className={`logo-fade hero_image lg:px-20 text-[#252B61] whatare ${inView ? "fade-in" : "opacity-0"}`}>
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-500 mb-4">What Are Piles / Hemorrhoids?</h2>
      <p className="text-gray-700 mb-6 leading-[2em] whatarepara">
        Piles, or hemorrhoids, are swollen blood vessels in the rectum or anus that can
        cause pain, itching, bleeding, and discomfort, particularly during bowel movements.
      </p>

      {/* Treatments Section */}
      <h3 className="text-lg md:text-xl font-500 mb-6">Top 3 Advanced Treatments for Piles at Lux Hospitals:</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-[#6B46C1] font-500 mb-6">• Laser Hemorrhoidoplasty (LHP)</h4>
          <p className="text-gray-700 mb-2 px-4 leading-[2em] whatarepara">
            A highly effective, minimally invasive procedure that uses laser energy to shrink and
            seal off hemorrhoids. This treatment reduces pain, offers faster recovery, and
            minimizes the risk of recurrence.
          </p>
        </div>
        
        <div>
          <h4 className="text-[#6B46C1] font-500 mb-6">• Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)</h4>
          <p className="text-gray-700 mb-2 px-4 leading-[2em] whatarepara">
            A modern, non-surgical technique where a Doppler ultrasound is used to identify and tie
            off hemorrhoidal arteries, cutting off blood flow to the hemorrhoids and causing them to shrink.
          </p>
        </div>
        
        <div>
          <h4 className="text-[#6B46C1] font-500 mb-6">• Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)</h4>
          <p className="text-gray-700 mb-2 px-4 leading-[2em] whatarepara">
            A combination of hemorrhoid artery ligation with a repair of the rectal mucosa, designed
            for more advanced hemorrhoids. This minimally invasive method preserves the anal
            cushions and promotes healing with less post-operative pain.
          </p>
        </div>
      </div>
    </section>
  );
}

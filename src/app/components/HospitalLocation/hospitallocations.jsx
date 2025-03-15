"use client";
import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import './hplstyles.css';
import { useInView } from "react-intersection-observer";

export default function HospitalLocation() {
    const { ref, inView } = useInView({
            triggerOnce: true, 
            threshold: 0.1, 
        });
  return (
    <section
    ref={ref}
    className= {`flex flex-col items-center hospital_location_section ${inView ? "fade-in" : "opacity-0"}`}>
      <h2 className="text-2xl font-500 text-center text-indigo-900">
        Our Hospital Location
      </h2>
      <div 
      className="border-grey-100 location_card shadow-lg"
      > 
      <div className="leftl-right">
    
      </div>
      <div className="leftl-lright">
      <div className="p-6 lg:w-2/3">
          <h3 className="text-lg font-500 text-gray-900">
            LUX Hospitals - Colorectal | Surgical GI | Urology | Gynecology |
            Plastic Surgery | ENT | Orthopaedics
          </h3>

          {/* Google Review */}
          <p className="text-gray-500 mt-2">Google review</p>
          <div className="flex items-center">
            <span className="text-lg font-bold">4.5</span>
            <div className="flex text-yellow-500 ml-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </div>

          {/* Address Info */}
          <p className="mt-3 text-gray-700 flex items-start address_info">
            <FaMapMarkerAlt className="mr-2 text-gray-600" /> Lorem ipsum dolor
            sit amet consectetur. Aliquet morbi amet nec diam. Vel massa commodo
            viverra.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700">
              <FaMapMarkerAlt /> Get Direction
            </button>
            <button className="border px-4 py-2 rounded-lg shadow-md hover:bg-gray-100">
              Reviews
            </button>
          </div>
        </div>
      </div>
      
      </div>
    </section>
  );
}

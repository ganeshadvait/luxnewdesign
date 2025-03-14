"use client";
import './luxgptstyles.css';
import Image from 'next/image';
import { useInView } from "react-intersection-observer";
export default function Luxgpt () {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
    return(
        <>
        <section 
        ref={ref} 
        className= {` Luxgpt_section ${inView ? "fade-in" : "opacity-0"}`}>
      
      <div className="md:w-1/2 text-center md:text-left left_Container">
        <h2 className="text_luxgot font-500">
          <span className="text-yellow-400">LUXGPT</span> : Your One <br />
          <span className="text-white">Message Away Companion</span>
        </h2>
        <p className="mt-4 text-lg leading-relaxed luxgpt_para">
          Healthcare, Simplified—Everything You Need In One Place. From Sharing
          Medical Reports To Getting Answers About Insurance Or Doctor
          Consultations, Just Send A Quick Text Or Voice Note For Instant Support.
        </p>

        
        <div className="mt-6 flex items-center justify-center md:justify-start space-x-2 bg-white rounded-full px-4 py-2 w-fit">
          <input
            type="text"
            placeholder="Top Most Doctors..."
            className="bg-transparent text-gray-700 focus:outline-none"
          />
          <button className="bg-purple-500 hover:bg-purple-700 text-white p-2 rounded-full">
            ➜
          </button>
        </div>
      </div>

      
      <div className="md:w-1/3 mt-6 md:mt-0 second_box">
        <Image
          src="/your-image.png"
          alt="LUXGPT Chat"
          className="w-full rounded-xl shadow-lg gpt_image"
          width={500}
          height={350}
        />
      </div>
    </section>
        </>
    )
}
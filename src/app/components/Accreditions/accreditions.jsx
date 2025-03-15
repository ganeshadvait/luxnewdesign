"use client";
import Image from "next/image";
import  './accstyles.css';
import { useInView } from "react-intersection-observer";

const Accreditations = () => {
     const { ref, inView } = useInView({
             triggerOnce: true, 
             threshold: 0.1, 
         });
  return (
   
<>
<section
ref={ref}
className={`accreditions ${inView ? "fade-in" : "opacity-0"}`}>
    <h2 className="text-center font-500 text-3xl">Accreditations</h2>
    <div className="for_nabh">
        <div className="lrboxes">
        <div className="flex justify-center p-6">
           <Image
             src="/TRAIL.svg"
             alt="NABH Certified"
             width={200}
             height={200}
             className="object-contain"
             priority
           />
         </div>
        </div>
        <div className="lrboxes_right">
        <div className="bg-blue-300 p-6 right_b-lg text-center">
          <p className="text-gray-700 font-medium font_small">
            Lorem ipsum dolor sit amet consectetur. At ac vitae semper volutpat in
            neque vel vitae ut. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        </div>
    </div>
    <div className="for_ISO flex">
        <div className="lrboxes_ISO_left">
        <div className="bg-green-300 p-6 mt-6 border_radi text-center">
        <p className="text-gray-700 font-medium font_small">
          Lorem ipsum dolor sit amet consectetur. At ac vitae semper volutpat in
          neque vel vitae ut. Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
        </div>
        <div className="lrboxes_ISO">
        <div className="flex justify-center p-4">
          <Image
            src="/ISO.svg"
            alt="ISO Certified"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </div>
        </div>
    </div>
</section>
</>
  );
};

export default Accreditations;

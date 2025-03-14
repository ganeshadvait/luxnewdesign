"use client";
import { useInView } from "react-intersection-observer";


export default function Videos () {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
   return (
    <>
    <section 
    ref={ref} 
    className= {` videos_section ${inView ? "fade-in" : "opacity-0"}`}
    >
        
    </section>
    </>
   )
}
"use client";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function HospitalComparison() {
    const { ref, inView } = useInView({
                triggerOnce: true, 
                threshold: 0.1, 
            });
  return (
    <section
    ref={ref}
    className= {`w-[90%] mx-auto my-10 ${inView ? "fade-in" : "opacity-0"}`}>
      <h2 className="text-center text-2xl md:text-3xl font-500 text-gray-800">
        Best Piles Treatment At Lux Hospitals
      </h2>

      <div 
      ref={ref}
      className={`overflow-x-auto mt-6 ${inView ? "fade-in" : "opacity-0"}`}>
        <table className="w-full border-collapse border rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-green-300 text-gray-800">
              <th className="p-3 text-left" style={{
                background:" #A3DAC2"

              }}></th>
              <th className="p-3 text-center font-semibold" style={{
                background:" #A3DAC2"

              }}>Other Hospital</th>
              <th className="p-3 text-center  font-semibold" style={{
                background:" #A3DAC2"

              }}>Lux Hospitals</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-3 font-semibold text-purple-600">Cost</td>
              <td className="p-3 text-center " style={{
                background: "#D2ADAD80"

              }}>Variable</td>
              <td className="p-3 text-center font-500" style={{
                background: "#4A3AFF80"

              }}>FIXED</td>
            </tr>
            <tr className="border">
              <td className="p-3 font-semibold text-purple-600">Sterilization</td>
              <td className="p-3 text-center" style={{
                background: "#D2ADAD80"

              }}>Autoclave / ETO</td>
              <td className="p-3 text-center  font-500" style={{
                background: "#4A3AFF80"

              }}>PLASMA STERILIZATION</td>
            </tr>
            <tr className="border">
              <td className="p-3 font-semibold text-purple-600">Insurance</td>
              <td className="p-3 text-center" style={{
                background: "#D2ADAD80"

              }}>80-85% Coverage</td>
              <td className="p-3 text-center  font-500"style={{
                background: "#4A3AFF80"

              }}>100% COVERAGE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

"use client";
import Image from 'next/image';
import React from 'react';
import './sstyles.css';
import { useInView } from 'react-intersection-observer';

export default function Second() {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
    const services = [
        {
            image: "/book an appointment.png",
            title: "Book Doctor Appointment",
            description: "Connect Within 60 Seconds. Connect Within 60 Seconds.",
            bgColor: "bg-green-200",
            arrow: "/Arrow.svg"
        },
        {
            image: "/get consultation.png",
            title: "Request Online Consultation",
            description: "Confirmed Appointments. Confirmed Appointments.",
            bgColor: "bg-yellow-200",
            arrow: "/Arrow.svg"
        },
        {
            image: "/secondopinion.png",
            title: "Get Expert Second Opinion",
            description: "Essentials At Your Doorstep. Essentials At Your Doorstep.",
            bgColor: "bg-pink-200",
            arrow: "/Arrow.svg"
        },
        {
            image: "/health insurance.png",
            title: "Insurance and Estimation",
            description: "Simple Pickup At Your Home. Simple Pickup At Your Home.",
            bgColor: "bg-blue-200",
            arrow: "/Arrow.svg"
        }
    ];
    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => {
                setShowImages(true);
            }, 2000); 

            return () => clearTimeout(timer);
        }
    }, [inView]);

    return (
        <section
        ref={ref}
        className= {`second_section grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 fade-in ${inView ? "fade-in" : "opacity-0"}`}>
            {services.map((service, index) => (
                <div key={index}
                ref={ref}
                className={`sessioncards rounded-xl overflow-hidden shadow-lg ${service.bgColor} transition-opacity duration-700 ease-out 
            ${inView ? `opacity-100 delay-${index * 200}` : "opacity-0"}`}>
                    <div className="relative w-full h-45">
                    {showImages && (
                <Image
                    src="/your-image.png"
                    alt="Delayed Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg fade-in"
                />
            )}

                    </div>
                    <div className="p-4 flex content_Card">
                        <div>
                            <h2 className="service_title font-semibold">{service.title}</h2>
                            <p className="service_description text-gray-600">{service.description}</p>
                        </div>
                        <div>
                            <Image src={service.arrow} alt="arrow-buttons" width={55} height={55}/>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

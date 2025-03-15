"use client";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import "./headerstyles.css";

export default function Header() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <header className="header">
            
            <div className="header__logos" ref={ref}>
                <a href="#"><img className={`logo-fade header__logo ${inView ? "fade-in" : "opacity-0"}`} src="/lux logo final .png" alt="logo"  width={140} height={60}/></a>
    <a href="#"><img className={`logo-fade header__logotwo ${inView ? "fade-in" : "opacity-0"}`} src="/ISO.svg" alt="logo" /></a>
    <a href="#"><img className={`logo-fade header__logothree ${inView ? "fade-in" : "opacity-0"}`} src="/TRAIL.svg" alt="logo" /></a>
            </div>

           
            <nav className="header__menu">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

          
            <div className="header__cta">
                <Link href="/get-started" className="header_cta_type_one">+91123456789</Link>
            </div>
        </header>
    );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-10.30.51.jpeg",
    title: "EOT Crane Manufacturer & Supplier",
    subtitle: "Welcome to KD Cranes",
    desc: "India's leading manufacturer of heavy duty Material Handling Equipments, EOT Crane Spare Parts, DSL Busbar Systems, and Wireless Remote Controls."
  },
  {
    image: "/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-10.30.55.jpeg",
    title: "Premium Quality Crane Parts",
    subtitle: "Reliable & Durable",
    desc: "Offering a defect-free range of Crane Parts valued for their dimensional accuracy, perfect finish, rust resistance, and easy installation."
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slider-container">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
          <div 
            style={{
              width: '100%', 
              height: '100%', 
              background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${slide.image}") center/cover no-repeat`
            }} 
            className="slide-img"
          ></div>
          
          <div className="slide-content container">
            <span className="slide-subtitle">{slide.subtitle}</span>
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-desc">{slide.desc}</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/products" className="btn-primary">Our Products</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      ))}
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '12px', height: '12px', borderRadius: '50%', 
              background: index === currentSlide ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
              border: 'none', cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </section>
  );
}

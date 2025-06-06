"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  // Carousel state
  const carouselImages = [
    "/images/carousel/c-img-1.jpg",
    "/images/carousel/c-img-2.jpg",
    "/images/carousel/c-img-3.jpg",
    "/images/carousel/c-img-4.jpg",
    "/images/carousel/c-img-5.jpg",
    "/images/carousel/c-img-6.jpg",
    "/images/carousel/c-img-7.jpg",
  ];
  const [current, setCurrent] = useState(0);

  const prevImage = () => setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));

  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
          <Image
            src="/images/img-7.jpg"
            alt="About Us Banner"
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 font-montserrat">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4 max-w-4xl">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full bg-white py-20 font-montserrat">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-8 items-center">
            {/* Left: Carousel */}
            <div className="w-full flex flex-col items-center">
              <div className="relative w-11/12 max-w-[480px] h-[340px] sm:h-[400px] mx-auto rounded-[20px] overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={carouselImages[current]}
                      alt={`Gallery image ${current + 1}`}
                      fill
                      className="object-cover object-center w-full h-full select-none rounded-[20px]"
                      sizes="(max-width: 1024px) 100vw, 480px"
                      priority={current === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Left arrow */}
                <button
                  aria-label="Previous image"
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-1.5 shadow transition-all duration-150 z-10 w-8 h-8 flex items-center justify-center"
                  style={{ backdropFilter: 'blur(2px)' }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                {/* Right arrow */}
                <button
                  aria-label="Next image"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-1.5 shadow transition-all duration-150 z-10 w-8 h-8 flex items-center justify-center"
                  style={{ backdropFilter: 'blur(2px)' }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
              {/* Dots below image */}
              <div className="flex justify-center gap-2 mt-4">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to image ${idx + 1}`}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${idx === current ? 'bg-[oklch(0.505_0.213_27.518)] scale-110' : 'bg-[#d4d4d4]'}`}
                  />
                ))}
              </div>
            </div>
            {/* Right: Content */}
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-gray-700 text-lg mb-8">
                At Maple Creek Home Health &amp; Hospice, we&apos;re committed to providing compassionate, high-quality care for individuals of all ages and stages of life. Our mission is to help you live as comfortably and fully as possible in the place you call home. Whether you&apos;re recovering from illness or navigating hospice care, we&apos;re here to walk with you—offering support, guidance, and respect every step of the way. We understand how important family is during times of change, and we treat your loved ones with the same care and dignity we&apos;d give our own.
              </p>
              <button className="bg-[oklch(0.505_0.213_27.518)] hover:brightness-110 text-white font-bold py-3 px-6 rounded text-lg shadow transition-all duration-200">
                Get In Touch With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
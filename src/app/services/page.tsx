"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-[28vh] md:h-[36vh] lg:h-[44vh] xl:h-[52vh]">
          <Image
            src="/images/img-13.jpg"
            alt="Services Banner"
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 font-montserrat">
            <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg mb-3 max-w-4xl">
              What Services We Offer
            </h1>
            <p className="text-white text-lg sm:text-lg md:text-xl font-medium drop-shadow mb-6 max-w-2xl">
              Home Health and Hospice care tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content Placeholder */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 font-montserrat text-center">Our Services</h2>
          <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto text-center">
            Detailed information about our services will be added here.
          </p>
        </div>
      </section>
    </>
  );
}

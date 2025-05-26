'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] xl:h-[92vh]">
          <Image
            src="/images/img-3.jpg"
            alt="Hero image"
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 font-montserrat">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4 max-w-4xl">
              Exceptional Home Health and Hospice Services in Utah County
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-medium drop-shadow mb-8 max-w-2xl">
              Empowering Families Through Every Chapter of Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/about" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded shadow-lg text-lg transition-all duration-150">
                Learn More
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-red-700 font-bold py-3 px-8 rounded shadow-lg text-lg transition-all duration-150 border-2 border-red-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white border border-[#e0e0e0] rounded-[1.25rem] shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:px-10 px-4 py-12 text-center font-montserrat relative"
          >
            {/* Red accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-700 rounded-t-[1.25rem]"></div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">Our Commitment</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Compassionate, At-Home Care</h3>
            
            <div className="flex justify-center mb-8">
              <Image
                src="/images/icon-1.png"
                alt="Care icon"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            
            <p className="text-gray-700 text-lg mb-6">
              At Maple Creek, we believe in providing exceptional care that goes beyond medical needs. Our dedicated team of healthcare professionals delivers personalized support that respects your family&apos;s unique journey, ensuring comfort and dignity at every step.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Whether you need skilled nursing care, therapy services, or hospice support, we&apos;re here to help you navigate this chapter with confidence and peace of mind.
            </p>
            
            <motion.a
              href="/services"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded text-lg transition-all duration-200 ease-in-out"
            >
              Explore Our Services &rarr;
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-[#f3f4f6] pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 text-center font-montserrat">Our Services</h2>
          <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto text-center font-montserrat">
            Maple Creek offers a full spectrum of in-home health and hospice services, designed to support patients and their families with skilled care, comfort, and compassion. Our team works closely with you to ensure every need is met—physically, emotionally, and spiritually—throughout your care journey.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start justify-items-center">
            {[
              { src: "/images/icon-2.png", alt: "Skilled Nursing", title: "Skilled Nursing Services" },
              { src: "/images/icon-3.png", alt: "Physician Oversight", title: "Physician Oversight" },
              { src: "/images/icon-4.png", alt: "Home Health Aides", title: "Home Health Aides" },
              { src: "/images/icon-5.png", alt: "Emotional & Spiritual Support", title: "Emotional & Spiritual Support" },
              { src: "/images/icon-6.png", alt: "Bereavement & Family Support", title: "Bereavement & Family Support" },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-4 transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
                  <Image src={item.src} alt={item.alt} width={44} height={44} className="object-contain" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 font-montserrat">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

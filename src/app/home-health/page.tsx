"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeHealthPage() {
  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-[28vh] md:h-[36vh] lg:h-[44vh] xl:h-[52vh]">
          <Image
            src="/images/img-12.jpg"
            alt="Home Health Banner"
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 font-montserrat">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <Image
                src="/images/icon-19.png"
                alt="Home Health Icon"
                width={20}
                height={20}
                className="inline-block w-5 h-5 mr-2 brightness-0 invert"
              />
              <span className="font-bold">Home Health</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg mb-4 max-w-4xl">
              Learn About Our Professional<br />Home Health Services
            </h1>
            <p className="text-white text-lg sm:text-lg md:text-xl font-medium drop-shadow mb-6 max-w-3xl">
              Maple Creek provides high quality Home Health through individualized, compassionate service. 
              Our Home Health services are available all throughout Utah County.
            </p>
          </div>
        </div>
      </section>

      {/* Home Health Staff Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side: Image with border - aligned to match content height */}
            <div className="w-full lg:w-2/5 lg:self-start lg:sticky lg:top-24">
              <div className="rounded-3xl overflow-hidden border-8 border-[oklch(0.505_0.213_27.518)] shadow-xl mt-16 lg:mt-0 h-[400px] md:h-[450px] lg:h-[500px] xl:h-[580px]">
                <Image 
                  src="/images/img-3.jpg"
                  alt="Home Health Staff"
                  width={600}
                  height={1600}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full lg:w-3/5">
              {/* Blue badge at top */}
              <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
                <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span className="font-bold">Home Health Staff</span>
              </div>
              
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900 font-montserrat">
                You're In Good Hands
              </h2>
              
              <div className="space-y-6 text-gray-700 font-montserrat">
                <p className="text-lg">
                  At <span className="font-semibold">Maple Creek Home Health & Hospice</span>, we have a team of professionals who are passionately committed to providing adults and seniors with short-term skilled nursing, rehabilitative, and therapeutic services.
                </p>
                
                <p className="text-lg">
                  <span className="font-semibold">At the heart of Home Health</span>, you will find a deep appreciation and understanding of the unique needs of our patients. We believe strongly in the dignity and value of the human soul. All of our services focus on quality care and quality of life. Home health is covered 100% by Medicare.
                </p>
                
                <a 
                  href="/contact" 
                  className="inline-block bg-[oklch(0.505_0.213_27.518)] hover:brightness-125 text-white font-bold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform-gpu font-montserrat mt-4"
                >
                  Schedule a Consultation
                  <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Staff List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 mt-16">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-[oklch(0.505_0.213_27.518)]/10 mr-3">
                <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Registered Nurses (RNs)</span>
            </div>
            
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-[oklch(0.505_0.213_27.518)]/10 mr-3">
                <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Physical Therapy Assistants (PTAs)</span>
            </div>
            
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-[oklch(0.505_0.213_27.518)]/10 mr-3">
                <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Speech Therapists (STs)</span>
            </div>
            
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-[oklch(0.505_0.213_27.518)]/10 mr-3">
                <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Certified Nursing Assistants (CNAs)</span>
            </div>
            
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-[oklch(0.505_0.213_27.518)]/10 mr-3">
                <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Occupational Therapists (OTs)</span>
            </div>
            
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-[oklch(0.505_0.213_27.518)]/10 mr-3">
                <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Medical Social Workers (MSW)</span>
            </div>
            
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-[oklch(0.505_0.213_27.518)]/10 mr-3">
                <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Physical Therapists (PTs)</span>
            </div>
            
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-[oklch(0.505_0.213_27.518)]/10 mr-3">
                <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-montserrat">Certified Occupational Therapy Assistants (COTAs)</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

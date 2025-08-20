"use client";

import Image from "next/image";
import AnimatedStats from "../../components/AnimatedStats";

export default function HospicePage() {
  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-[28vh] md:h-[36vh] lg:h-[44vh] xl:h-[52vh]">
          <Image
            src="/images/img-14.jpg"
            alt="Hospice Care Banner"
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
                alt="Hospice Icon"
                width={24}
                height={24}
                className="inline-block w-6 h-6 mr-2 brightness-0 invert"
              />
              <span className="font-bold">Hospice Care</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg mb-4 max-w-4xl">
              Learn About Our Compassionate<br />Hospice Services
            </h1>
            <p className="text-white text-lg sm:text-lg md:text-xl font-medium drop-shadow mb-6 max-w-3xl">
              Custom Care provides high quality Hospice care through individualized, compassionate service. Our Hospice services are available all throughout Utah County.
            </p>
          </div>
        </div>
      </section>

      {/* Hospice Staff Section */}
  <section className="w-full bg-[#f4f4f4] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side: Staff image */}
            <div className="w-full lg:w-2/5 lg:self-start lg:sticky lg:top-24">
              <div className="rounded-3xl overflow-hidden border-8 border-[oklch(0.505_0.213_27.518)] shadow-xl mt-16 lg:mt-0 h-[400px] md:h-[450px] lg:h-[500px] xl:h-[580px]">
                <Image 
                  src="/images/img-3.jpg"
                  alt="Hospice Staff"
                  width={600}
                  height={1600}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Right side: Content, header, and staff list */}
            <div className="w-full lg:w-3/5">
              {/* Badge at top with Home Health icon */}
              <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
                <Image
                  src="/images/icon-19.png"
                  alt="Hospice Staff Icon"
                  width={20}
                  height={20}
                  className="inline-block w-5 h-5 mr-2 brightness-0 invert"
                />
                <span className="font-bold">Hospice Staff</span>
              </div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900 font-montserrat">
                Compassionate & Professional Hospice Care
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Our goal is to provide comfort, dignity and quality of life for every one of our patients. Every effort is made by the Hospice Team to provide maximum physical comfort for the patient. Once the patient is comfortable, the hospice team then focuses on preparing the patient and loved ones emotionally and spiritually for death.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-[oklch(0.505_0.213_27.518)] hover:brightness-125 text-white font-bold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform-gpu font-montserrat mb-6"
              >
                Schedule a Consultation
                <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <p className="text-lg text-gray-700 font-montserrat mb-6">
                We have a team of professionals who are passionately committed to providing adults and seniors with skilled nursing, rehabilitative, and therapeutic services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-4 mt-2">
                {[
                  'Registered Nurses (RNs)',
                  'Certified Nursing Assistants (CNAs)',
                  'Physical Therapists (PTs)',
                  'Physical Therapy Assistants (PTAs)',
                  'Occupational Therapists (OTs)',
                  'Certified Occupational Therapy Assistants (COTAs)',
                  'Speech Therapists (STs)',
                  'Medical Social Workers (MSW)'
                ].map((role) => (
                  <div className="flex items-center" key={role}>
                    <div className="p-2 rounded-full bg-[oklch(0.505_0.213_27.518)]/10 mr-3">
                      <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-montserrat">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section (reused from About) */}
      <div style={{ background: '#f4f4f4', width: '100%' }}>
        <AnimatedStats />
      </div>
    </>
  );
}

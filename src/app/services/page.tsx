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

      {/* Services Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span className="font-bold">Services</span>
            </div>
            <h2 className="text-4xl font-extrabold mb-3 text-gray-900 font-montserrat">Our In-Home Services</h2>
            <p className="text-lg text-gray-700 font-montserrat max-w-3xl mx-auto">
              At Custom Care, we are redefining healthcare by setting the standard for exceptional service. Our vision is to be the trusted partner that enhances lives and brings comfort, dignity, and peace to those we serve.
            </p>
          </div>
          
          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Home Health Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-gray-100 hover:border-[oklch(0.505_0.213_27.518)]">
              <div className="p-8 flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[oklch(0.505_0.213_27.518)]">
                    <Image 
                      src="/images/img-6.jpg"
                      alt="Home Health"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 font-montserrat">Home Health</h3>
                  <p className="text-gray-700 font-montserrat min-h-[160px]">
                    Home health focuses on recovery and rehabilitation. Home health care refers to a wide range of medical and non-medical services provided at a patient&apos;s home to help them recover from an illness, surgery, or manage chronic conditions. Our skilled nurses and therapists work together to create personalized care plans that promote independence and improve quality of life.
                  </p>
                  <a href="/home-health" className="mt-5 bg-[oklch(0.505_0.213_27.518)] hover:brightness-110 text-white font-bold py-2 px-5 rounded text-sm shadow transition-all duration-200 flex items-center w-fit">
                    LEARN MORE
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Hospice Care Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-gray-100 hover:border-[oklch(0.505_0.213_27.518)]">
              <div className="p-8 flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[oklch(0.505_0.213_27.518)]">
                    <Image 
                      src="/images/img-2.jpg"
                      alt="Hospice Care"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 font-montserrat">Hospice Care</h3>
                  <p className="text-gray-700 font-montserrat min-h-[160px]">
                    Hospice care, when administered at the optimal juncture, offers patients the invaluable gift of time. It affords them the opportunity to come to terms with their diagnosis, relish moments of nostalgia, bid their farewells, and put their affairs in order. Our compassionate team provides comfort, pain management, and emotional support during life&apos;s final journey.
                  </p>
                  <a href="/hospice" className="mt-5 bg-[oklch(0.505_0.213_27.518)] hover:brightness-110 text-white font-bold py-2 px-5 rounded text-sm shadow transition-all duration-200 flex items-center w-fit">
                    LEARN MORE
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Left side - Contact Text */}
            <div className="w-full flex flex-col items-center text-center lg:pr-6">
              <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
                <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="font-bold">Contact</span>
              </div>
              <h2 className="text-3xl font-extrabold mb-3 text-gray-900 font-montserrat">Contact Us</h2>
              <p className="text-lg text-gray-700 font-montserrat mb-4 mx-auto max-w-md">
                Our professional team is ready to answer your questions and provide information about our home health and hospice care services.
              </p>
            </div>
            
            {/* Vertical Divider (hidden on mobile) */}
            <div className="hidden lg:block absolute h-full w-[2px] bg-[oklch(0.505_0.213_27.518)] left-1/2 transform -translate-x-1/2"></div>
            
            {/* Right: Location */}
            <div className="w-full flex flex-col items-center lg:pl-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[oklch(0.505_0.213_27.518)] mb-6">
                  <Image 
                    src="/images/img-11.png"
                    alt="Utah County Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-montserrat">Utah County, UT</h3>
                <div className="text-gray-700 font-montserrat mt-2">
                  <p>691 West 1200 North Suite #150, 84663</p>
                  <p>Springville, UT 84663</p>
                </div>
              </div>
              
              <a 
                href="tel:8017985333" 
                className="bg-[oklch(0.505_0.213_27.518)] hover:brightness-125 text-white font-bold py-3 px-6 rounded text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform-gpu font-montserrat flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                801-798-5333
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-[oklch(0.505_0.213_27.518)] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat border border-white">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path>
              </svg>
              <span className="font-bold">Mission</span>
            </div>
            
            <h2 className="text-4xl font-extrabold mb-6 text-white font-montserrat">
              Providing Life-Changing Service To<br />Patients and Their Families
            </h2>
            
            <p className="text-lg text-white/90 font-montserrat max-w-4xl mx-auto leading-relaxed">
              We are <span className="font-bold text-white">passionate about serving</span> those that are seeking recovery through our in-home services or 
              are nearing the end of life and receiving care from our Hospice professionals.
              <span className="font-bold text-white"> Maple Creek Home Health & Hospice</span> adheres to being guided by the goals of the patient.
              Furthermore, embracing patient self-determination, autonomy, and choice
                      is at the core of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Content */}
            <div className="w-full flex flex-col lg:block items-center lg:items-start text-center lg:text-left">
              {/* Badge and Heading */}
              <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
                <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span className="font-bold">Consultation</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-gray-900 font-montserrat">
                The Benefits Of A Consultation
              </h2>
              
              {/* Mobile Image - Only visible on mobile */}
              <div className="block lg:hidden w-full mb-6 max-w-md">
                <div className="rounded-xl overflow-hidden shadow-lg h-[300px] w-full">
                  <Image 
                    src="/images/img-15.jpg"
                    alt="Consultation benefits"
                    className="w-full h-full object-cover"
                    width={800}
                    height={800}
                    priority
                  />
                </div>
              </div>
              
              {/* Main Content */}
              <div className="text-gray-700 font-montserrat mb-8 space-y-4 max-w-md lg:max-w-none">
                <p>
                  <span className="font-bold text-gray-900">Maple Creek Home Health & Hospice</span> is the perfect in-home solution for those who want to maintain their independence and dignity by continuing to live in the comfort of their own homes. Let our highly experienced Personal Care Attendants / Caregivers make your life easier with a personal plan of care that ensures a peaceful and satisfying in-home care experience.
                </p>
              </div>
              
              {/* Benefits List - Single column on mobile/tablet, two columns on desktop */}
              <div className="mb-8 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
                {/* Single table for perfect alignment */}
                <table className="w-full border-separate border-spacing-0">
                  <tbody>
                    <tr>
                      <td className="w-10 py-2 text-center lg:text-left align-top">
                        <div className="inline-flex items-center justify-center w-7 h-7">
                          <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="py-2 text-gray-700 text-center lg:text-left align-top">Learn About Our Services</td>
                      <td className="hidden lg:table-cell w-10 py-2 text-left align-top">
                        <div className="inline-flex items-center justify-center w-7 h-7">
                          <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="hidden lg:table-cell py-2 text-gray-700 text-left align-top">Gain Peace Of Mind</td>
                    </tr>
                    <tr>
                      <td className="w-10 py-2 text-center lg:text-left align-top">
                        <div className="inline-flex items-center justify-center w-7 h-7">
                          <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="py-2 text-gray-700 text-center lg:text-left align-top">Have Clarity Going Forward</td>
                      <td className="hidden lg:table-cell w-10 py-2 text-left align-top">
                        <div className="inline-flex items-center justify-center w-7 h-7">
                          <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="hidden lg:table-cell py-2 text-gray-700 text-left align-top">Explain Your Unique Situation</td>
                    </tr>
                    <tr>
                      <td className="w-10 py-2 text-center lg:text-left align-top">
                        <div className="inline-flex items-center justify-center w-7 h-7">
                          <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="py-2 text-gray-700 text-center lg:text-left align-top">Speak With A Real Person</td>
                      <td className="hidden lg:table-cell w-10 py-2 text-left align-top">
                        <div className="inline-flex items-center justify-center w-7 h-7">
                          <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="hidden lg:table-cell py-2 text-gray-700 text-left align-top">Talk To Someone Who Cares</td>
                    </tr>
                    <tr className="lg:hidden">
                      <td className="w-10 py-2 text-center align-top">
                        <div className="inline-flex items-center justify-center w-7 h-7">
                          <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="py-2 text-gray-700 text-center align-top">Gain Peace Of Mind</td>
                    </tr>
                    <tr className="lg:hidden">
                      <td className="w-10 py-2 text-center align-top">
                        <div className="inline-flex items-center justify-center w-7 h-7">
                          <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="py-2 text-gray-700 text-center align-top">Explain Your Unique Situation</td>
                    </tr>
                    <tr className="lg:hidden">
                      <td className="w-10 py-2 text-center align-top">
                        <div className="inline-flex items-center justify-center w-7 h-7">
                          <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="py-2 text-gray-700 text-center align-top">Talk To Someone Who Cares</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <a 
                href="/consultation" 
                className="inline-block bg-[oklch(0.505_0.213_27.518)] hover:brightness-125 text-white font-bold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform-gpu font-montserrat"
              >
                Schedule a Consultation
                <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
            
            {/* Right side: Image - Only visible on desktop */}
            <div className="hidden lg:flex w-full items-center justify-center px-4 py-6 lg:py-12">
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px] w-[90%]">
                <Image 
                  src="/images/img-15.jpg"
                  alt="Consultation benefits"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

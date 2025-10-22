"use client";
import Image from "next/image";
import React from "react";

export default function CareersPage() {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <section className="w-full">
        <div className="relative w-full h-[28vh] md:h-[36vh] lg:h-[44vh] xl:h-[52vh]">
          <Image
            src="/images/img-23.jpg"
            alt="Careers Banner"
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 font-montserrat">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4 max-w-4xl">
              Careers
            </h1>
          </div>
        </div>
      </section>

      {/* Careers Header Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="font-bold">Careers</span>
            </div>
            <h2 className="text-4xl font-extrabold mb-3 text-gray-900 font-montserrat">Help Us Provide Life-Changing Services</h2>
            <p className="text-lg text-gray-700 font-montserrat max-w-3xl mx-auto mb-8">
              Provide patient care with competitive salaries and benefits, flexible schedules, low caseloads, and a full-time on-call and admissions teams.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/img-25.jpg"
                alt="Maple Creek Healthcare Team"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="w-full bg-[oklch(0.505_0.213_27.518)] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat border border-white">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="font-bold">Openings</span>
            </div>
            <h2 className="text-4xl font-extrabold mb-6 text-white font-montserrat">
              View Our Current Job Opportunities
            </h2>
            <p className="text-lg text-white/90 font-montserrat max-w-4xl mx-auto mb-12">
              We have positions open up all throughout the year. Whether you are an experienced professional seeking a new challenge or just starting your career, we encourage all to apply! Nurses, clinicians, therapists, and other medical professionals in the senior care field that not only love what they do, but feel it is their calling – you&apos;re the ones we want to hear from! Click below and peruse our selection of open roles and discover how you can meaningfully contribute to our exceptional team.
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-[oklch(0.505_0.213_27.518)] font-bold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform-gpu font-montserrat"
            >
              Current Openings
              <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-[#f4f4f4] py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="font-bold">Benefits</span>
              </div>
            </div>
          </div>
          
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left side: Image */}
            <div className="w-full h-full">
              <div className="h-full rounded-xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/img-24.jpg"
                  alt="Maple Creek Healthcare Team"
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* Right side: Content */}
            <div className="w-full max-w-prose">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 md:mb-4 text-gray-900 font-montserrat">
                The Benefits of Working With Us
              </h2>
              
              <p className="text-gray-700 font-montserrat mb-8 text-lg leading-relaxed">
                Our comprehensive benefits package is designed around the value of &quot;customer second.&quot; We offer a variety of benefit choices, providing you with the flexibility to create a benefit plan that meets you and your family&apos;s health and wellness needs.
              </p>
              
              {/* Benefits Grid */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">Health Insurance</p>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">Dental Insurance</p>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">Vision Insurance</p>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">401K Retirement Plan</p>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">Paid Time Off</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile/Tablet layout */}
          <div className="md:hidden">
            <h2 className="text-3xl font-extrabold mb-3 text-gray-900 font-montserrat text-center">
              The Benefits of Working With Us
            </h2>
            
            {/* Image for mobile/tablet */}
            <div className="rounded-xl overflow-hidden shadow-sm w-full mb-8">
              <Image 
                src="/images/img-24.jpg"
                alt="Maple Creek Healthcare Team"
                className="w-full h-full object-cover"
                width={800}
                height={600}
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <div className="max-w-prose mx-auto">
              <p className="text-gray-700 font-montserrat mb-8 text-lg leading-relaxed">
                Our comprehensive benefits package is designed around the value of &quot;customer second.&quot; We offer a variety of benefit choices, providing you with the flexibility to create a benefit plan that meets you and your family&apos;s health and wellness needs.
              </p>
              
              {/* Benefits Grid */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">Health Insurance</p>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">Dental Insurance</p>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">Vision Insurance</p>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">401K Retirement Plan</p>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <svg className="w-5 h-5 text-[oklch(0.505_0.213_27.518)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold text-slate-800">Paid Time Off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
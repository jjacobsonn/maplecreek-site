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

      {/* Volunteer Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <div className="flex items-center">
                <Image 
                  src="/images/icon-25.png"
                  alt="Volunteer Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6 mr-2"
                />
                <span className="font-bold">Volunteer</span>
              </div>
            </div>
            <h2 className="text-4xl font-extrabold mb-3 text-gray-900 font-montserrat">Make a Difference in Your Community</h2>
            <p className="text-lg text-gray-700 font-montserrat max-w-3xl mx-auto mb-8">
              Volunteering with Maple Creek Healthcare provides a rewarding opportunity to touch lives and make a meaningful impact in your community.
            </p>
          </div>
          
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Content */}
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-montserrat">
                Why Volunteer With Us?
              </h3>
              <p className="text-gray-700 font-montserrat mb-6 text-lg leading-relaxed">
                Our volunteers are an essential part of our care team, bringing joy, companionship, and support to patients and their families. Whether you have a few hours a week or a few hours a month, your time and talents can make a significant difference.
              </p>
              <p className="text-gray-700 font-montserrat mb-8 text-lg leading-relaxed">
                Volunteer opportunities include patient companionship, administrative support, special events assistance, and more. We provide comprehensive training and ongoing support to ensure a fulfilling volunteer experience.
              </p>
              <div className="mt-8">
                <a 
                  href="#" 
                  className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white font-bold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform-gpu font-montserrat"
                >
                  Become a Volunteer
                  <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right side: Image */}
            <div className="w-full">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/img-26.jpg"
                  alt="Maple Creek Volunteers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile/Tablet layout */}
          <div className="md:hidden">
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <Image 
                src="/images/img-26.jpg"
                alt="Maple Creek Volunteers"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-montserrat text-center">
                Why Volunteer With Us?
              </h3>
              <p className="text-gray-700 font-montserrat mb-6 text-lg leading-relaxed">
                Our volunteers are an essential part of our care team, bringing joy, companionship, and support to patients and their families. Whether you have a few hours a week or a few hours a month, your time and talents can make a significant difference.
              </p>
              <p className="text-gray-700 font-montserrat mb-8 text-lg leading-relaxed">
                Volunteer opportunities include patient companionship, administrative support, special events assistance, and more. We provide comprehensive training and ongoing support to ensure a fulfilling volunteer experience.
              </p>
              <div className="mt-8 text-center">
                <a 
                  href="#" 
                  className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white font-bold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform-gpu font-montserrat"
                >
                  Become a Volunteer
                  <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="w-full bg-[#f4f4f4] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-bold">Values</span>
            </div>
            <h2 className="text-4xl font-extrabold mb-3 text-gray-900 font-montserrat">Committed to Excellence</h2>
            <p className="text-lg text-gray-700 font-montserrat max-w-3xl mx-auto mb-12">
              Our core values of compassionate care, accountability, love one another, intelligent risk taking, celebration, and ownership guide us in our decision-making and inspire us to be better people, in and out of work.
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-8">
            {/* Compassionate Care */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-5">
                <Image 
                  src="/images/icon-12.png" 
                  alt="Compassionate Care Icon" 
                  width={56} 
                  height={56} 
                  className="w-14 h-14" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-2">Compassionate Care</h3>
              <p className="text-gray-700 font-montserrat">
                We see each client as a whole person, providing attentive and thoughtful care that honors their dignity.
              </p>
            </div>
            
            {/* Accountability */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-5">
                <Image 
                  src="/images/icon-18.png" 
                  alt="Accountability Icon" 
                  width={56} 
                  height={56} 
                  className="w-14 h-14" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-2">Accountability</h3>
              <p className="text-gray-700 font-montserrat">
                We hold ourselves to the highest standards of care and professionalism.
              </p>
            </div>
            
            {/* Love One Another */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-5">
                <Image 
                  src="/images/icon-9.png" 
                  alt="Love One Another Icon" 
                  width={56} 
                  height={56} 
                  className="w-14 h-14" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-2">Love One Another</h3>
              <p className="text-gray-700 font-montserrat">
                We strive to treat each other as people whose interest matter as much as our own.
              </p>
            </div>
            
            {/* Intelligent Risk Taking */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-5">
                <Image 
                  src="/images/icon-15.png" 
                  alt="Intelligent Risk Taking Icon" 
                  width={56} 
                  height={56} 
                  className="w-14 h-14" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-2">Intelligent Risk Taking</h3>
              <p className="text-gray-700 font-montserrat">
                We trust your judgment. Be innovative. Be entrepreneurial.
              </p>
            </div>
            
            {/* Celebration */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-5">
                <Image 
                  src="/images/icon-13.png" 
                  alt="Celebration Icon" 
                  width={56} 
                  height={56} 
                  className="w-14 h-14" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-2">Celebration</h3>
              <p className="text-gray-700 font-montserrat">
                We love to celebrate successes and make work fun.
              </p>
            </div>
            
            {/* Ownership */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-5">
                <Image 
                  src="/images/icon-17.png" 
                  alt="Ownership Icon" 
                  width={56} 
                  height={56} 
                  className="w-14 h-14" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-2">Ownership</h3>
              <p className="text-gray-700 font-montserrat">
                We reward and support our employees who treat this company as if they owned it.
              </p>
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
                className="bg-[oklch(0.505_0.213_27.518)] hover:brightness-125 text-white font-bold py-3 px-6 rounded text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform-gpu font-montserrat flex items-center gap-2"
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
    </div>
  );
}
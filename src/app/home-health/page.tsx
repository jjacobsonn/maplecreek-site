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
      
      {/* Care Roadmap Section */}
      <section className="w-full bg-[oklch(0.505_0.213_27.518)] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Badge */}
          <div className="text-center mb-6">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat border border-white">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              <span className="font-bold">Roadmap To Care</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-8 font-montserrat">
            A Personalized Plan That Works For You
          </h2>
          
          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-lg text-white/90 mb-6 font-montserrat">
              Each person who works for Maple Creek Home Health & Hospice provides important and necessary skills that help promote your well-being. Our team of quality nurses, aides, therapists, and allied healthcare professionals, all serve a vital role on our team. As we work together with your physician, our strategy is to develop a plan of care that will maximize your independence and quality of life.
            </p>
            <p className="text-xl font-semibold text-white font-montserrat">
              Each plan is unique and each patient's success is measured and celebrated.
            </p>
          </div>
          
          {/* Divider Line */}
          <div className="w-full h-px bg-white my-12"></div>
          
          {/* Teamwork Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-24 mb-24">
            {/* Left Column - Larger and longer as requested */}
            <div className="lg:col-span-5 lg:pr-12">
              <h3 className="text-5xl sm:text-6xl font-bold text-white mb-10 font-montserrat leading-tight">
                Teamwork<br />Means<br />Success
              </h3>
              
              <p className="text-xl sm:text-2xl text-white/95 font-montserrat">
                We also know it takes a team to be successful. Each member shares responsibility and contributes to your treatment plan to assure the highest quality of services are delivered with compassion, respect, and attention to your individual needs. Together, we create a supportive environment that promotes healing, independence, and an improved quality of life.
              </p>
            </div>
            
            {/* Right Column - 2x2 Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Physician */}
              <div className="p-6">
                <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-5">
                  <svg className="w-10 h-10 text-[oklch(0.505_0.213_27.518)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 21h-10A2.5 2.5 0 015 18.5v-14A2.5 2.5 0 017.5 2h10A2.5 2.5 0 0120 4.5v14a2.5 2.5 0 01-2.5 2.5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16M12.5 8.5c1 0 1.5-.5 2.5-.5s2 .5 3 .5v8c-1 0-1.5-.5-2.5-.5s-2 .5-3 .5"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 8.5c-1 0-1.5-.5-2.5-.5s-2 .5-3 .5v8c1 0 1.5-.5 2.5-.5s2 .5 3 .5"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 font-montserrat">Your Physician</h4>
                <p className="text-white/95 text-lg font-montserrat">
                  Guides the care strategy and provides medical oversight throughout your treatment journey.
                </p>
              </div>
              
              {/* Our Team */}
              <div className="p-6">
                <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-5">
                  <svg className="w-10 h-10 text-[oklch(0.505_0.213_27.518)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 font-montserrat">Our Team</h4>
                <p className="text-white/95 text-lg font-montserrat">
                  Delivers specialized care through our skilled nurses, therapists, and aides to help you reach your recovery goals.
                </p>
              </div>
              
              {/* The Patient */}
              <div className="p-6">
                <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-5">
                  <svg className="w-10 h-10 text-[oklch(0.505_0.213_27.518)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 font-montserrat">The Patient</h4>
                <p className="text-white/95 text-lg font-montserrat">
                  Active participant in the recovery journey with personal health goals and treatment preferences.
                </p>
              </div>
              
              {/* Family & Caregivers */}
              <div className="p-6">
                <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-5">
                  <svg className="w-10 h-10 text-[oklch(0.505_0.213_27.518)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 font-montserrat">Family & Caregivers</h4>
                <p className="text-white/95 text-lg font-montserrat">
                  Essential support network providing daily assistance and emotional encouragement throughout recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Is It Time Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Badge */}
          <div className="text-center mb-6">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-bold">Plan Of Action</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-6 font-montserrat">
            When Is It Time For Home Health Care?
          </h2>
          
          {/* Introduction Text */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 font-montserrat">
              Unfortunately, most seniors find themselves struggling with various activities throughout the day. 
              Here are a few signs that you or a loved one may be in need of home health services from Maple Creek.
            </p>
          </div>
          
          {/* Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Physician Has Directed Care Needed By A Licensed Clinician
              </h3>
            </div>
            
            {/* Card 2 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Homebound Or Unable To Go To A Clinic To Receive Care
              </h3>
            </div>
            
            {/* Card 3 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Planning On Receiving Knee Or Hip Surgery
              </h3>
            </div>
            
            {/* Card 4 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Require Medication Management
              </h3>
            </div>
            
            {/* Card 5 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Have A Wound That Requires Clinical Maintenance
              </h3>
            </div>
            
            {/* Card 6 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Have Diabetes And Need Education And Supervision
              </h3>
            </div>
            
            {/* Card 7 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                A Pain, Injury, Or Disability That Makes It Hard To Do Your Job, Household Chores Or Other Daily Activities
              </h3>
            </div>
            
            {/* Card 8 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Have A Speech Disorder From Childhood Or Caused By Injury, Such As Stroke Or Brain Injury
              </h3>
            </div>
            
            {/* Card 9 (Added) */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Recently Discharged From Hospital Or Skilled Nursing Facility And Need Continued Care
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

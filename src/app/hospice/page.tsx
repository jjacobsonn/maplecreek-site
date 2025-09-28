"use client";

import Image from "next/image";
import AnimatedStats from "../../components/AnimatedStats";

export default function HospicePage() {
  return (
    <div style={{ background: '#f4f4f4', minHeight: '100vh', width: '100%' }}>
      {/* Hospice Banner Section */}
      <section className="w-full">
        <div className="relative w-full h-[28vh] md:h-[36vh] lg:h-[44vh] xl:h-[52vh]">
          <Image
            src="/images/img-20.jpg?v=1"
            alt="Hospice Banner"
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center md:pt-8 lg:pt-0 text-center px-4 bg-black/30 font-montserrat">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 mb-2 sm:mb-4 font-montserrat">
              <Image
                src="/images/icon-19.png"
                alt="Hospice Icon"
                width={20}
                height={20}
                className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 brightness-0 invert"
              />
              <span className="font-bold text-sm sm:text-base">Hospice</span>
            </div>
            <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg mb-2 sm:mb-4 max-w-4xl">
              <span className="block lg:inline">Learn About Our Compassionate</span>
              <span className="block lg:inline"> Hospice Services</span>
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl font-medium drop-shadow mb-4 sm:mb-6 max-w-3xl">
              Maple Creek provides high quality Hospice care through individualized, compassionate service.
              <span className="hidden xs:inline"> Our Hospice services are available all throughout Utah County.</span>
            </p>
          </div>
        </div>
      </section>
      {/* Hospice Staff Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side: Staff image */}
            <div className="w-full lg:w-2/5 lg:self-start lg:sticky lg:top-24">
              <div className="rounded-3xl overflow-hidden border-8 border-[oklch(0.505_0.213_27.518)] shadow-xl mt-16 lg:mt-0 relative mx-auto" 
                   style={{ 
                     aspectRatio: '3/4',
                     maxHeight: '480px',
                     maxWidth: '360px'
                   }}>
                <Image 
                  src="/images/img-16.jpg"
                  alt="Hospice Staff"
                  fill
                  sizes="(max-width: 1024px) 90vw, 360px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Right side: Content, header, and staff list */}
            <div className="w-full lg:w-3/5">
              {/* Badge at top with Home Health icon */}
              <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
                <Image
                  src="/images/icon-20.png"
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
      {/* Roadmap To Hospice Care Section (bottom) */}

      {/* Animated Stats Section (reused from About) */}
      <div style={{ background: 'white', width: '100%' }}>
        <AnimatedStats />
      </div>

      {/* Contact Section (copied from Services page) */}
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
              <h2 className="text-2xl font-extrabold mb-3 text-gray-900 font-montserrat whitespace-nowrap">Where Do We Offer Hospice Services?</h2>
              <p className="text-base text-gray-700 font-montserrat mb-4 mx-auto max-w-md">
                We offer life-changing Hospice services throughout Dallas and Fort Worth. If we cover your area, reach out to us! Let’s see how we can improve yours or your family member’s quality of life.
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

      {/* Roadmap To Hospice Care Section (after Contact) */}
      <section className="w-full bg-[oklch(0.505_0.213_27.518)] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Badge */}
          <div className="text-center mb-6">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat border border-white">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              <span className="font-bold">Roadmap To Hospice Care</span>
            </div>
          </div>
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-8 font-montserrat">
            A Personalized Plan That Works For You
          </h2>
          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-lg text-white/90 mb-6 font-montserrat">
              Each person who works for <span className="font-bold">Custom Care Home Health & Hospice</span> provides important and necessary skills that help promote your well-being. Our team of <span className="font-bold">quality nurses, aides, therapists, and allied healthcare professionals</span>, all serve a vital role on our team. As we work together with your physician, our strategy is to develop a plan of care that will <span className="font-bold">maximize your independence and quality of life</span>. Each plan is unique and each patient’s success is measured and celebrated.
            </p>
          </div>
          {/* Divider Line */}
          <div className="w-full h-px bg-white my-12"></div>
          {/* Teamwork Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-24 mb-24">
            {/* Left Column */}
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
                <div className="bg-white rounded-lg p-4 w-20 h-20 flex items-center justify-center mb-5">
                  <Image
                    src="/images/icon-20.png"
                    alt="Physician Icon"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 font-montserrat">Your Physician</h4>
                <p className="text-white/95 text-lg font-montserrat">
                  Guides the care strategy and provides medical oversight throughout your treatment journey.
                </p>
              </div>
              {/* Our Team */}
              <div className="p-6">
                <div className="bg-white rounded-lg p-4 w-20 h-20 flex items-center justify-center mb-5">
                  <Image
                    src="/images/icon-21.png"
                    alt="Team Icon"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 font-montserrat">Our Team</h4>
                <p className="text-white/95 text-lg font-montserrat">
                  Delivers specialized care through our skilled nurses, therapists, and aides to help you reach your recovery goals.
                </p>
              </div>
              {/* The Patient */}
              <div className="p-6">
                <div className="bg-white rounded-lg p-4 w-20 h-20 flex items-center justify-center mb-5">
                  <Image
                    src="/images/icon-22.png"
                    alt="Patient Icon"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 font-montserrat">The Patient</h4>
                <p className="text-white/95 text-lg font-montserrat">
                  Active participant in the recovery journey with personal health goals and treatment preferences.
                </p>
              </div>
              {/* Family & Caregivers */}
              <div className="p-6">
                <div className="bg-white rounded-lg p-4 w-20 h-20 flex items-center justify-center mb-5">
                  <Image
                    src="/images/icon-23.png"
                    alt="Family & Caregivers Icon"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
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
            When Is It Time For Hospice?
          </h2>
          
          {/* Introduction Text */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 font-montserrat">
              Unfortunately, most seniors find themselves struggling with various activities throughout the day. <br />
              Here are a few signs that you or a loved one may be in need of hospice services from Maple Creek.
            </p>
          </div>
          
          {/* Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Treatment is no longer working and/or they no longer desire aggressive intervention
              </h3>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                They sleep much of the time
              </h3>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                They often seem confused or restless
              </h3>
            </div>

            {/* Card 4 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                They’re less able to communicate
              </h3>
            </div>

            {/* Card 5 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                They don’t have much appetite or are losing weight for no apparent reason
              </h3>
            </div>

            {/* Card 6 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                They have multiple recurrent infections
              </h3>
            </div>

            {/* Card 7 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Their symptoms are getting harder to manage
              </h3>
            </div>

            {/* Card 8 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                They’re visiting the doctor or hospital more often
              </h3>
            </div>

            {/* Card 9 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                Family and caregivers feel overwhelmed by the increasing needs
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Services Section */}
      <section className="w-full bg-[#f4f4f4] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side: Content */}
            <div className="w-full lg:w-1/2 lg:pr-8">
              <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
                <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <span className="font-bold">More Services</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 font-montserrat leading-tight">
                Learn About Additional Services We Offer
              </h2>
              
              <p className="text-lg text-gray-700 font-montserrat mb-8">
                In addition to hospice, Maple Creek provides a range of specialized home health services designed to help you recover, regain independence, and improve your quality of life in the comfort of your own home.
              </p>
            </div>
            
            {/* Right side: Service Card */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[oklch(0.505_0.213_27.518)]">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Left: Circle Image */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[oklch(0.505_0.213_27.518)]">
                      <Image 
                        src="/images/img-6.jpg"
                        alt="Hospice Care"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 font-montserrat">Home Health Care</h3>
                    <p className="text-gray-700 font-montserrat min-h-[160px]">
                      Home health care brings skilled nursing, therapy, and support services directly to your home. Our team helps you recover from illness, injury, or surgery, manage chronic conditions, and regain your independence—all in a familiar and comfortable environment. We focus on your goals, safety, and well-being every step of the way.
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
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Badge */}
          <div className="text-center mb-6">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-bold">FAQ</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-6 font-montserrat">
            Frequently Asked Questions: Hospice Care
          </h2>
          
          {/* Introduction Text */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 font-montserrat">
              What is Hospice? Is Hospice care just for cancer patients? How do you pay for Hospice? Find the answers to your questions here.
            </p>
          </div>
          
          {/* FAQ Collapsible Questions */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* FAQ Item 1 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    What is Hospice?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Hospice care focuses on the comfort and quality of life for patients with terminal illnesses, rather than curative treatments.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Who is eligible for Hospice?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Patients diagnosed with a terminal illness with a life expectancy of six months or less, if the illness runs its expected course, may qualify.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Where is Hospice care provided?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Hospice care can be provided in various settings, including a patient’s home, a hospice facility, hospitals, nursing homes, and other long-term care facilities.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Is Hospice just for cancer patients?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    No, Hospice is for anyone with a life-limiting illness, including heart disease, Alzheimer’s disease, lung disease, and many others.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 5 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Who pays for Hospice?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Medicare, Medicaid, and most private insurance plans offer Hospice benefits. Additionally, many hospice organizations offer financial assistance or care based on ability to pay.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 6 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    What services are provided in Hospice?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Services can include medical care, pain management, emotional and spiritual support, counseling, respite care for families, and more.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 7 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    How does Hospice manage pain and other symptoms?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Hospice professionals are skilled in managing pain and symptoms with medications, therapies, and other methods.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 8 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Can a patient keep their personal physician while in Hospice?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Yes, many Hospice programs encourage patients to maintain their relationship with their personal physicians.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 9 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    What happens if a patient lives longer than six months while on Hospice?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    If the patient’s condition stabilizes or improves, they might be discharged from Hospice. However, if they continue to decline, the eligibility can be re-evaluated and extended.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 10 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    How is Hospice different from Palliative care?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    While both focus on comfort and symptom relief, Palliative care can be pursued at any stage of an illness, while Hospice is typically reserved for the final months of life.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 11 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Can treatments be continued while on Hospice?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Hospice focuses on comfort and quality of life. Curative treatments might be stopped, but some treatments that provide comfort can continue.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 12 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Does choosing Hospice mean giving up hope?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    No, it means prioritizing comfort and quality of life over aggressive treatments. Many families find that Hospice allows them to enjoy their remaining time with loved ones more fully.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 13 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Can someone leave Hospice care?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Yes, patients can leave hospice care and return to curative treatments if they wish or if their condition improves.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 14 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    How does one start the process of getting into Hospice?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Typically, a referral from a physician is needed, followed by an assessment from the Hospice Team.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 15 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    What role do families play in Hospice?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <svg className="w-5 h-5 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 font-montserrat">
                    Families are an integral part of the Hospice experience. They are involved in making decisions, providing care, and are also offered support and counseling.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
  </div>
  );
}

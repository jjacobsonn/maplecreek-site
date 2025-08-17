"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MutableRefObject } from "react";
import AnimatedStats from "../../components/AnimatedStats";

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
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: MutableRefObject<NodeJS.Timeout | null> = useRef<NodeJS.Timeout | null>(null);

  const prevImage = () => setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));

  // Auto-swipe effect
  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, carouselImages.length]);

  // Testimonials data
  const testimonials = [
    {
      text: `"I was reluctant to place my husband on Hospice, but it was the best decision I could have made. Maple Creek was wonderful. Someone was with us each day to take care of my husband and also checking on my wellbeing through the process. The entire team was quick to respond when needed and immediately communicated any changes in my husband's care."`,
      name: 'Sharon Rogers',
      source: ''
    },
    {
      text: `"My 89 year old mother only spent about 45 days in hospice care after declining from hip surgery. The support from Maple Creek was beyond anything I expected. It was as if they cared about my mother and my family as if it were their own. I am extremely grateful for all the services they provided to help me process things."`,
      name: 'Andrew Tweedie',
      source: 'Google Review'
    },
    {
      text: `"The care team at Maple Creek was exceptional. They treated my father with dignity and compassion during his final days. Their support extended to our entire family, guiding us through a difficult time with professionalism and empathy."`,
      name: 'Michael Thompson',
      source: ''
    },
    {
      text: `"When my wife needed hospice care, Maple Creek made a challenging situation more bearable. Their staff was responsive, knowledgeable, and genuinely caring. They were available 24/7 and addressed all our concerns promptly."`,
      name: 'Robert Johnson',
      source: 'Facebook Review'
    },
    {
      text: `"I can't express enough gratitude for the Maple Creek team. Their home health services helped my mother regain independence after her stroke. The therapists and nurses developed a personalized care plan that made a tremendous difference."`,
      name: 'Patricia Williams',
      source: ''
    },
    {
      text: `"Choosing Maple Creek for my grandfather's hospice care was one of the best decisions we made. They provided comfort, dignity, and support during his final journey. Their team became like family to us during this difficult time."`,
      name: 'Jennifer Martinez',
      source: 'Google Review'
    },
  ];
  
  // Testimonial carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  const testimonialIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to show next testimonial group - using useCallback to prevent dependency issues
  const nextTestimonialGroup = useCallback(() => {
    setCurrentTestimonial((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 2));
  }, [testimonials.length]);

  // Function to show specific testimonial group
  const goToTestimonialGroup = useCallback((index: number) => {
    setCurrentTestimonial(index * 2);
  }, []);

  // Auto-swipe effect for testimonials - changes every 3 seconds
  useEffect(() => {
    if (isTestimonialHovered) return;
    testimonialIntervalRef.current = setInterval(() => {
      nextTestimonialGroup();
    }, 3000); // Exactly 3 seconds as requested
    return () => {
      if (testimonialIntervalRef.current) clearInterval(testimonialIntervalRef.current);
    };
  }, [isTestimonialHovered, nextTestimonialGroup]);

  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-[28vh] md:h-[36vh] lg:h-[44vh] xl:h-[52vh]">
          <Image
            src="/images/img-10.jpg"
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
      <section className="w-full font-montserrat bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Desktop: Content on the right */}
          <div className="hidden md:flex flex-col justify-center items-start text-left w-full">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-8">
              At Maple Creek Home Health &amp; Hospice, we&apos;re committed to providing compassionate, high-quality care for individuals of all ages and stages of life. Our mission is to help you live as comfortably and fully as possible in the place you call home. Whether you&apos;re recovering from illness or navigating hospice care, we&apos;re here to walk with you—offering support, guidance, and respect every step of the way. We understand how important family is during times of change, and we treat your loved ones with the same care and dignity we&apos;d give our own.
            </p>
            <button className="bg-[oklch(0.505_0.213_27.518)] hover:brightness-125 text-white font-bold py-3 px-6 rounded text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform-gpu">
              Get In Touch With Us
            </button>
          </div>
          {/* Mobile: Content above Carousel */}
          <div className="flex flex-col md:hidden">
            <h2 className="text-3xl font-extrabold mb-3 text-gray-900 text-center">Who We Are</h2>
          </div>
          {/* Left: Carousel */}
          <div className="flex flex-col items-center w-full">
            <div
              className="relative w-full max-w-[400px] h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden mx-auto rounded-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full"
                  style={{ willChange: 'transform' }}
                >
                  <Image
                    src={carouselImages[current]}
                    alt={`Gallery image ${current + 1}`}
                    className="object-contain w-full h-full select-none rounded-xl"
                    width={667}
                    height={500}
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
            <div className="flex justify-center w-full gap-2 mt-2">
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
          {/* Mobile: Paragraph below Carousel */}
          <div className="flex flex-col md:hidden mt-8">
            <p className="text-gray-700 text-lg mb-8">
              At Maple Creek Home Health &amp; Hospice, we&apos;re committed to providing compassionate, high-quality care for individuals of all ages and stages of life. Our mission is to help you live as comfortably and fully as possible in the place you call home. Whether you&apos;re recovering from illness or navigating hospice care, we&apos;re here to walk with you—offering support, guidance, and respect every step of the way. We understand how important family is during times of change, and we treat your loved ones with the same care and dignity we&apos;d give our own.
            </p>
          </div>
        </div>
      </section>
      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Testimonials Section */}
      <section className="w-full bg-[#f4f4f4] py-16">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-10 items-stretch">
          {/* Left: Heading and Intro */}
          <div className="w-full mb-8 lg:mb-0 flex flex-col justify-between h-full lg:pr-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-montserrat mb-4 md:mb-2">What Our Community Says About Maple Creek Home Health & Hospice</h2>
              <p className="text-lg md:text-base text-gray-700 font-montserrat mb-4 md:mb-2">We strive to provide superior home health and hospice services in Utah County. See how we&apos;ve impacted our many patients through professional and compassionate care.</p>
            </div>
            <button
              className="mt-2 lg:mt-0 inline-block bg-[oklch(0.505_0.213_27.518)] hover:brightness-125 text-white font-bold font-montserrat py-3 px-7 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform-gpu text-lg self-start"
              type="button"
              aria-label="Share your experience"
            >
              Share Your Experience
            </button>
          </div>
          
          {/* Right: Testimonial Carousel */}
          <div 
            className="w-full"
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
          >
            <div className="relative">
              {/* Testimonial cards container */}
              <div className="overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                  >
                    {/* Display current pair of testimonials */}
                    {testimonials.slice(currentTestimonial, currentTestimonial + 2).map((testimonial, idx) => (
                      <div
                        key={currentTestimonial + idx}
                        className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-7 flex flex-col justify-between w-full mx-auto max-w-[420px] h-[300px] md:h-[340px]"
                      >
                        <div className="flex-1 flex flex-col justify-between h-full">
                          <p className="text-gray-700 text-sm md:text-base font-montserrat leading-relaxed mb-4 md:mb-6 line-clamp-[8] overflow-hidden">{testimonial.text}</p>
                          <div className="mt-auto">
                            <div className="flex gap-1 mb-2" aria-label="5 star rating">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                              ))}
                            </div>
                            <div>
                              <span className="font-bold text-gray-900 font-montserrat text-sm md:text-base">{testimonial.name}</span>
                              {testimonial.source && (
                                <p className="text-gray-500 text-xs md:text-sm">{testimonial.source}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center gap-4 mt-10">
                {[0, 1, 2].map((dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => goToTestimonialGroup(dotIndex)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      Math.floor(currentTestimonial / 2) === dotIndex 
                        ? 'bg-[oklch(0.505_0.213_27.518)] scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View testimonials set ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
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
              Learn about our professional and compassionate in-home services.
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
                  <button className="mt-5 bg-[oklch(0.505_0.213_27.518)] hover:brightness-110 text-white font-bold py-2 px-5 rounded text-sm shadow transition-all duration-200 flex items-center">
                    LEARN MORE
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
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
                  <button className="mt-5 bg-[oklch(0.505_0.213_27.518)] hover:brightness-110 text-white font-bold py-2 px-5 rounded text-sm shadow transition-all duration-200 flex items-center">
                    LEARN MORE
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="w-full bg-[#f4f4f4] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center relative">
            {/* Left side - Contact Text */}
            <div className="w-full flex flex-col items-center text-center lg:pr-8">
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
            <div className="hidden lg:block absolute h-full w-[2px] bg-[oklch(0.505_0.213_27.518)] left-[61%] transform -translate-x-1/2"></div>
            
            {/* Right: Location */}
            <div className="w-full flex flex-col items-center">
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
      
      {/* Values Section */}
      <section className="w-full bg-white py-16">
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
                  src="/images/icon-16.png" 
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
    </>
  );
} 
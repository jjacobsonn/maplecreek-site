"use client";

import { useState } from 'react';
import BannerSection from "@/components/BannerSection";
import DatePicker from "@/components/DatePicker";

export default function ConsultationPage() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  const availableTimes = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const [formErrors, setFormErrors] = useState<{
    service?: string;
    date?: string;
    time?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  }>({});
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const errors: {
      service?: string;
      date?: string;
      time?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
    } = {};
    
    if (!selectedService) {
      errors.service = "Please select a service";
    }
    
    if (!selectedDate) {
      errors.date = "Please select a date";
    }
    
    if (!selectedTime) {
      errors.time = "Please select a time";
    }
    
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    }
    
    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    
    if (!phone.trim()) {
      errors.phone = "Phone number is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setSelectedService('');
          setSelectedDate('');
          setSelectedTime('');
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setAddress('');
          setDetails('');
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div style={{ background: '#f4f4f4', minHeight: '100vh', width: '100%' }}>
      <BannerSection
        imageSrc="/images/img-21.jpg"
        imageAlt="Consultation Banner"
        title="Schedule a Consultation"
        description="Book a personalized consultation with our care experts."
        iconSrc="/images/icon-9.png"
        iconAlt="Consultation Icon"
        buttonText="Consultation"
      />

      {/* Consultation Form Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="font-bold">Book Appointment</span>
            </div>
            <h2 className="text-4xl font-extrabold mb-3 text-gray-900 font-montserrat">Schedule Your Consultation</h2>
            <p className="text-lg text-gray-700 font-montserrat max-w-3xl mx-auto">
              Complete the form below to schedule a personalized consultation with our care experts. We&apos;ll help you understand our services and create a plan tailored to your needs.
            </p>
          </div>

          {/* Form Container */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 font-montserrat">Select a Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedService === 'home-health' 
                        ? 'border-[oklch(0.505_0.213_27.518)] bg-[oklch(0.505_0.213_27.518)]/5' 
                        : formErrors.service 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-200 hover:border-[oklch(0.505_0.213_27.518)]'
                    }`}
                    onClick={() => {
                      setSelectedService('home-health');
                      setFormErrors({...formErrors, service: undefined});
                    }}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedService === 'home-health' ? 'border-[oklch(0.505_0.213_27.518)]' : 'border-gray-400'
                        }`}>
                          {selectedService === 'home-health' && (
                            <div className="w-3 h-3 rounded-full bg-[oklch(0.505_0.213_27.518)]"></div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 font-montserrat">Home Health Care</h4>
                        <p className="text-sm text-gray-600">1 Hour Consultation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedService === 'hospice' 
                        ? 'border-[oklch(0.505_0.213_27.518)] bg-[oklch(0.505_0.213_27.518)]/5' 
                        : formErrors.service 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-200 hover:border-[oklch(0.505_0.213_27.518)]'
                    }`}
                    onClick={() => {
                      setSelectedService('hospice');
                      setFormErrors({...formErrors, service: undefined});
                    }}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedService === 'hospice' ? 'border-[oklch(0.505_0.213_27.518)]' : 'border-gray-400'
                        }`}>
                          {selectedService === 'hospice' && (
                            <div className="w-3 h-3 rounded-full bg-[oklch(0.505_0.213_27.518)]"></div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 font-montserrat">Hospice Consultation</h4>
                        <p className="text-sm text-gray-600">1 Hour Consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
                {formErrors.service && (
                  <p className="text-red-500 text-sm font-montserrat">{formErrors.service}</p>
                )}
              </div>

              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Date Picker */}
                <div className={`space-y-4 ${!selectedService ? 'opacity-50 pointer-events-none' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">Select a Date</h3>
                  <div className={formErrors.date ? "border-2 border-red-500 rounded-lg p-1" : ""}>
                    <DatePicker
                      selectedDate={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setFormErrors({...formErrors, date: undefined});
                      }}
                      minDate={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  {formErrors.date && (
                    <p className="text-red-500 text-sm font-montserrat">{formErrors.date}</p>
                  )}
                </div>

                {/* Time Picker */}
                <div className={`space-y-4 ${!selectedService ? 'opacity-50 pointer-events-none' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat flex items-center">
                    Select a Time
                    {selectedDate && !selectedTime && (
                      <span className="ml-2 text-sm text-[oklch(0.505_0.213_27.518)] font-normal">
                        (Available to select)
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {availableTimes.map((time) => (
                      <div 
                        key={time}
                        className={`p-3 border-2 rounded-lg text-center cursor-pointer transition-all h-[50px] flex items-center justify-center ${
                          selectedTime === time 
                            ? 'border-[oklch(0.505_0.213_27.518)] bg-[oklch(0.505_0.213_27.518)] text-white' 
                            : formErrors.time
                              ? 'border-red-500 hover:border-[oklch(0.505_0.213_27.518)] hover:bg-[oklch(0.505_0.213_27.518)]/5'
                              : selectedDate
                                ? 'border-gray-200 hover:border-[oklch(0.505_0.213_27.518)] hover:bg-[oklch(0.505_0.213_27.518)]/5 text-gray-900'
                                : 'border-gray-200 hover:border-[oklch(0.505_0.213_27.518)] hover:bg-[oklch(0.505_0.213_27.518)]/5'
                        }`}
                        onClick={() => {
                          setSelectedTime(time);
                          setFormErrors({...formErrors, time: undefined});
                        }}
                      >
                        <span className="font-montserrat">{time}</span>
                      </div>
                    ))}
                  </div>
                  {formErrors.time && (
                    <p className="text-red-500 text-sm font-montserrat">{formErrors.time}</p>
                  )}
                </div>
              </div>

              {/* Personal Information */}
              <div className={`space-y-4 ${!selectedService || !selectedDate || !selectedTime ? 'opacity-50 pointer-events-none' : ''}`}>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-montserrat mb-1">First Name <span className="text-red-600">*</span></label>
                    <input
                      type="text"
                      className={`w-full p-3 border-2 rounded-lg focus:outline-none text-gray-900 ${
                        formErrors.firstName 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-[oklch(0.505_0.213_27.518)]'
                      }`}
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        if (e.target.value.trim()) {
                          setFormErrors({...formErrors, firstName: undefined});
                        }
                      }}
                      disabled={!selectedService || !selectedDate || !selectedTime}
                      style={{ opacity: (!selectedService || !selectedDate || !selectedTime) ? '0.5' : '1' }}
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-sm font-montserrat mt-1">{formErrors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-montserrat mb-1">Last Name <span className="text-red-600">*</span></label>
                    <input
                      type="text"
                      className={`w-full p-3 border-2 rounded-lg focus:outline-none text-gray-900 ${
                        formErrors.lastName 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-[oklch(0.505_0.213_27.518)]'
                      }`}
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        if (e.target.value.trim()) {
                          setFormErrors({...formErrors, lastName: undefined});
                        }
                      }}
                      disabled={!selectedService || !selectedDate || !selectedTime}
                      style={{ opacity: (!selectedService || !selectedDate || !selectedTime) ? '0.5' : '1' }}
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-sm font-montserrat mt-1">{formErrors.lastName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-montserrat mb-1">Email Address <span className="text-red-600">*</span></label>
                    <input
                      type="email"
                      className={`w-full p-3 border-2 rounded-lg focus:outline-none text-gray-900 ${
                        formErrors.email 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-[oklch(0.505_0.213_27.518)]'
                      }`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.value.trim() && /\S+@\S+\.\S+/.test(e.target.value)) {
                          setFormErrors({...formErrors, email: undefined});
                        }
                      }}
                      disabled={!selectedService || !selectedDate || !selectedTime}
                      style={{ opacity: (!selectedService || !selectedDate || !selectedTime) ? '0.5' : '1' }}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm font-montserrat mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-montserrat mb-1">Phone Number <span className="text-red-600">*</span></label>
                    <input
                      type="tel"
                      className={`w-full p-3 border-2 rounded-lg focus:outline-none text-gray-900 ${
                        formErrors.phone 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-[oklch(0.505_0.213_27.518)]'
                      }`}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (e.target.value.trim()) {
                          setFormErrors({...formErrors, phone: undefined});
                        }
                      }}
                      disabled={!selectedService || !selectedDate || !selectedTime}
                      style={{ opacity: (!selectedService || !selectedDate || !selectedTime) ? '0.5' : '1' }}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm font-montserrat mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-montserrat mb-1">Address</label>
                  <input
                    type="text"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[oklch(0.505_0.213_27.518)] text-gray-900"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={!selectedService || !selectedDate || !selectedTime}
                    style={{ opacity: (!selectedService || !selectedDate || !selectedTime) ? '0.5' : '1' }}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-montserrat mb-1">Additional Details</label>
                  <textarea
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[oklch(0.505_0.213_27.518)] min-h-[100px] text-gray-900"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Please share any specific concerns or questions you have..."
                    disabled={!selectedService || !selectedDate || !selectedTime}
                    style={{ opacity: (!selectedService || !selectedDate || !selectedTime) ? '0.5' : '1' }}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center pt-4 space-y-4">
                {submitSuccess && (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md w-full max-w-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-montserrat font-medium">
                          Consultation scheduled successfully! We will contact you to confirm your appointment.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className={`bg-[oklch(0.505_0.213_27.518)] text-white font-bold py-3 px-12 rounded-md text-lg shadow-md transition-all duration-300 font-montserrat flex items-center ${
                    isSubmitting || !selectedService || !selectedDate || !selectedTime || !firstName || !lastName || !email || !phone
                      ? 'opacity-75 cursor-not-allowed'
                      : 'hover:brightness-125 hover:shadow-lg hover:-translate-y-1 transform-gpu'
                  }`}
                  disabled={isSubmitting || !selectedService || !selectedDate || !selectedTime || !firstName || !lastName || !email || !phone}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Book Consultation
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="w-full bg-[oklch(0.505_0.213_27.518)] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat border border-white">
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-bold">What to Expect</span>
            </div>
            <h2 className="text-4xl font-extrabold mb-6 text-white font-montserrat">
              Your Consultation Journey
            </h2>
            <p className="text-lg text-white/90 font-montserrat max-w-4xl mx-auto">
              Our consultation process is designed to understand your unique needs and provide personalized care solutions.
              Here&apos;s what you can expect during your consultation with Maple Creek Home Health & Hospice.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-[oklch(0.505_0.213_27.518)] font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white font-montserrat">Initial Discussion</h3>
              </div>
              <p className="text-white/90 font-montserrat">
                We&apos;ll start by understanding your current situation, medical needs, and what brought you to seek our services. This helps us tailor our approach to your specific circumstances.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-[oklch(0.505_0.213_27.518)] font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white font-montserrat">Service Overview</h3>
              </div>
              <p className="text-white/90 font-montserrat">
                Our care experts will explain our services in detail, answering any questions you may have about home health or hospice care, insurance coverage, and what to expect from our team.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-[oklch(0.505_0.213_27.518)] font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white font-montserrat">Care Plan Development</h3>
              </div>
              <p className="text-white/90 font-montserrat">
                Together, we&apos;ll develop a preliminary care plan that addresses your needs. This includes discussing the frequency of visits, types of services required, and coordination with your healthcare providers.
              </p>
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
            Frequently Asked Questions
          </h2>
          
          {/* Introduction Text */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 font-montserrat">
              Find answers to common questions about our consultation process and what to expect when working with Maple Creek Home Health & Hospice.
            </p>
          </div>
          
          {/* FAQ Collapsible Questions */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* FAQ Item 1 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    How long does a consultation typically last?
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
                    Our consultations are scheduled for one hour, which gives us enough time to discuss your needs, explain our services, and answer any questions you may have.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Is there a fee for the consultation?
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
                    No, our initial consultations are completely free. We believe in providing you with all the information you need to make an informed decision about your care.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    What should I bring to the consultation?
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
                                It&apos;s helpful to bring a list of current medications, any recent medical reports, insurance information, and a list of questions you may have. If the consultation is for a loved one, bringing their medical history and current care needs is also beneficial.
                              </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-2 border-[oklch(0.505_0.213_27.518)] rounded-xl overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 font-montserrat">
                    Can I change my appointment time after booking?
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
                    Yes, you can reschedule your appointment by contacting our office at least 24 hours before your scheduled time. We understand that circumstances change and will work with you to find a more suitable time.
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

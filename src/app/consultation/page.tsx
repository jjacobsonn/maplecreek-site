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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

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
      // Show confirmation modal instead of submitting directly
      setShowConfirmation(true);
    }
  };
  
  const confirmBooking = () => {
    setIsSubmitting(true);
    setShowConfirmation(false);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingComplete(true);
    }, 1500);
  };
  
  const editBooking = () => {
    setShowConfirmation(false);
  };
  
  const resetForm = () => {
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setDetails('');
    setBookingComplete(false);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Generate Google Calendar link
  const generateGoogleCalendarLink = () => {
    if (!selectedDate || !selectedTime) return '#';
    
    const startDate = new Date(selectedDate);
    const [hours, minutes] = selectedTime.replace(' AM', '').replace(' PM', '').split(':').map(Number);
    
    startDate.setHours(
      selectedTime.includes('PM') && hours !== 12 ? hours + 12 : hours,
      minutes || 0, 0, 0
    );
    
    const endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + 1); // 1 hour consultation
    
    const startDateString = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDateString = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    const serviceType = selectedService === 'home-health' ? 'Home Health Care' : 'Hospice Consultation';
    const eventTitle = encodeURIComponent(`Maple Creek ${serviceType}`);
    const eventLocation = encodeURIComponent('691 West 1200 North Suite #150, Springville, UT 84663');
    const eventDetails = encodeURIComponent(`Consultation appointment with ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}${address ? '\nAddress: ' + address : ''}${details ? '\nAdditional Details: ' + details : ''}`);
    
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDateString}/${endDateString}&details=${eventDetails}&location=${eventLocation}`;
  };
  
  // Generate Apple Calendar link (ics file)
  const generateAppleCalendarLink = () => {
    if (!selectedDate || !selectedTime) return '#';
    
    const startDate = new Date(selectedDate);
    const [hours, minutes] = selectedTime.replace(' AM', '').replace(' PM', '').split(':').map(Number);
    
    startDate.setHours(
      selectedTime.includes('PM') && hours !== 12 ? hours + 12 : hours,
      minutes || 0, 0, 0
    );
    
    const endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + 1); // 1 hour consultation
    
    const formatICSDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };
    
    const serviceType = selectedService === 'home-health' ? 'Home Health Care' : 'Hospice Consultation';
    const eventTitle = `Maple Creek ${serviceType}`;
    const eventLocation = '691 West 1200 North Suite #150, Springville, UT 84663';
    const eventDetails = `Consultation appointment with ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}${address ? '\nAddress: ' + address : ''}${details ? '\nAdditional Details: ' + details : ''}`;
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${formatICSDate(startDate)}`,
      `DTEND:${formatICSDate(endDate)}`,
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDetails.replace(/\n/g, '\\n')}`,
      `LOCATION:${eventLocation}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
  };

  return (
    <div style={{ background: '#f4f4f4', minHeight: '100vh', width: '100%' }}>
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[oklch(0.505_0.213_27.518)] font-montserrat">Maple Creek Home Health & Hospice</h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 font-montserrat mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-[oklch(0.505_0.213_27.518)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Confirm Your Appointment
            </h2>
            
            <div className="space-y-6">
              <div className="bg-[oklch(0.505_0.213_27.518)]/5 rounded-lg p-4 border border-[oklch(0.505_0.213_27.518)]/20">
                <h3 className="font-bold text-gray-900 font-montserrat mb-2">Appointment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 font-montserrat">Service</p>
                    <p className="text-gray-900 font-montserrat font-medium">
                      {selectedService === 'home-health' ? 'Home Health Care' : 'Hospice Consultation'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-montserrat">Duration</p>
                    <p className="text-gray-900 font-montserrat font-medium">1 Hour</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-montserrat">Date</p>
                    <p className="text-gray-900 font-montserrat font-medium">{formatDate(selectedDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-montserrat">Time</p>
                    <p className="text-gray-900 font-montserrat font-medium">{selectedTime}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-bold text-gray-900 font-montserrat mb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 font-montserrat">Name</p>
                    <p className="text-gray-900 font-montserrat font-medium">{firstName} {lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-montserrat">Email</p>
                    <p className="text-gray-900 font-montserrat font-medium">{email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-montserrat">Phone</p>
                    <p className="text-gray-900 font-montserrat font-medium">{phone}</p>
                  </div>
                  {address && (
                    <div>
                      <p className="text-sm text-gray-500 font-montserrat">Address</p>
                      <p className="text-gray-900 font-montserrat font-medium">{address}</p>
                    </div>
                  )}
                </div>
                {details && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 font-montserrat">Additional Details</p>
                    <p className="text-gray-900 font-montserrat">{details}</p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 rounded-md font-montserrat font-medium text-gray-700 hover:bg-gray-50 focus:outline-none w-full sm:w-auto"
                  onClick={editBooking}
                >
                  Edit Information
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-[oklch(0.505_0.213_27.518)] text-white rounded-md font-montserrat font-medium hover:brightness-110 focus:outline-none w-full sm:w-auto"
                  onClick={confirmBooking}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Screen */}
      {bookingComplete && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[oklch(0.505_0.213_27.518)] font-montserrat mb-6">Maple Creek Home Health & Hospice</h1>
              <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-2">Appointment Scheduled!</h2>
              <p className="text-lg text-gray-700 font-montserrat">
                Your consultation has been successfully booked. We look forward to meeting with you.
              </p>
            </div>
            
            <div className="bg-[oklch(0.505_0.213_27.518)]/5 rounded-xl p-6 border border-[oklch(0.505_0.213_27.518)]/10 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 w-24 h-24 bg-[oklch(0.505_0.213_27.518)] rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 font-montserrat mb-1">
                    {selectedService === 'home-health' ? 'Home Health Care' : 'Hospice Consultation'}
                  </h3>
                  <p className="text-lg font-medium text-gray-900 font-montserrat">
                    {formatDate(selectedDate)} at {selectedTime}
                  </p>
                  <p className="text-gray-700 font-montserrat mt-1">
                    With {firstName} {lastName}
                  </p>
                  <p className="text-gray-600 font-montserrat text-sm mt-2">
                    691 West 1200 North Suite #150, Springville, UT 84663
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
              <h3 className="text-lg font-bold text-gray-900 font-montserrat mb-4">Add to Your Calendar</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={generateGoogleCalendarLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.75 5.25H18.75V2.25H17.25V5.25H6.75V2.25H5.25V5.25H2.25V21.75H21.75V5.25ZM20.25 20.25H3.75V9.75H20.25V20.25ZM20.25 8.25H3.75V6.75H20.25V8.25Z" fill="#4285F4"/>
                    <path d="M6 12H9V15H6V12Z" fill="#4285F4"/>
                    <path d="M10.5 12H13.5V15H10.5V12Z" fill="#4285F4"/>
                    <path d="M15 12H18V15H15V12Z" fill="#4285F4"/>
                    <path d="M6 16.5H9V19.5H6V16.5Z" fill="#4285F4"/>
                    <path d="M10.5 16.5H13.5V19.5H10.5V16.5Z" fill="#4285F4"/>
                  </svg>
                  <span className="font-medium text-gray-800">Google Calendar</span>
                </a>
                
                <a 
                  href={generateAppleCalendarLink()}
                  download="maple-creek-consultation.ics"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto"
                >
                  <div className="w-6 h-6 mr-2 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Z" fill="#000000"/>
                      <path d="M17.46,12.63c0-2.89,2.35-4.27,2.46-4.34A5.28,5.28,0,0,0,17,6.37c-1.67-.17-3.28,1-4.13,1s-2.16-1-3.56-1a5.54,5.54,0,0,0-4.64,2.83c-2,3.43-.51,8.5,1.41,11.29.94,1.36,2.07,2.89,3.54,2.83s2-.9,3.68-.9,2.2.9,3.71.87,2.5-1.37,3.43-2.73a11.33,11.33,0,0,0,1.56-3.2A5.09,5.09,0,0,1,17.46,12.63Z" fill="#000000"/>
                    </svg>
                  </div>
                  <span className="font-medium text-gray-800">Apple Calendar</span>
                </a>
                
                <a 
                  href={`mailto:?subject=Maple Creek Consultation Appointment&body=Your appointment is scheduled for ${formatDate(selectedDate)} at ${selectedTime}.%0A%0ALocation: 691 West 1200 North Suite %23150, Springville, UT 84663%0A%0AService: ${selectedService === 'home-health' ? 'Home Health Care' : 'Hospice Consultation'}%0A%0AWe look forward to meeting with you!`}
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#EA4335"/>
                  </svg>
                  <span className="font-medium text-gray-800">Email Reminder</span>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="px-6 py-3 bg-[oklch(0.505_0.213_27.518)] text-white rounded-md font-montserrat font-medium hover:brightness-110 focus:outline-none w-full sm:w-auto"
                onClick={resetForm}
              >
                Return to Homepage
              </button>
            </div>
          </div>
        </div>
      )}
      
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

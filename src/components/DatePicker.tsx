"use client";

import { useState, useEffect, useRef } from 'react';

interface DatePickerProps {
  selectedDate: string;
  onChange: (date: string) => void;
  minDate?: string;
}

export default function DatePicker({ selectedDate, onChange, minDate }: DatePickerProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const calendarRef = useRef<HTMLDivElement>(null);

  // Format date as YYYY-MM-DD for input value
  const formatDateForInput = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Format date for display
  const formatDateForDisplay = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Get days in month
  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week for first day of month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    // Previous month days
    const prevMonthDays = [];
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);
    
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      prevMonthDays.push({
        day: daysInPrevMonth - i,
        month: prevMonth,
        year: prevMonthYear,
        isCurrentMonth: false
      });
    }
    
    // Current month days
    const currentMonthDays = [];
    const minDateTime = minDate ? new Date(minDate).getTime() : 0;
    
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      currentMonthDays.push({
        day: i,
        month,
        year,
        isCurrentMonth: true,
        isDisabled: minDateTime > date.getTime()
      });
    }
    
    // Next month days
    const nextMonthDays = [];
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextMonthYear = month === 11 ? year + 1 : year;
    const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (prevMonthDays.length + currentMonthDays.length);
    
    for (let i = 1; i <= remainingCells; i++) {
      nextMonthDays.push({
        day: i,
        month: nextMonth,
        year: nextMonthYear,
        isCurrentMonth: false
      });
    }
    
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  // Handle date selection
  const handleDateSelect = (day: number, month: number, year: number) => {
    const newDate = new Date(year, month, day);
    onChange(formatDateForInput(newDate));
    setShowCalendar(false);
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Go to today
  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
  };

  // Clear selection
  const clearSelection = () => {
    onChange('');
    setShowCalendar(false);
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Set current month based on selected date when component mounts
  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    }
  }, []);

  return (
    <div className="relative w-full">
      <div 
        className={`w-full p-3 border-2 rounded-lg focus:outline-none font-montserrat bg-white text-gray-900 flex items-center justify-between cursor-pointer ${
          selectedDate 
            ? 'border-[oklch(0.505_0.213_27.518)] bg-[oklch(0.505_0.213_27.518)]/5' 
            : 'border-gray-200 focus:border-[oklch(0.505_0.213_27.518)]'
        }`}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <div className={selectedDate ? 'font-medium' : 'text-gray-500'}>
          {selectedDate ? formatDateForDisplay(selectedDate) : 'Select a date'}
        </div>
        <div className="flex items-center">
          <svg className={`w-5 h-5 ${selectedDate ? 'text-[oklch(0.505_0.213_27.518)]' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
      </div>
      
      {showCalendar && (
        <div 
          ref={calendarRef}
          className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-full max-w-xs font-montserrat"
          style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <div className="flex space-x-2">
              <button 
                type="button"
                className="p-1 rounded-full hover:bg-gray-100"
                onClick={goToPreviousMonth}
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button 
                type="button"
                className="p-1 rounded-full hover:bg-gray-100"
                onClick={goToNextMonth}
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <div key={index} className="text-center text-sm font-bold text-gray-700">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {generateCalendarDays().map((item, index) => {
              const isSelected = selectedDate === formatDateForInput(new Date(item.year, item.month, item.day));
              const isToday = new Date().toDateString() === new Date(item.year, item.month, item.day).toDateString();
              
              return (
                <button
                  key={index}
                  type="button"
                  disabled={item.isDisabled}
                  className={`
                    p-2 text-center rounded-md text-sm
                    ${!item.isCurrentMonth ? 'text-gray-400' : 'text-gray-900'}
                    ${item.isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[oklch(0.505_0.213_27.518)]/10 cursor-pointer'}
                    ${isSelected ? 'bg-[oklch(0.505_0.213_27.518)] text-white hover:bg-[oklch(0.505_0.213_27.518)]' : ''}
                    ${isToday && !isSelected ? 'border border-[oklch(0.505_0.213_27.518)]' : ''}
                  `}
                  onClick={() => !item.isDisabled && handleDateSelect(item.day, item.month, item.year)}
                >
                  {item.day}
                </button>
              );
            })}
          </div>
          
          {/* Calendar Footer */}
          <div className="flex justify-between mt-4 text-[oklch(0.505_0.213_27.518)] text-sm">
            <button 
              type="button"
              className="hover:underline font-medium"
              onClick={clearSelection}
            >
              Clear
            </button>
            <button 
              type="button"
              className="hover:underline font-medium"
              onClick={goToToday}
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

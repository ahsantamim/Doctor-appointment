import React, { useState } from 'react';

interface CalendarViewProps {
  days: string[];
  onDayClick: (day: string) => void;
}

const CalendarView = ({ days, onDayClick }: CalendarViewProps) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null); // Local state for selected day

  const handleDayClick = (day: string) => {
    setSelectedDay(day); // Set the clicked day as selected
    onDayClick(day); // Call the parent onDayClick function (e.g., to open the modal)
  };

  return (
    <div className="grid grid-cols-7 gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {days.map((day, index) => (
        <div
          key={index}
          className={`flex justify-center items-center p-4 rounded-lg shadow-sm cursor-pointer transition-all duration-300 ${
            selectedDay === day
              ? 'bg-blue-500 text-white'
              : 'bg-white hover:bg-blue-100'
          }`}
          onClick={() => handleDayClick(day)}
        >
          <span className="text-lg font-medium text-gray-700">{day}</span>
        </div>
      ))}
    </div>
  );
};

export default CalendarView;

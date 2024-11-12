import React from 'react';

interface CalendarHeaderProps {
  currentMonth: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
}) => {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrevMonth}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        Previous
      </button>
      <h2 className="text-2xl font-semibold text-gray-800">{currentMonth}</h2>
      <button
        onClick={onNextMonth}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default CalendarHeader;

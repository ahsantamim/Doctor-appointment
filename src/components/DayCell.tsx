import React from 'react';
import AppointmentList from './AppointmentList';

interface DayCellProps {
  day: number;
  appointments: Array<{ id: string; time: string; description: string }>;
}

const DayCell: React.FC<DayCellProps> = ({ day, appointments }) => {
  return (
    <div className="day-cell">
      <span>{day}</span>
      <AppointmentList appointments={appointments} />
    </div>
  );
};

export default DayCell;

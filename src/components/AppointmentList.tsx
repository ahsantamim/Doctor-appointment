import React from 'react';
import { Appointment } from '../redux/slices/appointmentsSlice';

const AppointmentList = ({
  appointments,
  onClickAppointment,
}: {
  appointments: Appointment[];
  onClickAppointment: (appointment: Appointment) => void;
}) => {
  return (
    <div className="mt-6 space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer transition-all duration-300"
          onClick={() => onClickAppointment(appointment)}
        >
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-gray-900">
              {appointment.time}
            </p>
            <p className="text-md text-gray-600">{appointment.description}</p>
          </div>
          <div className="text-blue-500 font-medium">View</div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;

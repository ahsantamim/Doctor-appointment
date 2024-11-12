import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments } from '../redux/appointmentsSlice';
import AppointmentModal from '../components/AppointmentModal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for datepicker
import { addAppointment } from '../redux/appointmentsSlice';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(
    (state: any) => state.appointments.appointments
  );

  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Track selected date for home page
  const [filteredAppointments, setFilteredAppointments] = useState<any[]>([]); // Store filtered appointments for the selected date
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [newAppointmentDate, setNewAppointmentDate] = useState<Date | null>(
    null
  ); // Selected date for appointment creation
  const [newAppointmentDescription, setNewAppointmentDescription] =
    useState(''); // Description of the appointment

  useEffect(() => {
    dispatch(fetchAppointments()); // Fetch appointments on page load
  }, [dispatch]);

  // Handle when a date is clicked in the calendar
  const handleDateChange = (date: Date) => {
    setSelectedDate(date); // Update selected date
    filterAppointmentsForDay(date); // Filter appointments for the selected date
  };

  const filterAppointmentsForDay = (date: Date) => {
    const filtered = appointments.filter(
      (appointment: any) =>
        new Date(appointment.time).toDateString() === date.toDateString()
    );
    setFilteredAppointments(filtered); // Store filtered appointments for the selected date
  };

  const handleAppointmentClick = (appointment: any) => {
    console.log(`Selected appointment: ${appointment.id}`);
    // Open the modal with appointment details
  };

  const handleCreateAppointment = () => {
    if (newAppointmentDate && newAppointmentDescription) {
      // Dispatch action to add the appointment (use unique ID for new appointment)
      const newAppointment = {
        id: `${appointments.length + 1}`, // Generate unique ID
        time: newAppointmentDate.toISOString(),
        description: newAppointmentDescription,
      };
      dispatch(addAppointment(newAppointment)); // Dispatch action to add appointment to Redux
      setIsModalOpen(false); // Close the modal
      setNewAppointmentDate(null); // Reset the selected date
      setNewAppointmentDescription(''); // Reset description
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Doctor Appointments
        </h1>

        {/* Calendar to show appointments */}
        <div className="mb-6">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            className="w-full"
          />
        </div>

        {/* Display Selected Date */}
        {selectedDate && (
          <h2 className="mt-6 text-2xl text-gray-800">
            Appointments for {selectedDate.toDateString()}
          </h2>
        )}

        {/* Appointment List */}
        <div className="mt-4">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="p-4 border-b border-gray-300 cursor-pointer"
                onClick={() => handleAppointmentClick(appointment)}
              >
                <h3 className="font-semibold">{appointment.description}</h3>
                <p>{new Date(appointment.time).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No appointments for this date.</p>
          )}
        </div>

        {/* Button to open Create Appointment Modal */}
        <div className="mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Create New Appointment
          </button>
        </div>

        {/* Appointment Modal */}
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateAppointment}
          newAppointmentDate={newAppointmentDate}
          setNewAppointmentDate={setNewAppointmentDate}
          newAppointmentDescription={newAppointmentDescription}
          setNewAppointmentDescription={setNewAppointmentDescription}
        />
      </div>
    </div>
  );
};

export default CalendarPage;

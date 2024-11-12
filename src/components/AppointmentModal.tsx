import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for datepicker

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: () => void;
  newAppointmentDate: Date | null;
  setNewAppointmentDate: (date: Date | null) => void;
  newAppointmentDescription: string;
  setNewAppointmentDescription: (desc: string) => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  onCreate,
  newAppointmentDate,
  setNewAppointmentDate,
  newAppointmentDescription,
  setNewAppointmentDescription,
}) => {
  if (!isOpen) return null; // Do not render modal if it is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-4">
          Create Appointment
        </h2>

        {/* Date Picker for selecting appointment date */}
        <div className="mb-4">
          <label className="block text-gray-700">Select Appointment Date</label>
          <DatePicker
            selected={newAppointmentDate}
            onChange={setNewAppointmentDate}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            placeholderText="Select a date"
          />
        </div>

        {/* Appointment Description Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={newAppointmentDescription}
            onChange={(e) => setNewAppointmentDescription(e.target.value)}
            placeholder="Describe the appointment"
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Modal Actions */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onCreate}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Create Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

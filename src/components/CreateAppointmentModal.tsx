import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../redux/appointmentsSlice';

interface CreateAppointmentModalProps {
  onClose: () => void;
}

const CreateAppointmentModal: React.FC<CreateAppointmentModalProps> = ({
  onClose,
}) => {
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addAppointment({ time, description }));
    onClose();
  };

  return (
    <div className="create-appointment-modal">
      <div className="modal-content">
        <h2>Create Appointment</h2>
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateAppointmentModal;

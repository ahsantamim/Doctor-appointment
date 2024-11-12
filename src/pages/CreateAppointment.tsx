import React, { useState } from 'react';
import CreateAppointmentModal from '../components/CreateAppointmentModal';

const CreateAppointment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleCreateClick}>Create Appointment</button>
      {isModalOpen && <CreateAppointmentModal onClose={handleCloseModal} />}
    </div>
  );
};

export default CreateAppointment;

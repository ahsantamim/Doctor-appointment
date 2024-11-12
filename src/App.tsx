import React from 'react';
import CalendarPage from './pages/CalendarPage';
import CreateAppointment from './pages/CreateAppointment';

const App: React.FC = () => {
  return (
    <div>
      <h1>Appointment System</h1>
      <CalendarPage />
      <CreateAppointment />
    </div>
  );
};

export default App;

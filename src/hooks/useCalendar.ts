import { useSelector } from 'react-redux';
import { AppState } from '../redux/store';

export const useCalendar = () => {
  const appointments = useSelector(
    (state: AppState) => state.appointments.appointments
  );
  return { appointments };
};

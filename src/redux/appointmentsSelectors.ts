import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  id: string;
  time: string;
  description: string;
}

interface AppointmentsState {
  appointments: Appointment[];
}

const initialState: AppointmentsState = {
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment(state, action: PayloadAction<Appointment>) {
      state.appointments.push(action.payload);
    },
    setAppointments(state, action: PayloadAction<Appointment[]>) {
      state.appointments = action.payload;
    },
  },
});

export const { addAppointment, setAppointments } = appointmentsSlice.actions;
export const fetchAppointments = () => (dispatch: any) => {
  // Fetch from an API or database here
  const appointments: Appointment[] = []; // Simulating fetched appointments
  dispatch(setAppointments(appointments));
};

export default appointmentsSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure for an appointment
interface Appointment {
  id: string;
  time: string;
  description: string;
}

// Define the structure of the state for appointments, including modal state
interface AppointmentsState {
  appointments: Appointment[];
  isLoading: boolean;
  error: string | null;
  isModalOpen: boolean; // State to manage modal visibility
  selectedAppointment: Appointment | null; // Store the selected appointment for modal
}

const initialState: AppointmentsState = {
  appointments: [],
  isLoading: false,
  error: null,
  isModalOpen: false, // Modal is initially closed
  selectedAppointment: null, // No appointment selected initially
};

// Create the appointments slice
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
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    // Action to open the appointment modal for creating or editing an appointment
    openAppointmentModal(state, action: PayloadAction<Appointment | null>) {
      state.isModalOpen = true;
      state.selectedAppointment = action.payload ? { ...action.payload } : null; // Copy the selected appointment for editing or set it to null for creating
    },
    // Action to close the appointment modal
    closeAppointmentModal(state) {
      state.isModalOpen = false;
      state.selectedAppointment = null; // Clear the selected appointment when modal is closed
    },
    // Action to update an existing appointment
    updateAppointment(state, action: PayloadAction<Appointment>) {
      const index = state.appointments.findIndex(
        (appointment) => appointment.id === action.payload.id
      );
      if (index !== -1) {
        state.appointments[index] = action.payload; // Update the existing appointment
      }
    },
  },
});

export const {
  addAppointment,
  setAppointments,
  setLoading,
  setError,
  openAppointmentModal,
  closeAppointmentModal,
  updateAppointment,
} = appointmentsSlice.actions;

// Define the async thunk to fetch appointments
export const fetchAppointments = () => async (dispatch: any) => {
  dispatch(setLoading(true)); // Set loading to true when starting to fetch appointments

  try {
    // Simulate fetching from an API or backend. Replace with your actual API call.
    const appointments: Appointment[] = [
      { id: '1', time: '10:00 AM', description: 'Doctor Appointment' },
      { id: '2', time: '12:00 PM', description: 'Meeting with Client' },
    ];

    // Dispatch the appointments to the store
    dispatch(setAppointments(appointments));
  } catch (error) {
    // If an error occurs, set the error message
    dispatch(setError('Failed to load appointments.'));
  } finally {
    dispatch(setLoading(false)); // Set loading to false after fetch completion
  }
};

export default appointmentsSlice.reducer;

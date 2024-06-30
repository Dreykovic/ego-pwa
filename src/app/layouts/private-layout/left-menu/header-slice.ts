import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface HeaderState {
  pageTitle: string; // current page title state management
  noOfNotifications: number; // no of unread notifications
  newNotificationMessage: string; // message of notification to be shown
  newNotificationStatus: 1 | 0; // to check the notification type -  success/ error/ info
}
interface Notification {
  message: string;
  status: 1 | 0;
}
interface PageProperties {
  title: string;
}
const initialState: HeaderState = {
  pageTitle: 'Home',
  noOfNotifications: 15,
  newNotificationMessage: '',
  newNotificationStatus: 1,
};
export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<PageProperties>) => {
      state.pageTitle = action.payload.title;
    },

    removeNotificationMessage: (state) => {
      state.newNotificationMessage = '';
    },

    showNotification: (state, action: PayloadAction<Notification>) => {
      state.newNotificationMessage = action.payload.message;
      state.newNotificationStatus = action.payload.status;
    },
  },
});

export const { setPageTitle, removeNotificationMessage, showNotification } =
  headerSlice.actions;

export default headerSlice.reducer;

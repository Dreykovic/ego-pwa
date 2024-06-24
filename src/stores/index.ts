import { configureStore } from '@reduxjs/toolkit';

import headerSlice from '@/app/layouts/private-layout/header/header-slice';
import rightDrawerSlice from '@/app/layouts/private-layout/right-sidebar/right-drawer-slice';
import authReducer from '@/features/auth/stores/auth-slice';

import apiSlice from './api-slice';
const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
};

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

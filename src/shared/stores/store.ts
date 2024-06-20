import { configureStore } from '@reduxjs/toolkit';
import rightDrawerSlice from '@/shared/components/right-drawer/right-drawer-slice';
import headerSlice from '@/shared/components/header/header-slice';

const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  //   modal: modalSlice,
  //   lead: leadsSlice,
};

const store = configureStore({
  reducer: combinedReducer,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

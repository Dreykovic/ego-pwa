import { createSlice } from '@reduxjs/toolkit';

export const rightDrawerSlice = createSlice({
  name: 'rightDrawer',
  initialState: {
    header: '', // current  title state management
    isOpen: false, // right drawer state management for opening closing
    bodyType: '', // right drawer content management
    extraObject: {},
    isAuth:true,
    
  },
  reducers: {
    openRightDrawer: (state, action) => {
      const { header, bodyType, extraObject } = action.payload;
      state.isOpen = true;
      state.bodyType = bodyType;
      state.header = header;
      state.extraObject = extraObject;
    },

    closeRightDrawer: (state) => {
      state.isOpen = false;
      state.bodyType = '';
      state.header = '';
      state.extraObject = {};
    },
    setToken: (state, action)=>{
      state.isAuth = action.payload.token
    }
  },
});

export const { openRightDrawer, closeRightDrawer ,setToken} = rightDrawerSlice.actions;

export default rightDrawerSlice.reducer;
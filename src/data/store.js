import { configureStore } from '@reduxjs/toolkit';
import createBlockSlice from '@data/slice/showCreateSlice';

export default configureStore({
  reducer: {
    createBlock: createBlockSlice,

  },
})
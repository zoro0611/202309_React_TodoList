import { configureStore } from '@reduxjs/toolkit';
import createBlockSlice from '@data/slice/showCreateSlice';
import todoItemSlice  from '@data/slice/todoItemSlice';

export default configureStore({
  reducer: {
    createBlock: createBlockSlice,
    todo: todoItemSlice,


  },
})
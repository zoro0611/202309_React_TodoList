import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    // {
    //     id: 1,
    //     isFavorite: false,
    //     isCompleted: true,
    //     title: "Task 1",
    //     comment: "Comment 1",
    //     dueDate: "2021-08-05 12:00:00",
    // },
    // {
    //     id: 2,
    //     isFavorite: true,
    //     isCompleted: false,
    //     title: "Task 2",
    //     comment: "Comment 2",
    //     dueDate: "2021-12-05 12:00:00",
    // }
];
export const todoItemSlice = createSlice({
    name: "todo",
    initialState: {
        todoItemList: initialState
    },
    reducers: {
        add: (state, {payload}) => {
            state.todoItemList.push(payload);
        },
        remove: (state, {payload}) => {
            state.todoItemList = state.todoItemList.filter((item) => item.id !== payload.id);
        },
        update: (state, {payload}) => {
            const index = state.todoItemList.findIndex((item) => item.id === payload.id);
            state.todoItemList[index] = payload;
        },
        isFavorite: (state, {payload}) => {
            const index = state.todoItemList.findIndex((item) => item.id === payload.id);
            state.todoItemList[index].isFavorite = !state.todoItemList[index].isFavorite;
        },
        isCompleted: (state, {payload}) => {
            const index = state.todoItemList.findIndex((item) => item.id === payload.id);
            state.todoItemList[index].isCompleted = !state.todoItemList[index].isCompleted;
        }

    }
});

export const { add, remove, update, isFavorite } = todoItemSlice.actions;

export default todoItemSlice.reducer;
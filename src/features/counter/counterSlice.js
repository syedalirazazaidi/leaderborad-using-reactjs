// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";

// const initialState = {
//   value: 0,
//   status: "idle",
// };

// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.value += action.payload;
//       });
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
export const toDoSlider = createSlice({
  name: "toDo",
  initialState: {
    playerList: [
      {
        participant: "john",
        location: "london",
        units: "none",
        type: "running",
        points: 50,
      },
    ],
  },
  reducers: {
    addPlayer: (state, action) => {
      console.log(action.payload, "llll");
      let newPlayerList = {
        id: Math.random(),
        content: action.payload.newContent,
      };
      state.todoList.push(newPlayerList);

      // let newTodoList = {
      //   id: Math.random(),
      //   content: action.payload.newContent,
      // };
      // state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});
// Action creators are generated for each case reducer function
export const { addPlayer, deleteToDo, editTodo } = toDoSlider.actions;
export default toDoSlider.reducer;

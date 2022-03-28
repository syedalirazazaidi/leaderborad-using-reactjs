import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../fire_base.config";
// GET using ASYNC THUNK
export const fetchPlayers = createAsyncThunk("player/getplayer", async () => {
  const response = await db
    .collection("addnewplayer")
    .get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          participant: doc.data().participant,
          location: doc.data().location,
          units: doc.data().units,
          type: doc.data().type,
          points: doc.data().points,
        });
      });
      return data;
    });
  const data = await response;
  return data;
});

// DELETE using ASYNC THUNK

export const deletePlayer = createAsyncThunk(
  "player/deleteplayer",
  async (id) => {
    console.log(id, "IDENTSIIII");

    const response = await db.collection("addnewplayer").doc(id).delete();
    console.log(response);

    return response;
  }
);

const initialState = {
  players: [],
  pending: false,
  error: false,
};
const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchPlayers.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.players = payload;
      })
      .addCase(fetchPlayers.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(deletePlayer.pending, (state) => {
        state.pending = true;
      })
      .addCase(deletePlayer.fulfilled, (state, { payload }) => {
        state.pending = false;
        console.log(payload, "llllllllllllllllllll");
        state.players = payload;
      })
      .addCase(deletePlayer.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
  // extraReducers: (builder) => {
  //   builder

  // },
});
// Action creators are generated for each case reducer function
export const { postPlayer, removePlayer } = playerSlice.actions;
export default playerSlice.reducer;

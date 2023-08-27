import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Sonal Man Singh",
  email: "smsmessi10@gmail.com",
  description: "FrontEnd Engineer | Nature Lover | Coffee Enthusiast",
  posts: [
    {
      title: "Another Post",
      detail:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      timestamp: "8/27/2023, 8:05:16 AM",
    },
    {
      title: "My First Post",
      detail:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      timestamp: "8/27/2023, 8:05:16 AM",
    },
  ],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    editProfile: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.description = action.payload.description;
    },
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
  },
});

export const { editProfile, addPost } = userSlice.actions;
export default userSlice.reducer;

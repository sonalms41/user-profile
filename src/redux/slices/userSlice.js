import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Sonal Man Singh",
  email: "smsmessi10@gmail.com",
  description: "FrontEnd Engineer | Nature Lover | Coffee Enthusiast",
  posts: [
    {
      title: "My First Post",
      detail:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      title: "Another Post",
      detail:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
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
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { editProfile, addPost } = userSlice.actions;
export default userSlice.reducer;

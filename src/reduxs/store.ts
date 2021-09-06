import {configureStore} from '@reduxjs/toolkit';
import userInfo from './userSlice';
import theme from './themeSlice';
import auth from './authSlices';
const store = configureStore({
  reducer: {userInfo, theme, auth},
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

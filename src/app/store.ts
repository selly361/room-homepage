import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import sliderReducer from 'features/sliderSlice';

export const store = configureStore({
  reducer: {
    slider: sliderReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

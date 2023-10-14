import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {Redux, ComicState, ComicType, PayloadHttpListComics} from '../types';
import {PayloadHttpList} from '../../types';

const initialState: ComicState = {};
const reducer = createSlice({
  name: Redux.comic,
  initialState: initialState,
  reducers: {
    //comic
    getListData: (state: ComicState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListData: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListComics<ComicType>>,
    ) => {
      return {
        ...state,
        listData: {
          comics: action.payload.comics,
        },
      };
    },
  },
});

export const ComicReducer = reducer.reducer;
export const ComicActions = reducer.actions;
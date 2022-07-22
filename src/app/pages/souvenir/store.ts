import { createSlice } from '@reduxjs/toolkit';
import { createFeatureSelector } from '@ngrx/store';

const souvenirSlice = createSlice({
    name: 'souvenir',
    initialState: {
        items: []
    },
    reducers: {
        setSouvenir: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const {
    reducer: souvenirReducer,
    actions: {
        setSouvenir,
    },
    name: souvenirFeatureKey
} = souvenirSlice;
export const selectSouvenirFeature = createFeatureSelector<ReturnType<typeof souvenirReducer>>(souvenirFeatureKey);

import { createSlice } from '@reduxjs/toolkit';
import { createFeatureSelector } from '@ngrx/store';

const souvenirSlice = createSlice({
    name: 'souvenir',
    initialState: {
        _items: [],
        items: [],
    },
    reducers: {
        setSouvenir: (state, action) => {
            state.items = action.payload;
            state._items = state.items;
        },
        filterSouvenir: (state, action) => {
            const name = action.payload;
            if (name) {
                state.items = state._items.filter(item => {
                    if (item.name) {
                        return item.name.includes(name)
                        || item.name_kana.includes(name);
                    }
                    return true;
                });
            } else {
                state.items = state._items;
            }
        }
    }
});

export const {
    reducer: souvenirReducer,
    actions: {
        setSouvenir,
        filterSouvenir,
    },
    name: souvenirFeatureKey
} = souvenirSlice;
export const selectSouvenirFeature = createFeatureSelector<ReturnType<typeof souvenirReducer>>(souvenirFeatureKey);

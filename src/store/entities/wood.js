import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from '../api';
const slice = createSlice({
    name: 'wood',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },

    reducers: {
        callBegan: (wood, action) => {
            wood.error = null;
            wood.loading = true;
        },
        callFailed: (wood, action) => {
            wood.error = action.payload;
            wood.loading = false;
        },
        woodLoaded: (wood, action) => {
            wood.list = action.payload;
            wood.loading = false;
        },
        woodAdded: (wood, action) => {
            wood.list.push(action.payload);
            wood.loading = false;
        },
        woodEdited: (wood, action) => {
            for (let i = 0; i < wood.list.length; i++) {
                if (wood.list[i].id === action.payload.id) {
                    wood.list[i].id = action.payload;
                    break;
                }
            }
            wood.loading = false;
        },
        woodRemoved: (wood, action) => {
            for (let i = 0; i < wood.list.length; i++) {
                if (wood.list[i].id === action.payload) {
                    wood.list.splice(i, 1);
                    break;
                }
            }
            wood.loading = false;
        }
    }
});

export default slice.reducer;

const actions = slice.actions;
const url = "wood";

export const loadWood = () => apiCallBegan({
    url,
    onStart: actions.callBegan.type,
    onSuccess: actions.woodLoaded.type,
    onError: actions.callFailed.type,
});

export const addWood = (wood) => apiCallBegan({
    url,
    method: 'post',
    onStart: actions.callBegan.type,
    onSuccess: actions.woodAdded.type,
    onError: actions.callFailed.type,
});

export const removeWood = (wood) => apiCallBegan({
    url,
    method: 'delete',
    onStart: actions.callBegan.type,
    onSuccess: actions.woodRemoved.type,
    onError: actions.callFailed.type,
});
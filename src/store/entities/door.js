import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from '../api';
const slice = createSlice({
    name: 'door',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },

    reducers: {
        callBegan: (door, action) => {
            door.error = null;
            door.loading = true;
        },
        callFailed: (door, action) => {
            door.error = action.payload;
            door.loading = false;
        },
        doorLoaded: (door, action) => {
            door.list = action.payload;
            door.loading = false;
        },
        doorAdded: (door, action) => {
            door.list.push(action.payload);
            door.loading = false;
        },
        doorEdited: (door, action) => {
            for (let i = 0; i < door.list.length; i++) {
                if (door.list[i].id === action.payload.id) {
                    door.list[i].id = action.payload;
                    break;
                }
            }
            door.loading = false;
        },
        doorRemoved: (door, action) => {
            for (let i = 0; i < door.list.length; i++) {
                if (door.list[i].id === action.payload) {
                    door.list.splice(i, 1);
                    break;
                }
            }
            door.loading = false;
        }
    }
});

export default slice.reducer;

const actions = slice.actions;
const url = "door";

export const loadDoor = () => apiCallBegan({
    url,
    onStart: actions.callBegan.type,
    onSuccess: actions.doorLoaded.type,
    onError: actions.callFailed.type,
});

export const addDoor = (door) => apiCallBegan({
    url,
    method: 'post',
    data: door,
    onStart: actions.callBegan.type,
    onSuccess: actions.doorAdded.type,
    onError: actions.callFailed.type,
});

export const removeDoor = (door) => apiCallBegan({
    url,
    method: 'delete',
    data: door,
    onStart: actions.callBegan.type,
    onSuccess: actions.doorRemoved.type,
    onError: actions.callFailed.type,
});
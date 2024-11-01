import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SerialKiller} from "../../models/serial-killer.ts";
import {RootState} from "@reduxjs/toolkit/query";

interface KillersState {
    killers: SerialKiller[];
    killerDetail: SerialKiller | null;
}

const initialState: KillersState = {
    killers: [],
    killerDetail: null
}

export const killersSlice = createSlice({
    name: "killersSlice",
    initialState,
    reducers: {
        setKillers: (state, action: PayloadAction<SerialKiller[]>) => {
            state.killers = action.payload;
        }
    }
});

export const selectKillers = (state: RootState<any, any, any>) => state.killers;
export const {setKillers} = killersSlice.actions;
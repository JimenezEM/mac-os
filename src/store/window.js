import { immer } from 'zustand/middleware/immer';
import {create} from 'zustand';
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) => 
            set((state) => {
                const win = state.windows[windowKey];
                if(!win) return;
                win.isOpen = true;
                win.zIndex = state.nextZIndex;
                win.data = data ?? win.data;
                state.nextZIndex++;
        }),

        closeWindow: (windowKey) => 
            set((state) => {
                const win = state.windows[windowKey];
                    // console.log("heres the problem!!");
                    // console.log("windowKey:", windowKey);
                    // console.log("available keys:", Object.keys(state.windows));
                if(!win) return;
                    // console.log("heres NOT the problem");
                win.isOpen = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
        }),

        focusWindow: (windowKey) => 
            set((state) => {
                const win = state.windows[windowKey];
                win.zIndex = state.nextZIndex++;
        }),

    })),
);

export default useWindowStore;
import { SET_TOGGLE_NAV } from "./constants";

const initState = {
    toggleNav: false,
    darkMode: false
}

function reducer(state, action) {
    switch(action.type) {
        case SET_TOGGLE_NAV:
            return {
                ...state,
                toggleNav: !state.toggleNav
            }
        default: 
            throw new Error('Invalid action');
    }
}

export { initState }
export default reducer;
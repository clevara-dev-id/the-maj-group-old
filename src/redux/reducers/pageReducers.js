import { SET_HEAD_BACKGROUND } from "../action/actionTypes"

const initalState = {
    head_background: {
        image: "",
        text: "",
    },
}

const pageReducers = (state = initalState, action) => {
    switch (action.type) {
        case SET_HEAD_BACKGROUND:
            return {
                ...state,
                head_background: action.payload
            }
        
        default:
            return state
    }
}

export default pageReducers
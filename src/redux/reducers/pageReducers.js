import { SET_HEAD_BACKGROUND, SET_FOOTER } from "../action/actionTypes"

const initalState = {
    head_background: {
        image: "",
        text: "",
    },
    footer: "primary",
}

const pageReducers = (state = initalState, action) => {
    switch (action.type) {
        case SET_HEAD_BACKGROUND:
            return {
                ...state,
                head_background: action.payload
            }
        
        case SET_FOOTER:
            return {
                ...state,
                footer: action.payload
            }
        
        default:
            return state
    }
}

export default pageReducers
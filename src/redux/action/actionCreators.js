import { ADD_TODO, SET_HEAD_BACKGROUND } from "./actionTypes";

export function addTodo(args) {
    return {
        type: ADD_TODO,
        args
    }
}

// PAGE
export const setHeadBackground = (args) => (
    {
        type: SET_HEAD_BACKGROUND,
        payload: args
    }
)
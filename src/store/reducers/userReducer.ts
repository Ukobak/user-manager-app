import {ActionTypes, User, UserAction} from "../../types/types";

interface UserState {
    users: User[],
}

const initialState: UserState = {
    users: [],
}

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case ActionTypes.GET_USERS:
            return {...state, users: action.payload};
        case ActionTypes.ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        case ActionTypes.UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => (user.id === action.payload.id ? action.payload : user))
            }
        case ActionTypes.DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default :
            return state;
    }
}

export default userReducer;
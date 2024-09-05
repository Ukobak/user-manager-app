export interface User {
    id: number;
    name: string;
    email: string;
}

export const enum ActionTypes {
    GET_USERS = 'GET_USERS',
    ADD_USER = 'ADD_USER',
    UPDATE_USER = 'UPDATE_USER',
    DELETE_USER = 'DELETE_USER'
}

interface GetUserAction {
    type: ActionTypes.GET_USERS,
    payload: User[]
}

interface AddUserAction {
    type: ActionTypes.ADD_USER,
    payload: User
}

interface UpdateUserAction {
    type: ActionTypes.UPDATE_USER,
    payload: User
}

interface DeleteUserAction {
    type: ActionTypes.DELETE_USER,
    payload: number
}

export type UserAction = GetUserAction | AddUserAction | UpdateUserAction | DeleteUserAction

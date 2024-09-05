import {User} from "../../types/types";
import {ActionTypes} from "../../types/types";

export const getUsers = (users: User[]) => ({
    type: ActionTypes.GET_USERS,
    payload: users,
})

export const addUser = (user:User) => ({
    type: ActionTypes.ADD_USER,
    payload: user,
})

export const updateUser = (user:User) => ({
    type: ActionTypes.UPDATE_USER,
    payload: user,
})

export const deleteUser = (id:number) => ({
    type: ActionTypes.DELETE_USER,
    payload: id,
})
import {useMutation, useQuery, useQueryClient} from "react-query";
import {addUser, deleteUser, getUsers, updateUser} from "../utils/userApi";

export const useUsers = () => {
    const queryClient = useQueryClient();

    const {data: users, isLoading, error} = useQuery('users', getUsers)

    const addUserMutation = useMutation(addUser, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('users')
        }
    })

    const updateUserMutation = useMutation(updateUser, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('users')
        }
    })

    const deleteUserMutation = useMutation(deleteUser, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('users');
        },
    });

    return {
        users,
        isLoading,
        error,
        addUser: addUserMutation.mutate,
        updateUser: updateUserMutation.mutate,
        deleteUser: deleteUserMutation.mutate
    };
};
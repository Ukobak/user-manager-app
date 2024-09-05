import React from 'react';
import { User } from "../types/types";
import { IconButton, IIconProps, List } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

interface UserListProps {
    users: User[],
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
}

initializeIcons();
const editIcon: IIconProps = { iconName: 'Edit' };
const deleteIcon: IIconProps = { iconName: 'Delete' };

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
    return (
        <div>
            {users.length === 0 ? (
                <div>Пользователей нет</div>
            ) : (
                <List
                    items={users}
                    onRenderCell={(item?: User) => {
                        if (!item) {
                            return null;
                        }
                        return (
                            <div style={{ display: 'flex', margin: '1rem 0', padding: '0.5rem', border: '2px gray solid' }}>
                                <span>{item.name} - {item.email}</span>
                                <IconButton iconProps={editIcon} onClick={() => onEdit(item)} title='Edit' />
                                <IconButton iconProps={deleteIcon} onClick={() => onDelete(item.id)} title='Delete' />
                            </div>
                        );
                    }}
                />
            )}
        </div>
    );
};

export default UserList;

import React, { useState, useEffect } from 'react';
import { Spinner, MessageBar, MessageBarType } from '@fluentui/react';
import { useUsers } from '../hooks/useUsers';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import SearchBar from '../components/SearchBar';
import { User } from "../types/types";

const Home: React.FC = () => {
    const { users, isLoading, error, addUser, updateUser, deleteUser } = useUsers();
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [notification, setNotification] = useState<{ message: string; type: MessageBarType } | null>(null);

    const handleAddOrUpdateUser = (user: User) => {
        if (editingUser) {
            updateUser(user);
            setNotification({ message: 'Пользователь обновлен!', type: MessageBarType.success });
        } else {
            addUser(user);
            setNotification({ message: 'Пользователь создан!', type: MessageBarType.success });
        }
        setEditingUser(null);
    };

    const handleEdit = (user: User) => {
        setEditingUser(user);
    };

    const handleDelete = (id: number) => {
        deleteUser(id);
        setNotification({ message: 'Пользователь удален!', type: MessageBarType.warning });
    };

    const filteredUsers = users?.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [notification]);

    if (isLoading) return <Spinner label="Loading..." />;
    if (error) return <div>Error loading users</div>;

    return (
        <div style={{ margin: '0 2rem' }}>
            <h1>User Management</h1>
            <div style={{ width: '20rem' }}>
                <SearchBar onSearch={setSearchQuery} />
                <UserForm onSubmit={handleAddOrUpdateUser} initialUser={editingUser} />
            </div>
            <div style={{ margin: '1rem 0' }}>
                {notification && (
                    <MessageBar
                        messageBarType={notification.type}
                        onDismiss={() => setNotification(null)}
                        isMultiline={false}
                    >
                        {notification.message}
                    </MessageBar>
                )}
                <UserList users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Home;

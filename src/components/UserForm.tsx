import React from 'react';
import { User } from "../types/types";
import { Field, Form } from "react-final-form";
import { PrimaryButton, Stack, TextField } from "@fluentui/react";

interface UserFormProps {
    onSubmit: (user: User) => void;
    initialUser?: User | null;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialUser }) => {
    const handleSubmit = (values: any, form: any) => {
        onSubmit({ id: initialUser ? initialUser.id : Math.floor(100 + Math.random() * 900), name: values.name, email: values.email });
        form.reset();
    };

    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={initialUser || { name: '', email: '' }} // Убедитесь, что это объект
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Stack tokens={{ childrenGap: 10 }}>
                        <Field name="name">
                            {({ input, meta }) => (
                                <TextField
                                    label="Name"
                                    {...input}
                                    required
                                    errorMessage={meta.touched && meta.error}
                                />
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <TextField
                                    label="Email"
                                    {...input}
                                    required
                                    errorMessage={meta.touched && meta.error}
                                />
                            )}
                        </Field>
                        <PrimaryButton type="submit">Submit</PrimaryButton>
                    </Stack>
                </form>
            )}
        />
    );
};

export default UserForm;

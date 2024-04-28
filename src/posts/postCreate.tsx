import * as React from 'react';
import { Datagrid, TextField, Create } from 'react-admin';

export const PostCreate: React.FC = (props) => (
    <Create {...props}>
        <Datagrid rowClick="Createedit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="user.name" />
        </Datagrid>
    </Create>
);
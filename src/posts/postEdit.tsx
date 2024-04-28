import * as React from 'react';
import { Datagrid, TextField, Edit } from 'react-admin';

export const PostEdit: React.FC = (props) => (
    <Edit {...props}>
        <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="user.name" />
        </Datagrid>
    </Edit>
);
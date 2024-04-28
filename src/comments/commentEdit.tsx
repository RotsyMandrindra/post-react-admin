import * as React from 'react';
import { Datagrid, TextField, EmailField, Edit } from 'react-admin';

export const CommentEdit: React.FC = (props) => (
 <Edit {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
 </Edit>
);


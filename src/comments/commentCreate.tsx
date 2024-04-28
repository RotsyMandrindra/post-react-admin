import * as React from 'react';
import { Datagrid, TextField, EmailField, Create } from 'react-admin';

export const CommentCreate: React.FC = (props) => (
 <Create {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
 </Create>
);


import * as React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const CommentList: React.FC = (props) => (
 <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
 </List>
);


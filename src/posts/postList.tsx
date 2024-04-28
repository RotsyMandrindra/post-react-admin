import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const PostList: React.FC = (props) => (
 <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="user.name" />
    </Datagrid>
 </List>
);


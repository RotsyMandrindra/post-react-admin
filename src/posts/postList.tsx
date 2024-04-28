import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField, FunctionField, Button, useRedirect, EditButton } from 'react-admin';

export const PostList: React.FC = (props: any) => {
 const redirect = useRedirect();

 const handleRedirect = (id: number) => {
    redirect(`/posts/${id}/comments`);
 };

 return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="userId" reference="users" link="show">
          <TextField source="name" />
        </ReferenceField>
        <FunctionField
          label="Comment"
          render={(record: any) => (
            <Button onClick={() => handleRedirect(record.id)}>
              <span> View comments </span>
            </Button>
          )}
        />
        <EditButton />
      </Datagrid>
    </List>
 );
};

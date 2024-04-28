import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const PostCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput  source="id" />
            <TextInput source="title" />
            <TextInput source="name"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Create>
);
import * as React from 'react';
import { Edit, SimpleForm, TextInput, required } from 'react-admin';

export const CommentEdit: React.FC = (props) => (
  <Edit {...props}>
      <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="email" validate={required()} />
                <TextInput source="body" validate={required()} />
      </SimpleForm>
  </Edit>
);


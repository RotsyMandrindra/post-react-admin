import { Admin, Resource, ShowGuesser } from 'react-admin';

import dataProvider from './dataProvider';
import CustomLayout from './layout';
import { PostList } from './posts/postList';
import { PostEdit } from './posts/postEdit';
import { PostCreate } from './posts/postCreate';
import { CommentList } from './comments/commentList';
import { CommentEdit } from './comments/commentEdit';
import { CommentCreate } from './comments/commentCreate';

export const App = () => (
    <Admin dataProvider={dataProvider} layout={CustomLayout}>
        <Resource name="Posts" list={PostList} edit={PostEdit} show={PostList} create={PostCreate}/>
        <Resource name="Comments" list={CommentList} show={ShowGuesser} edit={CommentEdit} create={CommentCreate} />
    </Admin>
);
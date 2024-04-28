import { Admin, Resource } from 'react-admin';

import { dataProvider } from './dataProvider';
import CustomLayout from './layout';
import { PostList } from './posts/postList';
import { PostEdit } from './posts/postEdit';
import { PostCreate } from './posts/postCreate';
import { CommentList } from './comments/commentList';
import { CommentEdit } from './comments/commentEdit';
import { CommentCreate } from './comments/commentCreate';

export const App = () => (
    <Admin dataProvider={dataProvider} layout={CustomLayout}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostList} />
        <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} show={CommentList} />
    </Admin>
);
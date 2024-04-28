import React from 'react';
import { Layout, LayoutProps } from 'react-admin';
import { ReactQueryDevtools } from 'react-query/devtools';

const CustomLayout: React.FC<LayoutProps> = (props) => (
    <>
        <Layout {...props} />
        <ReactQueryDevtools initialIsOpen={false} />
    </>
);

export default CustomLayout;

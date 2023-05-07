import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Layout } from '../04-layouts/Layout';
const ErrorPage: React.FC = () => {
    const error = useRouteError() as any;

    return (
        <Layout>
            <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
                </div>
        </Layout>
    );
};

export default ErrorPage;

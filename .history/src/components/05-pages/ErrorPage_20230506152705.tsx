import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Layout } from '../04-layouts/Layout';

const ErrorPage: React.FC = () => {
    const error = useRouteError() as any;

    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="text-sm">
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    );
};

export default ErrorPage;

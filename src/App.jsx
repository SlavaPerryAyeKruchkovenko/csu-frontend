import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main/main';
import Admin from '@Pages/Admin/admin';
import ErrorPage from '@Pages/ErrorPage/errorPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;

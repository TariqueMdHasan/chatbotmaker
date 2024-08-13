

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../components/main.css';
import Landing from './start/landing';
import Login from './start/login';
import Signup from './start/signup';
import Platform from './platform/platformMain';
import Themes from './themes/theme';
import Response from './themes/response';
import Folder from './folder/folder';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/platform/:fileId' element={<Platform />} />
                <Route path='/theme' element={<Themes />} />
                <Route path='/response' element={<Response />} />
                <Route path='/folder' element={<Folder />} />
            </Routes>
        </Router>
    );
}

export default App;








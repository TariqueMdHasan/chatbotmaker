

import React from 'react';
import './folder-top.css';
// import { useNavigate } from 'react-router-dom';

function FolderTop() {
    // const navigate = useNavigate();

    return (
        <div className='folder-top'>
            <select name="action" className="folder-dropdown">
                <option value="workspace">Tarique Hasan's Workspace</option>
                <option value="setting">Setting</option>
                {/* <option value="logout" onSelect={ () => navigate('/')}>Log Out</option> */}
                <option value="logout" >Log Out</option>
            </select>
        </div>
    );
}

export default FolderTop;

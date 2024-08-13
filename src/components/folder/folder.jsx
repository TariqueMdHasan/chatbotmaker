

// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './folder.css';
// import FolderTop from './folder-top';
// import Margin from '../../assets/folder/Margin.png';
// import Delete from '../../assets/folder/deleteDustbin.png';

// const FolderList = () => {
//   const [folders, setFolders] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [folderName, setFolderName] = useState('');
//   const [activeFolderIndex, setActiveFolderIndex] = useState(null);
//   const popupRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         setShowForm(false);
//       }
//     };

//     if (showForm) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [showForm]);

//   const addFolder = () => {
//     if (folderName.trim()) {
//       setFolders([...folders, { name: folderName, files: [] }]);
//       setFolderName('');
//       setShowForm(false);
//     }
//   };

//   const deleteFolder = (index) => {
//     setFolders(folders.filter((_, i) => i !== index));
//     if (activeFolderIndex === index) {
//       setActiveFolderIndex(null);
//     }
//   };

//   const handleCancel = () => {
//     setFolderName('');
//     setShowForm(false);
//   };

//   const handleFolderClick = (index) => {
//     setActiveFolderIndex(index);
//   };

//   const handleFileClick = (folderIndex, fileIndex) => {
//     navigate(`/platform/${folderIndex}-${fileIndex}`);
//   };

//   return (
//     <div className="container">
//       <FolderTop />
//       <div className="folders">
//         <div className="folder add-folder" onClick={() => setShowForm(true)}>
//             <img src={Margin} alt="margin" className='margin'/>
//             <h2>Create a folder</h2>
//         </div>
//         {showForm && (
//           <div className="popup" ref={popupRef}>
//             <h2>Create New Folder</h2>
//             <input
//               type="text"
//               value={folderName}
//               onChange={(e) => setFolderName(e.target.value)}
//               placeholder='Enter folder name'
//               className='popup-input'
//             />
//             <div className="popup-buttons">
//               <button onClick={addFolder}>Done</button>
//               <div className='st-line'></div>
//               <button onClick={handleCancel}>Cancel</button>
//             </div>
//           </div>
//         )}
//         <div className="folder-container">
//           {folders.map((folder, index) => (
//             <div
//               key={index}
//               className={`folder ${activeFolderIndex === index ? 'active' : ''}`}
//               onClick={() => handleFolderClick(index)}
//             >
//               {folder.name}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   deleteFolder(index);
//                 }}
//               >
//                 <img src={Delete} alt="dustbin" className='dustbin'/>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="files">
//         {activeFolderIndex !== null && (
//           <FileList
//             files={folders[activeFolderIndex].files}
//             onAddFile={() => {
//               const updatedFolders = [...folders];
//               updatedFolders[activeFolderIndex].files.push(`new file ${updatedFolders[activeFolderIndex].files.length + 1}`);
//               setFolders(updatedFolders);
//             }}
//             onDeleteFile={(fileIndex) => {
//               const updatedFolders = [...folders];
//               updatedFolders[activeFolderIndex].files.splice(fileIndex, 1);
//               setFolders(updatedFolders);
//             }}
//             onFileClick={(fileIndex) => handleFileClick(activeFolderIndex, fileIndex)}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// const FileList = ({ files, onAddFile, onDeleteFile, onFileClick }) => {
//   return (
//     <div className="file-grid">
//       <div className="file-row">
//         <button className="add-file-button" onClick={onAddFile}>
//           <h2>+</h2>
//           <h3>Create a typebot</h3>
//         </button>
//         {files.map((file, index) => (
//           <div key={index} className="file" onClick={() => onFileClick(index)}>
//             {file}
//             <button 
//             onClick={() => onDeleteFile(index)}>
//                 <img src={Delete} alt="deleting files" className='file-dustbin'/>
                
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FolderList;









import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './folder.css';
import FolderTop from './folder-top';
import Margin from '../../assets/folder/Margin.png';
import Delete from '../../assets/folder/deleteDustbin.png';

const FolderList = () => {
  const [folders, setFolders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [activeFolderIndex, setActiveFolderIndex] = useState(null);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);

  const addFolder = () => {
    if (folderName.trim()) {
      setFolders([...folders, { name: folderName, files: [] }]);
      setFolderName('');
      setShowForm(false);
    }
  };

  const deleteFolder = (index) => {
    setFolders(folders.filter((_, i) => i !== index));
    if (activeFolderIndex === index) {
      setActiveFolderIndex(null);
    }
  };

  const handleCancel = () => {
    setFolderName('');
    setShowForm(false);
  };

  const handleFolderClick = (index) => {
    setActiveFolderIndex(index);
  };

  const handleFileClick = (folderIndex, fileIndex) => {
    navigate(`/platform/${folderIndex}-${fileIndex}`);
  };

  return (
    <div className="container">
      <FolderTop />
      <div className="folders">
        <div className="folder add-folder" onClick={() => setShowForm(true)}>
          <img src={Margin} alt="margin" className='margin' />
          <h2>Create a folder</h2>
        </div>
        {showForm && (
          <div className="popup" ref={popupRef}>
            <h2>Create New Folder</h2>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder='Enter folder name'
              className='popup-input'
            />
            <div className="popup-buttons">
              <button onClick={addFolder}>Done</button>
              <div className='st-line'></div>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        )}
        <div className="folder-container">
          {folders.map((folder, index) => (
            <div
              key={index}
              className={`folder ${activeFolderIndex === index ? 'active' : ''}`}
              onClick={() => handleFolderClick(index)}
            >
              {folder.name}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFolder(index);
                }}
              >
                <img src={Delete} alt="dustbin" className='dustbin' />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="files">
        {activeFolderIndex !== null && (
          <FileList
            files={folders[activeFolderIndex].files}
            onAddFile={() => {
              const updatedFolders = [...folders];
              updatedFolders[activeFolderIndex].files.push(`new file ${updatedFolders[activeFolderIndex].files.length + 1}`);
              setFolders(updatedFolders);
            }}
            onDeleteFile={(fileIndex) => {
              const updatedFolders = [...folders];
              updatedFolders[activeFolderIndex].files.splice(fileIndex, 1);
              setFolders(updatedFolders);
            }}
            onFileClick={(fileIndex) => handleFileClick(activeFolderIndex, fileIndex)}
          />
        )}
      </div>
    </div>
  );
};

const FileList = ({ files, onAddFile, onDeleteFile, onFileClick }) => {
  return (
    <div className="file-grid">
      <div className="file-row">
        <button className="add-file-button" onClick={onAddFile}>
          <h2>+</h2>
          <h3>Create a typebot</h3>
        </button>
        {files.map((file, index) => (
          <div key={index} className="file" onClick={() => onFileClick(index)}>
            {file}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent click event from reaching the parent div
                onDeleteFile(index);
              }}
            >
              <img src={Delete} alt="deleting files" className='file-dustbin' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderList;






import React, { useState } from 'react';
import './top.css';
import { useNavigate, useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

function Top() {
  const { fileId } = useParams();
  const navigate = useNavigate();
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [clickedBtn, setClickedBtn] = useState(null);

  const handleClick = (divNumber) => {
    setSelectedDiv(divNumber);
    switch (divNumber) {
      case 1:
        // navigate('/platform');
        navigate(`/platform/${fileId}`);
        break;
      case 2:
        navigate('/theme');
        break;
      case 3:
        navigate('/response');
        break;
      default:
        break;
    }
  };

  const saveClick = () => {
    setClickedBtn(5);
  };

  return (
    <div className='top'>
      <div className='top-1 topbox'>
        <input type="text" className='top1-input' placeholder='Enter Form Name' />
      </div>
      <div className='top-2 topbox'>
        <button
          className={`flow-btn myBtn ${selectedDiv === 1 ? 'changed' : ''}`}
          onClick={() => handleClick(1)}
        >
          Flow
        </button>
        <button
          className={`theme-btn myBtn ${selectedDiv === 2 ? 'changed' : ''}`}
          onClick={() => handleClick(2)}
        >
          Theme
        </button>
        <button
          className={`response-btn myBtn ${selectedDiv === 3 ? 'changed' : ''}`}
          onClick={() => handleClick(3)}
        >
          Responses
        </button>
      </div>
      <div className='top-3 topbox'>
        <button className={`top-share-btn top-last-btn ${clickedBtn === 5 ? 'changed' : ''}`}>
          Share
        </button>
        <button className='top-save-btn top-last-btn' onClick={saveClick}>
          Save
        </button>
        <button className='top-cancel-btn'>
          &#x2716;
        </button>
      </div>
    </div>
  );
}

export default Top;

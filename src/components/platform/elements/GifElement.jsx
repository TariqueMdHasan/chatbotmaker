import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png'

const GifElement = ({ onDelete, index }) => {
  return (
    <div className='element-gif'>
      <div className="element">
        <div>GIF Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <input type="text" placeholder='Click to add link' className='element-element-btn' />
      </div>
    </div>
  );
};

export default GifElement;

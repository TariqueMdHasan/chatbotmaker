// TextElement.js
import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png'

const TextElement = ({ onDelete, index }) => {
  return (
    <div className='element-text'>
      <div className="element">
        <div>Text Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <input type="text" placeholder='Click here to edit' className='element-element-btn' />
      </div>
    </div>
  );
};

export default TextElement;

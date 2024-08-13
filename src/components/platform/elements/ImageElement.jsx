import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png'

const ImageElement = ({ onDelete, index }) => {
  return (
    <div className='element-image'>
      <div className="element">
        <div>Image Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <input type="text" placeholder='click to add link' className='element-element-btn'/>
      </div>
    </div>
  );
};

export default ImageElement;

import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png'

const ButtonElement = ({ onDelete, index }) => {
  return (
    <div className="element-btn">
      <div className='element'>
        <div>Button Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <input type="text" className='element-element-btn' placeholder=' '/>
      </div>
    </div>
  );
};

export default ButtonElement;

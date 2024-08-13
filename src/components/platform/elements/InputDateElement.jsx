import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png';

const InputDateElement = ({ onDelete, index }) => {
  return (
    <div className='element-date'>
      <div className="element">
        <div>Date Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <p>Hint : User will select a date</p>
      </div>
    </div>
  );
};

export default InputDateElement;

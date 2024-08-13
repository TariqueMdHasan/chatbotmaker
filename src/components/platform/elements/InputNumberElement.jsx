import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png'

const InputNumberElement = ({ onDelete, index }) => {
  return (
    <div className='element-number'>
      <div className="element">
        <div>Number Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <p>Hint : User will input a number on his form</p>
      </div>
    </div>
  );
};

export default InputNumberElement;

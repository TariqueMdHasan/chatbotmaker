import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png'

const InputPhoneElement = ({ onDelete, index }) => {
  return (
    <div className='element-phone'>
      <div className="element">
        <div>Phone Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <p>Hint : User will input a phone on his form</p>
      </div>
    </div>
  );
};

export default InputPhoneElement;

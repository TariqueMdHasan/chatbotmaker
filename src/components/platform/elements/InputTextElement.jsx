import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png'

const InputTextElement = ({ onDelete, index }) => {
  return (
    <div className='element-inputText'>
      <div className="element">
        <div>Input Text Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <p>Hint : User will input a text on his form</p>
      </div>
    </div>
  );
};

export default InputTextElement;

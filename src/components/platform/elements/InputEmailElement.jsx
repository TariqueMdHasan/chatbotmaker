import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png'

const InputEmailElement = ({ onDelete, index }) => {
  return (
    <div className='element-email'>
      <div className="element">
        <div>Email Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <p>Hint : User will input a email on his form</p>
      </div>
    </div>
  );
};

export default InputEmailElement;




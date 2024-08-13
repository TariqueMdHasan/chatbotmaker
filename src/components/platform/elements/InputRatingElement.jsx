import React from 'react';
import ElementDelete from '../../../assets/platformMain/delete.png'

const InputRatingElement = ({ onDelete, index }) => {
  return (
    <div className='element-rating'>
      <div className="element">
        <div>Rating Element</div>
        <button onClick={() => onDelete(index)} className='element-delete'>
          <img src={ElementDelete} alt=".." />
        </button>
      </div>
      <div className='element-element'>
        <p>Hint : User will tap to rate out of 5</p>
      </div>
    </div>
  );
};

export default InputRatingElement;

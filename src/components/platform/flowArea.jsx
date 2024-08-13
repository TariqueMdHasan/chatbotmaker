



import React from 'react';
import './flowArea.css';
import TextElement from './elements/TextElement';
import ImageElement from './elements/ImageElement';
import VideoElement from './elements/VideoElement';
import GifElement from './elements/GifElement';
import InputTextElement from './elements/InputTextElement';
import InputNumberElement from './elements/InputNumberElement';
import InputEmailElement from './elements/InputEmailElement';
import InputPhoneElement from './elements/InputPhoneElement';
import InputDateElement from './elements/InputDateElement';
import InputRatingElement from './elements/InputRatingElement';
import ButtonElement from './elements/ButtonElement';
import Flag from '../../assets/platformMain/flag.png';

const FlowArea = ({ elements, onDelete }) => {
  const renderElement = (element, index) => {
    const elementProps = { onDelete, index };

    switch (element.id) {
      case 'text':
        return <TextElement key={index} {...elementProps} />;
      case 'image':
        return <ImageElement key={index} {...elementProps} />;
      case 'video':
        return <VideoElement key={index} {...elementProps} />;
      case 'gif':
        return <GifElement key={index} {...elementProps} />;
      case 'inputText':
        return <InputTextElement key={index} {...elementProps} />;
      case 'number':
        return <InputNumberElement key={index} {...elementProps} />;
      case 'email':
        return <InputEmailElement key={index} {...elementProps} />;
      case 'phone':
        return <InputPhoneElement key={index} {...elementProps} />;
      case 'date':
        return <InputDateElement key={index} {...elementProps} />;
      case 'rating':
        return <InputRatingElement key={index} {...elementProps} />;
      case 'button':
        return <ButtonElement key={index} {...elementProps} />;
      default:
        return null;
    }
  };

  return (
    <div className='flow-page'>
      <div className='flow-page-top'>
        <div className='start-box'>
          <img src={Flag} alt="flag" className='flag'/>
          <h3 className='start-h3'>Start</h3>
        </div>
      </div>
      <div className="flow-area">
        {elements.map((element, index) => (
          <div key={index} className="flow-item">
            {renderElement(element, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowArea;

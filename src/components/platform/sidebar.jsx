// import React from 'react';
// import './sidebar.css'

// const items = [
//   { id: 'text', content: 'Text', type: 'bubble' },
//   { id: 'image', content: 'Image', type: 'bubble' },
//   { id: 'video', content: 'Video', type: 'bubble' },
//   { id: 'gif', content: 'GIF', type: 'bubble' },
//   { id: 'inputText', content: 'Text Input', type: 'input' },
//   { id: 'number', content: 'Number Input', type: 'input' },
//   { id: 'email', content: 'Email Input', type: 'input' },
//   { id: 'phone', content: 'Phone Input', type: 'input' },
//   { id: 'date', content: 'Date Input', type: 'input' },
//   { id: 'rating', content: 'Rating Input', type: 'input' },
//   { id: 'button', content: 'Button', type: 'input' },
// ];

// const Sidebar = ({ addElement }) => {
//   return (
//     <div className="sidebar">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="sidebar-item"
//           onClick={() => addElement(item)}
//         >
//           {item.content}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import './sidebar.css'

// const Sidebar = ({ onAddElement }) => {
//   return (
//     <div className="sidebar">
//       <button onClick={() => onAddElement({ id: 'text' })}>Text</button>
//       <button onClick={() => onAddElement({ id: 'image' })}>Image</button>
//       <button onClick={() => onAddElement({ id: 'video' })}>Video</button>
//       <button onClick={() => onAddElement({ id: 'gif' })}>GIF</button>
//       <button onClick={() => onAddElement({ id: 'inputText' })}>Input Text</button>
//       <button onClick={() => onAddElement({ id: 'number' })}>Number</button>
//       <button onClick={() => onAddElement({ id: 'email' })}>Email</button>
//       <button onClick={() => onAddElement({ id: 'phone' })}>Phone</button>
//       <button onClick={() => onAddElement({ id: 'date' })}>Date</button>
//       <button onClick={() => onAddElement({ id: 'rating' })}>Rating</button>
//       <button onClick={() => onAddElement({ id: 'button' })}>Button</button>
//     </div>
//   );
// };

// export default Sidebar;





import React from 'react';
import './sidebar.css';
import BText from '../../assets/platformMain/BText.png';
import Imge from '../../assets/platformMain/img.png';
import VideoImg from '../../assets/platformMain/Videos.png';
import GifImg from '../../assets/platformMain/Gif.png';
import InputText from '../../assets/platformMain/IText.png';
import NumberImg from '../../assets/platformMain/number.png';

import Email from '../../assets/platformMain/email.png';
import Phone from '../../assets/platformMain/phone.png';
import Date from '../../assets/platformMain/date.png';
import Rating from '../../assets/platformMain/rating.png';
import Bttn from '../../assets/platformMain/button.png';




const Sidebar = ({ onAddElement }) => {
  return (
    <div className="sidebar">
      <div className='bubbles'>
        <div className='bubbles-h2-box'>
          <h2 className='bubbles-h2'>Bubbles</h2>
        </div>
        <div className='b-one bubble-box'>
          <button onClick={() => onAddElement({ id: 'text' })} className='sb-btn'>  
            <img src={BText} alt="BubbleText" className='bubble-text btn-img'/>
            Text
          </button>
          <button onClick={() => onAddElement({ id: 'image' })} className='sb-btn'>
            <img src={Imge} alt="imge" className='bubble-image btn-img'/>
            Image
          </button>
        </div>
        <div className='b-two bubble-box'>
          <button onClick={() => onAddElement({ id: 'video' })} className='sb-btn'>
            <img src={VideoImg} alt="vide imge" className='bubble-video btn-img'/>
            Video
          </button>
          <button onClick={() => onAddElement({ id: 'gif' })} className='sb-btn'>
            <img src={GifImg} alt="gif imge" className='bubble-gif '/>
            GIF
          </button>
        </div>
      </div>
      <div className='input'>
        <div className='input-h2-box bubbles-h2-box'>
          <h2 className='input-h2'>Inputs</h2>
        </div>
        <div className='b-three bubble-box'>
          <button onClick={() => onAddElement({ id: 'inputText' })} className='sb-btn'>
            <img src={InputText} alt="input text" className='input-text btn-img'/>
            Input Text
          </button>
          <button onClick={() => onAddElement({ id: 'number' })} className='sb-btn'>
            <img src={NumberImg} alt="number" className='input-number btn-img'/>
            Number
          </button>
        </div>
        <div className='b-four bubble-box'>
          <button onClick={() => onAddElement({ id: 'email' })} className='sb-btn'>
            <img src={Email} alt="email" className='input-email btn-img'/>
            Email
          </button>
          <button onClick={() => onAddElement({ id: 'phone' })} className='sb-btn'>
            <img src={Phone} alt="phone" className='input-phone btn-img'/>
            Phone
          </button>
        </div>
        <div className='b-five bubble-box'>
          <button onClick={() => onAddElement({ id: 'date' })} className='sb-btn'>
            <img src={Date} alt="date" className='input-date btn-img'/>
            Date
          </button>
          <button onClick={() => onAddElement({ id: 'rating' })} className='sb-btn'>
            <img src={Rating} alt="rating" className='input-rating btn-img'/>
            Rating
          </button>
        </div>
        <div className='b-six bubble-box'>
          <button onClick={() => onAddElement({ id: 'button' })} className='sb-btn button-btn'>
            <img src={Bttn} alt="bttn" className='input-bttn'/>
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

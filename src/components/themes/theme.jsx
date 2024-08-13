// import React, { useState } from 'react';
// import './theme.css';
// import Light from '../../assets/theme/light.png';
// import Dark from '../../assets/theme/Dark.png';
// import Blue from '../../assets/theme/blue.png';

// import Top from '../platform/top';
    

// function Theme() {
//     const [savedDiv, setSavedDiv] = useState(null);


//     const handleClick = (divNumber) => {
//         setSavedDiv(divNumber);
//     };



//   return (
//     <div className='theme'>
//         <div className='theme-top'>
//             <Top />
//         </div>
//         <div className='theme-bottom'>
//             <div className='theme-bottom-left'>
//                 <div className='theme-cust'>
//                     <h2 className='theme-h2'>Customize the theme</h2>
//                 </div>
//                 <div className='theme-images'>
//                     <div 
//                         className={`theme-box ${savedDiv === 6 ? 'changed' : ''}`}
//                         onClick={() =>  handleClick(6)}
//                     >
//                         <img src={Light} alt="light" className='light theme-img'/>
//                     </div>
//                     <div 
//                         className={`theme-box ${savedDiv === 7 ? 'changed' : ''}`}
//                         onClick={() =>  handleClick(7)}
//                     >
//                         <img src={Dark} alt="dark" className='dark theme-img'/>
//                     </div>
//                     <div 
//                         className={`theme-box ${savedDiv === 8 ? 'changed' : ''}`}
//                         onClick={() =>  handleClick(8)}
//                     >
//                         <img src={Blue} alt="blue" className='blue theme-img'/>
//                     </div>
                    
//                 </div>
//             </div>
//             <div className='theme-bottom-right'>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Theme;




import React, { useState } from 'react';
import './theme.css';
import Light from '../../assets/theme/light.png';
import Dark from '../../assets/theme/Dark.png';
import Blue from '../../assets/theme/blue.png';
import Top from '../platform/top';

function Theme() {
    const [savedDiv, setSavedDiv] = useState(null);

    const handleClick = (divNumber) => {
        setSavedDiv(divNumber);
    };

    const getBackgroundColor = () => {
        switch (savedDiv) {
            case 6:
                return 'white';
            case 7:
                return '#171923';
            case 8:
                return '#508C9B';
            default:
                return 'white';
        }
    };

    return (
        <div className='theme'>
            <div className='theme-top'>
                <Top />
            </div>
            <div className='theme-bottom'>
                <div className='theme-bottom-left'>
                    <div className='theme-cust'>
                        <h2 className='theme-h2'>Customize the theme</h2>
                    </div>
                    <div className='theme-images'>
                        <div
                            className={`theme-box ${savedDiv === 6 ? 'changed' : ''}`}
                            onClick={() => handleClick(6)}
                        >
                            <img src={Light} alt="light" className='light theme-img' />
                        </div>
                        <div
                            className={`theme-box ${savedDiv === 7 ? 'changed' : ''}`}
                            onClick={() => handleClick(7)}
                        >
                            <img src={Dark} alt="dark" className='dark theme-img' />
                        </div>
                        <div
                            className={`theme-box ${savedDiv === 8 ? 'changed' : ''}`}
                            onClick={() => handleClick(8)}
                        >
                            <img src={Blue} alt="blue" className='blue theme-img' />
                        </div>
                    </div>
                </div>
                <div
                    className='theme-bottom-right'
                    style={{ backgroundColor: getBackgroundColor() }}
                >
                    
                    <div className='tb-mssg-rcv'>
                        <div className='tb-circle'></div>
                        <p>Hello</p>
                    </div>
                    <div className='tb-mssg-send'>
                        <p>Hi</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Theme;









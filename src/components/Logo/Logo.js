import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import thinking from './thinking.png'

const Logo = ()=>{

    return(

        <div className='ma4 mt0'>


           <Tilt className="Tilt br2 shadow-5" options={{ max : 60 }} style={{ height: 10, width: 200 }} >
           <div className="Tilt-inner"> <img  style={{paddingTop:'5px'}} alt='my logo' src={thinking}/> </div>
           </Tilt>



        </div>

        );
}
export default Logo;
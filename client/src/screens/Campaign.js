import React from 'react';
import Navbar from '../components/HomePage/Navbar';
import Card from '../components/Campaign/Card';

function Campaign() {
    return (
        <div className='Campaign'>
           <Navbar/>
           <div className='section-card'> 
           <Card/>
           </div>
        </div>
    );
}

export default Campaign;
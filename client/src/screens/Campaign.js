import React from 'react';
import Navbar from '../components/HomePage/Navbar';
import Card from '../components/Campaign/Card';
import Footer from '../components/footer';

function Campaign() {
    return (
        <div className='Campaign'>
           <Navbar/>
           <div className='section-card'> 
           <Card/>
           </div>
           <Footer/>
        </div>
    );
}

export default Campaign;
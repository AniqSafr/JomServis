import React from 'react';
import Navbar from '../components/HomePage/Navbar';
import Card from '../components/Campaign/Card';
import Footer from '../components/footer';
import Table from '../components/Feedback/tableFeedback';

function Feedback() {
    return (
        <div className='Feedback'>
           <Navbar/>
           <div className='table-feedback'> 
           <Table/>
           </div>
           <Footer/>
        </div>
    );
}

export default Feedback;
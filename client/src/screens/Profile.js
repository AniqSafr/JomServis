import React from 'react';
import Navbar from '../components/HomePage/Navbar';
import Dashboard from '../components/Profile/Dashboard';
import Table from '../components/Feedback/tableFeedback';

function Profile() {
    return (
        <div className='Home'>
           <Navbar/>
           <div className='pb-3'> 
           <Dashboard/>
           </div>
           <div className='pb-3'> 
           <Table/>
           </div>
        </div>
    );
}

export default Profile;
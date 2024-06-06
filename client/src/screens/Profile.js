import React from 'react';
import Navbar from '../components/HomePage/Navbar';
import Dashboard from '../components/Profile/Dashboard';

function Profile() {
    return (
        <div className='Home'>
           <Navbar/>
           <div className='pb-3'> 
           <Dashboard/>
           </div>
        </div>
    );
}

export default Profile;
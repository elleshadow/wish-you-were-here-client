import React, { useState } from 'react';
import '../styles/Dashboard.css';

function Dashboard({ userId }) {
    
    return (
        <section>
            <h1 className='large'>{`Hello ${userId}!`}</h1>
        </section>
    )
}

export default Dashboard;
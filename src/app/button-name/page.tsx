'use client'
import React from 'react';

//http://localhost:3000/button-name
const Page = () => {
    return (
        <div>
            <button role="button" onClick={() => console.log('CLICKED')}>Click me</button>
        </div>
    );
};   

export default Page;
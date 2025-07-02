'use client'
import React from 'react'

//http://localhost:3000/dlitem
const Page = () => {
    return (
        <div>
            <div id="Valid">
                <dl>
                    <dt>Car</dt>
                    <dd>Tesla</dd>
                    <dt>Truck</dt>
                    <dd>Ford</dd>
                </dl>
            </div>
            <div id="Invalid">
                <dt>Type</dt>
                <dd>Definition</dd>
                <dt>Lonely Type</dt>
            </div>
        </div>
    )
}

export default Page

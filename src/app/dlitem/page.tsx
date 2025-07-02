'use client'
import React from 'react'

//http://localhost:3000/dlitem
const Page = () => {
    return (
        <div>
            <h2>Valid</h2>
            <div>
                <dl>
                    <dt>Car</dt>
                    <dd>Tesla</dd>
                    <dt>Truck</dt>
                    <dd>Ford</dd>
                </dl>
            </div>
            <h2>Invalid</h2>
            <div>
                <h2>Case 1: Basic Stray elements</h2>
                <div>
                    <dt>Type</dt>
                    <dd>Definition</dd>
                    <dt>Lonely Type</dt>
                </div>
                <h2>Case 2: Invalid Element</h2>
                <div>
                    <dt>Type</dt>
                    <dd>Definition</dd>
                    <dt>Lonely Type</dt>
                    <button>Hello</button>
                </div>
                <h2>Case 3: Should be 2 separate DL's</h2>
                <div>
                    <dt>Type 1</dt>
                    <dd>Definition 1</dd>
                    <button>Hello</button>
                    <dt>Type 2</dt>
                    <dd>Definition 2</dd>
                </div>
            </div>
        </div>
    )
}

export default Page

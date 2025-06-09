'use client'
import React from 'react'
import Import from './import'

//http://localhost:3000/region
const Page = () => {
    return (
        <div>
            <div>
                <div role="main">
                    Main Role Div
                </div>
                <div id="1">
                    <div>
                        <div>
                            <div>
                                depth testing
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    Comment Testing
                </div> */}
                <div id="2">
                    Lorum Ipsum
                </div>
                <div id="3">
                    another one
                </div>
            </div>
            <div>
                Testing
            </div>
            <Import />
        </div>
    )
}

export default Page

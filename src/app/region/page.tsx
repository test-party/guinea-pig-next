'use client'
import React from 'react';

//http://localhost:3000/region
const Page = () => {
    return (
        <body>
            <div>
                <div role="main">
                    Main Role Div
                </div>
                <a href='https://www.google.com'></a>
                <div id='1'>
                    <div>
                        <div>
                            <div>
                                depth testing
                            </div>
                        </div>
                    </div>
                </div>
                <div id='2'>
                    Lorum Ipsum
                </div>
                <div id='3'>
                    another one
                </div>
            </div>
            {/* 
            // TODO: This case of multiple top level divs is NOT handled.
            <div>
                Testing
            </div> 
            */}
        </body>
    );
};

export default Page;
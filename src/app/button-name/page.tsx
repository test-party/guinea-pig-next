'use client'
import React from 'react'

//http://localhost:3000/button-name
const Page = () => {
    return (
<div>
    <div id="aria-deprecated-role">
             <h2>Aria-deprecated-role</h2>
                <p>Deprecated roles should not be used</p>
                <div className="test-case-container">
                    <h6>Div with depracted role "directory" 🚫</h6>
                    <div role="directory">
                        <p>Page content example</p>
                    </div>
                </div>
            </div>
  <p>
                click below to subscribe!

                
            </p>
     <button role="button">

        
     </button>
                         </div>
    )
}

export default Page

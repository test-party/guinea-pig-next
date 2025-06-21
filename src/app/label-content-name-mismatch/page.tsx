//http://localhost:3000/label-content-name-mismatch
'use client'
import React from 'react'

const Page = () => {
    return (
        <div>
            <h1>Label Content Name Mismatch Examples</h1>
            
            <section>
                <h2>❌ Bad Examples - Will trigger axe-core violations</h2>
                
                <div style={{ marginBottom: '20px' }}>
                    <h3>Button with mismatched label and content</h3>
                    <button aria-label="Save document">Submit</button>
                    <p>The aria-label says "Save document" but the visible text is "Submit"</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3>Link with mismatched label and content</h3>
                    <a href="#" aria-label="Go to homepage">Contact Us</a>
                    <p>The aria-label says "Go to homepage" but the visible text is "Contact Us"</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3>Input with mismatched label</h3>
                    <label htmlFor="email-input">Email Address</label>
                    <input id="email-input" type="email" aria-label="Username field" />
                    <p>The label says "Email Address" but aria-label says "Username field"</p>
                </div>
            </section>

            <section>
                <h2>✅ Good Examples - Will pass axe-core validation</h2>
                
                <div style={{ marginBottom: '20px' }}>
                    <h3>Button with matching label and content</h3>
                    <button aria-label="Save document">Save document</button>
                    <p>The aria-label matches the visible text</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3>Button with descriptive aria-label that includes visible text</h3>
                    <button aria-label="Submit form to save changes">Submit</button>
                    <p>The aria-label includes the visible text "Submit" and adds context</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3>Link without conflicting aria-label</h3>
                    <a href="#">Contact Us</a>
                    <p>No aria-label, so the visible text is used as the accessible name</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3>Input with consistent labeling</h3>
                    <label htmlFor="email-input-good">Email Address</label>
                    <input id="email-input-good" type="email" />
                    <p>Uses the label element without conflicting aria-label</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3>Button with icon and matching aria-label</h3>
                    <button aria-label="Delete item">🗑️ Delete</button>
                    <p>The aria-label matches the action described by the visible text</p>
                </div>
            </section>
        </div>
    )
}

export default Page
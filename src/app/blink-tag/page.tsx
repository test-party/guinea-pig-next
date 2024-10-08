import React from 'react';

// Adding the blink tag to the JSX.IntrinsicElements interface
declare global {
    namespace JSX {
        interface IntrinsicElements {
            blink: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

const Page = () => {
    return (
        <div>
            <blink className="blinking" style={{ color: 'red' }}>This is a blinking text with attributes</blink>
            <blink>This is a blinking text with <span>bold</span> content</blink>
            <blink>This is a blinking text with <strong>bold</strong> content</blink>
            <blink>This is a blinking text with content</blink>
            <div>
                <p>This is a paragraph with a <blink>blinking text</blink> inside it.</p>
            </div>
        </div>
    );
};   

export default Page;
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
            <blink>This is a blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
            <blink>This is another blinking text</blink>
        </div>
    );
};

export default Page;
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
        (<div
            component-id="1f60cec4-9ee1-46a3-9edf-fa8c32e9df2c"
            testparty-id={crypto.randomUUID()}>
            <blink
                className="blinking"
                style={{ color: 'red' }}
                component-id="8bb5e862-2776-4248-9d71-231749815d4d"
                testparty-id={crypto.randomUUID()}>This is a blinking text with attributes</blink>
            <blink
                component-id="94d0bff7-e50a-4cda-8208-b3e538a240ed"
                testparty-id={crypto.randomUUID()}>This is a blinking text with <span
                component-id="4d23e2c4-8544-464f-8b91-7bfa9fafdf14"
                testparty-id={crypto.randomUUID()}>bold</span> content</blink>
            <blink
                component-id="e681e32d-efa3-47fb-a023-10a90e1693a8"
                testparty-id={crypto.randomUUID()}>This is a blinking text with <strong
                component-id="9d745771-3ddb-4c2a-bf36-d813f5c5534a"
                testparty-id={crypto.randomUUID()}>bold</strong> content</blink>
            <blink
                component-id="bfd24870-dea8-4aa2-950f-28f191b8bbba"
                testparty-id={crypto.randomUUID()}>This is a blinking text with content</blink>
            <div
                component-id="ee819972-8f6a-4e84-80bc-c439269700e7"
                testparty-id={crypto.randomUUID()}>
                <p
                    component-id="5803c1b5-6845-48f2-a5f8-2567897ac27a"
                    testparty-id={crypto.randomUUID()}>This is a paragraph with a <blink
                    component-id="f8bfd8ae-82c6-4315-b51f-a3518dab490b"
                    testparty-id={crypto.randomUUID()}>blinking text</blink> inside it.</p>
            </div>
            <blink
                component-id="3dfd9795-fb74-4a3e-a647-ef3f1872c81f"
                testparty-id={crypto.randomUUID()}>This is a blinking text with a <blink
                component-id="bac55306-af37-4e68-ac2a-ec2f8f8ae48f"
                testparty-id={crypto.randomUUID()}>blinking text</blink> inside it.</blink>
        </div>)
    );
};   

export default Page;
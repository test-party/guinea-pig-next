import React from 'react'

const Page = () => {
    return (
        <div>
            <span className="blinking" style={{ color: 'red', animation: 'blink 2s linear infinite' }}>This is a blinking text with attributes</span>
            <span style={{ animation: 'blink 2s linear infinite' }}>This is a blinking text with <span>bold</span> content</span>
            <span style={{ animation: 'blink 2s linear infinite' }}>This is a blinking text with <strong>bold</strong> content</span>
            <span style={{ animation: 'blink 2s linear infinite' }}>This is a blinking text with content</span>
            <div>
                <p>This is a paragraph with a <span style={{ animation: 'blink 2s linear infinite' }}>blinking text</span> inside it.</p>
            </div>
            <span style={{ animation: 'blink 2s linear infinite' }}>This is a blinking text with a <span style={{ animation: 'blink 2s linear infinite' }}>blinking text</span> inside it.</span>
            <style jsx>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
        </div>
    )
}

export default Page
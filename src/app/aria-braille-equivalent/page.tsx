//http://localhost:3000/aria-braille-equivalent
import React from 'react';

export default function Page() {
    return (
        <div>
            <h1>aria-braille-equivalent Test Cases</h1>

            <h2>Passing Cases</h2>

            {/* Pass: aria-braillelabel with aria-label */}
            <button aria-label="Submit" aria-braillelabel="Sub">Submit</button>

            {/* Pass: aria-braillelabel with aria-labelledby */}
            <div>
                <span id="label1">Delete</span>
                <button aria-labelledby="label1" aria-braillelabel="Del">Delete</button>
            </div>

            {/* Pass: aria-brailleroledescription with aria-roledescription */}
            <div role="button" aria-roledescription="toggle switch" aria-brailleroledescription="switch">Toggle</div>

            <h2>Failing Cases</h2>

            {/* Fail: aria-braillelabel without aria-label/aria-labelledby */}
            <button aria-braillelabel="Save"></button>

            {/* Fail: aria-brailleroledescription without aria-roledescription */}
            <div role="button" aria-brailleroledescription="btn"></div>

            {/* Fail: both braille attributes without standard counterparts */}
            <button aria-braillelabel="Edit" aria-brailleroledescription="btn"></button>
        </div>
    );
}
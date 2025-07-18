//http://localhost:3000/aria-braille-equivalent
export default function Page() {
    return (
        <div>
            <h1>ARIA Braille Equivalent Test</h1>

            {/* Pass: aria-braillelabel with aria-label */}
            <button aria-label="Submit" aria-braillelabel="Sub">Submit</button>

            {/* Pass: aria-brailleroledescription with aria-roledescription */}
            <div role="article" 
                 aria-labelledby="slideheading"
                 aria-roledescription="slide"
                 aria-brailleroledescription="sld">
                <h2 id="slideheading">My vacation in Rome</h2>
            </div>

            {/* Violation: aria-braillelabel without accessible name */}
            <img alt="" aria-braillelabel="****" src="next.svg" />

            {/* Violation: aria-brailleroledescription without aria-roledescription */}
            <div role="article" 
                 aria-labelledby="slideheading2"
                 aria-brailleroledescription="slide">
                <h2 id="slideheading2">My vacation in Paris</h2>
            </div>
        </div>
    );
}
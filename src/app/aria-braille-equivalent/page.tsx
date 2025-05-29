//http://localhost:3000/aria-braille-equivalent
export default function Page() {
    return (
        <div>
            <h1>Test Page for aria-braille-equivalent Violations</h1>

            <div id="pass1" aria-braillelabel="hello">Hello</div>
            <div id="pass2" aria-braillelabel=""></div>
            <div id="incomplete1" aria-braillelabel="hello"></div>

            <div
                id="pass3"
                aria-roledescription="table of contents"
                aria-brailleroledescription=""
            ></div>

            <div
                id="pass4"
                aria-roledescription="table of contents"
                aria-brailleroledescription="table of contents"
            ></div>

            <div
                id="pass5"
                aria-roledescription=""
                aria-brailleroledescription=""
            ></div>

            <div
                id="incomplete2"
                aria-roledescription=""
                aria-brailleroledescription="table of contents"
            ></div>
        </div>
    );
}
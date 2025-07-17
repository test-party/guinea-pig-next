//http://localhost:3000/aria-braille-equivalent
export default function Page() {
    return (
        <div>
            <h1>Test Page for aria-braille-equivalent Violations</h1>

            <button id="pass1" aria-braillelabel="hello">Hello</button>
            <button id="pass2" aria-braillelabel=""></button>
            <button id="incomplete1" aria-braillelabel="hello"></button>

            <aside
                id="pass3"
                aria-roledescription="table of contents"
                aria-brailleroledescription=""
            ></aside>

            <aside
                id="pass4"
                aria-roledescription="table of contents"
                aria-brailleroledescription="table of contents"
            ></aside>

            <aside
                id="pass5"
                aria-roledescription=""
                aria-brailleroledescription=""
            ></aside>

            <aside
                id="incomplete2"
                aria-roledescription=""
                aria-brailleroledescription="table of contents"
            ></aside>
        </div>
    );
}
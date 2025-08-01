//http://localhost:3000/aria-braille-equivalent
export default function Page() {
    return (
        <div>
            <button aria-label="Submit" aria-braillelabel="Sub">Submit</button>
            <img alt="some alt text description" aria-braillelabel="a meaninful passing braille label" src="next.svg" />
            <div role="article"
                aria-labelledby="slideheading"
                aria-roledescription="slide"
                aria-brailleroledescription="slide">
                <h2 id="slideheading">My vacation in Rome</h2>
            </div>

            <img alt="" aria-braillelabel="a bright blue sky" src="next.svg" />
            <div role="article"
                aria-labelledby="slideheading2"
                aria-brailleroledescription="slide">
                <h2 id="slideheading2">My vacation in Paris</h2>
            </div>
        </div>
    )
}

//http://localhost:3000/testparty-custom-rules
'use client'

export default function All() {
    const handleFocus = (e: any) => {
        e.target.blur()
    }
    return (
        <main>
            <h1>Testing TestParty Custom Rules</h1>

            <h2>Neurodiversity Rules</h2>
            <div>
                <div>
                    <h3>Abbreviations</h3>
                    <p>The FBI is an american agency</p>
                    <p>The FMI is an american agency</p>
                    <p>This text is working well , no remediations needed </p>
                </div>

                <div>
                    <h3>Language of Parts</h3>
                    <p>This text is mostly in english,mas essa parte é em portugues, but the rest still in english</p>
                    <p>This text is working well , no remediations needed </p>
                </div>

                <div>
                    <h3>Pronunciation</h3>
                    <p>I read the book today, it's amazing!</p>
                    <p>This text is working well , no remediations needed </p>
                </div>

                <div>
                    <h3>Reading Level</h3>
                    <p>The ephemerality of hermeneutic ontology, intertwining with metacognitive dialectics, imposes a transcendent exegesis whose polysemy radiates through hermetic intertextuality, challenging immediate cognition and demanding a sophisticated semiotic decryption.</p>
                    <p>This text is working well , no remediations needed </p>
                </div>

                <div>
                    <h3>Unusual Words</h3>
                    <p>He obfuscated it, now i can't see</p>
                    <p>His walk through the verdant garden surprised the visitors</p>
                    <p>This text is working well , no remediations needed </p>
                </div>
            </div>
            

            <h2>Other Rules</h2>
            <div>
                <div>
                    <h3>Focus Visible</h3>
                    <div className="flex flex-col space-y-4 w-100">
                        <a id="link-one" className="w-fit focus:outline-none">Link One</a>
                        <a href="/one" className="w-fit">Link Two</a>

                        <button onFocus={handleFocus} id="button-one" className="text-left w-fit">Button One</button>
                        <button className="text-left w-fit">Button Two</button>
                        <div className="bg-gray-200 h-12 flex items-center">
                            <button id="button-three" className="text-left w-fit focus:outline-gray-400">Button Three</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Aria Braille Equivalent</h3>
                    <button aria-label="Submit" aria-braillelabel="Sub">Submit</button>
                    <img alt="some alt text description" aria-braillelabel="a meaninful passing braille label" src="next.svg" />
                    <div role="article"
                        aria-labelledby="slideheading"
                        aria-roledescription="slide"
                        aria-brailleroledescription="slide">
                        <h3 id="slideheading">My vacation in Rome</h3>
                    </div>

                    <img alt="" aria-braillelabel="a bright blue sky" src="next.svg" />
                    <div role="article"
                        aria-labelledby="slideheading2"
                        aria-brailleroledescription="slide">
                        <h4 id="slideheading2">My vacation in Paris</h4>
                    </div>
                </div>
            </div>
        </main>
    )
}

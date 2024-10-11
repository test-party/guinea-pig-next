"use client"

export default function onInput() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const selectedMirror = new FormData(form).get('mirror') as string
        const mirrorSite = `https://${selectedMirror}`
        window.open(mirrorSite)
    }

    return (
        <div>
            <h1>WCAG 3.2.2 (On Input) Compliance Test</h1>

            <br />

            <h2>Failure Example</h2>
            <p>This form will open a new window when a radio button is selected.</p>
            <form name="mirror_form_failure" id="mirror_form_failure" action="" method="get">
                <p>Please select a mirror download site:</p>
                <p>
                <input type="radio" onClick={() => window.open('https://www.example.com')} name="mirror" id="mirror_example" value="www.example.com" />
                <label htmlFor="mirror_example">Example</label><br />
                <input type="radio" onClick={() => window.open('https://www.wikipedia.org')} name="mirror" id="mirror_wikipedia" value="www.wikipedia.org" />
                <label htmlFor="mirror_wikipedia">Wikipedia</label><br />
                <input type="radio" onClick={() => window.open('https://www.github.com')} name="mirror" id="mirror_github" value="www.github.com" />
                <label htmlFor="mirror_github">GitHub</label><br />
                <input type="radio" onClick={() => window.open('https://www.stackoverflow.com')} name="mirror" id="mirror_stackoverflow" value="www.stackoverflow.com" />
                <label htmlFor="mirror_stackoverflow">Stack Overflow</label><br />
                </p>
            </form>

            <br />

            <h2>Compliant Example</h2>
            <p>This form will open a new window only when the user clicks the "Submit" button.</p>
            <form name="mirror_form_compliant" id="mirror_form_compliant" action="" method="get" onSubmit={handleSubmit}>
                <p>Please select a mirror download site:</p>
                <p>
                <input type="radio" name="mirror" id="mirror_example_compliant" value="www.example.com" />
                <label htmlFor="mirror_example_compliant">Example</label><br />
                <input type="radio" name="mirror" id="mirror_wikipedia_compliant" value="www.wikipedia.org" />
                <label htmlFor="mirror_wikipedia_compliant">Wikipedia</label><br />
                <input type="radio" name="mirror" id="mirror_github_compliant" value="www.github.com" />
                <label htmlFor="mirror_github_compliant">GitHub</label><br />
                <input type="radio" name="mirror" id="mirror_stackoverflow_compliant" value="www.stackoverflow.com" />
                <label htmlFor="mirror_stackoverflow_compliant">Stack Overflow</label><br />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
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
        (<div
            component-id="16a526a4-e75f-46f6-a385-f077a185fb9f"
            testparty-id={crypto.randomUUID()}>
            <h1
                component-id="e4bef57f-35e8-4350-bf25-277b72ce850d"
                testparty-id={crypto.randomUUID()}>WCAG 3.2.2 (On Input) Compliance Test</h1>
            <br
                component-id="df90fbea-d021-4e54-8b8d-0e0d7daafcc8"
                testparty-id={crypto.randomUUID()} />
            <h2
                component-id="1e6bb762-0cda-4e40-be49-13d54ed52bac"
                testparty-id={crypto.randomUUID()}>Failure Example</h2>
            <p
                component-id="a2a1386b-ec69-4841-aa1e-ef6038a59399"
                testparty-id={crypto.randomUUID()}>This form will open a new window when a radio button is selected.</p>
            <form
                name="mirror_form_failure"
                id="mirror_form_failure"
                action=""
                method="get"
                component-id="c2a2f95c-dfda-485d-b712-29e9d20daef9"
                testparty-id={crypto.randomUUID()}>
                <p
                    component-id="274b673b-4590-4a4e-acd9-747696d89939"
                    testparty-id={crypto.randomUUID()}>Please select a mirror download site:</p>
                <p
                    component-id="3f72b97c-a2bb-40dd-9946-c98411aadaf9"
                    testparty-id={crypto.randomUUID()}>
                <input
                    type="radio"
                    onClick={() => window.open('https://www.example.com')}
                    name="mirror"
                    id="mirror_example"
                    value="www.example.com"
                    component-id="63acca4d-8d11-4524-aaad-7b1f52f6ae17"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_example"
                    component-id="10136a02-f968-4708-ac47-09a9638878a0"
                    testparty-id={crypto.randomUUID()}>Example</label><br
                    component-id="c99db309-70fa-475b-8343-db9f142b1bd8"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    onClick={() => window.open('https://www.wikipedia.org')}
                    name="mirror"
                    id="mirror_wikipedia"
                    value="www.wikipedia.org"
                    component-id="16ad36ce-a28f-41eb-881a-afc4702b2ace"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_wikipedia"
                    component-id="15ccc0db-da1a-4c1c-a84f-6b095364a84e"
                    testparty-id={crypto.randomUUID()}>Wikipedia</label><br
                    component-id="1438d795-bfee-4815-a5ee-73a231353349"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    onClick={() => window.open('https://www.github.com')}
                    name="mirror"
                    id="mirror_github"
                    value="www.github.com"
                    component-id="ef875716-ed51-4f58-aa32-11d46a33f1a3"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_github"
                    component-id="08326e2e-fe5c-4c26-9c3f-c4683e096683"
                    testparty-id={crypto.randomUUID()}>GitHub</label><br
                    component-id="1ffda5c3-c7ee-4e59-bade-576116991edc"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    onClick={() => window.open('https://www.stackoverflow.com')}
                    name="mirror"
                    id="mirror_stackoverflow"
                    value="www.stackoverflow.com"
                    component-id="a953a26c-d868-4425-b387-318ea2864804"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_stackoverflow"
                    component-id="9722adf3-b95d-49d8-aad2-f866661d9bd4"
                    testparty-id={crypto.randomUUID()}>Stack Overflow</label><br
                    component-id="ed8eaa75-4864-45c3-a0e8-42501a528a2a"
                    testparty-id={crypto.randomUUID()} />
                </p>
            </form>
            <br
                component-id="f05e4434-aaec-402b-8c30-f9b7c9f9e77e"
                testparty-id={crypto.randomUUID()} />
            <h2
                component-id="567ca7df-041b-429e-8e35-ee1355b1773e"
                testparty-id={crypto.randomUUID()}>Compliant Example</h2>
            <p
                component-id="39b7d5ed-aee4-4117-9af8-c945b97c0692"
                testparty-id={crypto.randomUUID()}>This form will open a new window only when the user clicks the "Submit" button.</p>
            <form
                name="mirror_form_compliant"
                id="mirror_form_compliant"
                action=""
                method="get"
                onSubmit={handleSubmit}
                component-id="bd853664-7815-4600-873a-3790faf2982a"
                testparty-id={crypto.randomUUID()}>
                <p
                    component-id="0445dad1-bbd7-4dd1-a608-a1d0e630a6e4"
                    testparty-id={crypto.randomUUID()}>Please select a mirror download site:</p>
                <p
                    component-id="dd4a6bbc-9bc3-44c2-a11c-2b15f650cb90"
                    testparty-id={crypto.randomUUID()}>
                <input
                    type="radio"
                    name="mirror"
                    id="mirror_example_compliant"
                    value="www.example.com"
                    component-id="999fa42f-766f-433c-af04-2861611e0d90"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_example_compliant"
                    component-id="72669b56-6ebf-4fca-82e2-18f612cfa593"
                    testparty-id={crypto.randomUUID()}>Example</label><br
                    component-id="c150efe3-220c-428c-a12d-943def329aad"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    name="mirror"
                    id="mirror_wikipedia_compliant"
                    value="www.wikipedia.org"
                    component-id="2101e847-6529-43ad-b0d0-bb5e9c4aef91"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_wikipedia_compliant"
                    component-id="5b7840a7-fe1b-467b-ab76-fcc32c4301fa"
                    testparty-id={crypto.randomUUID()}>Wikipedia</label><br
                    component-id="d8fdc241-4a4e-4054-954d-e2a90edb752c"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    name="mirror"
                    id="mirror_github_compliant"
                    value="www.github.com"
                    component-id="3bead966-fafb-4da4-85bf-4556759707de"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_github_compliant"
                    component-id="88ed6e05-908b-4b1f-9c61-08b0c8797c41"
                    testparty-id={crypto.randomUUID()}>GitHub</label><br
                    component-id="bfaef52c-2f1a-4698-9e7a-ec0b304bc5ef"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    name="mirror"
                    id="mirror_stackoverflow_compliant"
                    value="www.stackoverflow.com"
                    component-id="ed8e39fa-3345-481a-ae99-c5c477c22040"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_stackoverflow_compliant"
                    component-id="527a90b5-71cd-4392-8b08-5bee443d4156"
                    testparty-id={crypto.randomUUID()}>Stack Overflow</label><br
                    component-id="15388b2e-73a8-42a4-a4e5-b2a8a609106a"
                    testparty-id={crypto.randomUUID()} />
                </p>
                <button
                    type="submit"
                    component-id="cb225540-3c41-4952-be36-7bb2ddd09f76"
                    testparty-id={crypto.randomUUID()}>Submit</button>
            </form>
        </div>)
    );
}
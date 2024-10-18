"use client"

export default function onInput() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        alert('Form submitted!')
    }

    return (
        (<div
            component-id="b7fef694-0ff8-4661-8490-b7c7a9779e42"
            testparty-id={crypto.randomUUID()}>
            <h1
                component-id="8fc23ac3-d504-463e-8550-d4e300a9f2d8"
                testparty-id={crypto.randomUUID()}>Example 1: WCAG 3.2.2 (On Input) Compliance Test</h1>
            <br
                component-id="d253ffb8-630c-4aef-ad7e-e4c101496940"
                testparty-id={crypto.randomUUID()} />
            <h2
                component-id="8c5f9876-5cb5-4718-afc4-90eea484f865"
                testparty-id={crypto.randomUUID()}>Failure Example</h2>
            <p
                component-id="df85313d-fd4d-4407-b1ea-db72b7f4e5da"
                testparty-id={crypto.randomUUID()}>This form will submit when the user leaves the last field.</p>
            <form
                method="get"
                id="form1"
                onSubmit={handleSubmit}
                component-id="107f7e0a-411e-4319-8dc3-a6e5f4daf858"
                testparty-id={crypto.randomUUID()}>
                <input
                    type="text"
                    name="text1"
                    size={3}
                    maxLength={3}
                    component-id="f45e726c-f270-4049-b5e3-d72328df3197"
                    testparty-id={crypto.randomUUID()} /> - 
                <input
                    type="text"
                    name="text2"
                    size={3}
                    maxLength={3}
                    component-id="697ecf69-27cf-40f2-bd17-1f8a9bbc0a1b"
                    testparty-id={crypto.randomUUID()} /> - 
                <input
                    type="text"
                    name="text3"
                    size={4}
                    maxLength={4}
                    onChange={() => (document.getElementById('form1') as HTMLFormElement).submit()}
                    component-id="1f8d05d1-5d99-4ca7-b9d3-07bfe1a3db41"
                    testparty-id={crypto.randomUUID()} />
            </form>
            <br
                component-id="034dc4da-4c30-43e4-949e-15779d318e53"
                testparty-id={crypto.randomUUID()} />
            <h2
                component-id="f7ab9706-ebab-4abd-9877-23691e414e28"
                testparty-id={crypto.randomUUID()}>Compliant Example</h2>
            <p
                component-id="6ea31095-9d77-4acf-a47a-fdbc050cec4c"
                testparty-id={crypto.randomUUID()}>This form will submit only when the user clicks the "Submit" button.</p>
            <form
                method="get"
                id="form1"
                onSubmit={handleSubmit}
                component-id="03e8ae08-543f-4e44-a51b-5b4165f9e63c"
                testparty-id={crypto.randomUUID()}>
                <input
                    type="text"
                    name="text1"
                    size={3}
                    maxLength={3}
                    component-id="4c721ab7-1683-45da-bb6e-3b4ca61aa32f"
                    testparty-id={crypto.randomUUID()} /> - 
                <input
                    type="text"
                    name="text2"
                    size={3}
                    maxLength={3}
                    component-id="287b3f8b-3bac-4884-836b-f178c721957a"
                    testparty-id={crypto.randomUUID()} /> - 
                <input
                    type="text"
                    name="text3"
                    size={4}
                    maxLength={4}
                    component-id="d9422475-53d4-49f8-b841-36576cab3f2e"
                    testparty-id={crypto.randomUUID()} />
                <button
                    type="submit"
                    component-id="e3e19ff3-b711-4e6a-abbc-84816c46d710"
                    testparty-id={crypto.randomUUID()}>Submit</button>
            </form>
        </div>)
    );
}
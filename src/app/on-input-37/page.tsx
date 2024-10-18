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
            component-id="f69d9c22-1714-43a8-a56f-9f0d38126bb6"
            testparty-id={crypto.randomUUID()}>
            <h1
                component-id="686a382c-d2dc-4a75-8fc4-f071a3874a52"
                testparty-id={crypto.randomUUID()}>WCAG 3.2.2 (On Input) Compliance Test</h1>
            <br
                component-id="fa8edbbe-8844-408f-a522-324b91ad9801"
                testparty-id={crypto.randomUUID()} />
            <h2
                component-id="e0075b28-59e2-445e-a89a-6851e644b5dc"
                testparty-id={crypto.randomUUID()}>Failure Example</h2>
            <p
                component-id="8f3f8791-cf4b-4000-970b-cd9e6ff42fc1"
                testparty-id={crypto.randomUUID()}>This form will open a new window when a radio button is selected.</p>
            <form
                name="mirror_form_failure"
                id="mirror_form_failure"
                action=""
                method="get"
                component-id="b16fb34e-5283-4049-a320-d92c94f50399"
                testparty-id={crypto.randomUUID()}>
                <p
                    component-id="59180af0-0f78-4fa7-82dc-8cf61fc7fc21"
                    testparty-id={crypto.randomUUID()}>Please select a mirror download site:</p>
                <p
                    component-id="5f750e2d-7d57-4c0a-b0b3-6b4d35f04419"
                    testparty-id={crypto.randomUUID()}>
                <input
                    type="radio"
                    onClick={() => window.open('https://www.example.com')}
                    name="mirror"
                    id="mirror_example"
                    value="www.example.com"
                    component-id="75af1f53-27eb-4040-95f2-fa4bba3912f1"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_example"
                    component-id="ec32b38b-d079-403e-bee3-1940560c2cc7"
                    testparty-id={crypto.randomUUID()}>Example</label><br
                    component-id="4e0af9a7-efb9-4d0d-91e9-38eee5e8e26c"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    onClick={() => window.open('https://www.wikipedia.org')}
                    name="mirror"
                    id="mirror_wikipedia"
                    value="www.wikipedia.org"
                    component-id="3e5893e9-d260-4d18-99bf-ad1b2b5c65ac"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_wikipedia"
                    component-id="dcbfc303-c14d-4739-951d-81be4a000cf4"
                    testparty-id={crypto.randomUUID()}>Wikipedia</label><br
                    component-id="c7eaefc2-a17f-4466-940a-3db4673c09af"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    onClick={() => window.open('https://www.github.com')}
                    name="mirror"
                    id="mirror_github"
                    value="www.github.com"
                    component-id="fc31cce4-7777-4273-8a17-f9a826172238"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_github"
                    component-id="d1047c23-14c4-4a82-8583-024d101a23e2"
                    testparty-id={crypto.randomUUID()}>GitHub</label><br
                    component-id="6555a5d0-c478-43ac-95b0-0d4afcd53d13"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    onClick={() => window.open('https://www.stackoverflow.com')}
                    name="mirror"
                    id="mirror_stackoverflow"
                    value="www.stackoverflow.com"
                    component-id="0e7dee1b-434b-4b73-ab42-152b38ee5a3e"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_stackoverflow"
                    component-id="11a9884a-1a1c-43c4-a2ab-a9b08b247501"
                    testparty-id={crypto.randomUUID()}>Stack Overflow</label><br
                    component-id="e43924eb-6d5a-4bbe-adf7-b9be0461005d"
                    testparty-id={crypto.randomUUID()} />
                </p>
            </form>
            <br
                component-id="824918fb-e0cc-491b-83de-2ae201c586bb"
                testparty-id={crypto.randomUUID()} />
            <h2
                component-id="d061a502-73e5-46ef-ae1b-a7497f54dfea"
                testparty-id={crypto.randomUUID()}>Compliant Example</h2>
            <p
                component-id="cad5a314-66b0-413e-9552-01de5ce70d70"
                testparty-id={crypto.randomUUID()}>This form will open a new window only when the user clicks the "Submit" button.</p>
            <form
                name="mirror_form_compliant"
                id="mirror_form_compliant"
                action=""
                method="get"
                onSubmit={handleSubmit}
                component-id="7182dbb4-3ef1-4a39-99f4-66e9cee17180"
                testparty-id={crypto.randomUUID()}>
                <p
                    component-id="6e5df758-ee2d-4ee6-9c33-3b83ee9e2bfa"
                    testparty-id={crypto.randomUUID()}>Please select a mirror download site:</p>
                <p
                    component-id="f287cf9a-5189-4cf4-8945-bda618128a36"
                    testparty-id={crypto.randomUUID()}>
                <input
                    type="radio"
                    name="mirror"
                    id="mirror_example_compliant"
                    value="www.example.com"
                    component-id="3aa64b70-f786-4221-8a5e-c1361718705c"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_example_compliant"
                    component-id="9ccfd68e-bccb-4087-9483-c4e4573cba3b"
                    testparty-id={crypto.randomUUID()}>Example</label><br
                    component-id="6cacfcd1-76ad-4a51-bee9-48deeb8d39df"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    name="mirror"
                    id="mirror_wikipedia_compliant"
                    value="www.wikipedia.org"
                    component-id="83516777-f749-4a6a-8236-a3c36c4a1770"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_wikipedia_compliant"
                    component-id="2b95de05-a5b3-4f92-bde3-af7de9dcfd5e"
                    testparty-id={crypto.randomUUID()}>Wikipedia</label><br
                    component-id="3dc5a1c2-b8e4-4537-9376-07dfceb43911"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    name="mirror"
                    id="mirror_github_compliant"
                    value="www.github.com"
                    component-id="7ab4173c-a8f9-4869-aa84-43704ea23b1e"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_github_compliant"
                    component-id="f4edd153-adc0-4134-bc17-1c7929291761"
                    testparty-id={crypto.randomUUID()}>GitHub</label><br
                    component-id="cae4b092-f2dc-4b44-b8b0-4769e128718b"
                    testparty-id={crypto.randomUUID()} />
                <input
                    type="radio"
                    name="mirror"
                    id="mirror_stackoverflow_compliant"
                    value="www.stackoverflow.com"
                    component-id="0a386488-016f-40ac-af36-8b19215192d3"
                    testparty-id={crypto.randomUUID()} />
                <label
                    htmlFor="mirror_stackoverflow_compliant"
                    component-id="da9d93e0-05fc-419b-9766-ad15037581eb"
                    testparty-id={crypto.randomUUID()}>Stack Overflow</label><br
                    component-id="a1dbce65-4194-41be-8fcf-fcd599d1cf09"
                    testparty-id={crypto.randomUUID()} />
                </p>
                <button
                    type="submit"
                    component-id="d786cd4c-f672-4257-b375-cd1426130d05"
                    testparty-id={crypto.randomUUID()}>Submit</button>
            </form>
        </div>)
    );
}
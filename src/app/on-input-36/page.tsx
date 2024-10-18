"use client"

export default function onInput() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        alert('Form submitted!')
    }

    return (
        (<div
            component-id="93d0b609-f1b2-44d3-9e62-4957decc8253"
            testparty-id={crypto.randomUUID()}>
            <h1
                component-id="80d88a07-51da-44a5-afe0-39d54c74e2b9"
                testparty-id={crypto.randomUUID()}>Example 1: WCAG 3.2.2 (On Input) Compliance Test</h1>
            <br
                component-id="a0585649-563b-45ce-a665-df69e2671688"
                testparty-id={crypto.randomUUID()} />
            <h2
                component-id="5f796f11-1650-4b7e-b4b2-5e78db269c5b"
                testparty-id={crypto.randomUUID()}>Failure Example</h2>
            <p
                component-id="25e1d068-56e6-48cd-9eb4-a5664c88e4a4"
                testparty-id={crypto.randomUUID()}>This form will submit when the user leaves the last field.</p>
            <form
                method="get"
                id="form1"
                onSubmit={handleSubmit}
                component-id="0879e508-254a-469e-ac9a-152d292d0738"
                testparty-id={crypto.randomUUID()}>
                <input
                    type="text"
                    name="text1"
                    size={3}
                    maxLength={3}
                    component-id="690a487c-7270-4e1d-a829-93f720dc81fb"
                    testparty-id={crypto.randomUUID()} /> - 
                <input
                    type="text"
                    name="text2"
                    size={3}
                    maxLength={3}
                    component-id="4be2fdba-af5d-4555-b251-6621256a7eb3"
                    testparty-id={crypto.randomUUID()} /> - 
                <input
                    type="text"
                    name="text3"
                    size={4}
                    maxLength={4}
                    onChange={() => (document.getElementById('form1') as HTMLFormElement).submit()}
                    component-id="2ddcafca-f4da-4433-b9d4-174f7f8058e7"
                    testparty-id={crypto.randomUUID()} />
            </form>
            <br
                component-id="ec6e95bd-4772-4341-83a1-1b05e442c329"
                testparty-id={crypto.randomUUID()} />
            <h2
                component-id="0d228834-16ca-4206-a5a7-6dd00899f4bd"
                testparty-id={crypto.randomUUID()}>Compliant Example</h2>
            <p
                component-id="3a5c0e39-90f5-42f4-8141-292818044af1"
                testparty-id={crypto.randomUUID()}>This form will submit only when the user clicks the "Submit" button.</p>
            <form
                method="get"
                id="form1"
                onSubmit={handleSubmit}
                component-id="f67f31e1-89f3-4cab-9c0e-d2a5364158eb"
                testparty-id={crypto.randomUUID()}>
                <input
                    type="text"
                    name="text1"
                    size={3}
                    maxLength={3}
                    component-id="d0734414-6325-4e5e-a6e5-55525c26b438"
                    testparty-id={crypto.randomUUID()} /> - 
                <input
                    type="text"
                    name="text2"
                    size={3}
                    maxLength={3}
                    component-id="858142a7-49d4-4173-951c-5338e9d38ef6"
                    testparty-id={crypto.randomUUID()} /> - 
                <input
                    type="text"
                    name="text3"
                    size={4}
                    maxLength={4}
                    component-id="e8dd401f-089e-43f9-8fba-c6c4785e2b88"
                    testparty-id={crypto.randomUUID()} />
                <button
                    type="submit"
                    component-id="f34ac9e9-3ac6-4269-965d-6e1e32ebb725"
                    testparty-id={crypto.randomUUID()}>Submit</button>
            </form>
        </div>)
    );
}
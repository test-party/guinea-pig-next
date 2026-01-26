'use client'

export default function onInput() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        alert('Form submitted!')
    }

    return (
        <div>
            <h1>Example 1: WCAG 3.2.2 (On Input) Compliance Test</h1>

            <br />

            <h2>Failure Example</h2>
            <p>This form will submit when the user leaves the last field.</p>
            <form method="get" id="form1" onSubmit={handleSubmit}>
                <label htmlFor="text1-fail">Field 1:</label>
                <input type="text" id="text1-fail" name="text1" size={3} maxLength={3} /> -
                <label htmlFor="text2-fail">Field 2:</label>
                <input type="text" id="text2-fail" name="text2" size={3} maxLength={3} /> -
                <label htmlFor="text3-fail">Field 3:</label>
                <input type="text" id="text3-fail" name="text3" size={4} maxLength={4} onChange={() => (document.getElementById('form1') as HTMLFormElement).submit()} />
            </form>

            <br />

            <h2>Compliant Example</h2>
            <p>This form will submit only when the user clicks the &quot;Submit&quot; button.</p>
            <form method="get" id="form2" onSubmit={handleSubmit}>
                <label htmlFor="text1-pass">Field 1:</label>
                <input type="text" id="text1-pass" name="text1" size={3} maxLength={3} /> -
                <label htmlFor="text2-pass">Field 2:</label>
                <input type="text" id="text2-pass" name="text2" size={3} maxLength={3} /> -
                <label htmlFor="text3-pass">Field 3:</label>
                <input type="text" id="text3-pass" name="text3" size={4} maxLength={4} />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
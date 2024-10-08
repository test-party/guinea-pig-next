"use client"

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
                <input type="text" name="text1" size={3} maxLength={3} /> - 
                <input type="text" name="text2" size={3} maxLength={3} /> - 
                <input type="text" name="text3" size={4} maxLength={4} onChange={() => (document.getElementById('form1') as HTMLFormElement).submit()} />
            </form>

            <br />
            
            <h2>Compliant Example</h2>
            <p>This form will submit only when the user clicks the "Submit" button.</p>
            <form method="get" id="form1" onSubmit={handleSubmit}>
                <input type="text" name="text1" size={3} maxLength={3} /> - 
                <input type="text" name="text2" size={3} maxLength={3} /> - 
                <input type="text" name="text3" size={4} maxLength={4} />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
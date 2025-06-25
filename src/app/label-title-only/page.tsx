//http://localhost:3000/label-title-only
export default function Page() {
    return (
        <div>
            <h1>Label Title Only Rule - Bad Example</h1>
            <form>
                <input
                    type="text"
                    title="Enter your name"
                />
                <input
                    type="email"
                    title="Email address"
                />
                <span id="email-label">Your email</span>
                <button type="submit" title="Submit form">Submit</button>
            </form>
        </div>
    )
}

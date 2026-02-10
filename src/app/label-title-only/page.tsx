//http://localhost:3000/label-title-only
export default function Page() {
    return (
        <div>
            <h1>Label Title Only Rule - Bad Example</h1>
            <form>
                <label htmlFor="name">Enter your name</label>
                <input
                    id="name"
                    type="text"
                    title="Enter your name"
                />
                <label htmlFor="email">Email address</label>
                <input
                    id="email"
                    type="email"
                    title="Email address"
                    aria-describedby="email-label"
                />
                <span id="email-label">Your email</span>
                <button type="submit" title="Submit form">Submit</button>
            </form>
        </div>
    )
}

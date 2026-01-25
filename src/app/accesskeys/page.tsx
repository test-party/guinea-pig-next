//http://localhost:3000/accesskeys
export default function Page() {
    return (
        <div>
            <h1>Access Keys Test</h1>

            {/* Fixed: Unique accesskey values */}
            <button>Save</button>
            <button>Submit</button>

            {/* Fixed: Non-conflicting accesskeys */}
            <input type="text" placeholder="Find text" />
            <button>Refresh</button>
            <button>Help</button>

            {/* Fixed: Non-conflicting accesskeys */}
            <button>Copy</button>
            <button>Paste</button>
            <button>Cut</button>
        </div>
    )
}
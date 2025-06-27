//http://localhost:3000/accesskeys
export default function Page() {
    return (
        <div>
            <h1>Access Keys Test</h1>

            {/* Violation: Duplicate accesskey values */}
            <button accessKey="s">Save</button>
            <button accessKey="s">Submit</button>

            {/* Violation: accesskey with reserved browser shortcuts */}
            <input type="text" accessKey="f" placeholder="Find text" />
            <button accessKey="r">Refresh</button>
            <button accessKey="h">Help</button>

            {/* Violation: accesskey conflicts with standard shortcuts */}
            <button accessKey="c">Copy</button>
            <button accessKey="v">Paste</button>
            <button accessKey="x">Cut</button>
        </div>
    )
}

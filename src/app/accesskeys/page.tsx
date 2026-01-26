//http://localhost:3000/accesskeys
export default function Page() {
    return (
        <div>
            <h1>Access Keys Test</h1>

            {/* Fixed: Unique accesskey values */}
            <button accessKey="s">Save</button>
            <button accessKey="u">Submit</button>

            {/* Fixed: Non-conflicting accesskeys */}
            <input type="text" placeholder="Find text" accessKey="f" />
            <button accessKey="r">Refresh</button>
            <button accessKey="h">Help</button>

            {/* Fixed: Non-conflicting accesskeys */}
            <button accessKey="c">Copy</button>
            <button accessKey="p">Paste</button>
            <button accessKey="x">Cut</button>
        </div>
    )
}
//http://localhost:3000/accesskeys
export default function Page() {
    return (
        <div>
            <h1>Access Keys Test</h1>

            {/* Fixed: Unique accesskey values */}
            <button accessKey="s">Save</button>
            <button accessKey="u">Submit</button>

            {/* Fixed: Non-conflicting accesskeys */}
            <input type="text" accessKey="t" placeholder="Find text" />
            <button accessKey="e">Refresh</button>
            <button accessKey="p">Help</button>

            {/* Fixed: Non-conflicting accesskeys */}
            <button accessKey="o">Copy</button>
            <button accessKey="a">Paste</button>
            <button accessKey="i">Cut</button>
        </div>
    )
}
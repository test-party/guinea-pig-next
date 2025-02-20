"use client"

export default function InteractivePage() {
    const handleFocus = (e: any) => {
        e.target.blur();
    };
    return (
        <body>
            <div className="flex flex-col space-y-4 w-100">
                <a id="link-one" className="w-fit focus:outline-none">Link One</a>
                <a href="/one" className="w-fit">Link Two</a>

                <button onFocus={handleFocus} id="button-one" className="text-left w-fit">Button One</button>
                <button className="text-left w-fit">Button Two</button>
            </div>
        </body>
    )
}
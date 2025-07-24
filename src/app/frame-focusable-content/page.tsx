//http://localhost:3000/frame-focusable-content
const Page = () => {
    const buttonMarkup = '<button>Click me</button>'

    return (
        <main className="p-4">
            <iframe
                srcDoc={buttonMarkup}
                tabIndex={0}
                title="Focusable iframe"
                className="mb-4 w-full h-24 border"></iframe>
            <iframe
                srcDoc={buttonMarkup}
                tabIndex={-1}
                title="Non-focusable iframe"
                className="w-full h-24 border"></iframe>
        </main>
    )
}

export default Page

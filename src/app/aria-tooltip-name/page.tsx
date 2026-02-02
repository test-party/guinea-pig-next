const Page = () => {
    return (
        <div>
            <div role="tooltip" id="empty" aria-label="Tooltip information"></div>

            <div role="tooltip" id="alempty" aria-label="Tooltip description"></div>

            <div role="tooltip" id="albmissing" aria-labelledby="existingdiv"></div>
            <div id="existingdiv">Tooltip content</div>

            <div role="tooltip" id="albempty" aria-labelledby="emptydiv"></div>
            <div id="emptydiv">Tooltip text</div>
        </div>
    )
}

export default Page

// http://localhost:3000/aria-tooltip-name
//http://localhost:3000/aria-meter-name
export default function Page() {
    return (
        <div>
            <div role="meter" id="empty" aria-label="Progress meter"></div>
            <div role="meter" id="alempty" aria-label="Progress meter"></div>
            <div role="meter" id="albmissing" aria-label="Progress meter"></div>
            <div role="meter" id="albempty" aria-label="Progress meter"></div>
            <div id="emptydiv">Progress meter</div>
            <div role="meter" id="valid-label-meter" aria-labelledby="valid"></div>
            <div id="valid">Valid Label</div>
        </div>
    )
}
//http://localhost:3000/aria-progressbar-name
export default function Page() {
    return (
        <div>
            <div role="progressbar" id="empty" aria-label="Loading progress" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
            <div role="progressbar" id="alempty" aria-label="Loading progress" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
            <div role="progressbar" id="albmissing" aria-label="Loading progress" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
            <div role="progressbar" id="albempty" aria-labelledby="emptydiv" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
            <div id="emptydiv">Loading progress</div>
            <div role="progressbar" id="valid-label-progressbar" aria-labelledby="valid" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
            <div id="valid">Valid Label</div>
        </div>
    )
}
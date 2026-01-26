//http://localhost:3000/aria-dialog-name
export default function Page() {
    return (
        <div>
            <div role="dialog" id="empty" aria-label="Dialog"></div>
            <div role="dialog" id="alempty" aria-label="Dialog"></div>
            <div role="dialog" id="albmissing" aria-label="Dialog"></div>
            <div role="dialog" id="albempty" aria-labelledby="emptydiv"></div>
            <div id="emptydiv">Dialog Title</div>
        </div>
    )
}
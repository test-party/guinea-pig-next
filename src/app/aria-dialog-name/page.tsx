//http://localhost:3000/aria-dialog-name
export default function Page() {
    return (
        <div>
            <div role="dialog" id="empty"></div>
            <div role="dialog" id="alempty" aria-label=""></div>
            <div role="dialog" id="albmissing" aria-labelledby="nonexistent"></div>
            <div role="dialog" id="albempty" aria-labelledby="emptydiv"></div>
            <div id="emptydiv"></div>
        </div>
    )
}
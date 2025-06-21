//http://localhost:3000/tabindex
export default function Page() {
    return (
        <div>
            <h1>Tabindex Test</h1>

            {/* Violation: Positive tabindex values */}
            <button tabIndex={5}>Button with tabindex 5 (violation)</button>
            <input type="text" tabIndex={3} placeholder="Input with tabindex 3 (violation)" />
            <button tabIndex={1}>Button with tabindex 1 (violation)</button>

            {/* Violation: Very high positive tabindex */}
            <a href="#" tabIndex={999}>Link with tabindex 999 (violation)</a>

            {/* Violation: Positive tabindex on non-interactive element */}
            <div tabIndex={2}>Div with positive tabindex (violation)</div>

            {/* Violation: Positive tabindex disrupting natural flow */}
            <p>This paragraph comes first in DOM order</p>
            <button tabIndex={10}>This button has tabindex 10 (violation)</button>
            <button>This button comes after but will be focused first due to tabindex</button>

            {/* Acceptable: tabindex 0 and -1 */}
            <div tabIndex={0}>Div with tabindex 0 (acceptable)</div>
            <span tabIndex={-1}>Span with tabindex -1 (acceptable)</span>
        </div>
    )
}
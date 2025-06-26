//http://localhost:3000/aria-conditional-attr
export default function Page() {
    return (
        <div>
            <h1>ARIA Conditional Attributes Test</h1>

            {/* Violation: aria-checked on native checkbox */}
            <input type="checkbox" aria-checked="true" />
            <label>Checkbox with aria-checked (violation)</label>

            {/* Violation: aria-checked on native radio */}
            <input type="radio" aria-checked="true" name="test" />
            <label>Radio with aria-checked (violation)</label>

            {/* Violation: conditional attributes on table row without treegrid */}
            <table>
                <tbody>
                    <tr aria-posinset={1} aria-setsize={3}>
                        <td>Row with aria-posinset/setsize in table (violation)</td>
                    </tr>
                    <tr aria-expanded="false" aria-level={2}>
                        <td>Row with aria-expanded/level in table (violation)</td>
                    </tr>
                </tbody>
            </table>

            {/* Violation: conditional attributes on grid row */}
            <div role="grid">
                <div role="row" aria-posinset={2} aria-setsize={5}>
                    <div role="gridcell">Grid row with conditional attrs (violation)</div>
                </div>
            </div>
        </div>
    )
}

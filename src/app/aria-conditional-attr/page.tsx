//http://localhost:3000/aria-conditional-attr
export default function Page() {
    return (
        <div>
            <h1>ARIA Conditional Attributes Test</h1>

            {/* Fixed: removed aria-checked from native checkbox */}
            <input type="checkbox" />
            <label>Checkbox with aria-checked (violation)</label>

            {/* Fixed: removed aria-checked from native radio */}
            <input type="radio" name="test" />
            <label>Radio with aria-checked (violation)</label>

            {/* Fixed: removed conditional attributes from table row */}
            <table>
                <tbody>
                    <tr>
                        <td>Row with aria-posinset/setsize in table (violation)</td>
                    </tr>
                    <tr>
                        <td>Row with aria-expanded/level in table (violation)</td>
                    </tr>
                </tbody>
            </table>

            {/* Fixed: removed conditional attributes from grid row */}
            <div role="grid">
                <div role="row">
                    <div role="gridcell">Grid row with conditional attrs (violation)</div>
                </div>
            </div>
        </div>
    )
}
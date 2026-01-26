//http://localhost:3000/aria-hidden-focus
export default function Page() {
    return (
        <div>
            <div>
                <span>Pass Cases</span>
                <p aria-hidden="true">Some text</p>

                <div aria-hidden="true">
                    <a href="/" style={{ display: 'none' }} tabIndex={-1}>Link</a>
                </div>

                <div aria-hidden="true">
                    <button tabIndex={-1}>Some button</button>
                </div>

                <input disabled aria-hidden="true" aria-label="Passing Input Field" />

                <div aria-hidden="true">
                    <div aria-hidden="false">
                        <button tabIndex={-1}>Some button</button>
                    </div>
                </div>
            </div>
            <div>
                <span>Fail Cases</span>

                <div aria-hidden="true">
                    <a href="/" style={{ position:'absolute', top:'-999em' }} tabIndex={-1}>Link</a>
                </div>

                <div aria-hidden="true">
                    <a href="/" style={{ position:'absolute', top:'-999em' }} tabIndex={-1}>Link1</a>
                    <a href="/" style={{ position:'absolute', top:'-999em' }} tabIndex={-1}>Link2</a>
                    <a href="/" style={{ position:'absolute', top:'-999em' }} tabIndex={-1}>Link3</a>
                </div>

                <div aria-hidden="true">
                    <a href="/" style={{ position:'absolute', top:'-999em' }} tabIndex={-1}>focusable-not-tabbable</a>
                    <input aria-disabled="true" aria-label="focusable-disabled input" tabIndex={-1} />
                </div>

                <div aria-hidden="true">
                    <input aria-disabled="true" aria-label="Failing Input Field" tabIndex={-1} />
                </div>

                <div aria-hidden="true">
                    <div aria-hidden="false">
                        <button tabIndex={-1}>Some button</button>
                    </div>
                </div>

                <p aria-hidden="true">Some text</p>

                <details aria-hidden="true">
                    <summary tabIndex={-1}>Some button</summary>
                    <p>Some details</p>
                </details>
            </div>
        </div>
    )
}
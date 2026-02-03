//http://localhost:3000/aria-required-parent
export default function Page() {
    return (
        <div>
            <div role="table">
                <div role="rowgroup">
                    <div role="row">
                        <div role="cell">This Cell needs row and row&apos;s parent options</div>
                    </div>
                </div>
            </div>
            <div role="table">
                <div role="rowgroup">
                    <div role="row">
                        <div role="cell">This Cell has row, needs row&apos;s parent options</div>
                    </div>
                </div>
            </div>
            <div role="table">
                <div role="rowgroup">
                    <div role="row">
                        <div role="cell">This Cell has rowgroup, needs row in between and rowgroup&apos;s parent options</div>
                    </div>
                </div>
            </div>
            <div role="table">
                <div role="rowgroup">
                    <div role="row">
                        <div role="cell">This is Cell 1, it needs row and row&apos;s parent options</div>
                    </div>
                    <div role="row">
                        <div role="cell">This is supposed to be cell under row.  It should be remediated as part of Cell 1&apos;s remediation</div>
                    </div>
                </div>
            </div>
            <div role="table">
                <div role="caption">caption needs parent options</div>
            </div>
            <div role="tree">
                <div role="treeitem">treeitem needs parent options</div>
                <div role="treeitem">Should be treeitem</div>
            </div>
            <div role="listbox">
                <div role="option">option needs parent options</div>
                <div role="option">Should be Option</div>
            </div>
            <div role="menu">
                <div role="menuitem">menuitem needs parent options</div>
                <div role="menuitem">Should be menuitem</div>
                <div role="menuitem">Should be menuitem</div>
            </div>
            <div role="list">
                <div role="listitem">listitem needs parent list</div>
                <div role="listitem">Should be listitem</div>
                <div role="listitem">Should be listitem</div>
            </div>
            <div role="tablist">
                <div role="tab">tab needs parent tablist</div>
                <div role="tab">Should be tab</div>
                <div role="tab">Should be tab</div>
            </div>
        </div>
    )
}
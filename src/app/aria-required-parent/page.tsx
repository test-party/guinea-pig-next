//http://localhost:3000/aria-required-parent
export default function Page() {
  return (
    <body>
      <div>
        <div>
          <div role="cell">This Cell needs row and row's parent options</div>
        </div>
      </div>
      <div>
        <div role="row">
          <div role="cell">This Cell has row, needs row's parent options</div>
        </div>
      </div>
      <div>
        <div role="rowgroup">
          <div>
            <div role="cell">This Cell has rowgroup, needs row in between and rowgroup's parent options</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div role="cell">This is Cell 1, it needs row and row's parent options</div>
        </div>
        <div>
          <div>This is supposed to be cell under row.  It should be remediated as part of Cell 1's remediation</div>
        </div>
      </div>
      <div>
        <div role="caption">caption needs parent options</div>
      </div>
      <div>
        <div role="treeitem">treeitem needs parent options</div>
        <div>Should be treeitem</div>
      </div>
      <div>
        <div role="option">option needs parent options</div>
        <div>Should be Option</div>
      </div>
      <div>
        <div role="menuitem">menuitem needs parent options</div>
        <div>Should be menuitem</div>
        <div>Should be menuitem</div>
      </div>
      <div>
        <div role="listitem">listitem needs parent list</div>
        <div>Should be listitem</div>
        <div>Should be listitem</div>
      </div>
      <div>
        <div role="tab">tab needs parent tablist</div>
        <div>Should be tab</div>
        <div>Should be tab</div>
      </div>
    </body>
  );
}

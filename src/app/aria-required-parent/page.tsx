//http://localhost:3001/aria-required-parent
export default function Page() {
  return (
    <body>
      <div>
        <div>
          <div role="cell">This is a Cell</div>
        </div>
      </div>

      <div>
        <div role="row">
          <div role="cell">This is a Cell with row</div>
        </div>
      </div>

      <div>
        <div role="rowgroup">
          <div>
            <div role="cell">This is a Cell with rowgroup</div>
          </div>
        </div>
      </div>

      <div>
        <div role="listitem">Bacon</div>
        <div>Egg</div>
        <div>Cheese</div>
      </div>
    </body>
  );
}
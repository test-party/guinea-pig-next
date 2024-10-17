//http://localhost:3001/aria-required-parent
export default function Page() {
  return (
    <body>
      {/* <table>
        <tr>
        <li role="none"><div role="listitem">Bacon</div></li>  <th>Header 1</th>
        <li role="none"><div role="listitem">Egg</div></li>  <th>Header 2</th>
        <li role="none"><div role="listitem">Cheese</div></li>  <th>Header 3</th>
        </tr>
        <tr>
          <td><div role='cell'>Row 1, Cell 1</div></td>
          <td><div>Row 1, Cell 2</div></td>
          <td><div>Row 1, Cell 3</div></td>
        </tr>
        <tr> 
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
      </table> */}

      <div>
        <div role="row">
          <div role="cell">This is a Cell</div>
        </div>
      </div>

      <div>
        <div>
          <div role="cell">This is a Cell with row</div>
        </div>
      </div>

      <div>
        <div role="rowgroup">
          <div>
            <div role="cell">This is a Cell with row</div>
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
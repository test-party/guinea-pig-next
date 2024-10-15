import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3001/aria-required-parent
export default function Page() {
  return (
    <body>
      <ul id="myaccount">
        <li><div role="listitem">Bacon</div></li>
        <li><div role="listitem">Egg</div></li>
        <li><div role="listitem">Cheese</div></li>
      </ul>

      <ul id="myaccount">
        <li><div role="menuitem">Foo</div></li>
      </ul>

      <table>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
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
      </table>
    </body>
  );
}

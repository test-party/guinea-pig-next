import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-valid-attr-value
//TESTS
//Should handle a int type case
//Should handle a boolean type case
//Should handle a idref type case
export default function Page() {
  return (
    <body className={inter.className}>
      <div role="grid">
        <div role="row">
          <div role="gridcell">Cell 1</div>
        </div>
      </div>
      <button aria-disabled="true"> BUTTON 1</button>
      <div id="parent" aria-owns="child1">
        <div id="child1">Child 1</div>
      </div>
      <div role="checkbox" aria-checked="true">Item selecionado</div>
    </body>
  );
}
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
      <div role="grid" aria-colcount="a">
        <div role="row">
          <div role="gridcell">Cell 1</div>
        </div>
      </div>
      <button aria-disabled="xxxxx"> BUTTON 1</button>
      <div id="parent" aria-owns={1}>
        <div id="child1">Child 1</div>
      </div>
    </body>
  );
}
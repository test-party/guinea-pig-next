import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-valid-attr-value
export default function Page() {
  return (
    <body
      className={inter.className}>
      <input type="number" aria-valuemin="sadasdasdas"></input>
      <button role="tab" aria-selected="doaksdokoaksadsok">Tab 1</button>
      <div role="alert" aria-relevant="additidsdsons, remodsdsvals">New messages</div>
      <div aria-modal="balse">test</div>
      <div>
        <p id="more-info">This button submits your form and saves your data.</p>
        <button aria-details="wrong-id">Submit</button>
      </div>
      <div>
        <div id="submit-button">This buttons access the submition</div>
        <button aria-owns={false}>Click Me</button>
      </div>
    </body>
  );
}
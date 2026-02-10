import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-valid-attr-value
export default function Page() {
    return (
        <div
            className={inter.className}>
            <input type="number" aria-valuemin="0"></input>
            <button role="tab" aria-selected="false">Tab 1</button>
            <div role="alert" aria-relevant="additions removals">New messages</div>
            <div aria-modal="false">test</div>
            <div>
                <p id="more-info">This button submits your form and saves your data.</p>
                <button aria-describedby="more-info">Submit</button>
            </div>
            <div>
                <div id="submit-button">This buttons access the submition</div>
                <button aria-describedby="submit-button">Click Me</button>
            </div>
        </div>
    )
}

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-prohibited-attr
export default function Page() {
    return (
        <div className={inter.className}>
            <header>
            </header>
            <div>
                <h1>My Page</h1>
                <span role="text">test</span>
                <a href="#" aria-label="a">dsadasd</a>
                <span aria-label="span" role="alert">test</span>
                <p>test <br/>sdasd</p>
                <link/>
                <input type="radio" aria-checked="true"></input>
                <input type="hidden"></input>
                <input type="range" aria-valuemax={200} aria-valuemin={1}></input>
                <input type="text" list=""></input>
                <input type="xxx" list=""></input>
                <input list=""></input>
                <option aria-selected="true">test</option>
                <img alt=""></img>
                <img aria-hidden="true"></img>
            </div>
        </div>
    )
}
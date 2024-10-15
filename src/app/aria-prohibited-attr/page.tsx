import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//http://localhost:3000/aria-prohibited-attr
export default function Page() {
  return (
    <body className={inter.className}>
      <header role="generic" aria-label="header">
      </header>
      <div>
        <h1>My Page</h1>
        <span aria-label="span">test</span>
        <a aria-label="a">dsadasd</a>
        <span aria-label="span" role="alert">test</span>
        <p>test <br aria-label="br"/>sdasd</p>
        <link aria-label="link"/>
        <input type="radio" aria-checked="true"></input>
        <input type="hidden" aria-label="hidden"></input>
        <input type="range" aria-valuemax={200} aria-valuemin={1}></input>
        <input type="text" list="" aria-haspopup="true"></input>
        <input type="xxx" list="" aria-haspopup="true"></input>
        <input list="" aria-haspopup="true"></input>
        <option aria-selected="true">test</option>
        <img aria-selected="true"></img>
        <img aria-hidden="false"></img>
      </div>
    </body>
  );
}

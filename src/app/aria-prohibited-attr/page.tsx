import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//http://localhost:3000/aria-prohibited-attr
export default function Page() {
  return (
    (<body
      className={inter.className}
      component-id="7585ecd5-c19e-4917-9559-ddfa99654a54"
      testparty-id={crypto.randomUUID()}>
      <header
        role="generic"
        aria-label="header"
        component-id="5c5b57bb-8a3c-42e5-9cce-9d284d89ad18"
        testparty-id={crypto.randomUUID()}>
      </header>
      <div
        component-id="82978703-38e3-4b8e-9e93-761c0954d7d5"
        testparty-id={crypto.randomUUID()}>
        <h1
          component-id="ed079ef1-0987-4c60-a0ee-60ba2531db60"
          testparty-id={crypto.randomUUID()}>My Page</h1>
        <span
          aria-label="span"
          component-id="1ac866e8-3c2d-411e-9740-4466d5f8b7a5"
          testparty-id={crypto.randomUUID()}>test</span>
        <a
          aria-label="a"
          component-id="efd2d2dc-c05c-46e7-831c-7def43391450"
          testparty-id={crypto.randomUUID()}>dsadasd</a>
        <span
          aria-label="span"
          role="alert"
          component-id="30720fec-6eb9-4f4c-ba4f-a66cb819d5df"
          testparty-id={crypto.randomUUID()}>test</span>
        <p
          component-id="cc63ca91-0332-4045-8b50-922e889a46a5"
          testparty-id={crypto.randomUUID()}>test <br
          aria-label="br"
          component-id="524b74cc-1647-4846-b74f-82cd2f315be7"
          testparty-id={crypto.randomUUID()} />sdasd</p>
        <link
          aria-label="link"
          component-id="b2477059-b10d-43f4-b957-a03f52d7b599"
          testparty-id={crypto.randomUUID()} />
        <input
          type="radio"
          aria-checked="true"
          component-id="512bd0c1-fa6c-4afd-bc76-c7606112f3a8"
          testparty-id={crypto.randomUUID()}></input>
        <input
          type="hidden"
          aria-label="hidden"
          component-id="fb3b22b4-4226-48d2-bf57-dff6cdae4f6f"
          testparty-id={crypto.randomUUID()}></input>
        <input
          type="range"
          aria-valuemax={200}
          aria-valuemin={1}
          component-id="e3897eba-87c2-4deb-b3e2-5559a411b189"
          testparty-id={crypto.randomUUID()}></input>
        <input
          type="text"
          list=""
          aria-haspopup="true"
          component-id="60df7dd0-5293-49d4-9f0e-d3e4faafcf4c"
          testparty-id={crypto.randomUUID()}></input>
        <input
          type="xxx"
          list=""
          aria-haspopup="true"
          component-id="70aeb55c-4fe6-428f-9c18-d59f239a6308"
          testparty-id={crypto.randomUUID()}></input>
        <input
          list=""
          aria-haspopup="true"
          component-id="9a1ec296-3db0-4643-8715-decc26c0940d"
          testparty-id={crypto.randomUUID()}></input>
        <option
          aria-selected="true"
          component-id="d37ffe28-0ba0-477b-963a-54fcbf9d514a"
          testparty-id={crypto.randomUUID()}>test</option>
        <img
          aria-selected="true"
          component-id="514c605a-8289-4956-98c1-a14959943af4"
          testparty-id={crypto.randomUUID()}></img>
        <img
          aria-hidden="false"
          component-id="d2e41e09-a9b2-4098-85b6-eff073932a6d"
          testparty-id={crypto.randomUUID()}></img>
      </div>
    </body>)
  );
}

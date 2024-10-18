import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-hidden-body
export default function Page() {
  return (
    (<body
      className={inter.className}
      aria-hidden="true"
      component-id="080476b4-6079-4972-9850-2f525ef341bc"
      testparty-id={crypto.randomUUID()}>
      <h1
        component-id="c3b75213-ee8a-492f-a6cd-66e8c41ab200"
        testparty-id={crypto.randomUUID()}>My Page</h1>
    </body>)
  );
}

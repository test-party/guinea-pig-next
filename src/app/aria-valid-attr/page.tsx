import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-valid-attr
export default function Page() {
  return (
    (<body
      className={inter.className}
      component-id="db264113-12ce-4b7f-81df-72f2e95ea954"
      testparty-id={crypto.randomUUID()}>
      <div
        aria-xxxx="xxzcxzc"
        component-id="4adc9412-5d10-452b-8fe3-b89114fd488d"
        testparty-id={crypto.randomUUID()}></div>
    </body>)
  );
} 
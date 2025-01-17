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
      <div>some "text"</div>
    </body>
  );
}
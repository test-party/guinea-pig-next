import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-valid-attr
//TESTS
export default function Page() {
  return (
    <body className={inter.className}> 
      <button aria-label="false"> BUTTON 1</button>
    </body>
  );
}
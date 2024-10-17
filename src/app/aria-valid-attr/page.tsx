import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-valid-attr
export default function Page() {
  return (
    <body className={inter.className}> 
      <div aria-xxxx="xxzcxzc" ></div>
    </body>
  );
} 
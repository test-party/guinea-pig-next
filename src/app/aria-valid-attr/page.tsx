import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-valid-attr
export default function Page() {
  return (
    <body className={inter.className}> 
      <button aria-lab="fdasdasdasalse"></button>
      <button aria-lab="false"></button>
      <button aria-hidd="false"></button>
      <button aria-xxxx="sadddas"></button>
      <button aria-yyyy="false"></button>
      <button aria-tesxt="1"></button>
      <button aria-false="false"></button>
      <button aria-11111={1}></button>
      <button aria-invalid="true"></button>
      <button aria-busy="true"></button>
      <button aria-checked="mixed"></button>
      <button aria-expad="true"></button>
      <button aria-hapup="menu"></button>
      <button aria-hiden="true"></button>
      <button aria-lal="Submit"></button>
      <button aria-s="assertive"></button>
    </body>
  );
} 
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

//http://localhost:3000/link-name

export default function Page() {
  return (
    <div className={inter.className}>
        <a href='https://www.google.com'></a>
    </div>
  );
}

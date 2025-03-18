import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-hidden-body
export default function Page() {
  return (
    <div className={inter.className} aria-hidden="true">
      <h1>My Page</h1>
    </div>
  );
}

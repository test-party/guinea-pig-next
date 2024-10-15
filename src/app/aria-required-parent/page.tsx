import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3001/aria-required-parent
export default function Page() {
  return (
    <body>
      <ul id="myaccount">
        <li role="menuitem">
          Bacon
        </li>
        <li role="menuitem">
          Egg
        </li>
        <li role="menuitem">
          Cheese
        </li>
      </ul>
    </body>
  );
}

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3001/aria-required-parent
export default function Page() {
  return (
    <body>
      <ul id="myaccount">
        <li>
          <p role="menuitem">Profile</p>
        </li>
        <li>
          <p role="menuitem">Preferences</p>
        </li>
      </ul>
    </body>
  );
}

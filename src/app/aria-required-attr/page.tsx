import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-required-attr
export default function Page() {
  return (
    <body className={inter.className}> 
      <div role="switch"></div>
      <div role="checkbox"></div>
      <div role="combobox"></div>
      <div role="menuitemcheckbox"></div>
      <div role="menuitemcheckbox"></div>
      <div role="menuitemradio"></div>
      <div role="radio"></div>
      <div role="scrollbar"></div>
      <div role="slider"></div>
    </body>
  );
} 
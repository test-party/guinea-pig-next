import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-required-attr
export default function Page() {
  return (
    (<body
      className={inter.className}
      component-id="46d5ac51-e7e1-4356-9f74-5d985fa89417"
      testparty-id={crypto.randomUUID()}>
      <div
        role="switch"
        component-id="76ac9fa1-09f1-4655-893f-f12225965005"
        testparty-id={crypto.randomUUID()}></div>
      <div
        role="checkbox"
        component-id="ee14f647-9172-4318-aec5-079d28b7542c"
        testparty-id={crypto.randomUUID()}></div>
      <div
        role="combobox"
        component-id="0c7ff2ab-c7c1-474e-afc1-abed74ac551c"
        testparty-id={crypto.randomUUID()}></div>
      <div
        role="menuitemcheckbox"
        component-id="f95b8dcd-91e5-4e2b-96f9-ec879901290e"
        testparty-id={crypto.randomUUID()}></div>
      <div
        role="menuitemcheckbox"
        component-id="21313066-c4c5-44c5-956b-2fb6dd663aa9"
        testparty-id={crypto.randomUUID()}></div>
      <div
        role="menuitemradio"
        component-id="f744b554-fc36-4cc4-b730-bebb1337a4e4"
        testparty-id={crypto.randomUUID()}></div>
      <div
        role="radio"
        component-id="05d84a2e-13d0-4bb4-ad54-e2d136f9c990"
        testparty-id={crypto.randomUUID()}></div>
      <div
        role="scrollbar"
        component-id="5c9b1192-24d8-4bfc-a292-68dabf11be2f"
        testparty-id={crypto.randomUUID()}></div>
      <div
        role="slider"
        component-id="4e9ddf5d-35e1-470b-b9ea-b1c9bbcec939"
        testparty-id={crypto.randomUUID()}></div>
    </body>)
  );
} 
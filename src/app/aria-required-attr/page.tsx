import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-required-attr
export default function Page() {
    return (
        <div className={inter.className}>
            <div role="combobox" aria-expanded="true" aria-controls="listbox1" aria-haspopup="listbox"></div>
            <div role="combobox" aria-expanded="true" aria-haspopup="listbox"></div>
            <div role="combobox" aria-controls="listbox2" aria-expanded="false" aria-haspopup="listbox"></div>
            <div role="combobox" aria-expanded="false" aria-haspopup="listbox"></div>
            <div role="switch" aria-checked="false"></div>
            <div role="checkbox" aria-checked="false"></div>
            <div role="menu">
                <div role="menuitemcheckbox" aria-checked="false"></div>
                <div role="menuitemcheckbox" aria-checked="false"></div>
                <div role="menuitemradio" aria-checked="false"></div>
            </div>
            <div role="radio" aria-checked="false"></div>
            <div role="scrollbar" aria-controls="content" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            <div role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )
}
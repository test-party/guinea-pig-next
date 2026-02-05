import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//http://localhost:3000/aria-valid-attr
//TESTS
// 1 SIMILAR ATTRIBUTE
// 2 SIMILAR ATTRIBUTE WHEN HAVE OTHER SIMILAR ATTRIBUTE OK
// 3 SIMILAR ATTRIBUTE WHEN HAVE OTHER SIMILAR ATTRIBUTE NOT OK
// 4 VALUE NOT VALID FOR A SIMILAR ATTRIBUTE
// 5 NO VALUE
// 6 NO SENSE NAME
// 7 SUGGEST WHEN NUMBER
// 8 PROHIBITED ATTRIBUTE SIMILAR
export default function Page() {
    return (
        <div className={inter.className}>
            <button aria-label="fdasdasdasalse"> BUTTON 1</button>
            <button aria-label="sdadsa" aria-labelledby="dsadas"> BUTTON 2</button>
            <button aria-label="sdadsa"> BUTTON 3 </button>
            <button aria-label="false"> BUTTON 4 </button>
            <button aria-label="Button 5"> BUTTON 5 </button>
            <button aria-label="Button 6"> BUTTON 6 </button>
            <div>
                <input type="range" aria-valuemin={0} aria-valuemax={100} />
            </div>
            <p aria-label="false">A</p>
        </div>
    )
}
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
      <button aria-lab="fdasdasdasalse"> BUTTON 1</button>
      <button aria-lab="sdadsa" aria-labelledby='dsadas'> BUTTON 2</button>
      <button aria-lab="sdadsa" aria-labi='dsadas'> BUTTON 3 </button>
      <button aria-lae="false"> BUTTON 4 </button>
      <button aria-lae=""> BUTTON 5 </button>
      <button aria-dsadasdasdsadas=""> BUTTON 6 </button>
      <div>
        <input type="range" aria-val={0} aria-valu={100} />
      </div>
      <p aria-la="false">A</p>
    </div>
  );
} 
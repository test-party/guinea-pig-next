//http://localhost:3000/loop-tests
import Imported from './import';

export default function Page() {

  const distinctList = ['https://www.google.com','https://www.yahoo.com','https://www.apple.com']

  return (
    <div>
        <p>UNIQUE CASE</p>
        <a href='https://www.google.com'></a>
        <p>DUPLICATED CASE</p>
        {[1,2,3].map(item => <a key={item} href="https://www.amazon.com"></a>)}
        <p>DISTINCT CASE</p>
        {distinctList.map(item => <a key={item} href={item}></a>)}
        <p>IMPORTED CASE</p>
        {[1,2,3].map(item => <Imported key={item}/>)}
    </div>
  );
}

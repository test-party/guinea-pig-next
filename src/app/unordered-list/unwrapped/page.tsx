import UnwrappedListItems from '@/components/UnwrappedListItems'

export default function Page() {
    return (
        <div>
            <ul>
                <li>Valid Item 1</li>
                <li>Valid Item 2</li>
            </ul>
            <ul>
            <li>Invalid A</li>
            <li>Invalid B</li>
            <li>Invalid C</li>
            </ul>
            <p>a</p>
            <ul>
            <li>Invalid D</li>
            <li>Invalid E</li>
            </ul>
            <p></p>
            <ul>
            <li>Invalid F</li>
            <li>Invalid G</li>
            </ul>
            <div>
                <ul>
                <li>Invalid H</li>
                <li>Invalid I</li>
                <li>Invalid J</li>
                </ul>
            </div>
            <div>
                <ul>
                <li></li>
                <li>Invalid K</li>
                </ul>
            </div>
            <ul>
            <li>Invalid L</li>
            </ul>
            <UnwrappedListItems />
            <ul>
            <li>Invalid M</li>
            <li>Invalid N</li>
            <li>Invalid O</li>
            <li>Invalid P</li>
            </ul>
        </div>
    )
}

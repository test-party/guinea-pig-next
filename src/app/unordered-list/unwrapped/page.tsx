import UnwrappedListItems from '@/components/UnwrappedListItems'

export default function Page() {
    return (
        <div>
            <ul>
                <li>Valid Item 1</li>
                <li>Valid Item 2</li>
            </ul>
            <li>Invalid A</li>
            <li>Invalid B</li>
            <li>Invalid C</li>
            <p>a</p>
            <li>Invalid D</li>
            {/* This is a comment */}
            <li>Invalid E</li>
            <p></p>
            <li>Invalid F</li>

            <li>Invalid G</li>
            <div>
                <li>Invalid H</li>
                <li>Invalid I</li>
                <li>Invalid J</li>
            </div>
            <div>
                <li></li>
                <li>Invalid K</li>
            </div>
            <li>Invalid L</li>
            <UnwrappedListItems />
            <li>Invalid M</li>

            <li>Invalid N</li>
            <li>Invalid O</li>
            <li>Invalid P</li>
        </div>
    )
}

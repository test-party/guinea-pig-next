//http://localhost:3000/object-alt

export default function Page() {
    return (
        <div>
            <h2>Pass Cases:</h2>
            <object data="path/to/content" title="This object has text"></object>
            <object data="path/to/content" aria-label="this object has text"></object>
            <span id="label1">this object has text</span>
            <object data="path/to/content" aria-labelledby="label1"></object>
            <object data="path/to/content" role="presentation"></object>
            <object data="path/to/content" role="none"></object>
            <h2>Fail Cases:</h2>
            <object data="path/to/content"></object>
            <object data="path/to/content"><div> </div></object>
            <object data="path/to/content">This object has no alternative text.</object>
        </div>
    )
}
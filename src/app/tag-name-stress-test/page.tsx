//http://localhost:3000/tag-name-stress-test
export default function GlobalStressTest() {
    return (
        <div>
            <div id="custom-test-tag-name-case-1">CODE</div>
            <div id="custom-test-tag-name-case-2">
                <div>CODE</div>
            </div>
            <div><div><div id="custom-test-tag-name-case-3">CODE</div></div></div>
            <div id="custom-test-tag-name-case-4" />
            {true && <div id="custom-test-tag-name-case-5" />}
            {[1, 2, 3].map(item => <div key={item} id={`custom-test-tag-name-case-6-${item}`} /> ) }
        </div>
    )
}

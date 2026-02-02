//http://localhost:3000/attributes-stress-test
export default function AttributesStressTest() {
    return (
        <div>
            <h1>Attributes Stress Test</h1>
            <div id="custom-test-attr-case-1" aria-label="Test case 1"></div>
            <div id="custom-test-attr-case-2" aria-label="Test case 2"></div>
            <div
                id="custom-test-attr-case-3"
                aria-label="Test case 3">
                test
            </div>
            <div id="custom-test-attr-case-4" aria-label="Test case 4">
                test
            </div>
            <div id="custom-test-attr-case-5" aria-label="Test case 5"><div>children</div><div>children</div></div>
            <div id="custom-test-attr-case-6" aria-label="Test case 6">
                <div>children</div>
                <div>children</div>
            </div>
            <div id="custom-test-attr-case-7" aria-label="Test case 7"><div>children</div><div>children</div></div>
            <div id="custom-test-attr-case-8" aria-label="Test case 8">
                <div>children</div>
                <div>children</div>
            </div>
            <div id="custom-test-attr-case-9" aria-label="Test case 9" />
            <div id="custom-test-attr-case-10" aria-label="Test case 10" />
            <div id="label-ref" style={{display: "none"}}>Label reference</div>
            <div id="description-ref" style={{display: "none"}}>Description reference</div>
            <div id="custom-test-attr-case-11" aria-label="Test case 11" aria-labelledby="label-ref" aria-describedby="description-ref" aria-placeholder="Placeholder text" />
            <div id="custom-test-attr-case-12" aria-label="Test case 12" aria-labelledby="label-ref" />
            <div id="custom-test-attr-case-13" aria-hidden="true" />
            <div id="custom-test-attr-case-14" aria-hidden="true" />
            <div id="custom-test-attr-case-15" />
        </div>
    )
}
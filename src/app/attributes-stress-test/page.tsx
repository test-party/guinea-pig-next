
//http://localhost:3000/attributes-stress-test
export default function AttributesStressTest() {
    return (
        <div>
            <div id="custom-test-attr-case-1" aria-label="oldValue"></div>
            <div id="custom-test-attr-case-2" aria-label="oldValue"></div>
            <div 
                id="custom-test-attr-case-3" 
                aria-label="oldValue">
                test    
            </div>
            <div id="custom-test-attr-case-4" aria-label="oldValue">
                test    
            </div>
            <div id="custom-test-attr-case-5" aria-label="oldValue"><div>children</div><div>children</div></div>
            <div id="custom-test-attr-case-6" aria-label="oldValue">
                <div>children</div>
                <div>children</div>
            </div>
            <div id="custom-test-attr-case-7" aria-label="oldValue"><div>children</div><div>children</div></div>
            <div id="custom-test-attr-case-8" aria-label="oldValue">
                <div>children</div>
                <div>children</div>
            </div>
            <div id="custom-test-attr-case-9" aria-label="oldValue" />
            <div id="custom-test-attr-case-10" aria-label="oldValue" />
            <div id="custom-test-attr-case-11" aria-label="oldValue" aria-labelledby="oldValue" aria-describedby="oldValue" aria-placeholder="oldValue" />
            <div id="custom-test-attr-case-12" aria-label="oldValue" aria-labelledby="oldValue" />
            <div id="custom-test-attr-case-13" aria-hidden />
            <div id="custom-test-attr-case-14" aria-hidden />
            <div id="custom-test-attr-case-15" />
        </div>
    )
}
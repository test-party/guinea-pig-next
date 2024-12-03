//http://localhost:3000/global-stress-test
export default function GlobalStressTest() {
    return (
        <div>
            <div id="custom-test-global-case-1">INITIAL CODE</div>
            <div id="custom-test-global-case-2">INITIAL CODE</div>
            <div id="custom-test-global-case-3">
                INITIAL CODE
            </div>
            <div id="custom-test-global-case-4">
                INITIAL CODE
            </div>
            <div id="custom-test-global-case-5">INITIAL CODE</div>
            <div id="custom-test-global-case-6">
                INITIAL CODE
            </div>
            <div><div><div id="custom-test-global-case-7">INITIAL CODE</div></div></div>
            <div><div><div id="custom-test-global-case-8">INITIAL CODE</div></div></div>
            <div id="custom-test-global-case-9">
                <p>children</p>
                <p>children</p>
                <p>children</p>
            </div>
            <div><div><div id="custom-test-global-case-10">INITIAL CODE</div></div></div>
            <div><div><div id="custom-test-global-case-11"/></div></div>
            <div><div><div 
                id="custom-test-global-case-12"
            />
            </div></div>
            {true && <div id="custom-test-global-case-13">INITIAL CODE</div>}
            {[1,2,3].map((_,index) => <div id={`custom-test-global-case-14-${index}`}>INITIAL CODE</div>)}
            <div id="custom-test-global-case-15">INITIAL CODE</div>
        </div>
    )
}
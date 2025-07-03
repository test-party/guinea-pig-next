// http://localhost:3000/definition-list
export default function Page() {
    return (
        <div>
            <div id="passing">
                <dl>
                    <dt>Coffee</dt>
                    <dd>Black hot drink</dd>
                    <div>
                        <dt>Milk</dt>
                        <dd>White cold drink</dd>
                    </div>
                </dl>
            </div>
            <div id="failing">
                <div>Case 1: 'dd' before 'dt' element</div>
                <dl>
                    <dt>EV</dt>
                    <dd>Tesla</dd>
                    <div>
                        <dd>Ford</dd>
                        <dt>ICE</dt>
                    </div>
                </dl>
                <div>Case 2: elements inside 'dl' that are not 'dd' or 'dt'</div>
                <dl>
                    <dt>Pet</dt>
                    <dd>Dog</dd>
                    <div>
                        <dd>Animal</dd>
                        <dt>Lion</dt>
                    </div>
                    <button>I am a button</button>
                </dl>
                <div>Case 3: multiple elements inside 'dl' that are not 'dd' or 'dt'</div>
                <dl>
                    <dt>Pet</dt>
                    <dd>Dog</dd>
                    <button>I am a button</button>
                    <div>
                        <dd>Animal</dd>
                        <dt>Lion</dt>
                    </div>
                    <button>I am also a button</button>
                </dl>
            </div>
        </div>
    )
}

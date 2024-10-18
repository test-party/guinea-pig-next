//http://localhost:3000/aria-invalid-attribute
export default function Page() {
    return (
        (<div
            component-id="25253ce3-a199-461f-9b4f-53945d111712"
            testparty-id={crypto.randomUUID()}>
            <div
                component-id="ebdfcfc4-4fd7-4819-9c47-6d23122b498c"
                testparty-id={crypto.randomUUID()}>
                <p
                    aria-checked="true"
                    component-id="ef784a86-8e4b-4436-b539-1b1a89f855a6"
                    testparty-id={crypto.randomUUID()}>ABC</p>
            </div>
            <div
                component-id="aa32aa4f-5d1b-4b82-bc8e-1ad47639ab9f"
                testparty-id={crypto.randomUUID()}>
                <p
                    aria-checked="true"
                    component-id="742b5636-2b66-46c3-bc87-6589ab3931ed"
                    testparty-id={crypto.randomUUID()}>ABC</p>
                <p
                    aria-checked="true"
                    component-id="714456d9-36d9-4e48-940a-06423258cfb1"
                    testparty-id={crypto.randomUUID()}>ABC</p>


            </div>
            <div
                component-id="291b7f13-382c-47d4-842b-32b70607c65b"
                testparty-id={crypto.randomUUID()}>
                <button
                    aria-expanded="true"
                    component-id="6a7e5828-cbd8-4022-ba26-13700d809c80"
                    testparty-id={crypto.randomUUID()}>ABC</button>
                <button
                    aria-expanded="false"
                    component-id="6ac6b1fc-6e3f-48cb-acff-a2b0292f5f40"
                    testparty-id={crypto.randomUUID()}>ABC</button>

            </div>
            <input
                type="text"
                aria-pressed="true"
                component-id="6fea0ad9-c115-438f-be4d-e8cd190f905f"
                testparty-id={crypto.randomUUID()} />
            <input
                type="text"
                aria-pressed="true"
                component-id="9b1cb94d-332a-438f-ab84-025c51447214"
                testparty-id={crypto.randomUUID()} />
        </div>)
    );
}
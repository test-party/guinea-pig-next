export default function UnorderedList() {
    return (
        (<ul
            component-id="2091d37d-635a-4ce4-8f8c-0944690f6293"
            testparty-id={crypto.randomUUID()}>
            <li
                component-id="526ff14f-dfd4-4ed5-9a3a-06fcc7f084f5"
                testparty-id={crypto.randomUUID()}>Item 1</li>
            <li
                component-id="9d1ae7bf-9e9b-45a4-aad3-63bd3a3ed2c6"
                testparty-id={crypto.randomUUID()}>Item 2</li>
            <p
                component-id="19fee8da-2f5b-465b-8a64-efa850f31c8d"
                testparty-id={crypto.randomUUID()}>Wrong</p>
            <li
                component-id="71fbfb6c-aff1-428e-bd3e-ccd8e2cd7740"
                testparty-id={crypto.randomUUID()}>Item 3</li>
        </ul>)
    );
}
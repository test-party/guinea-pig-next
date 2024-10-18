export default function Images() {
    let ids: number[] = []
    for (var i=0; i < 39; i++) {
        ids.push(i + 3)
    }
    return (
        (<main
            className="flex min-h-screen grid grid-cols-3 gap-4 p-24"
            component-id="ca5e9c3a-7a68-48f9-a18d-d2925b423986"
            testparty-id={crypto.randomUUID()}>
            {ids.map((id) => {
                return (
                    <div
                        component-id="8cf20e7e-0bbb-4c93-8b2b-06f8c9d84093"
                        testparty-id={crypto.randomUUID()}><img
                        className="object-fill w-full h-full"
                        key={id}
                        src={`https://picsum.photos/id/${id}/200/300`}
                        component-id="6c8e3295-9dca-4acd-b79c-67d33322a33b"
                        testparty-id={crypto.randomUUID()}></img></div>
                );
            })}
        </main>)
    );
}
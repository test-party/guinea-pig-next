export default function Images() {
    let ids: number[] = []
    for (var i=0; i < 39; i++) {
        ids.push(i + 3)
    }
    return (
        <main className="flex min-h-screen grid grid-cols-3 gap-4 p-24">
            {ids.map((id) => {
                return <div key={id}><img className="object-fill w-full h-full" key={id} src={`https://picsum.photos/id/${id}/200/300`}></img></div>
            })}
        </main>
    )
}
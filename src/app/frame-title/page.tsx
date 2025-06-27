//http://localhost:3000/frame-title
const Page = () => {
    return (
        <>
            <iframe title="Passing Frame Title"><div>Frame Body</div></iframe>
            <iframe><div>Body of Invalid Frame</div></iframe>
        </>
    )
}

export default Page

// http://localhost:3000/role-img-alt
const Page = () => {
    return (
        <>
            <div id="valid-cases">
                <div role="img" aria-label="Valid Label" id="pass1"></div>
                <div id="match">Bananas</div>
                <div role="img" aria-labelledby="match" id="pass2"></div>
                <div id="hidden-match" style={{display:"none"}}>Banana bombs</div>
                <div role="img" aria-labelledby="hidden-match" id="pass3"></div>
                <div role="img" title="title" id="pass4"></div>
            </div>
            <div id="invalid-cases">    
                <div role="img" id="violation1"></div>
                <div role="img" aria-label="" id="violation2"></div>
                <div role="img" aria-labelledby="no-match" id="violation3"></div>
                <div role="img" title="" id="violation4"></div>
            </div>
        </>)
}

export default Page
// http://localhost:3000/role-img-alt
const Page = () => {
    return (
        <>
            <div id="valid-cases">
                <div role="img" aria-label="Valid Label" id="pass1"></div>
                <div id="match">Bananas</div>
                <div role="img" aria-labelledby="match" id="pass2"></div>
                <div id="hidden-match" style={{ display: 'none' }}>Banana bombs</div>
                <div role="img" aria-labelledby="hidden-match" id="pass3"></div>
                <div role="img" title="title" id="pass4"></div>
            </div>
            <div id="invalid-cases">
                <div role="img" id="violation1">
                    <svg width="200" height="300" viewBox="0 0 200 300">
                        <rect width="200" height="300" fill="#ff6b6b"/>
                        <circle cx="100" cy="150" r="50" fill="#fff"/>
                    </svg>
                </div>
                <div role="img" aria-label="" id="violation2">
                    <svg width="200" height="300" viewBox="0 0 200 300">
                        <rect width="200" height="300" fill="#4ecdc4"/>
                        <polygon points="100,50 150,200 50,200" fill="#fff"/>
                    </svg>
                </div>
                <div role="img" aria-labelledby="no-match" id="violation3">
                    <svg width="200" height="300" viewBox="0 0 200 300">
                        <rect width="200" height="300" fill="#45b7d1"/>
                        <rect x="75" y="125" width="50" height="50" fill="#fff"/>
                    </svg>
                </div>
                <div role="img" title="" id="violation4">
                    <svg width="200" height="300" viewBox="0 0 200 300">
                        <rect width="200" height="300" fill="#96ceb4"/>
                        <ellipse cx="100" cy="150" rx="75" ry="25" fill="#fff"/>
                    </svg>
                </div>
            </div>
        </>)
}

export default Page

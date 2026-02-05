const Page = () => {
    return (
        <div>
            <ul role="menu">
                <li id="pass2" role="menuitemcheckbox" aria-checked="true">
                </li>
            </ul>
            <p id="pass3Label">Sans-serif</p>
            <ul role="menu">
                <li id="pass3a" role="menuitemradio" aria-checked="true">
                </li>
                <li id="pass3b" role="menuitemradio" aria-checked="true">
                </li>
            </ul>
            <div role="radiogroup" aria-labelledby="pass3Label">
                <div id="pass4a" role="radio" aria-checked="false">
                </div>
                <div id="pass4b" role="radio" aria-checked="false">
                </div>
            </div>
            <div id="fail5" role="switch" aria-checked="true">
                <span></span>
                <span></span>
            </div>
        </div>)
}

export default Page

// http://localhost:3000/aria-toggle
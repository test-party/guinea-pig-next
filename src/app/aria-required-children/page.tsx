const Page = () => {
    return (
        <div>
            <div role="list">
                <p>LIST ITEM</p>
            </div>
            <nav role="menu">

                <span>option 1</span>
                <span>option 2</span>

                <div role="menu">

                    <p>Submenu without role="menuitem"</p>
                </div>
            </nav>
        </div>
    )
}

export default Page
//http://localhost:3000/aria-required-children

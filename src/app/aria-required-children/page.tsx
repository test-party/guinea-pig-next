const Page = () => {
    return (
        <div>
            <div role="list">
                <div role="listitem">LIST ITEM</div>
            </div>
            <nav role="menu">
                <div role="menuitem">option 1</div>
                <div role="menuitem">option 2</div>
                <div role="menu">
                    <div role="menuitem">Submenu without role="menuitem"</div>
                </div>
            </nav>
        </div>
    )
}

export default Page
//http://localhost:3000/aria-required-children
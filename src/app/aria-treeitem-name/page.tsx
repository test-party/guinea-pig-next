// http://localhost:3000/aria-treeitem-name
const Page = () => {
    return (
        <div>
            <div role="treeitem"></div>

            <div role="treeitem" aria-label=""></div>

            <div role="treeitem" aria-labelledby="nonexistent"></div>

            <div role="treeitem" aria-labelledby="emptydiv"></div>
            <div id="emptydiv"></div>
        </div>
    )
}

export default Page
//http://localhost:3000/aria-invalid-attribute
export default function Page() {
    return (
        <div>
            <div>
                <p aria-checked="true">ABC</p>
            </div>

            <div>
                <button>Button 3</button>
            </div>

            <div>
                <div role="tablist">
                    <button>Button 1</button>
                </div>
            </div>

            <div>
                <div role="tree">
                    <div role="treeitem" aria-expanded="true">Parent Item 1
                        <div role="group">
                            <div role="treeitem">Child Item 1</div>
                            <div role="treeitem">Child Item 2</div>
                        </div>
                    </div>
                    <div role="treeitem" aria-expanded="true">Parent Item 2
                        <div role="group">
                            <div role="treeitem">Child Item 3</div>
                            <div role="treeitem">Child Item 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
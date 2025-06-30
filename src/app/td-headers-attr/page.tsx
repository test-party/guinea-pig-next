//http://localhost:3000/td-headers-attr
export default function Page() {
    return (
        <div>
            <h1>TD Headers Attribute Test</h1>
            <h2>✅ Good Example - Valid Headers Attribute</h2>
            <table>
                <thead>
                    <tr>
                        <th id="name" scope="col">Name</th>
                        <th id="q1" scope="col">Q1 Sales</th>
                        <th id="q2" scope="col">Q2 Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th id="mary" scope="row">Mary</th>
                        <td headers="mary q1">$5,000</td>
                        <td headers="mary q2">$7,000</td>
                    </tr>
                    <tr>
                        <th id="alex" scope="row">Alex</th>
                        <td headers="alex q1">$3,000</td>
                        <td headers="alex q2">$4,500</td>
                    </tr>
                </tbody>
            </table>
            <h2>❌ Bad Example - Self-Reference in Headers</h2>
            <table>
                <thead>
                    <tr>
                        <th id="product" scope="col">Product</th>
                        <th id="price" scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="widget-a" headers="widget-a product">Widget A</td>
                        <td headers="price">$10.99</td>
                    </tr>
                </tbody>
            </table>
            <h2>❌ Bad Example - Headers References Non-existent ID</h2>
            <table>
                <thead>
                    <tr>
                        <th id="item" scope="col">Item</th>
                        <th id="cost" scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td headers="nonexistent-header item">Widget B</td>
                        <td headers="cost">$15.99</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

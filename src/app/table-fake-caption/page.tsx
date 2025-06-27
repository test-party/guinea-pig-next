//http://localhost:3000/table-fake-caption
export default function Page() {
    return (
        <div>
            <h1>Table Fake Caption Test</h1>
            <h2>✅ Good Example - Proper Caption Element</h2>
            <table>
                <caption>Employee Information</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Smith</td>
                        <td>Engineering</td>
                        <td>$75,000</td>
                    </tr>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>Marketing</td>
                        <td>$65,000</td>
                    </tr>
                </tbody>
            </table>

            <h2>❌ Bad Example - Fake Caption Using Cell with Colspan</h2>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={3} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Employee Information
                        </td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                    <tr>
                        <td>John Smith</td>
                        <td>Engineering</td>
                        <td>$75,000</td>
                    </tr>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>Marketing</td>
                        <td>$65,000</td>
                    </tr>
                </tbody>
            </table>

            <h2>❌ Another Bad Example - Header Cell as Fake Caption</h2>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={3} style={{ textAlign: 'center' }}>
                            Product Inventory
                        </th>
                    </tr>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Widget A</td>
                        <td>50</td>
                        <td>$10.99</td>
                    </tr>
                    <tr>
                        <td>Widget B</td>
                        <td>25</td>
                        <td>$15.99</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

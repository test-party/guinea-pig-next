//http://localhost:3000/aria-invalid-attribute
export default function Page() {
    return (
        <div>
            <div>
                <p>ABC</p>
            </div>

            <div>
                <p>ABC</p>
                <p>ABC</p>

            </div>

            <div>
                <button aria-expanded="true">ABC</button>
                <button aria-expanded="false">ABC</button>

            </div>

            <input type="text" />
            <input type="text" />
        </div>
    )
}
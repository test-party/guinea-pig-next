//http://localhost:3000/aria-invalid-attribute
export default function Page() {
    return (
        <div>
            <div>
                <p aria-checked="true">ABC</p>
            </div>

            <div>
                <p aria-checked="true">ABC</p>
                <p aria-checked="true">ABC</p>


            </div>

            <div>
                <button aria-expanded="true">ABC</button>
                <button aria-expanded="false">ABC</button>

            </div>

            <input type="text" aria-pressed="true" />
            <input type="text" aria-pressed="true" />
        </div>
    );
}
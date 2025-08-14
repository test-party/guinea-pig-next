//http://localhost:3000/autocomplete-valid
 
export default function Page() {
    return (
        <div>
            <form>
                <input
                    type="text"
                    autocomplete={123}
                    name="email"
                    aria-label="Select Email Option" />
            </form>
        </div>
    );
}

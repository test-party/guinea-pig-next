//http://localhost:3000/autocomplete-valid
 
export default function Page() {
    return (
        <div>
            <form>
                <input
                    type="email"
                    autoComplete="email"
                    name="email"
                    aria-label="Select Email Option" />
            </form>
        </div>
    );
}
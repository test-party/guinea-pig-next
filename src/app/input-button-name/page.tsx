//http://localhost:3000/input-button-name
export default function Page() {
    return (
        <main>
            <form action="#">
                <label id="submit-here"></label>
                <input type="button" aria-labelledby="submit-here"/>
            </form>
        </main>
    );
}

//http://localhost:3000/input-button-name
export default function Page() {
    return (
        <main>
            <form action="#">
                <label id="submit-here" aria-label="Submit Form"></label>
                <input type="button" aria-labelledby="submit-here"/>
            </form>
        </main>
    );
}

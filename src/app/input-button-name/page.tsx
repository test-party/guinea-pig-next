//http://localhost:3000/input-button-name
export default function Page() {
    return (
        <main>
            <form action="#">
                <label id="label-submit">Click here to submit</label>
                <input type="button" aria-labelledby="label-submit"/>
            </form>
        </main>
    );
}

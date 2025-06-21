//http://localhost:3000/aria-text
export default function Page() {
    return (
        <div>
            <h2>Failed Examples</h2>
            
            <section>
                <h3>Incorrect aria-text Usage</h3>
                <p>The aria-text attribute is not a valid ARIA attribute and will be flagged by axe-core.</p>
                
                {/* Invalid aria-text attribute - axe will flag this */}
                <button aria-text="Click me to submit">Submit</button>
                
                {/* Another invalid usage */}
                <div role="button" aria-text="Navigation menu">Menu</div>
                
                {/* Multiple invalid aria-text attributes */}
                <input type="text" aria-text="Enter your name" placeholder="Name" />
                <textarea aria-text="Write your message here"></textarea>
                
                {/* Invalid on interactive elements */}
                <a href="#" aria-text="Go to homepage">Home</a>
                <select aria-text="Choose your country">
                    <option>USA</option>
                    <option>Canada</option>
                </select>
            </section>

            <section>
                <h3>Correct Alternative</h3>
                <p>Use aria-label instead of aria-text:</p>
                <button aria-label="Click me to submit">Submit</button>
            </section>
        </div>
    )
}
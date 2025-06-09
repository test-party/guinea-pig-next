//http://localhost:3000/aria-command-name
export default function Page() {
    return (
        <div>
            <h2>Passed Examples</h2>

            <div role="link" id="al" aria-label="Name"></div>
            <div role="button" id="alb" aria-labelledby="labeldiv"></div>
            <div id="labeldiv">Button label</div>
            <div role="menuitem" id="combo" aria-label="Aria Name">Name</div>
            <div role="link" id="title" title="Title"></div>

            <h2>Failed Examples with Real-Life Context</h2>

            <footer>
                <h2>Stay Connected</h2>
                <div role="link" id="empty"></div>
                <p>Follow us on social media for updates</p>
            </footer>

            <article>
                <h1>How to Build an Accessible Website</h1>
                <p>Web accessibility is crucial to ensuring your website is usable by all visitors...</p>

                {/* Properly labeled Share buttons */}
                <footer>
                    <h2>Share this Article</h2>
                    {/* Missing aria-label for sharing buttons */}
                    <div role="link" id="share-facebook"></div>
                    <div role="link" id="share-twitter"></div>
                    <div role="link" id="share-linkedin"></div>
                </footer>

                {/* Related Articles section */}
                <section>
                    <h2>Related Articles</h2>
                    <ul>
                        <li><a href="#">10 Tips for Better Web Design</a></li>
                        <li><a href="#">Improving Web Accessibility with ARIA</a></li>
                        {/* Missing aria-label for the third related article */}
                        <li><a href="#" id="related-article"></a></li>
                    </ul>
                </section>
            </article>

            <section>
                <h2>Register for the Event</h2>
                <form>
                    <fieldset>
                        <legend>Step 1: Personal Information</legend>
                        <label htmlFor="first-name">First Name:</label>
                        <input type="text" id="first-name" name="first-name"/>

                        <label htmlFor="last-name">Last Name:</label>
                        <input type="text" id="last-name" name="last-name"/>

                        {/* Missing aria-label for the Next button */}
                        <div role="button" id="next-step"></div>
                    </fieldset>

                    <fieldset>
                        <legend>Step 2: Contact Information</legend>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email"/>

                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone"/>

                        {/* Missing aria-label for the Previous button */}
                        <div role="button" id="prev-step"></div>

                        {/* Missing aria-label for the Submit button */}
                        <div role="button" id="submit-form"></div>
                    </fieldset>
                </form>
            </section>

            <section>
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="message">Your Message:</label>
                    <textarea id="message" name="message"></textarea>

                    <div role="button" id="alempty" aria-label=""></div>
                </form>
            </section>

            <section>
                <h2>Search Results</h2>
                <ul>
                    <li>Result 1</li>
                    <li>Result 2</li>
                    <li>Result 3</li>
                </ul>

                <nav aria-label="Pagination">
                    {/* Properly labeled page button */}
                    <div role="button" aria-label="Previous Page" id="prev-page"></div>

                    {/* Missing aria-label for page number buttons */}
                    <div role="button" id="page-1"></div>
                    <div role="button" id="page-2"></div>
                    <div role="button" id="page-3"></div>

                    {/* Properly labeled page button */}
                    <div role="button" aria-label="Next Page" id="next-page"></div>
                </nav>
            </section>

            <div role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
                <h2 id="modal-title">Confirm Your Action</h2>
                <p id="modal-description">Are you sure you want to save changes to your profile?</p>

                {/* Missing aria-label for the Save button */}
                <div role="button" id="save-changes"></div>

                {/* Properly labeled Cancel button */}
                <div role="button" aria-label="Cancel" id="cancel"></div>

                {/* Missing aria-label for the Close button */}
                <div role="button" id="close-modal"></div>
            </div>

            <nav>
                <h2>User Settings</h2>
                <p>Select a preference from the menu:</p>
                <ul role="menu" aria-label="User settings menu">
                    {/* Successful menu item with aria-label */}
                    <li role="menuitem" id="profile" aria-label="Edit Profile">Edit Profile</li>

                    {/* Failed example: aria-labelledby references an element that doesn't exist */}
                    <li role="menuitem" id="albmissing" aria-labelledby="nonexistent">Account Settings</li>

                    {/* Failed example: aria-label is missing */}
                    <li role="menuitem" id="preferences"></li>
                </ul>
            </nav>

            <nav aria-label="Mobile Menu">
                <button aria-haspopup="true" aria-expanded="false" id="mobile-menu-toggle">
          Menu
                </button>
                <div role="menu" aria-labelledby="mobile-menu-toggle">
                    {/* Properly labeled menuitem */}
                    <div role="menuitem" aria-label="Home" id="mobile-home">
            Home
                    </div>

                    {/* Missing aria-label for Services */}
                    <div role="menuitem" id="mobile-services"></div>

                    {/* Properly labeled menuitem */}
                    <div role="menuitem" aria-label="Contact Us" id="mobile-contact">
            Contact Us
                    </div>
                </div>
            </nav>
        </div>
    )
}

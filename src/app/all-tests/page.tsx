//http://localhost:3000/all-tests
import OnInput36 from "./on-input-36";
import OnInput37 from "./on-input-37";
import { colorD } from "../../components/ColorStyles";

let ids: number[] = [];
for (var i = 0; i < 2; i++) {
  ids.push(i + 3);
}

export default function AllTests() {
  const colorA = "text-gray-400";
  const colorB = "text-gray-400 bg-gray-300";
  const colorC = "bg-gray-300 text-gray-400";

  return (
    <div>
      <h1>MY PAGE</h1>
      <div>
        <h2>ARIA-COMMAND-NAME LABELLED-BY TESTS</h2>
        <div>

          {/* Single Nonexistent ID with a Close Match */}
          <div>
            <div role="button" id="save-btn" aria-labelledby="sav-label"></div>
            {/* Existing IDs in the DOM */}
            <span id="save-label">Save Changes</span>
            <h1 id="header">Welcome</h1>
            <p id="description">This is a description.</p>
            <button id="submit-btn">Submit</button>
          </div>


          {/* Single Nonexistent ID with No Close Match */}
          <div>
            <div role="link" id="home-link" aria-labelledby="start-page">Home</div>
            {/* Existing IDs in the DOM */}
            <nav id="main-nav">...</nav>
            <div id="content">...</div>
          </div>


          {/* Case Sensitivity Issues */}
          <div>
            <div role="link" id="contact-us-link" aria-labelledby="ContactUsHeading"></div>
            {/* Existing IDs in the DOM */}
            <h2 id="contactusheading">Contact Us</h2>
          </div>


          {/* Empty aria-labelledby Attribute */}
          <div>
            <div role="button" id="refresh-btn" aria-labelledby=""></div>
            {/* Existing IDs in the DOM */}
            <span id="refresh-text">Refresh Page</span>
          </div>


          {/* Multiple Nonexistent IDs with Close Matches */}
          <div>
            <div role="button" id="confirmation-dialog" aria-labelledby="dialog-title dialog-desc"></div>
            {/* Existing IDs in the DOM */}
            <h3 id="dialog-header">Confirm Action</h3>
            <p id="dialog-description">Do you want to proceed?</p>
          </div>

          {/* One Nonexistent ID and One with a Close Match */}
          <div>
            <div role="button" id="confirmation-dialog" aria-labelledby="dialog-title dialog-descriptions"></div>
            {/* Existing IDs in the DOM */}
            <h3 id="dialog-header">Confirm Action</h3>
            <p id="dialog-description">Do you want to proceed?</p>
          </div>
        </div>
      </div>
      <div>
        <h2>ARIA-COMMAND-NAME OTHER CASES</h2>
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
                <input type="text" id="first-name" name="first-name" />

                <label htmlFor="last-name">Last Name:</label>
                <input type="text" id="last-name" name="last-name" />

                {/* Missing aria-label for the Next button */}
                <div role="button" id="next-step"></div>
              </fieldset>

              <fieldset>
                <legend>Step 2: Contact Information</legend>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" />

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
              <input type="text" id="name" name="name" />

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
      </div>
      <div>
        <h1>ARIA-DEPRECATED-ROLE</h1>
        <div role="directory">
          <p>ABC</p>
        </div>
      </div>
      <div>
        <h2>ARIA-INIVALID-ATTRIBUTE TESTS</h2>
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
      </div>
    </div>
  );
}

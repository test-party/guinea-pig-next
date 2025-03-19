"use client"
//http://localhost:3000/all-tests

let ids = [];
for (var i = 0; i < 2; i++) {
  ids.push(i + 3);
}
const titleStyle = "text-4xl font-bold"

export default function AllTests() {

  return (
    <div className="flex flex-col items-center justify-start p-8 space-y-4 !bg-blue-500 children-test-container">
      <h1 className={titleStyle}>Not Compliant tests</h1>

      <div>
        <h2>Aria-command-name (labbeledby cases)</h2>
        <p>Elements with role="link", role="button", or role="menuitem" must have one of the following characteristics: Inner text that is discernible to screen reader users,Non-empty aria-label attribute,aria-labelledby pointing to element with text which is discernible to screen reader users.</p>
        <div>

          {/* Single Nonexistent ID with a Close Match */}
          <div className="test-case-container">
            <h6>"Save changes" has id pointing to a button who as a wrong aria-labelledby attribute 🚫</h6>
            <div role="button" id="save-btn" aria-labelledby="sav-label"></div>
            {/* Existing IDs in the DOM */}
            <span id="save-label">Save Changes</span>
            <h1 id="header">Welcome</h1>
            <p id="description">This is a description.</p>
            <button id="submit-btn">Submit</button>
          </div>


          {/* Single Nonexistent ID with No Close Match */}
          <div className="test-case-container">
            <h6>No match id for "Home" link aria-labelledby attribute 🚫</h6>
            <div role="link" id="home-link" aria-labelledby="start-page">Home</div>
            {/* Existing IDs in the DOM */}
            <nav id="main-nav">...</nav>
            <div id="content">...</div>
          </div>


          {/* Case Sensitivity Issues */}
          <div className="test-case-container">
            <h6>"Contact Us" has a aria-labelledby matching text but with with lower case letters (case sensitive) 🚫</h6>
            <div role="link" id="contact-us-link" aria-labelledby="ContactUsHeading"></div>
            {/* Existing IDs in the DOM */}
            <h2 id="contactusheading">Contact Us</h2>
          </div>


          {/* Empty aria-labelledby Attribute */}
          <div className="test-case-container">
            <h6>"Refresh Page" button has aria-labelledby but this is empty 🚫</h6>
            <div role="button" id="refresh-btn" aria-labelledby=""></div>
            {/* Existing IDs in the DOM */}
            <span id="refresh-text">Refresh Page</span>
          </div>


          {/* Multiple Nonexistent IDs with Close Matches */}
          <div className="test-case-container">
            <h6>Both labels are similar to the button aria-labelledby attribute 🚫</h6>
            <div role="button" id="confirmation-dialog" aria-labelledby="dialog-title dialog-desc"></div>
            {/* Existing IDs in the DOM */}
            <h3 id="dialog-header">Confirm Action</h3>
            <p id="dialog-description">Do you want to proceed?</p>
          </div>

          {/* One Nonexistent ID and One with a Close Match */}
          <div className="test-case-container">
            <h6>One part of labelledby attribute does'nt exist 🚫</h6>
            <div role="button" id="confirmation-dialog" aria-labelledby="dialog-title dialog-descriptions"></div>
            {/* Existing IDs in the DOM */}
            <h3 id="dialog-header">Confirm Action</h3>
            <p id="dialog-description">Do you want to proceed?</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Aria-command-name (other cases)</h2>
        <p>Elements with role="link", role="button", or role="menuitem" must have one of the following characteristics: Inner text that is discernible to screen reader users,Non-empty aria-label attribute,aria-labelledby pointing to element with text which is discernible to screen reader users.</p>
        <div>
          <div className="test-case-container">
            <h6>Passed Examples</h6>

            <div role="link" id="al" aria-label="Name"></div>
            <div role="button" id="alb" aria-labelledby="labeldiv"></div>
            <div id="labeldiv">Button label</div>
            <div role="menuitem" id="combo" aria-label="Aria Name">Name</div>
            <div role="link" id="title" title="Title"></div>
          </div>
          <div className="test-case-container">
            <h6>Div without name associated with it 🚫</h6>

            <footer>
              <h2>Stay Connected</h2>
              <div role="link" id="empty"></div>
              <p>Follow us on social media for updates</p>
            </footer>
          </div>

          <div className="test-case-container">
            <h6>Missing aria-label on links 🚫</h6>
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
      </div>
      <div>
        <h2>Aria-deprecated-role</h2>
        <p>Deprecated roles should not be used</p>
        <div className="test-case-container">
          <h6>Div with depracted role "directory" 🚫</h6>
          <div role="directory">
            <p>Page content example</p>
          </div>
          </div>
      </div>
      <div>
        <h2>Aria-invalid-attribute</h2>
        <p></p>
        <div className="test-case-container">
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
      <div>
        <h2>ARIA-METER-NAME TESTS</h2>
        <div>
          <div role="meter" id="empty"></div>
          <div role="meter" id="alempty" aria-label=""></div>
          <div role="meter" id="albmissing" aria-labelledby="nonexistent"></div>
          <div role="meter" id="albempty" aria-labelledby="emptydiv"></div>
          <div id="emptydiv"></div>
          <div role="meter" id="valid-label-meter"></div>
          <div id="valid">Valid Label</div>
        </div>
      </div>
      <div>
        <h2>ARIA-REQUIRED-ATTR TESTS</h2>
        <div>
          <div role="combobox" aria-expanded="true" aria-controls=""></div>
          <div role="combobox" aria-expanded="true"></div>
          <div role="combobox" aria-controls=""></div>
          <div role="combobox" ></div>
          <div role="switch"></div>
          <div role="checkbox"></div>
          <div role="menu">
            <div role="menuitemcheckbox"></div>
            <div role="menuitemcheckbox"></div>
            <div role="menuitemradio"></div>
          </div>
          <div role="radio"></div>
          <div role="scrollbar"></div>
          <div role="slider"></div>
        </div>
      </div>
      <div>
        <h2>ARIA-REQUIRED-CHILDREN TESTS</h2>
        <div>
          <div role="list">
            <p>LIST ITEM</p>
          </div>
          <nav role="menu">

            <span>option 1</span>
            <span>option 2</span>

            <div role="menu">

              <p>Submenu without role="menuitem"</p>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <h2>ARIA-REQUIRED-PARENT TESTS</h2>
        <div>
          <div>
            <div>
              <div role="cell">This Cell needs row and row&apos;s parent options</div>
            </div>
          </div>
          <div>
            <div role="row">
              <div role="cell">This Cell has row, needs row&apos;s parent options</div>
            </div>
          </div>
          <div>
            <div role="rowgroup">
              <div>
                <div role="cell">This Cell has rowgroup, needs row in between and rowgroup&apos;s parent options</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div role="cell">This is Cell 1, it needs row and row&apos;s parent options</div>
            </div>
            <div>
              <div>This is supposed to be cell under row.  It should be remediated as part of Cell 1&apos;s remediation</div>
            </div>
          </div>
          <div>
            <div role="caption">caption needs parent options</div>
          </div>
          <div>
            <div role="treeitem">treeitem needs parent options</div>
            <div>Should be treeitem</div>
          </div>
          <div>
            <div role="option">option needs parent options</div>
            <div>Should be Option</div>
          </div>
          <div>
            <div role="menuitem">menuitem needs parent options</div>
            <div>Should be menuitem</div>
            <div>Should be menuitem</div>
          </div>
          <div>
            <div role="listitem">listitem needs parent list</div>
            <div>Should be listitem</div>
            <div>Should be listitem</div>
          </div>
          <div>
            <div role="tab">tab needs parent tablist</div>
            <div>Should be tab</div>
            <div>Should be tab</div>
          </div>
        </div>
      </div>
      <div>
        <h2>ARIA-TOOGLE TESTS</h2>
        <div>
          <ul role="menu">
            <li id="pass2" role="menuitemcheckbox" aria-checked="true">
            </li>
          </ul>
          <p id="pass3Label">Sans-serif</p>
          <ul role="menu">
            <li id="pass3" role="menuitemradio" aria-checked="true">
            </li>
            <li id="pass3" role="menuitemradio" aria-checked="true">
            </li>
          </ul>
          <div role="radiogroup">
            <div id="pass4" role="radio" aria-checked="false">
            </div>
            <div id="pass4" role="radio" aria-checked="false">
            </div>
          </div>
          <div id="fail5" role="switch" aria-checked="true">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div>
        <h2>ARIA-VALID-ATTR-VALUE TESTS</h2>
        <div
        >
          <input type="number" aria-valuemin="sadasdasdas"></input>
          <button role="tab" aria-selected="doaksdokoaksadsok">Tab 1</button>
          <div role="alert" aria-relevant="additidsdsons, remodsdsvals">New messages</div>
          <div aria-modal="balse">test</div>
          <div>
            <p id="more-info">This button submits your form and saves your data.</p>
            <button aria-details="wrong-id">Submit</button>
          </div>
          <div>
            <div id="submit-button">This buttons access the submition</div>
            <button aria-owns={false}>Click Me</button>
          </div>
        </div>
      </div>
      <div>
        <h2>BLINK-TAG TESTS</h2>
        <blink>Example blink-tag</blink>
      </div>
      <div>
        <h2>BUTTON-NAME TESTS</h2>
        <div>
          <p>click below to subscribe!</p>
          <button role="button"></button>
        </div>
      </div>
      <div>
        <h2>COLOR CONTRAST TESTS</h2>
        <div style={{ padding: "20px" }}>
          <h1 style={{ color: "#ffffff", backgroundColor: "#000000" }}>
            Good Contrast: White on Black
          </h1>
          <p style={{ color: "#999999", backgroundColor: "#ffffff" }}>
            Poor Contrast: Light Gray on White
          </p>
          <button style={{ color: "#ffffff", backgroundColor: "#0056B3" }}>
            Good Contrast: White on Blue Button
          </button>
          <div
            style={{
              color: "#ff0000",
              backgroundColor: "#ffcccc",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            Poor Contrast: Red on Light Red
          </div>
          <div
            style={{
              color: "#000000",
              backgroundColor: "#00ff00",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            Good Contrast: Black on Green
          </div>
          <div
            style={{
              color: "#000000",
              backgroundColor: "#ffff00",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            Good Contrast: Black on Yellow
          </div>
        </div>
      </div>
      <div>
        <h2>INPUT-BUTTON-NAME TESTS</h2>
        <form action="#">
          <label id="submit-here"></label>
          <input type="button" aria-labelledby="submit-here" />
        </form>
        <form action="#">
          <input type="button" id="first-name" />
        </form>
      </div>
      <div>
        <h2>LINK-NAME TESTS</h2>
        <div >
          <a href='https://www.google.com'></a>
        </div>
      </div>
      <div>
        <h2>META-REFRESH TESTS</h2>
        <div>
          <meta http-equiv="refresh" content="60" />
          <meta http-equiv="refresh" content={(60 * 60 * 20).toString()} />
          <meta http-equiv="content-security-policy" />
          <meta http-equiv="content-type" />
          <meta http-equiv="default-style" />
        </div>
      </div>
      <div>
        <h2>META-VIEWPORT TESTS</h2>
        <div>
          <meta name="viewport" />
          <meta name="viewport" content="user-scalable=no" />
          <meta name="viewport" content="user-scalable=no, maximum-scale=2.6" />
          <meta name="viewport" content="user-scalable=no, maximum-scale=1" />
        </div>
      </div>
      <div>
        <h2>NEURODIVERSITY RULESET</h2>
        <div>
          <h3>LANGUAGE OF PARTS</h3>
          <p>This text is mostly in english,mas essa parte é em portugues, but the rest still in english</p>
          <p>This text is working well , no remediations needed </p>
        </div>
        <div>
          <h3>UNUSUAL WORDS</h3>
          <p>He obfuscated it, now i can't see</p>
          <p>His walk through the verdant garden surprised the visitors</p>
          <p>This text is working well , no remediations needed </p>
        </div>
        <div>
          <h3>ABBREVIATIONS</h3>
          <p>The FBI is an american agency</p>
          <p>The FMI is an american agency</p>
          <p>This text is working well , no remediations needed </p>
        </div>
        <div>
          <h3>READING LEVEL</h3>
          <p>The ephemerality of hermeneutic ontology, intertwining with metacognitive dialectics, imposes a transcendent exegesis whose polysemy radiates through hermetic intertextuality, challenging immediate cognition and demanding a sophisticated semiotic decryption.</p>
          <p>This text is working well , no remediations needed </p>
        </div>
        <div>
          <h3>PRONUNCIATION</h3>
          <p>I read the book today, it's amazing!</p>
          <p>This text is working well , no remediations needed </p>
        </div>
      </div>
      <div>
        <h2>SCROLLABLE-REGION-FOCUSABLE TESTS</h2>
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
          {/* Scrollable section (compliant) */}
          <div
            style={{ width: "300px", height: "200px", overflow: "auto", background: "#f0f0f0", padding: "10px" }}
            tabIndex={0}
          >
            <p><strong>Focusable Scrollable Section</strong></p>
            <p style={{ height: "300px" }}>This section is scrollable and accessible.</p>
          </div>

          <div style={{ width: "300px", height: "200px", overflow: "auto", background: "#dcdcdc", padding: "10px" }}>
            <p><strong>Non-Focusable Scrollable Section</strong></p>
            <p style={{ height: "300px" }}>This section is scrollable, but cannot be focused via keyboard.</p>
          </div>

          <div style={{ width: "300px", height: "200px", overflow: "auto", background: "#dcdcdc", padding: "10px" }}>
            <p><strong>Non-Focusable Scrollable Section</strong></p>
            <p style={{ height: "300px" }}>This section is scrollable, but cannot be focused via keyboard.</p>
          </div>

          <div id="pass1" style={{ height: "200px", overflowY: "auto" }}>
            <div style={{ height: "2000px" }}>
              <p>Content</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>SELECT-NAME TESTS</h2>
        <div>
          <label>Choose a pet:</label>
          <select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <select>
            <option value="tesla">Tesla</option>
            <option value="ford">Ford</option>
            <option value="chevy">Chevy</option>
            <option value="mercedes">Mercedes</option>
            <option value="bmw">BMW</option>
          </select>
        </div>
      </div>
      <div>
        <h2>SVG-IMG-ALT TESTS</h2>
        <div>
          <div onClick={() => { }}>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              role="img"
              width={40}
              height={40}
            >
              <rect
                x="7"
                y="21"
                width="6"
                height="11"
                fill="#00286f"
                stroke-width="0"
              ></rect>
              <rect
                x="35"
                y="21"
                width="6"
                height="11"
                fill="#0d3b8d"
                stroke-width="0"
              ></rect>
              <rect
                x="35"
                y="21"
                width="6"
                height="5"
                fill="#00286f"
                stroke-width="0"
              ></rect>
              <path
                d="M40.235,28.199c-.705-.227-1.38-.248-2-.121-.635.13-1.235-.319-1.235-.967v-6.111H11v6.027c0,.605-.53,1.046-1.133.99-.701-.065-1.456.049-2.266.464-1.528.784-2.612,2.331-2.601,4.049.016,2.472,2.024,4.47,4.5,4.47.045,0,.086-.012.13-.013,1.255,3.56,3.715,6.635,7.05,8.614l1.215.725c1.848,1.092,3.961,1.674,6.105,1.674s4.257-.582,6.105-1.674l1.215-.725c3.648-2.165,6.254-5.642,7.373-9.632.103.008.202.031.307.031,2.477,0,4.428-2.251,3.919-4.819-.276-1.39-1.334-2.548-2.683-2.982Z"
                fill="#ffcdb4"
                stroke-width="0"
              ></path>
              <path
                d="M13,36v-8c0-1.105.895-2,2-2h22v-5H11v6.027c0,.605-.53,1.046-1.133.99-.701-.065-1.456.049-2.266.464-1.528.784-2.612,2.331-2.601,4.049.016,2.472,2.024,4.47,4.5,4.47.045,0,.086-.012.13-.013,1.255,3.56,3.715,6.635,7.05,8.614l1.215.725c.228.135.47.237.706.356-3.382-2.347-5.6-6.253-5.6-10.682Z"
                fill="#f6a28d"
                stroke-width="0"
              ></path>
              <path
                d="M24,42c-2.347,0-3.575-1.16-3.707-1.293-.391-.391-.391-1.023,0-1.414.388-.389,1.015-.39,1.404-.01.052.047.806.717,2.303.717,1.519,0,2.273-.689,2.305-.719.398-.374,1.027-.363,1.408.029.379.393.38,1.011-.006,1.396-.132.133-1.36,1.293-3.707,1.293Z"
                fill="#ec7d6e"
                stroke-width="0"
              ></path>
              <path
                d="M18,32c-.553,0-1-.447-1-1v-2c0-.553.447-1,1-1s1,.447,1,1v2c0,.553-.447,1-1,1Z"
                fill="#00286f"
                stroke-width="0"
              ></path>
              <path
                d="M30,32c-.553,0-1-.447-1-1v-2c0-.553.447-1,1-1s1,.447,1,1v2c0,.553-.447,1-1,1Z"
                fill="#00286f"
                stroke-width="0"
              ></path>
              <path
                d="M42,20v2H6v-2c0-5.12,2.14-9.74,5.58-13l-.05-.14c-.06-.16-.09-.32-.09-.48,0-.6.4-1.14,1.01-1.31.43-.12.86-.01,1.18.24,2.15-1.53,4.66-2.59,7.37-3.04l.08-.9c.07-.78.72-1.37,1.49-1.37h2.86c.77,0,1.42.59,1.49,1.37l.08.9c2.71.45,5.22,1.51,7.37,3.04.32-.25.75-.36,1.18-.24.61.17,1.01.71,1.01,1.31,0,.16-.03.32-.09.48l-.05.14c3.44,3.26,5.58,7.88,5.58,13Z"
                fill="#ffc343"
                stroke-width="0"
              ></path>
              <path
                d="M13.74,9.9c-.55.15-1.12-.15-1.32-.68l-.1-.26c-1.48,3.14-2.32,6.64-2.32,10.34v2.7h-4v-2c0-5.12,2.15-9.73,5.58-13l-.05-.14c-.29-.75.14-1.58.92-1.79l1.29,4.83Z"
                fill="#ffa221"
                stroke-width="0"
              ></path>
              <path
                d="M21,2.26l-.42,4.84c-.05.56-.84.62-.98.08l-1.12-4.31c.81-.27,1.66-.48,2.52-.61Z"
                fill="#ffa221"
                stroke-width="0"
              ></path>
              <path
                d="M29.52,2.87l-1.12,4.31c-.14.54-.93.48-.98-.08l-.42-4.84c.86.13,1.71.34,2.52.61Z"
                fill="#ffa221"
                stroke-width="0"
              ></path>
              <path
                d="M35.579,9.224l.893-2.362c.284-.751-.143-1.583-.918-1.791l-1.294,4.83c.548.147,1.119-.146,1.32-.677Z"
                fill="#ffa221"
                stroke-width="0"
              ></path>
              <rect
                x="3"
                y="19"
                width="42"
                height="5"
                rx="2"
                ry="2"
                fill="#ffa221"
                stroke-width="0"
              ></rect>
              <path
                d="M9,22.5v-2c0-.601.27-1.133.69-1.5h-4.69c-1.105,0-2,.895-2,2v1c0,1.105.895,2,2,2h4.69c-.419-.367-.69-.899-.69-1.5Z"
                fill="#ff8200"
                stroke-width="0"
              ></path>
            </svg>
          </div>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            role="img"
            width={40}
            height={40}
          >
            <circle cx="24" cy="24" r="22" fill="#ffa221" stroke-width="0"></circle>
            <path
              d="M27,42c-11.598,0-21-9.402-21-21,0-6.911,3.353-13.023,8.505-16.85C7.108,7.694,2,15.25,2,24c0,12.15,9.85,22,22,22,8.75,0,16.306-5.109,19.85-12.505-3.827,5.152-9.939,8.505-16.85,8.505Z"
              fill="#ff8200"
              stroke-width="0"
            ></path>
            <circle cx="24" cy="24" r="20" fill="#ffc343" stroke-width="0"></circle>
            <path
              d="M27,42c-11.598,0-21-9.402-21-21,0-3.257.763-6.328,2.086-9.078-2.553,3.358-4.086,7.534-4.086,12.078,0,11.046,8.954,20,20,20,4.544,0,8.72-1.533,12.079-4.086-2.751,1.323-5.822,2.086-9.079,2.086Z"
              fill="#ffa221"
              stroke-width="0"
            ></path>
            <path
              d="M38.967,24h-8.044c-.5,0-.913-.372-.985-.866-.226-1.558-1.052-2.923-2.233-3.848-.388-.304-.49-.846-.244-1.273l4.021-6.972c.294-.509.956-.65,1.444-.322,2.019,1.362,3.709,3.166,4.936,5.281,1.228,2.131,1.948,4.517,2.107,6.967.036.564-.435,1.033-1,1.033Z"
              fill="#555e77"
              stroke-width="0"
            ></path>
            <path
              d="M20.296,19.285c-1.181.926-2.007,2.29-2.233,3.848-.072.495-.485.866-.985.866h-8.044c-.565,0-1.037-.469-1-1.033.158-2.45.879-4.836,2.107-6.967,1.227-2.115,2.916-3.919,4.936-5.281.487-.329,1.15-.187,1.444.322l4.021,6.972c.246.427.144.969-.244,1.273Z"
              fill="#555e77"
              stroke-width="0"
            ></path>
            <path
              d="M31.484,36.964c.282.49.111,1.132-.395,1.382-2.198,1.084-4.624,1.653-7.088,1.653s-4.89-.569-7.088-1.653c-.507-.25-.678-.893-.395-1.382l4.02-6.971c.247-.429.77-.611,1.228-.424.688.28,1.441.431,2.235.431s1.547-.151,2.235-.431c.459-.186.981-.005,1.228.424l4.02,6.971Z"
              fill="#555e77"
              stroke-width="0"
            ></path>
            <circle cx="24" cy="24" r="3" fill="#555e77" stroke-width="0"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

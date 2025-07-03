'use client'
//http://localhost:3000/all-tests

let ids = []
for (var i = 0; i < 2; i++) {
    ids.push(i + 3)
}
const titleStyle = 'text-4xl font-bold'
const linkStyle = 'flex flex-col items-center justify-center p-6 mb-4 bg-[#201f65] rounded-lg shadow-md w-full h-full flex-grow flex-1 min-w-max text-white text-center text-sm font-bold'
const redDivStyle = 'text-white bg-red-500 p-[10px] my-[10px] rounded font-bold min-h-[48px]'
const blueButton = 'bg-blue-500 text-white border border-black p-2 rounded max-w-xs w-full min-h-[48px]'
const redButton = 'bg-red-500 text-white  p-2 rounded max-w-xs w-full min-h-[48px]'

const linkList = [
    'aria-command-name',
    'aria-conditional-attr',
    'aria-deprecated-role',
    'aria-meter-name',
    'aria-required-attr',
    'aria-required-parent',
    'aria-toggle',
    'aria-valid-attr-value',
    'blink-tag',
    'button-name',
    'color-contrast',
    'input-button-name',
    'link-name',
    'meta-refresh',
    'meta-viewport',
    'neurodiversity ruleset',
    'scrollable-region-focusable',
    'select-name',
    'summary-name',
    'svg-img-alt',
    'image-alt',
    'aria-roles',
    'aria-tooltip-name',
]

export default function AllTests() {

    return (
        <div className="flex flex-col items-center justify-start p-8 space-y-4 !bg-blue-500 container children-test-container ">
            <h1 className={titleStyle}>Not Compliant Tests</h1>
            <div className="!grid grid-cols-1 md:grid-cols-3 gap-4">
                {linkList.map(item => {
                    return (
                        <a
                            key={item}
                            href={`#${item}`}
                            className={linkStyle}
                        >
                            <p className="w-20 sm:w-36 lg:w-56">{item}</p>
                        </a>
                    )
                })}

            </div>
            <div id="aria-command-name">
                <h2>Aria-command-name (labbeledby cases)</h2>
                <p>Elements with role="link", role="button", or role="menuitem" must have one of the following characteristics: Inner text that is discernible to screen reader users,Non-empty aria-label attribute,aria-labelledby pointing to element with text which is discernible to screen reader users.</p>
                <div>

                    {/* Single Nonexistent ID with a Close Match */}
                    <div className="test-case-container">
                        <h6>"Save changes" has id pointing to a button which has a wrong aria-labelledby attribute 🚫</h6>
                        <div role="button" id="save-btn" aria-labelledby="sav-label"></div>
                        {/* Existing IDs in the DOM */}
                        <span id="save-label">Save Changes</span>
                        <h1 id="header">Welcome</h1>
                        <p id="description">This is a description.</p>
                        <button id="submit-btn">Submit</button>
                    </div>

                    {/* Single Nonexistent ID with No Close Match */}
                    <div className="test-case-container">
                        <h6>No matching id for "Home" link's aria-labelledby attribute 🚫</h6>
                        <div role="link" id="home-link" aria-labelledby="start-page">Home</div>
                        {/* Existing IDs in the DOM */}
                        <nav id="main-nav">...</nav>
                        <div id="content">...</div>
                    </div>

                    {/* Case Sensitivity Issues */}
                    <div className="test-case-container">
                        <h6>"Contact Us" has an aria-labelledby matching text but with lowercase letters (case sensitive) 🚫</h6>
                        <div role="link" id="contact-us-link" aria-labelledby="ContactUsHeading"></div>
                        {/* Existing IDs in the DOM */}
                        <h2 id="contactusheading">Contact Us</h2>
                    </div>

                    {/* Empty aria-labelledby Attribute */}
                    <div className="test-case-container">
                        <h6>"Refresh Page" button has aria-labelledby but value is empty 🚫</h6>
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
                        <h6>One part of aria-labelledby attribute doesn't exist 🚫</h6>
                        <div role="button" id="confirmation-dialog" aria-labelledby="dialog-title dialog-descriptions"></div>
                        {/* Existing IDs in the DOM */}
                        <h3 id="dialog-header">Confirm Action</h3>
                        <p id="dialog-description">Do you want to proceed?</p>
                    </div>
                </div>
            </div>
            <div >
                <h2>Aria-command-name (other cases)</h2>
                <p>Elements with role="link", role="button", or role="menuitem" must have one of the following characteristics: (1) Inner text that is discernible to screen reader users (2) Non-empty aria-label attribute (3) aria-labelledby pointing to element with text which is discernible to screen reader users.</p>
                <div>
                    <div className="test-case-container">
                        <h6>Pass Examples</h6>

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
            <div id="aria-conditional-attr">
                <h2>Aria-conditional-attr</h2>
                <p>ARIA conditional attributes must be used appropriately based on element context</p>
                <div className="test-case-container">
                    <h6>ARIA conditional attributes used incorrectly 🚫</h6>

                    {/* Violation: aria-checked on native checkbox */}
                    <div className="mb-4">
                        <input type="checkbox" aria-checked="true" />
                        <label className="ml-2">Checkbox with aria-checked (violation)</label>
                    </div>

                    {/* Violation: aria-checked on native radio */}
                    <div className="mb-4">
                        <input type="radio" aria-checked="true" name="test" />
                        <label className="ml-2">Radio with aria-checked (violation)</label>
                    </div>

                    {/* Violation: conditional attributes on table row without treegrid */}
                    <div className="mb-4">
                        <table className="border border-gray-300">
                            <tbody>
                                <tr aria-posinset={1} aria-setsize={3} className="border-b">
                                    <td className="p-2">Row with aria-posinset/setsize in table (violation)</td>
                                </tr>
                                <tr aria-expanded="false" aria-level={2} className="border-b">
                                    <td className="p-2">Row with aria-expanded/level in table (violation)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Violation: conditional attributes on grid row */}
                    <div className="mb-4">
                        <div role="grid" className="border border-gray-300">
                            <div role="row" aria-posinset={2} aria-setsize={5} className="border-b">
                                <div role="gridcell" className="p-2">Grid row with conditional attrs (violation)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="aria-deprecated-role">
                <h2>Aria-deprecated-role</h2>
                <p>Deprecated roles should not be used</p>
                <div className="test-case-container">
                    <h6>Div with depracted role "directory" 🚫</h6>
                    <div role="directory">
                        <p>Page content example</p>
                    </div>
                </div>
            </div>
            <div id="aria-meter-name">
                <h2>Aria-meter-name</h2>
                <p>Aria meter nodes must have an accessible name.</p>
                <div className="test-case-container">
                    <h6>Divs with role "meter" has no accessible name 🚫</h6>
                    <div role="meter" id="empty"></div>
                    <div role="meter" id="alempty" aria-label=""></div>
                    <div role="meter" id="albmissing" aria-labelledby="nonexistent"></div>
                    <div role="meter" id="albempty" aria-labelledby="emptydiv"></div>
                    <div id="emptydiv"></div>
                    <div role="meter" id="valid-label-meter"></div>
                    <div id="valid">Valid Label</div>
                </div>
            </div>
            <div id="aria-progressbar-name">
                <div role="progressbar" id="empty"></div>
                <div role="progressbar" id="alempty" aria-label=""></div>
                <div role="progressbar" id="albmissing" aria-labelledby="nonexistent"></div>
                <div role="progressbar" id="albempty" aria-labelledby="emptydiv"></div>
                <div id="emptydiv"></div>
                <div role="progressbar" id="valid-label-progressbar"></div>
                <div id="valid">Valid Label</div>
            </div>
            <div id="aria-required-attr">
                <h2>Aria-required-attr</h2>
                <p>Required ARIA attributes must be provided</p>
                <div className="test-case-container">
                    <h6>Divs do not have all required attributes 🚫</h6>
                    <p>Empty aria-controls attribute (aria-controls is required for "combobox" role)</p>
                    <div role="combobox" aria-expanded="true" aria-controls="" className={redDivStyle}></div>
                    <p>No aria-controls attribute defined (aria-controls is required for "combobox" role)</p>
                    <div role="combobox" aria-expanded="true" className={redDivStyle}></div>
                    <p>Empty aria-controls attribute (aria-controls is required for "combobox" role) and no aria-expanded attribute (aria-expanded is required for "combobox" role)</p>
                    <div role="combobox" aria-controls="" className={redDivStyle}></div>
                    <p>No aria-controls attribute (aria-controls is required for "combobox" role) and no aria-expanded attribute (aria-expanded is required for "combobox" role)</p>
                    <div role="combobox" className={redDivStyle}></div>
                    <p>No aria-checked attribute (aria-checked is required for "switch" role)</p>
                    <div role="switch" className={redDivStyle}></div>
                    <p>No aria-checked attribute (aria-checked is required for "checkbox" role)</p>
                    <div role="checkbox" className={redDivStyle}></div>
                    <p>No aria-checked attribute ("menuitemcheckbox" and "menuitemradio" roles requires aria-checked)</p>
                    <div role="menu" className={redDivStyle}>
                        <div role="menuitemcheckbox"></div>
                        <div role="menuitemcheckbox"></div>
                        <div role="menuitemradio"></div>
                    </div>
                    <p>No aria-checked attribute (aria-checked is required for "radio role")</p>
                    <div role="radio" className={redDivStyle}></div>
                    <p>No aria-valuemax,aria-valuemin,aria-valuenow attributes (all required for "scrollbar" role)</p>
                    <div role="scrollbar" className={redDivStyle}></div>
                    <p>No aria-valuemax,aria-valuemin,aria-valuenow attributes (all required for "slider" role)</p>
                    <div role="slider" className={redDivStyle}></div>
                </div>
            </div>
            <div id="aria-required-parent">
                <h2>Aria-required-parent</h2>
                <p>Certain ARIA roles must be contained by particular parent elements</p>
                <div>
                    <div className="test-case-container">
                        <h6>Cell with role \"cell\" needs row on parent option 🚫</h6>
                        <div>
                            <div role="cell" className={redDivStyle}>This cell needs row and row&apos;s parent options</div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="aria-toggle">
                <h2>Aria-toggle</h2>
                <p>ARIA toggle fields must have an accessible name</p>
                <div className="test-case-container">
                    <h6>Tags with roles like switch must have an accessible name 🚫</h6>
                    <div id="fail5" role="switch" aria-checked="true" className={redDivStyle}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div id="aria-valid-attr-value">
                <h2>Aria-valid-attr-value</h2>
                <p>ARIA attributes must conform to valid values</p>
                <div
                    className="test-case-container"
                >
                    <h6>The inputs have no accessible names 🚫</h6>
                    <div className={redDivStyle}>
                        <p>Input type number with wrong type on value (string)</p>
                        <input type="number" aria-valuemin="sadasdasdas"></input>
                    </div>
                    <button role="tab" aria-selected="doaksdokoaksadsok" className={redDivStyle}>Element with role tab and wrong aria-selected attribute value.</button>
                    <div role="alert" aria-relevant="additidsdsons, remodsdsvals" className={redDivStyle}>aria-relevant with wrong values.</div>
                    <div aria-modal="balse" className={redDivStyle}>aria-modal div with wrong value.</div>
                    <div>
                        <p id="more-info" className="my-2">This button submits your form and saves your data (it has the wrong value on aria-details attribute)</p>
                        <button aria-details="wrong-id" className={blueButton}>Submit</button>
                    </div>
                    <div>
                        <div id="submit-button" className="my-2">This buttons access the submition (it has the wrong value on aria-owns attribute)</div>
                        <button aria-owns={false} className={blueButton}>Click Me</button>
                    </div>
                </div>
            </div>
            <div id="blink-tag">
                <h2>Blink-tag</h2>
                <p>"blink" elements are deprecated and must not be used</p>
                <div className="test-case-container">
                    <h6>No content shoul be wrapped in a blink tag 🚫</h6>
                    <blink className={redDivStyle}>Example blink-tag</blink>
                </div>
            </div>
            <div id="button-name">
                <h2>Button-name</h2>
                <p>Buttons must have discernible text</p>
                <div className="test-case-container">
                    <h6>Button without accessible name 🚫</h6>
                    <p>Click below to subscribe!</p>
                    <button role="button" className={redButton} ></button>
                </div>
            </div>
            <div id="color-contrast">
                <h2>Color-contrast</h2>
                <p>Elements must meet minimum color contrast ratio thresholds</p>
                <div className="test-case-container" style={{ padding: '20px' }}>
                    <h1 style={{ color: '#ffffff', backgroundColor: '#000000' }}>
            Good Contrast: White on Black
                    </h1>
                    <p style={{ color: '#999999', backgroundColor: '#ffffff' }}>
            Poor Contrast: Light Gray on White
                    </p>
                    <button style={{ color: '#ffffff', backgroundColor: '#0056B3' }}>
            Good Contrast: White on Blue Button
                    </button>
                    <div
                        style={{
                            color: '#ff0000',
                            backgroundColor: '#ffcccc',
                            padding: '10px',
                            marginTop: '20px',
                        }}
                    >
            Poor Contrast: Red on Light Red
                    </div>
                    <div
                        style={{
                            color: '#000000',
                            backgroundColor: '#00ff00',
                            padding: '10px',
                            marginTop: '20px',
                        }}
                    >
            Good Contrast: Black on Green
                    </div>
                    <div
                        style={{
                            color: '#000000',
                            backgroundColor: '#ffff00',
                            padding: '10px',
                            marginTop: '20px',
                        }}
                    >
            Good Contrast: Black on Yellow
                    </div>
                </div>
            </div>
            <div id="dlitem">
                <div>
                    <dt>Type</dt>
                    <dd>Definition</dd>
                    <dt>Lonely Type</dt>
                </div>
            </div>
            <div id="frame-title">
                <iframe title="Passing Frame Title"><div>Frame Body</div></iframe>
                <iframe><div>Body of Invalid Frame</div></iframe>
            </div>
            <div id="input-button-name">
                <h2>Input-button-name</h2>
                <p>Input buttons must have discernible text.</p>
                <div className="test-case-container">
                    <h6>Input buttons without an accessible name 🚫</h6>
                    <p>Button with aria-labelledy pointing for a component wich doesn't have an accessible name</p>
                    <form action="#">
                        <label id="submit-here"></label>
                        <input type="button" aria-labelledby="submit-here" className={redDivStyle} />
                    </form>
                    <p>Button without any accessible name</p>
                    <form action="#">
                        <input type="button" id="first-name" className={redDivStyle} />
                    </form>
                </div>
            </div>
            <div id="link-name">
                <h2>Link-name</h2>
                <p>Links must have discernible text</p>
                <div className="test-case-container">
                    <h6>Link without accessible name 🚫</h6>
                    <a href="https://www.google.com" className={redDivStyle}></a>
                </div>
            </div>
            <div id="meta-refresh">
                <h2>Meta-refresh</h2>
                <p>Delayed refresh under 20 hours must not be used</p>
                <div className="test-case-container">
                    <h6>Under 20 minutes refresh meta tags 🚫</h6>
                    <meta http-equiv="refresh" content="60" />
                    <meta http-equiv="refresh" content={(60 * 60 * 20).toString()} />
                    <meta http-equiv="content-security-policy" />
                    <meta http-equiv="content-type" />
                    <meta http-equiv="default-style" />
                </div>
            </div>
            <div id="meta-viewport">
                <h2>Meta-viewport</h2>
                <p>Zooming and scaling must not be disabled</p>
                <div className="test-case-container">
                    <h6>Meta tags disabling zoom on page 🚫</h6>
                    <meta name="viewport" />
                    <meta name="viewport" content="user-scalable=no" />
                    <meta name="viewport" content="user-scalable=no, maximum-scale=2.6" />
                    <meta name="viewport" content="user-scalable=no, maximum-scale=1" />
                </div>
            </div>
            <div id="neurodiversity ruleset">
                <h2>Neurodiversity ruleset</h2>
                <p>The WCAG Neurodiversity rules (3.1.1 – 3.1.6) focus on making content accessible for people with dyslexia, ADHD, autism, and other cognitive conditions. They ensure text is clear and understandable, requiring language identification (3.1.1, 3.1.2), definitions for unusual words (3.1.3), expanded forms for abbreviations (3.1.4), simpler alternatives for complex content (3.1.5), and pronunciation guidance when necessary (3.1.6).</p>
                <div className="test-case-container">
                    <h6>Language-of-parts (parts of the text that are not part of the main language should be contained in a "span" tag with attribute lang="language")🚫</h6>
                    <p>This text is mostly in english,mas essa parte é em portugues, but the rest still in english</p>
                    <p>This text is working well , no remediations needed </p>
                </div>
                <div className="test-case-container">
                    <h6>Unusual-words (parts of the text that are not usual words should have is meaning explained)🚫</h6>
                    <p>He obfuscated it, now i can't see</p>
                    <p>His walk through the verdant garden surprised the visitors</p>
                    <p>This text is working well , no remediations needed </p>
                </div>
                <div className="test-case-container">
                    <h6>{'Abbreviations (abbreviations should be wrapped in an <abbr> tag with its meaning on title attribute)🚫'}</h6>
                    <p>The FBI is an american agency</p>
                    <p>The FMI is an american agency</p>
                    <p>This text is working well , no remediations needed </p>
                </div>
                <div className="test-case-container">
                    <h6>Reading-level (provide a simpler alternative for text that not demands advanced reading skills beyond lower secondary education)🚫</h6>
                    <p>The ephemerality of hermeneutic ontology, intertwining with metacognitive dialectics, imposes a transcendent exegesis whose polysemy radiates through hermetic intertextuality, challenging immediate cognition and demanding a sophisticated semiotic decryption.</p>
                    <p>This text is working well , no remediations needed </p>
                </div>
                <div className="test-case-container">
                    <h6>Pronunciation (ambigous words should have his pronunciation detailed in the text)🚫</h6>
                    <p>I read the book today, it's amazing!</p>
                    <p>This text is working well , no remediations needed </p>
                </div>
            </div>
            <div id="role-img-alt">
                <div id="valid-cases">
                    <div role="img" aria-label="Valid Label" id="pass1"></div>
                    <div id="match">Bananas</div>
                    <div role="img" aria-labelledby="match" id="pass2"></div>
                    <div id="hidden-match" style={{ display:'none' }}>Banana bombs</div>
                    <div role="img" aria-labelledby="hidden-match" id="pass3"></div>
                    <div role="img" title="title" id="pass4"></div>
                </div>
                <div id="invalid-cases">
                    <div role="img" id="violation1"></div>
                    <div role="img" aria-label="" id="violation2"></div>
                    <div role="img" aria-labelledby="no-match" id="violation3"></div>
                    <div role="img" title="" id="violation4"></div>
                </div>
            </div>
            <div id="scrollable-region-focusable">
                <h2>Scrollable-region-focusable</h2>
                <p>Ensure that a scrollable region has keyboard access</p>
                <div class="flex flex-col md:flex-row gap-3 p-3">
                    {/* Scrollable section (compliant) */}
                    <div

                        className="w-full max-w-[300px] h-[200px] overflow-auto bg-[#f0f0f0] p-2"
                        tabIndex={0}
                    >
                        <p><strong>Focusable Scrollable Section</strong></p>
                        <p style={{ height: '300px' }}>This section is scrollable and accessible.</p>
                    </div>

                    <div className="w-full max-w-[300px] h-[200px] overflow-auto bg-[#dcdcdc] p-2">
                        <p><strong>Non-Focusable Scrollable Section</strong></p>
                        <p style={{ height: '300px' }}>This section is scrollable, but cannot be focused via keyboard.</p>
                    </div>

                    <div className="w-full max-w-[300px] h-[200px] overflow-auto bg-[#dcdcdc] p-2">
                        <p><strong>Non-Focusable Scrollable Section</strong></p>
                        <p style={{ height: '300px' }}>This section is scrollable, but cannot be focused via keyboard.</p>
                    </div>

                    <div id="pass1" className="w-full max-w-[300px] h-[200px] overflowY-auto bg-[#dcdcdc] p-2">
                        <div style={{ height: '2000px' }}>
                            <p>Content</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="select-name">
                <h2>Select-name</h2>
                <p>Select element must have an accessible name</p>
                <div className="test-case-container">
                    <h6>Select without an acessible name on options 🚫</h6>
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
            <div id="summary-name">
                <h2>Summary-name</h2>
                <p>Summary elements must have an accessible name</p>
                <div className="test-case-container">
                    {/* Empty summary */}
                    <h3>Specifications</h3>
                    <p>This section contains detailed product specifications.</p>
                    <details>
                        <summary></summary>
                        <ul>
                            <li>Dimensions: 10x10 inches</li>
                            <li>Weight: 2 lbs</li>
                        </ul>
                    </details>

                    {/* aria-labelledby points to missing ID */}
                    <p id="id-not-connecting-to-summary">Payment Instructions</p>
                    <details>
                        <summary aria-labelledby="label-for-payment-instructions"></summary>
                        <p>Please follow the payment instructions carefully.</p>
                    </details>

                    {/* aria-labelledby points to empty element */}
                    <h3>Returns and Exchanges</h3>
                    <p id="empty-label"></p>
                    <details>
                        <summary aria-labelledby="empty-label"></summary>
                        <p>Our return policy allows exchanges within 30 days.</p>
                    </details>

                    {/* Only whitespace */}
                    <h3>Care Instructions</h3>
                    <p>Learn how to care for your product below.</p>
                    <details>
                        <summary>   </summary>
                        <ul>
                            <li>Machine wash cold</li>
                            <li>Do not bleach</li>
                        </ul>
                    </details>

                    {/* Icon only */}
                    <h3>More Information</h3>
                    <p>Additional resources about this product.</p>
                    <details>
                        <summary>
                            <svg width="16" height="16" aria-hidden="true">
                                <path d="M2 2 L14 8 L2 14 Z" />
                            </svg>
                        </summary>
                        <p>Here are more details about product usage.</p>
                    </details>

                    {/* aria-label set to empty string */}
                    <h3>Delivery Options</h3>
                    <p>Review available delivery methods below.</p>
                    <details>
                        <summary aria-label=""></summary>
                        <ul>
                            <li>Standard Shipping</li>
                            <li>Next-Day Delivery</li>
                        </ul>
                    </details>

                    {/* aria-labelledby set to empty string */}
                    <h3>Returns and Exchanges</h3>
                    <p id="empty-label"></p>
                    <details>
                        <summary aria-labelledby=""></summary>
                        <p>Our return policy allows exchanges within 30 days.</p>
                    </details>
                </div>
            </div>
            <div id="svg-img-alt">
                <h2>Svg-img-alt</h2>
                <p>SVG images and graphics require accessible text</p>
                <div >
                    <div onClick={() => { }} className="test-case-container">
                        <h6>Action SVGs must have an accessible name related with the SVG 🚫</h6>
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
                    <div className="test-case-container">
                        <h6>Non-action SVGs must have some label related with the SVG 🚫</h6>
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
            <div id="td-headers-attr">
                <table>
                    <thead>
                        <tr>
                            <th id="product" scope="col">Product</th>
                            <th id="price" scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="widget-a" headers="widget-a product">Widget A</td>
                            <td headers="price">$10.99</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="definition-list">
                <dl>
                    <dt>Pet</dt>
                    <dd>Dog</dd>
                    <div>
                        <dd>Animal</dd>
                        <dt>Lion</dt>
                    </div>
                    <button>I am a button</button>
                </dl>
            </div>
            <div id="image-alt">
                <h2>Image-alt</h2>
                <p>Images must have alternate text</p>
                <div >
                    <div className="test-case-container">
                        <h6>Images without any alternative text 🚫</h6>
                        <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-6 md:p-24">
                            {ids.map((id) => {
                                return <div key={id}><img className="object-fill w-full h-full" key={id} src={`https://picsum.photos/id/${id}/200/300`}></img></div>
                            })}
                        </div>

                        <h6>Area images without any alternative text related 🚫</h6>
                        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-6 md:p-24">
              <div>
                <div>
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190227165729/area11.png"
                    alt="" width="300" height="119"
                    useMap="#shapemap" />
                  <map name="shapemap">
                    <area shape="poly" coords="59,31,28,83,91,83"
                      href="https://media.geeksforgeeks.org/wp-content/uploads/20190227165802/area2.png"
                    />

                    <area shape="circle" coords="155,56,26"
                      href="https://media.geeksforgeeks.org/wp-content/uploads/20190227165934/area3.png"
                    />

                    <area shape="rect" coords="224,30,276,82"
                      href="https://media.geeksforgeeks.org/wp-content/uploads/20190227170021/area4.png"
                    />
                  </map>
                  <svg role="img" fill="#000000" width="200px" height="200px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"><path d="M8.49,12.68v4.61c0,.34,.23,.61,.53,.71v5.48c0,.13-.14,3.21,1.88,5.34,1.22,1.28,2.93,1.94,5.09,1.94s3.88-.65,5.09-1.94c2.02-2.13,1.89-5.21,1.88-5.3v-5.52c.3-.1,.53-.37,.53-.71v-4.61c1.71-.69,2.92-2.36,2.92-4.32,0-2.57-2.09-4.67-4.67-4.67-.49,0-.98,.08-1.46,.23-1.09-1.67-2.93-2.68-4.94-2.68s-3.68,.91-4.79,2.46c-2.74-.22-5.01,1.96-5.01,4.65,0,1.96,1.21,3.63,2.92,4.32Zm11.51,15.11c-.92,.97-2.27,1.46-4,1.46s-3.07-.49-4-1.46c-1.58-1.66-1.48-4.21-1.48-4.28v-5.48h10.96v5.51s.1,2.58-1.48,4.24Zm2.01-14.77v3.51H9.99v-3.51h12.02ZM10.23,5.19c.21,0,.4,.02,.59,.05,.3,.05,.61-.09,.77-.35,.81-1.34,2.22-2.15,3.78-2.15,1.68,0,3.19,.94,3.95,2.45,.09,.18,.25,.31,.43,.38,.19,.06,.39,.05,.57-.04,.45-.23,.95-.35,1.44-.35,1.75,0,3.17,1.42,3.17,3.17s-1.42,3.17-3.17,3.17H10.23c-1.75,0-3.17-1.42-3.17-3.17s1.42-3.17,3.17-3.17Z" /><path d="M14.26,5.25c1.5,.28,2.59,1.59,2.59,3.11,0,.41,.34,.75,.75,.75s.75-.34,.75-.75c0-2.24-1.6-4.17-3.81-4.59-.4-.07-.8,.19-.88,.6-.08,.41,.19,.8,.6,.88Z" /><circle cx="13.32" cy="20.07" r="1.25" /><circle cx="18.68" cy="20.07" r="1.25" /><path d="M17.56,24.5h-3.12c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h3.12c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z" /></svg>
                </div>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
            <div id="aria-roles">
                <h2>Aria-roles</h2>
                <p>ARIA roles used must conform to valid values</p>
                <div >
                    <div className="test-case-container">
                        <h6>Aria-roles without valid values by tag 🚫</h6>
                        <div role="buttonish" className={redDivStyle}>
              Invalid role: "buttonish"
                        </div>
                        <div role="headingg" aria-level="2" className={redDivStyle}>
              Invalid role: "headingg"
                        </div>
                        <div role="select" className={redDivStyle}>
              Invalid role: "select" (abstract role)
                        </div>
                        <span role="superstar" className={redDivStyle}>
              Invalid role: "superstar"
                        </span>

                        <p role="navigation" className={redDivStyle}>
              Paragraph with role "navigation" — not valid for this tag
                        </p>
                    </div>
                </div>
            </div>
            <div id="aria-tooltip-name">
                <h2>Aria-tooltip-name</h2>
                <p>ARIA tooltip must have an accessible name</p>
                <div >
                    <div className="test-case-container">
                        <h6>Aria-tooltip divs without any text inside or any aria-label 🚫</h6>
                        <div role="tooltip" className={redDivStyle}>
                        </div>
                        <div role="tooltip" aria-labelledby="missing-label" className={redDivStyle}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

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

      <nav>
        <ul role="menu">
          <li role="menuitem" id="albmissing" aria-labelledby="nonexistent"></li>
        </ul>
      </nav>

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
    </div>
  );
}
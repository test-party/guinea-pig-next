//http://localhost:3000/aria-command-name/aria-labelledby-cases
export default function Page() {
  return (
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
  )
}
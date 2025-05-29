// http://localhost:3000/aria-braille-equivalent
export default function Page() {
  return (
    <div>
      <h1>Test Page for aria-braille-equivalent Violations</h1>

      <button aria-braillelabel="Submit form">
        Submit
      </button>

      <div role="navigation" aria-brailleroledescription="Site menu">
        <ul>
          <li><a href="/home">Home</a></li>
        </ul>
      </div>

      <a href="/profile" aria-braillelabel="User profile link" aria-label="Go to your account">
        Profile
      </a>

      <button aria-braillelabel="Close window" aria-label="">
        Close
      </button>

      <span aria-brailleroledescription="Decorative element">
        Star icon
      </span>

      <div aria-braillelabel="Hidden content" hidden>
        This is hidden
      </div>
    </div>
  );
}
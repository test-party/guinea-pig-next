//http://localhost:3000/aria-braille-equivalent
export default function Page() {
    return (
      <body>
        <div aria-brailleroledescription="slide" aria-roledescription="">BACON</div>
        <div aria-braillelabel=''>EGG</div>
        <div aria-braillelabel="****" aria-brailleroledescription="slide">CHEESE</div>
        <div aria-labelledby="slideheading" aria-brailleroledescription="slide">
          <h1 id="slideheading">My vacation in Rome</h1>
        </div>
      </body>
    )
  }
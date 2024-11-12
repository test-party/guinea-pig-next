//http://localhost:3000/aria-braille-equivalent
export default function Page() {
    return (
      <body>
        <div
          role="article"
          id="slide"
          aria-brailleroledescription="slide">BACON</div>
        <div
          role="article"
          id="slide"
          aria-braillelabel="****">EGG</div>
        <div
          role="article"
          id="slide"
          aria-braillelabel="****"
          aria-brailleroledescription="slide">CHEESE</div>
      </body>
    )
  }
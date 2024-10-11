//http://localhost:3000/all-tests
import OnInput36 from "./on-input-36";
import OnInput37 from "./on-input-37";

let ids: number[] = [];
for (var i = 0; i < 39; i++) {
  ids.push(i + 3);
}

export default function AllTests() {
 
  return (
    <body aria-hidden="true">
      <h1>My page</h1>
      <div style={{ width: "100%", maxHeight: "200px" }}>
        <audio controls>
          <source
            src="https://codify-audio.s3.amazonaws.com/20VC__Keith_Rabois_Exclusive.mp3"
            type="audio/mpeg"
          ></source>
        </audio>
      </div>
      <div>
        <blink>This is a blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
        <blink>This is another blinking text</blink>
      </div>
      <div>
        <h1>Heading 1.</h1>
        <h2>Heading 2.</h2>
        <p>This is a paragraph.</p>

        <h2>Heading 2..</h2>
        <h4>Heading 4.</h4>
        <h5>Heading 5.</h5>
        <h6>Heading 6.</h6>
        <p>This is a paragraph..</p>

        <div>
          <div>
            <h2>This is a Heading 2</h2>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h4>This is a Card Title</h4>
              <p>This is the description</p>
            </div>
            <div>
              <h4>This is a Card Title</h4>
              <p>This is the description</p>
            </div>
            <div>
              <h4>This is a Card Title</h4>
              <p>This is the description</p>
            </div>
          </div>
        </div>

        <h2>Heading 2...</h2>
        <p>This is a paragraph.....</p>
      </div>

      <div style={{ width: "100%" }}>
        {ids.map((id) => {
          return (
            <div>
              <img
                className="object-fill w-full h-full"
                key={id}
                src={`https://picsum.photos/id/${id}/200/300`}
              ></img>
            </div>
          );
        })}
      </div>
        
      <div>
        <ul>
          <li>Raindrops on roses</li>
          <li>Whiskers on kittens</li>
          <li>Bright copper kettles</li>
          <li>Warm woolen mittens</li>
          <li>Brown paper packages tied up with strings</li>
          <li>Cream colored ponies</li>
          <li>Crisp apple streudels</li>
          <li>Doorbells and sleigh bells</li>
          <li>Schnitzel with noodles</li>
          <li>Wild geese that fly with the moon on their wings</li>
          <li>Girls in white dresses with blue satin sashes</li>
          <li>Snowflakes that stay on my nose and eyelashes</li>
          <li>Silver white winters that melt into springs</li>
        </ul>
      </div>
      <div>
        <OnInput36/>
      </div>
      <div>
        <OnInput37/>
      </div>
      <div>
        <ul>
          <li>Raindrops on roses</li>
          <div>
            <p>Hello</p>
          </div>
          <li>Whiskers on kittens</li>
          <li>Bright copper kettles</li>
          <li>Warm woolen mittens</li>
          <li>Brown paper packages tied up with strings</li>
          <li>Cream colored ponies</li>
          <li>Crisp apple streudels</li>
          <p>Hello</p>
          <li>Doorbells and sleigh bells</li>
          <li>Schnitzel with noodles</li>
          <li>Wild geese that fly with the moon on their wings</li>
          <li>Girls in white dresses with blue satin sashes</li>
          <li>Snowflakes that stay on my nose and eyelashes</li>
          <li>Silver white winters that melt into springs</li>
          <ul>
            <p></p>
          </ul>
        </ul>
      </div>
      <div>
        <ul>
          <li>Valid Item 1</li>
          <li>Valid Item 2</li>
        </ul>
        <li>Invalid A</li>
        <li>Invalid B</li>
        <li>Invalid C</li>
        <p>a</p>
        <li>Invalid D</li>
        {/* This is a comment */}
        <li>Invalid E</li>
        <p></p>
        <li>Invalid F</li>

        <li>Invalid G</li>
        <div>
          <li>Invalid H</li>
          <li>Invalid I</li>
          <li>Invalid J</li>
        </div>
        <div>
          <li></li>
          <li>Invalid K</li>
        </div>
        <li>Invalid L</li>
        <div>
          <li>List Item I</li>
          <li>List Item II</li>
          <li>List Item III</li>
        </div>
        <li>Invalid M</li>

        <li>Invalid N</li>
        <li>Invalid O</li>
        <li>Invalid P</li>
      </div>
    </body>
  );
}

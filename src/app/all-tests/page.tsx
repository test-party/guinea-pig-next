//http://localhost:3000/all-tests
import OnInput36 from "./on-input-36";
import OnInput37 from "./on-input-37";

let ids: number[] = [];
for (var i = 0; i < 39; i++) {
  ids.push(i + 3);
}

export default function AllTests() {
  return (
    <body>
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
        <OnInput36 />
      </div>
      <div>
        <OnInput37 />
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
          <ul></ul>
        </ul>
      </div>
      <div>
        <ul>
          <li>Valid Item 1</li>
          <li>Valid Item 2</li>
        </ul>
        <ul>
          <li>Invalid A</li>
          <li>Invalid B</li>
          <li>Invalid C</li>
        </ul>
        <p>a</p>
        <ul>
          <li>Invalid D</li>
          {/* This is a comment */}
          <li>Invalid E</li>
        </ul>
        <p></p>
        <ul>
          <li>Invalid F</li>

          <li>Invalid G</li>
        </ul>
        <div>
          <ul>
            <li>Invalid H</li>
            <li>Invalid I</li>
            <li>Invalid J</li>
          </ul>
        </div>
        <div>
          <ul>
            <li></li>
            <li>Invalid K</li>
          </ul>
        </div>
        <ul>
          <li>Invalid L</li>
        </ul>
        <div>
          <ul>
            <li>List Item I</li>
            <li>List Item II</li>
            <li>List Item III</li>
          </ul>
        </div>
        <ul>
          <li>Invalid M</li>

          <li>Invalid N</li>
          <li>Invalid O</li>
          <li>Invalid P</li>
        </ul>
      </div>
      <header role="generic" aria-label="header"></header>
      <div>
        <h1>My Page</h1>
        <span aria-label="span">test</span>
        <a aria-label="a">dsadasd</a>
        <span aria-label="span" role="alert">
          test
        </span>
        <p>
          test <br aria-label="br" />
          sdasd
        </p>
        <link aria-label="link" />
        <input type="radio" aria-checked="true"></input>
        <input type="hidden" aria-label="hidden"></input>
        <input type="range" aria-valuemax={200} aria-valuemin={1}></input>
        <input type="text" list="" aria-haspopup="true"></input>
        <input type="xxx" list="" aria-haspopup="true"></input>
        <input list="" aria-haspopup="true"></input>
        <option aria-selected="true">test</option>
        <img aria-selected="true"></img>
        <img aria-hidden="false"></img>
        <div role="combobox" aria-expanded="true" aria-controls=""></div>
        <div role="combobox" aria-expanded="true"></div>
        <div role="combobox" aria-controls=""></div>
        <div role="combobox"></div>
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
            <div role="cell">
              This Cell has rowgroup, needs row in between and rowgroup&apos;s parent
              options
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div role="cell">
            This is Cell 1, it needs row and row&apos;s parent options
          </div>
        </div>
        <div>
          <div>
            This is supposed to be cell under row. It should be remediated as
            part of Cell 1&apos;s remediation
          </div>
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
     <div>
        <meta http-equiv="refresh" content="10" />
        <meta http-equiv="refresh" content={(60 * 60 * 20).toString()} />
        {/* <meta http-equiv="content-security-policy" /> */}
        <meta http-equiv="content-type" />
        <meta http-equiv="default-style" />
      </div>
       <div>
        <meta name="viewport" />
        <meta name="viewport" content="user-scalable=no" />
        <meta name="viewport" content="user-scalable=no, maximum-scale=2.6" />
        <meta name="viewport" content="user-scalable=no, maximum-scale=1" />
      </div>
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
    </body>
  );
}

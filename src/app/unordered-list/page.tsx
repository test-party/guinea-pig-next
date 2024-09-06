import UnorderedList from '../../components/UnorderedList';

export default function Page() {
  return (
    <div>
      <p> These are a few of my favorite things</p>
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
          <div>
            <p>Hello</p>
            <p>there</p>
          </div>
          <li>
            <ul>
              {/* This is a comment */}
              <li>ABC</li>
              <p>AAA</p>
            </ul>
          </li>
      </ul>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h3>Heading 3</h3>
      <h3>Heading 3</h3>
      <h5>Heading 5</h5>

      <UnorderedList />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <p>paragraph element</p>
        <li>Item 3</li>
      </ul>
    </div>
  )
}
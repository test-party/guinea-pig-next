//http://localhost:3000/aria-deprecated-role
export default function Page() {
  return (
    <div>
      <div role="directory">
          <p>ABC</p>
      </div>

      <div role="directory">
          <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
          </ul>
      </div>

      <div role="directory">
          <ul>
              <li>Parent Item 1
              <ul>
                  <li>Child Item 1</li>
                  <li>Child Item 2</li>
              </ul>
              </li>
              <li>Parent Item 2
              <ul>
                  <li>Child Item 3</li>
                  <li>Child Item 4</li>
              </ul>
              </li>
          </ul>
      </div>
    </div>
  );
}
//http://localhost:3000/area-alt
export default function Page() {
  return (
    (<body
      component-id="8d4a9fee-33ef-4d83-a319-ac0c33ede3cd"
      testparty-id={crypto.randomUUID()}>
      <div
        component-id="6aba9217-61d6-4d18-8393-71e8e816c253"
        testparty-id={crypto.randomUUID()}>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20190227165729/area11.png"
          alt=""
          width="300"
          height="119"
          useMap="#shapemap"
          component-id="ab91b5ab-b97e-40ab-91bd-471b7b423d7b"
          testparty-id={crypto.randomUUID()} />
        <map
          name="shapemap"
          component-id="be0fdd80-4cae-4ccf-bd14-9d8e1a87191b"
          testparty-id={crypto.randomUUID()}>
            <area
              shape="poly"
              coords="59,31,28,83,91,83"
              href="https://media.geeksforgeeks.org/wp-content/uploads/20190227165802/area2.png"
              component-id="5c936101-fbbb-4bc1-b87c-26902c011db7"
              testparty-id={crypto.randomUUID()} />

            <area
              shape="circle"
              coords="155,56,26"
              href="https://media.geeksforgeeks.org/wp-content/uploads/20190227165934/area3.png"
              component-id="40a8f232-f67a-4e44-b614-f207129f7b60"
              testparty-id={crypto.randomUUID()} />

            <area
              shape="rect"
              coords="224,30,276,82"
              href="https://media.geeksforgeeks.org/wp-content/uploads/20190227170021/area4.png"
              alt="Square"
              component-id="1f07fff8-caee-41fd-b595-5d3f5bde0464"
              testparty-id={crypto.randomUUID()} />
        </map>
      </div>
    </body>)
  );
}
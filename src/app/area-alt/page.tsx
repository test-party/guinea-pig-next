//http://localhost:3000/area-alt
export default function Page() {
  return (
    <body>
      <div>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190227165729/area11.png"
          alt="" width="300" height="119" 
          useMap="#shapemap" />
        <map name="shapemap">
            <area shape="poly" coords="59,31,28,83,91,83"
                href="https://media.geeksforgeeks.org/wp-content/uploads/20190227165802/area2.png" 
                />

            <area shape="circle" coords="155,56,26"
                href="https://media.geeksforgeeks.org/wp-content/uploads/20190227165934/area3.png" 
                />

            <area shape="rect" coords="224,30,276,82"
                href="https://media.geeksforgeeks.org/wp-content/uploads/20190227170021/area4.png" 
                alt="Square"/>
        </map>
      </div>
    </body>
  );
}
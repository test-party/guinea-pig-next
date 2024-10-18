//http://localhost:3001/aria-meter-name
export default function Page() {
  return (
    <body>
      <div role="meter" id="empty"></div>
      <div role="meter" id="alempty" aria-label=""></div>
      <div role="meter" id="albmissing" aria-labelledby="nonexistent"></div>
      <div role="meter" id="albempty" aria-labelledby="emptydiv"></div>
      <div id="emptydiv"></div>
    </body>
  );
  }
  
//http://localhost:3000/aria-meter-name
export default function Page() {
  return (
    <body>
      <div role="meter" id="empty"></div>
      <div role="meter" id="alempty" aria-label=""></div>
      <div role="meter" id="albmissing" aria-labelledby="nonexistent"></div>
      <div role="meter" id="albempty" aria-labelledby="emptydiv"></div>
      <div id="emptydiv"></div>
      <div role="meter" id="valid-label-meter"></div>
      <div id="valid">Valid Label</div>
    </body>
  );
  }
  
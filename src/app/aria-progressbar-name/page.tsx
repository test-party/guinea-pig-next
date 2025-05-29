//http://localhost:3000/aria-progressbar-name
export default function Page() {
  return (
    <div>
      <div role="progressbar" id="empty"></div>
      <div role="progressbar" id="alempty" aria-label=""></div>
      <div role="progressbar" id="albmissing" aria-labelledby="nonexistent"></div>
      <div role="progressbar" id="albempty" aria-labelledby="emptydiv"></div>
      <div id="emptydiv"></div>
      <div role="progressbar" id="valid-label-progressbar"></div>
      <div id="valid">Valid Label</div>
    </div>
  );
  }
  
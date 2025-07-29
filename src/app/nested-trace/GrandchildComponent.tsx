export const GrandchildComponent = () => {
  return (
    <div>
      <img src="example.jpg" /> {/* Empty alt text triggers axe violation */}
    </div>
  );
};
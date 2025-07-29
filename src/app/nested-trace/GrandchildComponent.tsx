export const GrandchildComponent = () => {
  return (
    <div>
      <img src="example.jpg" alt="" /> {/* Empty alt text triggers axe violation */}
    </div>
  );
};
export default function ColorContrast() {
  const items = Array.from({ length: 500 });

  return (
    <div style={{ padding: '20px' }}>
      {items.map((_, i) => (
        <p key={i} style={{ color: '#999999', backgroundColor: '#ffffff' }}>
          Poor Contrast: Light Gray on White #{i + 1}
        </p>
      ))}
    </div>
  );
}
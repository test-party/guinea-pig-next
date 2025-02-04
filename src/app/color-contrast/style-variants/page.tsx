export default function ColorContrast() {
  const color = "text-gray-400";
  return (
    <body style={{ padding: "20px" }}>
      {/* Inline Styles */}
      <h1 style={{ color: "#ffffff", backgroundColor: "#000000" }}>
        Inline: Good Contrast (White on Black)
      </h1>
      <p style={{ color: "#cccccc", backgroundColor: "#ffffff" }}>
        Inline: Poor Contrast (Light Gray on White)
      </p>

      {/* Tailwind Styles */}
      <div className="bg-red-500 text-charcoal">
        Tailwind: Good Contrast (Charcoal on Red)
      </div>
      <div className="bg-gray-300 text-gray-400">
        Tailwind: Poor Contrast (Gray on Slightly Darker Gray)
      </div>
      <div className="bg-gray-300 text-gray-400 flex justify-center h-12">
        Tailwind: Poor Contrast with additional classes (Gray on Slightly Darker Gray)
      </div>
      <div className={`bg-gray-300 ${color} flex justify-center h-12`}>
        Tailwind: Poor Contrast with additional classes (Gray on Slightly Darker Gray)
      </div>

      {/* CSS Class-Based Styles */}
      <div className="black-on-green">
        CSS-Class: Good Contrast (Black on Green)
      </div>
      <div className="red-on-lightred">
        CSS-Class: Poor Contrast (Bright Red on Light Red)
      </div>
      <div className="custom-blue">
        Custom Blue: Good Contrast (White on Dark Blue)
      </div>
      <div className="custom-yellow">
        Custom Yellow: Poor Contrast (Bright Yellow on Light Yellow)
      </div>

      {/* Custom CSS */}
      <style>{`
        .red-on-lightred {
          color: #ff3333;
          background-color: #ffe6e6;
          padding: 10px;
          margin-top: 20px;
        }
        .black-on-green {
          color: #000000;
          background-color: #00a000;
          padding: 10px;
          margin-top: 20px;
        }
        .custom-yellow {
          color: #ffff00;
          background-color: #ffffcc;
          padding: 10px;
          margin-top: 20px;
        }
        .custom-blue {
          color: #ffffff;
          background-color: #00274d;
          padding: 10px;
          margin-top: 20px;
        }
      `}</style>
    </body>
  );
}

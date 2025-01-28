export default function ColorContrast() {
  return (
    <body style={{ padding: "20px" }}>
      {/* Inline Styles */}
      <h1 style={{ color: "#ffffff", backgroundColor: "#000000" }}>
        Inline: Good Contrast (White on Black)
      </h1>
      <p style={{ color: "#cccccc", backgroundColor: "#ffffff" }}>
        Inline: Poor Contrast (Light Gray on White)
      </p>

      {/* Simulated Tailwind-Like Styles */}
      <div className="bg-red-500 text-charcoal">
        Tailwind-Like: Good Contrast (Charcoal on Red)
      </div>
      <div className="bg-gray-300 text-gray-400">
        Tailwind-Like: Poor Contrast (Gray on Slightly Darker Gray)
      </div>

      {/* CSS Class-Based Styles */}
      <div className="black-on-green">
        CSS-Class: Good Contrast (Black on Green)
      </div>
      <div className="red-on-lightred">
        CSS-Class: Poor Contrast (Bright Red on Light Red)
      </div>

      {/* Custom CSS */}
      <div className="custom-blue">
        Custom Blue: Good Contrast (White on Dark Blue)
      </div>
      <div className="custom-yellow">
        Custom Yellow: Poor Contrast (Bright Yellow on Light Yellow)
      </div>

      {/* Custom CSS */}
      <style>{`
        .bg-red-500 {
          background-color: #e3342f;
        }
        .text-charcoal {
          color: #100101;
        }
        .bg-gray-300 {
          background-color: #d1d5db;
        }
        .text-gray-400 {
          color: #9ca3af;
        }

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

        /* Custom CSS */
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

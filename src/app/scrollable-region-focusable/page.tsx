export default function ScrollableRegionFocusable() {
    return (
      <main className="p-4">
        <h1>Scrollable Region Focusable Test Cases</h1>
        
        {/* Test Case 1: Non-interactive scrollable div without tabindex */}
        <div className="mb-8">
          <h2>Test Case 1: Non-interactive scrollable div (needs fix)</h2>
          <div 
            className="w-64 h-40 overflow-y-auto border border-gray-300 p-4"
            style={{ overflowY: 'auto' }}
          >
            <p>This is a scrollable content area that should be keyboard focusable.</p>
            <p>It contains multiple paragraphs to ensure scrolling is possible.</p>
            <p>The content continues...</p>
            <p>More content to ensure scrolling...</p>
            <p>Final paragraph in the scrollable area.</p>
          </div>
        </div>
  
        {/* Test Case 2: Already fixed scrollable div with tabindex=0 */}
        <div className="mb-8">
          <h2>Test Case 2: Properly accessible scrollable div (reference)</h2>
          <div 
            className="w-64 h-40 overflow-y-auto border border-gray-300 p-4"
            style={{ overflowY: 'auto' }}
            tabIndex={0}
          >
            <p>This is a scrollable content area that is already keyboard focusable.</p>
            <p>It contains multiple paragraphs to ensure scrolling is possible.</p>
            <p>The content continues...</p>
            <p>More content to ensure scrolling...</p>
            <p>Final paragraph in the scrollable area.</p>
          </div>
        </div>
      </main>
    );
  }
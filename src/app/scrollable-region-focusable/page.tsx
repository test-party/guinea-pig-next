//http://localhost:3000/scrollable-region-focusable

export default function ScrollableRegionFocusable() {

    return (
        <main>
            <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                {/* Scrollable section (compliant) */}
                <div
                    style={{ width: '300px', height: '200px', overflow: 'auto', background: '#f0f0f0', padding: '10px' }}
                    tabIndex={0}
                >
                    <p><strong>Focusable Scrollable Section</strong></p>
                    <p style={{ height: '300px' }}>This section is scrollable and accessible.</p>
                </div>

                <div style={{ width: '300px', height: '200px', overflow: 'auto', background: '#dcdcdc', padding: '10px' }}>
                    <p><strong>Non-Focusable Scrollable Section</strong></p>
                    <p style={{ height: '300px' }}>This section is scrollable, but cannot be focused via keyboard.</p>
                </div>

                <div style={{ width: '300px', height: '200px', overflow: 'auto', background: '#dcdcdc', padding: '10px' }}>
                    <p><strong>Non-Focusable Scrollable Section</strong></p>
                    <p style={{ height: '300px' }}>This section is scrollable, but cannot be focused via keyboard.</p>
                </div>

                <div id="pass1" style={{ height: '200px', overflowY: 'auto' }}>
                    <div style={{ height: '2000px' }}>
                        <p>Content</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default function ColorContrast() {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: '#ffffff', backgroundColor: '#000000' }}>
        Good Contrast: White on Black
            </h1>
            <p style={{ color: '#999999', backgroundColor: '#ffffff' }}>
        Poor Contrast: Light Gray on White
            </p>
            <button style={{ color: '#ffffff', backgroundColor: '#0056B3' }}>
        Good Contrast: White on Blue Button
            </button>
            <div
                style={{
                    color: '#ff0000',
                    backgroundColor: '#ffcccc',
                    padding: '10px',
                    marginTop: '20px',
                }}
            >
        Poor Contrast: Red on Light Red
            </div>
            <div
                style={{
                    color: '#000000',
                    backgroundColor: '#00ff00',
                    padding: '10px',
                    marginTop: '20px',
                }}
            >
        Good Contrast: Black on Green
            </div>
            <div
                style={{
                    color: '#000000',
                    backgroundColor: '#ffff00',
                    padding: '10px',
                    marginTop: '20px',
                }}
            >
        Good Contrast: Black on Yellow
            </div>
        </div>
    )
};

import React from 'react';

//http://localhost:3000/frame-title-unique

export default function Page() {
    const reportHtml = `<html><body><h2>Monthly Report</h2><p>Data goes here.</p></body></html>`;

    return (
        <div>
            <h1>Dashboard</h1>
            <iframe
                srcDoc={reportHtml}
                title="Embedded Report"
                width="400"
                height="200"
                style={{ border: '1px solid black', marginTop: 20 }}
            />
            <iframe
                srcDoc={reportHtml}
                title="Embedded Report"
                width="400"
                height="200"
                style={{ border: '1px solid black', marginTop: 20 }}
            />
            <iframe
                srcDoc={reportHtml}
                title="Embedded Report"
                width="400"
                height="200"
                style={{ border: '1px solid black', marginTop: 20 }}
            />
        </div>
    );
}
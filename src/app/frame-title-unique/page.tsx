import React from 'react';

//http://localhost:3000/frame-title-unique
export default function Page() {
    return (
        <div>
            <h1>Dashboard</h1>
            <iframe src="https://calendar.google.com" width="600" height="400" />
            <iframe
                src="https://docs.google.com"
                title="Document Viewer"
                width="600"
                height="400"
            />
            <iframe
                src="https://sheets.google.com"
                title="Document Viewer"
                width="600"
                height="400"
            />
        </div>
    );
}
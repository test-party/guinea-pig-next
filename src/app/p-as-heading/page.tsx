//http://localhost:3000/p-as-heading
export default function PAsHeading() {
    return (
        <div>
            <h1>P as Heading Examples</h1>
            
            <section>
                <h2>Bad Examples (Flagged by axe-core)</h2>
                
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Paragraph styled as heading</h3>
                    <p style={{ 
                        fontSize: '24px', 
                        fontWeight: 'bold', 
                        margin: '16px 0 8px 0',
                        color: '#333'
                    }}>
                        This paragraph looks like a heading but isn't semantic
                    </p>
                    <p>This creates confusion for screen readers and other assistive technologies.</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>Multiple paragraphs styled as different heading levels</h3>
                    <p style={{ 
                        fontSize: '28px', 
                        fontWeight: 'bold', 
                        margin: '20px 0 10px 0'
                    }}>
                        Main Section Title
                    </p>
                    <p style={{ 
                        fontSize: '20px', 
                        fontWeight: 'bold', 
                        margin: '16px 0 8px 0'
                    }}>
                        Subsection Title
                    </p>
                    <p>Content that follows the fake headings.</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>Paragraph with heading-like styling and uppercase</h3>
                    <p style={{ 
                        fontSize: '22px', 
                        fontWeight: 'bold', 
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        margin: '16px 0 8px 0'
                    }}>
                        IMPORTANT NOTICE
                    </p>
                    <p>This paragraph appears to be a heading due to its styling.</p>
                </div>
            </section>

            <section>
                <h2>Good Examples (Compliant)</h2>
                
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Proper semantic headings</h3>
                    <h4 style={{ 
                        fontSize: '24px', 
                        fontWeight: 'bold', 
                        margin: '16px 0 8px 0',
                        color: '#333'
                    }}>
                        This is a proper semantic heading
                    </h4>
                    <p>Screen readers and other assistive technologies can properly identify this as a heading.</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>Styled headings with proper hierarchy</h3>
                    <h4 style={{ 
                        fontSize: '28px', 
                        fontWeight: 'bold', 
                        margin: '20px 0 10px 0'
                    }}>
                        Main Section Title
                    </h4>
                    <h5 style={{ 
                        fontSize: '20px', 
                        fontWeight: 'bold', 
                        margin: '16px 0 8px 0'
                    }}>
                        Subsection Title
                    </h5>
                    <p>Content that follows the proper semantic headings.</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>Regular paragraphs with appropriate styling</h3>
                    <p style={{ 
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}>
                        This is a bold paragraph that doesn't look like a heading
                    </p>
                    <p>Regular paragraph text that follows.</p>
                </div>
            </section>
        </div>
    )
}
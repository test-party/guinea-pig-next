// http://localhost:3000/summary-name
export default function Page() {
    return (
        <div>
            <h1>Accessibility Test Page for summary-name Rule</h1>
            <section>
                <h2>Pass Cases</h2>

                <p>This section demonstrates correctly labeled summary elements.</p>

                {/* Visible text */}
                <details>
                    <summary>Product Details</summary>
                    <p>This product is made from 100% cotton.</p>
                </details>

                {/* Empty summary with aria-label */}
                <details>
                    <summary aria-label="Shipping Information"></summary>
                    <ul>
                        <li>Ships in 3-5 business days</li>
                    </ul>
                </details>

                {/* Empty summary with aria-labelledby */}
                <span id="label-for-warranty">More about warranty</span>
                <details>
                    <summary aria-labelledby="label-for-warranty"></summary>
                    <p>Warranty covers manufacturing defects for 1 year.</p>
                </details>

                {/* Title attribute used */}
                <details>
                    <summary title="Return Policy"></summary>
                    <p>You can return items within 30 days.</p>
                </details>

                {/* Visible text + aria-label (redundant but allowed) */}
                <details>
                    <summary aria-label="Additional Options">Options</summary>
                    <ul>
                        <li>Gift wrapping</li>
                        <li>Express delivery</li>
                    </ul>
                </details>
            </section>
            <section>
                <h2>Fail Cases</h2>

                <p>This section demonstrates incorrectly labeled summary elements, with context to help remediation.</p>

                {/* Empty summary */}
                <h3>Specifications</h3>
                <p>This section contains detailed product specifications.</p>
                <details>
                    <summary></summary>
                    <ul>
                        <li>Dimensions: 10x10 inches</li>
                        <li>Weight: 2 lbs</li>
                    </ul>
                </details>

                {/* aria-labelledby points to missing ID */}
                <p id="id-not-connecting-to-summary">Payment Instructions</p>
                <details>
                    <summary aria-labelledby="label-for-payment-instructions"></summary>
                    <p>Please follow the payment instructions carefully.</p>
                </details>

                {/* aria-labelledby points to empty element */}
                <h3>Returns and Exchanges</h3>
                <p id="empty-label"></p>
                <details>
                    <summary aria-labelledby="empty-label"></summary>
                    <p>Our return policy allows exchanges within 30 days.</p>
                </details>

                {/* Only whitespace */}
                <h3>Care Instructions</h3>
                <p>Learn how to care for your product below.</p>
                <details>
                    <summary>   </summary>
                    <ul>
                        <li>Machine wash cold</li>
                        <li>Do not bleach</li>
                    </ul>
                </details>

                {/* Icon only */}
                <h3>More Information</h3>
                <p>Additional resources about this product.</p>
                <details>
                    <summary>
                        <svg width="16" height="16" aria-hidden="true">
                            <path d="M2 2 L14 8 L2 14 Z" />
                        </svg>
                    </summary>
                    <p>Here are more details about product usage.</p>
                </details>

                {/* aria-label set to empty string */}
                <h3>Delivery Options</h3>
                <p>Review available delivery methods below.</p>
                <details>
                    <summary aria-label=""></summary>
                    <ul>
                        <li>Standard Shipping</li>
                        <li>Next-Day Delivery</li>
                    </ul>
                </details>

                {/* aria-labelledby set to empty string */}
                <h3>Returns and Exchanges</h3>
                <p id="empty-label"></p>
                <details>
                    <summary aria-labelledby=""></summary>
                    <p>Our return policy allows exchanges within 30 days.</p>
                </details>

            </section>
        </div>
    )
}
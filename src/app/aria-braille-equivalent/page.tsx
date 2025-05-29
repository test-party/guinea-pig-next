//http://localhost:3000/aria-braille-equivalent
import React from 'react';
export default function Page() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
                Axe-core aria-braille-equivalent Rule Test Cases
            </h1>

            <div className="space-y-12">
                {/* Passing Cases Section */}
                <section className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                    <h2 className="text-2xl font-semibold mb-4 text-green-800">
                        ✅ Passing Cases
                    </h2>

                    <div className="space-y-6">
                        {/* Case 1: aria-braillelabel with aria-label */}
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-medium mb-2">Case 1: Button with aria-braillelabel and aria-label</h3>
                            <button
                                aria-label="Submit form"
                                aria-braillelabel="Sub"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                            <p className="text-sm text-gray-600 mt-2">
                                Has both aria-braillelabel and aria-label ✓
                            </p>
                        </div>

                        {/* Case 2: aria-braillelabel with aria-labelledby */}
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-medium mb-2">Case 2: Input with aria-braillelabel and aria-labelledby</h3>
                            <label id="email-label" className="block mb-1">Email Address</label>
                            <input
                                type="email"
                                aria-labelledby="email-label"
                                aria-braillelabel="Email"
                                className="border px-3 py-2 rounded w-full max-w-sm"
                                placeholder="Enter your email"
                            />
                            <p className="text-sm text-gray-600 mt-2">
                                Has both aria-braillelabel and aria-labelledby ✓
                            </p>
                        </div>

                        {/* Case 3: aria-brailledescription with aria-describedby */}
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-medium mb-2">Case 3: Input with aria-brailledescription and aria-describedby</h3>
                            <label htmlFor="password" className="block mb-1">Password</label>
                            <input
                                id="password"
                                type="password"
                                aria-describedby="pwd-help"
                                aria-brailledescription="8+ chars"
                                className="border px-3 py-2 rounded w-full max-w-sm"
                            />
                            <div id="pwd-help" className="text-sm text-gray-600 mt-1">
                                Must be at least 8 characters long
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                Has both aria-brailledescription and aria-describedby ✓
                            </p>
                        </div>

                        {/* Case 4: Both braille attributes with corresponding standard attributes */}
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-medium mb-2">Case 4: Element with both braille attributes and standard counterparts</h3>
                            <div
                                role="button"
                                tabIndex={0}
                                aria-label="Delete item from cart"
                                aria-braillelabel="Del"
                                aria-describedby="delete-desc"
                                aria-brailledescription="Rm item"
                                className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600 inline-block"
                            >
                                🗑️ Delete
                            </div>
                            <div id="delete-desc" className="text-sm text-gray-600 mt-1">
                                This will permanently remove the item from your cart
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                Has aria-braillelabel + aria-label AND aria-brailledescription + aria-describedby ✓
                            </p>
                        </div>
                    </div>
                </section>

                {/* Failing Cases Section */}
                <section className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                    <h2 className="text-2xl font-semibold mb-4 text-red-800">
                        ❌ Failing Cases
                    </h2>

                    <div className="space-y-6">
                        {/* Case 1: aria-braillelabel without standard label */}
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-medium mb-2">Case 1: Button with aria-braillelabel but no aria-label/aria-labelledby</h3>
                            <button
                                aria-braillelabel="Save"
                                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                            >
                                Save Document
                            </button>
                            <p className="text-sm text-gray-600 mt-2">
                                Has aria-braillelabel but missing aria-label or aria-labelledby ❌
                            </p>
                        </div>

                        {/* Case 2: aria-brailledescription without aria-describedby */}
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-medium mb-2">Case 2: Input with aria-brailledescription but no aria-describedby</h3>
                            <label htmlFor="username" className="block mb-1">Username</label>
                            <input
                                id="username"
                                type="text"
                                aria-brailledescription="Req field"
                                className="border px-3 py-2 rounded w-full max-w-sm"
                                placeholder="Enter username"
                            />
                            <p className="text-sm text-gray-600 mt-2">
                                Has aria-brailledescription but missing aria-describedby ❌
                            </p>
                        </div>

                        {/* Case 3: Both braille attributes without standard counterparts */}
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-medium mb-2">Case 3: Element with both braille attributes but no standard counterparts</h3>
                            <div
                                role="button"
                                tabIndex={0}
                                aria-braillelabel="Edit"
                                aria-brailledescription="Mod content"
                                className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-yellow-600 inline-block"
                            >
                                ✏️ Edit
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                Has both braille attributes but missing both standard counterparts ❌
                            </p>
                        </div>

                        {/* Case 4: Mixed - one correct, one incorrect */}
                        <div className="bg-white p-4 rounded border">
                            <h3 className="font-medium mb-2">Case 4: Mixed case - correct braillelabel, incorrect brailledescription</h3>
                            <button
                                aria-label="Add to favorites"
                                aria-braillelabel="Fav"
                                aria-brailledescription="Star item"
                                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                            >
                                ⭐ Favorite
                            </button>
                            <p className="text-sm text-gray-600 mt-2">
                                Has aria-braillelabel + aria-label ✓ but aria-brailledescription without aria-describedby ❌
                            </p>
                        </div>
                    </div>
                </section>

                {/* Instructions */}
                <section className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                        🔧 Testing Instructions
                    </h2>
                    <div className="space-y-3 text-gray-700">
                        <p>
                            <strong>To test with axe-core:</strong>
                        </p>
                        <ol className="list-decimal list-inside space-y-2 ml-4">
                            <li>Run axe-core scanner on this page</li>
                            <li>Look for violations of the "aria-braille-equivalent" rule</li>
                            <li>The failing cases should be flagged as violations</li>
                            <li>The passing cases should not trigger any violations</li>
                        </ol>
                        <p className="mt-4">
                            <strong>Expected behavior:</strong> The rule should detect 4 violations from the failing cases section.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
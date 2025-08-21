'use client'

import React, { useEffect, useState } from 'react'

export default function DarkModeTestPage() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'))
    }, [])

    const toggleDark = () => {
        document.documentElement.classList.toggle('dark')
        setIsDark((d) => !d)
    }
    console.log('Dark mode:', isDark)

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 p-8">
            <div className="mx-auto max-w-2xl space-y-8">
                {/* Header */}
                <header className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">
                     Light Passes → Dark Fails
                    </h1>

                    {/* Toggle Switch */}
                    <button
                        onClick={toggleDark}
                        aria-pressed={isDark}
                        aria-label="Toggle dark mode"
                        className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors
                       focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                       bg-gray-300 dark:bg-blue-600"
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                                isDark ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                    </button>
                </header>

                {/* Sections */}
                <Section
                    title="Buttons"
                    description="Light: white on blue (pass). Dark: text turns blue-on-blue (low contrast)."
                >
                    <button
                        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       dark:text-blue-500"
                    >
                      Primary Action
                    </button>
                </Section>

                <Section
                    title="Focus Visibility"
                    description="Light: ring visible. Dark: ring color = page bg → effectively invisible."
                >
                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="inline-block px-3 py-2 rounded-md border border-gray-300 bg-white text-blue-700
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         dark:bg-gray-900 dark:text-blue-300 dark:border-gray-900
                         dark:focus:ring-gray-900"
                        >
                          Focusable Link
                        </a>
                        <button
                            className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         dark:bg-gray-900 dark:text-gray-100 dark:border-gray-900
                         dark:focus:ring-gray-900"
                        >
                          Focusable Button
                        </button>
                    </div>
                </Section>

                <Section
                    title="Form Field"
                    description="Light: clear border & placeholder. Dark: border blends into bg; placeholder too dim."
                >
                    <label className="block">
                        <span className="block mb-1">Email</span>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-md px-3 py-2
                         bg-white text-gray-900 placeholder-gray-500 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-800
                         dark:border-gray-900"
                        />
                    </label>
                </Section>

                <Section
                    title="Links"
                    description="Light: sufficient contrast. Dark: muted gray on dark bg (low contrast)."
                >
                    <a
                        href="#"
                        className="underline text-blue-700 hover:text-blue-800
                       dark:text-gray-700 dark:hover:text-gray-700"
                    >
                      Read documentation
                    </a>
                </Section>
            </div>
        </div>
    )
}

function Section({
    title,
    description,
    children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
    return (
        <section className="rounded-lg bg-white dark:bg-gray-900 p-5 shadow-sm border border-gray-200 dark:border-gray-800 space-y-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            {description && (
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
            )}
            {children}
        </section>
    )
}

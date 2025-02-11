'use client'
import React from 'react';

//http://localhost:3000/region
const Page = () => {
    return (
        <div>
            <section>
                Section Tag
            </section>
            <div role='section'>
                Section Role Div
            </div>
            <header>
                Header Tag
            </header>
            <div role='banner'>
                Header Role Div
            </div>
            <nav>
                Nav Tag
            </nav>
            <div role='navigation'>
                Nav Role Div
            </div>
            <main>
                Main Tag
            </main>
            <div role='main'>
                Main Role Div
            </div>
            <footer>
                Footer Tag
            </footer>
            <div role='contentinfo'>
                Footer Role Div
            </div>
            <div role="search">
                Search Role Div
            </div>
            <div role="application">
                Application Role Div
            </div>
            <div role="form">
                Form Role Div
            </div>
            <div role="region">
                Region Role Div
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            depth testing
                        </div>
                    </div>
                </div>
            </div>
            <div>
                Lorum Ipsum
            </div>
            <div>
                another one
            </div>
        </div>
    );
};

export default Page;
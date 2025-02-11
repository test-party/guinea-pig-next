'use client'
import React from 'react';

//http://localhost:3000/region
const Page = () => {
    return (
        <div>
            <header>
                Header Tag
            </header>
            <nav>
                Nav Tag
            </nav>
            <main>
                Main Tag
            </main>
            <footer>
                Footer Tag
            </footer>
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
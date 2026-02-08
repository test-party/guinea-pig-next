'use client'
import React, { useEffect } from 'react'

//http://localhost:3000/document-title
const Page = () => {
    useEffect(() => {
        document.title = 'Document Title Test Page'
    }, [])

    return (
        <div>
            <div>Document Title Test Page</div>
        </div>
    )
}

export default Page

'use client'
import { useState } from "react"

//http://localhost:3000/test-conditional
export default function TestConditional() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div>
            <button onClick={() => setIsActive(prev => !prev)}>CLICK</button>
            {isActive && <a href='https://www.google.com'></a>}
            {!isActive && <a href='https://www.yahoo.com'></a>}
        </div>
    )
}
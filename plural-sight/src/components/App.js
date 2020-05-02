import React, { useState } from 'react'
export default function App() {
    const [name, setName] = useState('')

    return (
        <div>
            <input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <div>{name}</div>
        </div>
    )
}

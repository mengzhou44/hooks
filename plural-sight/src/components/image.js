import React, { useRef } from 'react'

export default function Image({ primary, secondary }) {
    const imageRef = useRef(null)

    return (
        <img
            src="./cat-black.jpg"
            onMouseOver={() => (imageRef.current.src = './cat.jpeg')}
            onMouseOut={() => (imageRef.current.src = './cat-black.jpg')}
            ref={imageRef}
            alt="cat"
        ></img>
    )
}

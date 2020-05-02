import React, { useRef, useState, useEffect } from 'react'

export default function ImageList() {
    return (
        <div>
            {[1124, 187, 823, 1269, 1530].map((speakerId) => {
                return (
                    <div key={speakerId}>
                        <Image
                            primaryImg={`./speakers/bw/Speaker-${speakerId}.jpg`}
                            secondaryImg={`./speakers/Speaker-${speakerId}.jpg`}
                            alt=""
                        />
                    </div>
                )
            })}
        </div>
    )
}

function Image({ primaryImg, secondaryImg, alt }) {
    const imageRef = useRef(null)

    useEffect(() => {
        function scrollHandler() {
            setInView(isInView())
        }
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const [inView, setInView] = useState(false)

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect()
            return rect.top >= 0 && rect.bottom <= window.innerHeight
        }
        return false
    }

    return (
        <img
            src={inView ? secondaryImg : primaryImg}
            alt=""
            ref={imageRef}
            width="200"
            height="200"
        />
    )
}

import React, { useEffect, useState } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleMouseMove = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('Hook useEffect called');
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            console.log('Hook useEffect cleanup called');
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <h2>
            Hooks X - {x}, Y - {y}
        </h2>
    )
}

export default HookMouse

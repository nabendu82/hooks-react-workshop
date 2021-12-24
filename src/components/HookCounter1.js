import React, { useEffect, useState } from 'react'

const HookCounter1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${count} times`
    })

    return (
        <button onClick={() => setCount(count + 1)}>
            Click {count} times
        </button>
    )
}

export default HookCounter1

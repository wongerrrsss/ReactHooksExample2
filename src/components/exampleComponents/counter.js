import React, { useState } from "react";

export default function counter() {
    const [count, updateCount] = useState(0)

    return (
        <div>
            <button onClick={() => updateCount(count + 1)}>Up</button>
            <h2>{count}</h2>
            <button onClick={() => updateCount(count - 1)}>Down</button>
        </div>
    )
}
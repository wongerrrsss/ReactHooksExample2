import React, { useState } from 'react';

export default function toggle() {
    const [visible, updateVisible] = useState(true)

    return (
        <div className="toggle-component">
            <h2 style={{ visibility: visible ? "visible" : "hidden" }}>HIDE ME!</h2>
            <button onClick={() => updateVisible(!visible)}>{visible ? "Hide" : "Show"}</button>
        </div>
    )   
}

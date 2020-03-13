import React, { useState } from "react";

export default function textEnlarger() {
    const [fontSize, updateFontSize] = useState(12)
    const [rateOfChange, updateRateOfChange] = useState(1)

    return (
        <div className="textEnlarger-component">
            <h2 style={{ fontSize: `${fontSize}px` }}>{`${fontSize}px`}</h2>
            <input type= "number" value={rateOfChange} onChange={event => updateRateOfChange(event.target.valueAsNumber)} />
            <button onClick={() => updateFontSize(fontSize + rateOfChange)}>Bigger</button>
            <button onClick={() => updateFontSize(fontSize - rateOfChange)}>Smaller</button>
        </div>
    )
}
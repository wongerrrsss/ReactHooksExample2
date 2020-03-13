import React, { useState } from 'react';

export default function Align() {
    const [alignment, updateAlignment] = useState("left")
    const [newAlignment, updateNewAlignment] = useState()

    render() {
        return (
            <div className='align-component'>
                <h2 style={{textAlign: alignment}}>WHATZZ UP!</h2>
                <div>
                    <button onClick={() => updateAlignment("left")}>LEFT</button>
                    <button onClick={() => updateAlignment("center")}>CENTER</button>
                    <button onClick={() => updateAlignment("right")}>RIGHT</button>
                </div>
            </div>
        )
    }
}
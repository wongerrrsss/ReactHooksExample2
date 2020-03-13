import React, { useState, useEffect } from 'react';


export default function clock() {
    const [hour, updateHour] = useState("")
    const [minute, updateMinute] = useState("")
    const [second, updateSecond] = useState("")
    let intervalID

    useEffect(() => {
        intervalID = setInterval(getTime, 1000)

        return () => {
            clearInterval(intervalID)
        }
    })

    function getTime() {
       const date = new Date() 
       const hour = date.getHours()
       const minute = date. getMinutes()
       const second = date.getSeconds()

       updateHour(hour)
       updateMinute(minute)
       updateSecond(second)
    }

    return (
        <div className="clock-component">
            <h2>{`${hour <= 12 ? hour : hour - 12}:${minute >= 10 ? minute : `0${minute}`}:${second >= 10 ? second : `0${second}`}`}</h2>
        </div>
    )
}
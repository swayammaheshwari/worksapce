"use client"

import React, { useState, useEffect } from "react";

function GetTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTime();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        // Format the time consistently to title case
        setTime(newTime.toUpperCase());
    }

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={updateTime}>Get Time</button>
        </div>
    );
}

export default GetTime;

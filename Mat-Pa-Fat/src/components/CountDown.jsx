
import React, { useEffect, useState } from "react";

function getNextFebFirst() {
    const now = new Date();
    let year = now.getFullYear();
    const febFirstThisYear = new Date(year, 1, 1, 0, 0, 0, 0);
    if (now >= febFirstThisYear) year += 1;
    return new Date(year, 1, 1, 0, 0, 0, 0);
}

function calculateTimeLeft(target) {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
}

export default function Countdown() {
    const [target] = useState(() => getNextFebFirst());
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(target));

    useEffect(() => {
        const id = setInterval(() => {
            setTimeLeft(calculateTimeLeft(target));
        }, 1000);
        return () => clearInterval(id);
    }, [target]);

    const { days, hours, minutes, seconds } = timeLeft;
    

    return (
        <div className="countdown-timer-container" role="region" aria-label="Nedräkning till 1 februari">            
            <div className="countdown-display">
                <p className="countdown-intro">Vi öppnar om...</p>
                <div className="row one">
                    <span>{days}</span> <span>{hours}</span> <span>{minutes}</span> <span>{seconds}</span> 
                </div>
                <div className="row two">
                    <span>Dagar</span> <span>Timmar</span> <span>Minuter</span> <span>Sekunder</span>
                </div>
            </div>
        </div>
    );
}
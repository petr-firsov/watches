import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Watch({watchName, watchTimezone, removeWatch}) {
    useEffect(() => {     
        function updateTime() {
            let hours = new Date().getHours() + Number(watchTimezone);
            let minutes = new Date().getMinutes();
            let seconds = new Date().getSeconds();
            setTime(hours + ' : ' + minutes + ' : ' + seconds);
        }
        updateTime();
        const showTime = setInterval(() => updateTime(), 1000);
        return () => {
            clearInterval(showTime);
            setTime('');
        };
    }, [watchTimezone])

    const [time, setTime] = useState('');

    return (
        <div className="watch">
            <div className="watch-name">{watchName}</div>
            <div className="remove-btn" onClick={removeWatch}>&#x2717;</div>
            <span className="time">{time}</span>            
        </div>
    )
}

Watch.propTypes = {
    watchName: PropTypes.string,
    watchTimezone: PropTypes.string,
    removeWatch: PropTypes.func,
}

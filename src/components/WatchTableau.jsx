import { useState } from "react";
import AddWatchForm from "./AddWatchForm";
import Watches from "./Watches";

export default function WatchTableau() {
    const [watches, setWatches] = useState([]);

    function handleSubmit(e) {
        const newWatchName = e.target.elements['add-watch-name'];
        const newWatchTimezone = e.target.elements['add-time-zone'];
        if (newWatchName.value === '' || newWatchTimezone.value === '') {
            alert('Ошибка! Значения не введены') 
        } 
        
        if (newWatchTimezone.value.match( /[^+-\d]/g ) || (!newWatchTimezone.value.match( /^[+-]\d/ ) ) ) {
            alert('Неверный формат временной зоны');
        } else if (newWatchTimezone.value.match(/^[+-\d]/)) {
            e.preventDefault();     
            const newWatch = {
                watchName: newWatchName.value,
                watchTimezone: newWatchTimezone.value
            }
            setWatches([...watches, newWatch]);
            newWatchName.value = '';
            newWatchTimezone.value = '';
        }
    }
    
    return (
        <div className="watch-tableau">
            <AddWatchForm handleSubmit={handleSubmit} />
            <Watches watches={watches} setWatches={setWatches} />
        </div>
    )
}
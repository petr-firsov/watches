import Watch from "./Watch";
import uniqid from 'uniqid';
import PropTypes from "prop-types";


export default function Watches({watches, setWatches}) {
    function removeWatch(e) {
        const thisWatch = e.target.parentElement;
        const watchArray = Array.from(thisWatch.parentElement.children);
        const thisWatchIndex = watchArray.findIndex(item => item === thisWatch);
        const updatedArray = watches.filter((watch, index) => {
            return (index != thisWatchIndex) 
        });
        setWatches(updatedArray);
    }

    return (
        <div className='watch-block'>
            {watches.map(watch => {
                    return (
                        <Watch 
                        watchName={watch.watchName}
                        watchTimezone={watch.watchTimezone}
                        removeWatch={removeWatch}
                        key={uniqid()} />
                    )
                })
            }
        </div>
    )
}

Watches.propTypes = {
    watches: PropTypes.array,
    setWatches: PropTypes.func,
}
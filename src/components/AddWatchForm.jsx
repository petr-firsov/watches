import PropTypes from "prop-types"

export default function AddWatchForm({handleSubmit}) {
    return (
        <form className="add-watch-form" onSubmit={handleSubmit}>
            <div className="add-watch-input">
                <label htmlFor="add-watch-name">Название часов</label>
                <input type="text" id="add-watch-name" placeholder="Название"/>
            </div>
            <div className="add-watch-input">
                <label htmlFor="add-time-zone">Временная зона</label>
                <input type="text" id="add-time-zone" placeholder="(+/-)число"/>
            </div>
            <button type="submit" className="add-watch-btn">Добавить</button>
        </form>
    )
}

AddWatchForm.propTypes = {
    handleSubmit: PropTypes.func,
}
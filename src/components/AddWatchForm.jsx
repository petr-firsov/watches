import PropTypes from "prop-types"

export default function AddWatchForm({handleSubmit}) {
    return (
        <form className="add-watch-form" onSubmit={handleSubmit}>
            <div className="add-watch-input">
                <label htmlFor="add-watch-name">Название</label>
                <input type="text" id="add-watch-name" />
            </div>
            <div className="add-watch-input">
                <label htmlFor="add-time-zone">Временная зона</label>
                <input type="text" id="add-time-zone" />
            </div>
            <button type="submit" className="add-watch-btn">Добавить</button>
        </form>
    )
}

AddWatchForm.propTypes = {
    handleSubmit: PropTypes.func,
}
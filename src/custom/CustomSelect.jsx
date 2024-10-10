import PropTypes from "prop-types";

export default function CustomSelect({ error , register , name , id }) {
    return (
        <>
            <select
                id={id}
                className={`form-select ${error && 'error_input'}`}
                {...register(name)}
            >
                <option disabled value="">Industry</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            {
                error &&
                <span className="error_message">{error}</span>
            }
        </>
    );
};
CustomSelect.propTypes = {
    error: PropTypes.any ,
    register: PropTypes.any,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

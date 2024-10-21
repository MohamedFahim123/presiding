import PropTypes from "prop-types";

export default function CustomInput({error, type, register, placeholder, name ,lableName , id }) {
    return (
        <>
            {
                lableName &&
                <label className={`text-capitalize mb-1`} htmlFor={id}>{lableName} <span className="requiredStar">*</span></label>
            }
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`form-control ${error && 'error_input'}`}
                {...register(name)}
            />
            {
                error &&
                <span className="error_message">{error}</span>
            }
        </>
    );
};
CustomInput.propTypes = {
    error: PropTypes.any,
    register: PropTypes.any,
    lableName: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
import PropTypes from "prop-types";

export default function CustomSelect({ optional, error, register, name, options, labelName, id }) {
    return (
        <>
            {
                labelName &&
                <label className={`text-capitalize mb-1 fw-bold`} htmlFor={id}>{labelName}
                    {
                        optional ?
                            <span className="optional">( optional )</span>
                            : <span className="requiredStar">*</span>
                    }
                </label>
            }
            <select
                id={id}
                className={`form-select ${error && 'error_input'}`}
                {...register(name)}
            >
                <option disabled value="">{labelName}</option>
                {
                    options?.map(el => (
                        <option key={el?.id} value={el?.id}>{el?.name}</option>
                    ))
                }
            </select>
            {
                error &&
                <span className="error_message">{error}</span>
            }
        </>
    );
};
CustomSelect.propTypes = {
    error: PropTypes.any,
    register: PropTypes.any,
    labelName: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.array,
    optional: PropTypes.bool,
};
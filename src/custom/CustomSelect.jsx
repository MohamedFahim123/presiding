import PropTypes from "prop-types";

export default function CustomSelect({isApplicationForm, error , register , name ,options ,labelName , id }) {
    return (
        <>
        {
            labelName &&
            <label className={`text-capitalize mb-1 ${isApplicationForm && 'col-md-3'}`} htmlFor={id}>{labelName} <span className="requiredStar">*</span></label>
        }
            <select
                id={id}
                className={`form-select ${isApplicationForm && 'col-md-9 w-75'} ${error && 'error_input'}`}
                {...register(name)}
            >
                <option disabled value="">{labelName ? labelName :'Select'}</option>
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
    error: PropTypes.any ,
    isApplicationForm: PropTypes.bool ,
    register: PropTypes.any,
    labelName: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.array,
};

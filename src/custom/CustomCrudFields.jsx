import PropTypes from "prop-types";

export default function CustomCrudFields({ error, fields, options, labelName, setFields, handleInputChange, handleDeleteField, handleAddField }) {
    return (
        <>
            {
                fields?.map((field, index) => (
                    <div key={field?.id} className="col-lg-12 my-2">
                        <div className="row">
                            <div className="col-md-8">
                                <label className={`text-capitalize mb-1`} htmlFor={field?.id}>{labelName} <span className="requiredStar">*</span></label>
                                <select
                                    className={`form-select`}
                                    name="value"
                                    placeholder={`Field Name ${index + 1}`}
                                    value={field?.value}
                                    onChange={(event) => handleInputChange(field.id, event, setFields, fields)}
                                >
                                    <option value="" disabled>Select Option</option>
                                    {
                                        options?.map(el => (
                                            <option key={el?.id} value={el?.id}>{el?.name ? el?.name : el?.title}</option>
                                        ))
                                    }
                                </select>
                                {
                                    error &&
                                    <span className="error_message">{error}</span>
                                }
                            </div>
                            {
                                index > 0 &&
                                <div className="col-md-1 mt-4 pt-2">
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => handleDeleteField(field.id, setFields, fields)}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                ))
            }
            <div className="col-md-8 text-center mb-3">
                <button type="button" className="btn btn-outline-success" onClick={() => handleAddField(setFields, fields)}>
                    <i className="bi bi-plus-square"></i>
                </button>
            </div>
        </>
    );
};

CustomCrudFields.propTypes = {
    fields: PropTypes.array,
    error: PropTypes.any,
    options: PropTypes.any,
    handleDeleteField: PropTypes.func,
    handleInputChange: PropTypes.func,
    handleAddField: PropTypes.func,
    setFields: PropTypes.func,
    labelName: PropTypes.string,
};
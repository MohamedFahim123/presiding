import PropTypes from "prop-types";

export default function CustomCrudFields({ error, isApplicationForm, fields, options, labelName, setFields, handleInputChange, handleDeleteField, handleAddField }) {
    return (
        <>
            {
                fields?.map((field, index) => (
                    <div key={field?.id} className="col-lg-8 m-auto my-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <label className={`text-capitalize mb-1 ${isApplicationForm && 'col-md-3'}`} htmlFor={field?.id}>{labelName} <span className="requiredStar">*</span></label>
                                    <select
                                        className={`form-select ${isApplicationForm && 'col-md-9 w-75'}`}
                                        name="skill"
                                        placeholder={`Field Name ${index + 1}`}
                                        defaultValue={''}
                                        value={field?.skill}
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
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center mt-3 gap-3">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => handleDeleteField(field.id, setFields, fields)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="text-center">
                <button className="btn btn-outline-success" onClick={() => handleAddField(setFields, fields)}>
                    <i className="bi bi-plus-square"></i>
                </button>
            </div>
        </>
    );
};

CustomCrudFields.propTypes = {
    fields: PropTypes.array,
    isApplicationForm: PropTypes.bool,
    error: PropTypes.any,
    options: PropTypes.any,
    handleDeleteField: PropTypes.func,
    handleInputChange: PropTypes.func,
    handleAddField: PropTypes.func,
    setFields: PropTypes.func,
    labelName: PropTypes.string,
}

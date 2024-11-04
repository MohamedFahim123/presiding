import PropTypes from "prop-types"
import CustomSelect from "../../custom/CustomSelect"
import { useFieldArray } from "react-hook-form";

export default function ProfessionalExperienceInputs({ control, register, errors, yearsOfExp }) {
    const formSelect = [
        {
            options: yearsOfExp, error: errors?.year_exp_id?.message, name: 'year_exp_id', labelName: 'Years Of Experience', id: 'applyForAJobyear_exp_id'
        },
    ];

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'professional_experience'
    });

    return (
        <>
            <h3 className="my-3">
                Professional Experience
            </h3>
            {
                formSelect?.map((formSelect, idx) => (
                    <div key={idx} className="col-lg-8 my-2">
                        <CustomSelect optional={formSelect?.optional} error={formSelect?.error} options={formSelect?.options} register={register} name={formSelect.name} labelName={formSelect.labelName} id={formSelect.id} />
                    </div>
                ))
            }
            <div className="col-md-8 my-2">
                {fields.map((item, index) => (
                    <div key={item.id} className="my-2">
                        <div className="mb-3">
                            <label htmlFor={`applyFormPosition${index}`} className="form-label">Position <span className="requiredStar">*</span></label>
                            <input
                                type="text"
                                id={`applyFormPosition${index}`}
                                className="form-control"
                                placeholder="Position"
                                {...register(`professional_experience.${index}.position`)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`applyFormCompany${index}`} className="form-label">Company <span className="requiredStar">*</span></label>
                            <input
                                type="text"
                                id={`applyFormCompany${index}`}
                                placeholder="Company Name"
                                className="form-control"
                                {...register(`professional_experience.${index}.company`)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`applyFormStartDate${index}`} className="form-label">Start Date <span className="requiredStar">*</span></label>
                            <input
                                type="date"
                                id={`applyFormStartDate${index}`}
                                placeholder="Start Date"
                                className="form-control"
                                {...register(`professional_experience.${index}.start_date`)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`applyFormEndtDate${index}`} className="form-label">End Date <span className="requiredStar">*</span></label>
                            <input
                                type="date"
                                placeholder="End Date"
                                className="form-control"
                                id={`applyFormEndDate${index}`}
                                {...register(`professional_experience.${index}.end_data`)}
                            />
                        </div>
                        <div className="form-check mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={`workingHear${index}`}
                                {...register(`professional_experience.${index}.present`)}
                            />
                            <label className="form-check-label cursorPointer" htmlFor={`workingHear${index}`}>Currently Working Here</label>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => remove(index)}
                        >
                            Remove Experience
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-outline-success mb-3"
                    onClick={() => append({ position: '', company: '', start_date: '', end_data: '', present: false })}
                >
                    Add Experience
                </button>
            </div>
        </>
    );
};
ProfessionalExperienceInputs.propTypes = {
    register: PropTypes.any,
    errors: PropTypes.object.isRequired,
    yearsOfExp: PropTypes.array.isRequired,
    control: PropTypes.any,
};
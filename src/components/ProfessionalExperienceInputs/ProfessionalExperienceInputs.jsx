/* eslint-disable no-dupe-keys */
import PropTypes from "prop-types";
import { useFieldArray } from "react-hook-form";
import { useIndustriesStore } from "../../store/useIndustriesStore";

export default function ProfessionalExperienceInputs({ control, register }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'professional_experience',
    });
    const industries = useIndustriesStore(state => state.industries);

    return (
        <div className="col-lg-10 shadow mb-5 p-4 bg-white">
            <div className="row">
                <h3 className="my-3 col-12">
                    Professional Experience
                </h3>
                <div className="col-lg-12 my-2">
                    {fields.map((item, index) => (
                        <div key={item.id} className="my-2 row">
                            <p className="fs-6 fw-bold text-capitalize my-4 col-12">experience
                                <span className="ms-2">({index + 1})</span>
                            </p>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor={`applyFormPosition${index}`} className="form-label fw-bold">Position <span className="requiredStar">*</span></label>
                                <input
                                    type="text"
                                    id={`applyFormPosition${index}`}
                                    className="form-control"
                                    placeholder="Position"
                                    {...register(`professional_experience.${index}.position`)}
                                />
                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor={`applyFormCompany${index}`} className="form-label fw-bold">Company <span className="requiredStar">*</span></label>
                                <input
                                    type="text"
                                    id={`applyFormCompany${index}`}
                                    placeholder="Company Name"
                                    className="form-control"
                                    {...register(`professional_experience.${index}.company`)}
                                />
                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor={`applyFormStartDate${index}`} className="form-label fw-bold">Start Date <span className="requiredStar">*</span></label>
                                <input
                                    type="date"
                                    id={`applyFormStartDate${index}`}
                                    placeholder="Start Date"
                                    className="form-control"
                                    {...register(`professional_experience.${index}.start_date`)}
                                />
                            </div>
                            <div className="mb-3 col-lg-6">
                                <label htmlFor={`applyFormEndtDate${index}`} className="form-label fw-bold">End Date <span className="requiredStar">*</span></label>
                                <input
                                    type="date"
                                    placeholder="End Date"
                                    className="form-control"
                                    id={`applyFormEndDate${index}`}
                                    {...register(`professional_experience.${index}.end_date`)}
                                />
                            </div>
                            <div className="mb-3 col-lg-6">
                                {
                                    <label className={`text-capitalize mb-1 fw-bold`} htmlFor={'profissionalExpIndust'}>Industry
                                        <span className="requiredStar">*</span>
                                    </label>
                                }
                                <select
                                    id={'profissionalExpIndust'}
                                    className={`form-select`}
                                    {...register(`professional_experience.${index}.industry`)}
                                >
                                    <option disabled value="">Select Industry</option>
                                    {
                                        industries?.map(el => (
                                            <option key={el?.id} value={el?.id}>{el?.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-check mb-3 mt-3 col-lg-10 ps-0">
                                <input
                                    type="checkbox"
                                    className="form-check-input ms-3 me-1"
                                    id={`workingHear${index}`}
                                    {...register(`professional_experience.${index}.present`)}
                                />
                                <label className="form-check-label cursorPointer" htmlFor={`workingHear${index}`}>Currently Working Here</label>
                            </div>
                            {
                                !(index === 0) &&
                                <button
                                    type="button"
                                    className="btn btn-outline-danger w-auto m-auto"
                                    onClick={() => remove(index)}
                                >
                                    Remove Experience
                                </button>
                            }
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-outline-success my-4 mx-auto"
                        onClick={() => append({ position: '', company: '', start_date: '', end_date: '', present: false })}
                    >
                        Add Experience
                    </button>
                </div>
            </div>
        </div>
    );
};
ProfessionalExperienceInputs.propTypes = {
    register: PropTypes.any,
    control: PropTypes.any,
};
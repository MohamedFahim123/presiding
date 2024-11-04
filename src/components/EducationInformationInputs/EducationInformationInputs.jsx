import PropTypes from "prop-types";
import CustomInput from "../../custom/CustomInput";

export default function EducationInformationInputs({ errors, register }) {
    const formInputs = [
        {
            error: errors?.major?.message, type: 'text', placeholder: 'Major', name: 'major', lableName: 'Major', id: 'applyForAJobmajor'
        },
        {
            error: errors?.degree?.message, type: 'text', placeholder: 'Degree ', name: 'degree', lableName: 'Degree', id: 'applyForAJobdegree'
        },
        {
            error: errors?.university?.message, type: 'text', placeholder: 'School or Institute', name: 'university', lableName: 'School or Institute', id: 'applyForAJobuniversity'
        },
        {
            error: errors?.graduate_year?.message, type: 'number', placeholder: 'Year of Graduation', name: 'graduate_year', lableName: 'Year of Graduation', id: 'applyForAJobgraduate_year'
        },
    ];
    return (
        <>
            <h3 className="my-3">
                Education
            </h3>
            {
                formInputs?.map((formInput, idx) => (
                    <div key={idx} className="col-lg-8 my-2">
                        <CustomInput error={formInput.error} type={formInput.type} register={register} placeholder={formInput.placeholder} name={formInput.name} lableName={formInput.lableName} id={formInput.id} />
                    </div>
                ))
            }
        </>
    );
};
EducationInformationInputs.propTypes = {
    errors: PropTypes.object.isRequired,
    register: PropTypes.any,
};
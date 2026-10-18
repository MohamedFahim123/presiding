import PropTypes from "prop-types"
import { useForm } from "react-hook-form";
import { ApplyForJobShema } from "../../validation/ApplyForJobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCitizenShipStore } from "../../store/useCitizenShipStore";
import { useAvailabilitiesStore } from "../../store/useAvailabilitiesStore";
import { useLangStore } from "../../store/useLangStore";
import CustomSelect from "../../custom/CustomSelect";
import toast from "react-hot-toast";
import { useCountriesStore } from "../../store/useCountriesStore";
import PersonalInformationInputs from "../PersonalInformationInputs/PersonalInformationInputs";
import EducationInformationInputs from "../EducationInformationInputs/EducationInformationInputs";
import ProfessionalExperienceInputs from "../ProfessionalExperienceInputs/ProfessionalExperienceInputs";
import LanguageFeild from "../LanguageFeild/LanguageFeild";
import AttachMentsInputs from "../AttachMentsInputs/AttachMentsInputs";
import ApplyBtn from "../ApplyBtn/ApplyBtn";

export default function ApplyForJobForm({ jobId }) {
    const { register, control, setValue, reset, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            full_name: '',
            email: '',
            phone: '',
            phone_code: '',
            linkedin_url: '',
            country_id: '',
            city_id: '',
            citizenship_id: '',
            another_citizenship_id: '',
            major: '',
            degree: '',
            university: '',
            graduate_year: '',
            year_exp_id: '',
            professional_experience: [
                {
                    position: '',
                    company: '',
                    start_date: '',
                    end_data: '',
                    present: '',
                    industry_id: '',
                }
            ],
            languages: '',
            cv: '',
            cover_letter: '',
            availability_id: '',
            expected_salary: '',
        },
        resolver: zodResolver(ApplyForJobShema),
    });
    const citizenships = useCitizenShipStore((state) => state.citizenships);
    const availabilities = useAvailabilitiesStore((state) => state.availabilities);
    const countries = useCountriesStore((state) => state.countries);
    const langs = useLangStore((state) => state.langs);

    const formSelects = [
            {
                options: availabilities, error: errors?.availability_id?.message, name: 'availability_id', labelName: 'Notice Period', id: 'applyForAJobavailability_id'
            },
    ];

    const handleAddField = (setFields, fields, lableName) => {
        const field = lableName === 'Language' ?
            {
                id: Date.now(),
                name: '',
                value: '',
                radioBtn: [{ value: 'beginner' }, { value: 'intermediate' }, { value: 'advanced' }]
            }
            : { id: Date.now(), name: '', value: '' };
        setFields([...fields, field]);
    };

    const handleInputChange = (id, event, setFields, fields, radioBtnName) => {
        const newFields = fields.map((field) => {
            if (field.id === id) {
                if (radioBtnName) {
                    return { ...field, radioBtnValue: radioBtnName };
                } else {
                    return { ...field, [event.target.name]: event.target.value };
                }
            }
            return field;
        });
        setFields(newFields);
    };

    const handleDeleteField = (id, setFields, fields) => {
        if (fields.length > 1) {
            setFields(fields.filter((field) => field.id !== id));
        };
    };

    const onSubmit = async (data) => {
        const toastId = toast.loading('loading...');
        void data;
        void jobId;
        reset();
        toast.success('Demo mode: your application was submitted locally.', {
            id: toastId,
            duration: 1800,
        });
    };

    return (
        <div className="form__handler py-5 ">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="row">
                    <PersonalInformationInputs isFillForm={false} watch={watch} citizenships={citizenships} errors={errors} register={register} countries={countries} />
                    <EducationInformationInputs register={register} errors={errors} />
                    <ProfessionalExperienceInputs errors={errors} control={control} register={register} />

                    <div className="col-lg-10 shadow mb-5 p-4 bg-white">
                        <div className="row">
                            <LanguageFeild langs={langs} setValue={setValue} handleAddField={handleAddField} handleDeleteField={handleDeleteField} handleInputChange={handleInputChange} errors={errors} />
                        </div>
                    </div>
                    <div className="col-lg-10 shadow mb-5 p-4 bg-white">
                        <div className="row">
                            <AttachMentsInputs fillForm={false} errors={errors} register={register} />

                            <div className="col-md-8 my-2">
                                <label className={`text-capitalize mb-1 fw-bold`} htmlFor={'applyJobFormExpectedSalary'}>Expected Salary In SAR<span className="requiredStar">*</span></label>
                                <input
                                    type={'number'}
                                    id={'applyJobFormExpectedSalary'}
                                    placeholder={'Type Your expected salary'}
                                    className={`form-control ${errors?.expected_salary?.message && 'error_input'}`}
                                    {...register('expected_salary')}
                                />
                                {
                                    errors?.expected_salary &&
                                    <span className="error_message">{errors?.expected_salary?.message}</span>
                                }
                            </div>
                            {
                                formSelects?.map((formSelect, idx) => (
                                    <div key={idx} className="col-lg-8 my-2">
                                        <CustomSelect optional={formSelect?.optional} error={formSelect?.error} options={formSelect?.options} register={register} name={formSelect.name} labelName={formSelect.labelName} id={formSelect.id} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <ApplyBtn isSubmitting={isSubmitting} />
                </form>
            </div>
        </div>
    );
};
ApplyForJobForm.propTypes = {
    jobId: PropTypes.string.isRequired,
};
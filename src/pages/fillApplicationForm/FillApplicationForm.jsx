import { useForm } from "react-hook-form";
import CustomInput from "../../custom/CustomInput";
import CustomSelect from "../../custom/CustomSelect";
import { useEffect, useState } from "react";
import { getDataFromApi } from "../../functions/getDataFromApi";
import { baseUrl } from "../../functions/baseUrl";
import CustomCrudFields from "../../custom/CustomCrudFields";

export default function FillApplicationForm() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            // text
            full_name: '',
            email: '',
            position: '',
            linkedin_profile: '',
            phone: '',
            //Select
            phone_code: '',
            citizenship_id: '',
            country_id: '',
            city_id: '',
            year_exp_id: '',
            primary_expertise_id: '',

            // arrays
            skills_id: '',
            industry_id: '',
            languages_id: '',
            attachment: '',
            publication: '',
            portfolio_file: '',
            portfolio_link: '',

            // checkLists
            project_type_id: '',
            availability_id: '',
            willingness_to_travel: '',
        }
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [citizenShips, setCitizenShips] = useState([]);
    const [countries, setCountries] = useState([]);
    const [primaryExp, setPrimaryExp] = useState([]);
    const [langs, setLangs] = useState([]);
    const [yearsOfExp, setYearsOfExp] = useState([]);
    const [availabilities, setAvailabilities] = useState([]);
    const [projectTypes, setProjectTypes] = useState([]);
    const [skills, setSkills] = useState([]);
    const [cities, setCitites] = useState([]);
    const [industries, setIndustries] = useState([]);
    const getData = (slug, setData) => {
        getDataFromApi(`${baseUrl}/${slug}`, setData, setLoading, setError);
    };

    useEffect(() => {
        getData('citizenships', setCitizenShips);
        getData('countries', setCountries);
        getData('primary-expertise', setPrimaryExp);
        getData('languages', setLangs);
        getData('years-of-experience', setYearsOfExp);
        getData('availabilities', setAvailabilities);
        getData('project-types', setProjectTypes);
        getData('skills', setSkills);
        getData('industries', setIndustries);
    }, []);
    useEffect(() => {
        if (watch('country_id')) {
            getData(`countries/${watch('country_id')}`, setCitites);
        };
    }, [watch('country_id')]);

    const formInputs = [
        {
            error: errors?.full_name?.message, type: 'text', placeholder: 'Full Name', name: 'full_name', lableName: 'Full Name', id: 'fillApplicationFormFullName'
        },
        {
            error: errors?.email?.message, type: 'email', placeholder: 'Example@gmail.com', name: 'email', lableName: 'Email', id: 'fillApplicationFormEmail'
        },
        {
            error: errors?.position?.message, type: 'text', placeholder: 'Position', name: 'position', lableName: 'Position', id: 'fillApplicationFormPosition'
        },
        {
            error: errors?.linkedin_profile?.message, type: 'text', placeholder: 'Linkedin Profile URL', name: 'linkedin_profile', lableName: 'Linkedin Profile URL', id: 'fillApplicationFormlinkedin_profile'
        },
    ];
    const formSelects = [
        {
            options: citizenShips?.citizenships, error: errors?.citizenship_id?.message, name: 'citizenship_id', labelName: 'Nationality', id: 'fillApplicationFormCitizenShip_id'
        },
        {
            options: yearsOfExp?.years, error: errors?.year_exp_id?.message, name: 'year_exp_id', labelName: 'Years Of Experience', id: 'fillApplicationFormyear_exp_id'
        },
        {
            options: primaryExp?.primaryExpertises, error: errors?.primary_expertise_id?.message, name: 'primary_expertise_id', labelName: 'Primary Expertise', id: 'fillApplicationFormprimary_expertise_id'
        },
    ];

    const onSubmit = async (data) => {
        console.log(data);
    };

    const [skillsFields, setSkillsFields] = useState([{ id: Date.now(), name: '', value: '' }]);
    const [industriesFeilds, setIndustriesFields] = useState([{ id: Date.now(), name: '', value: '' }]);
    const [languagesFeilds, setLanguagesFields] = useState([{ id: Date.now(), name: '', value: '' }]);
    const handleAddField = (setFields, fields) => {
        setFields([...fields, { id: Date.now(), name: '', value: '' }]);
    };
    const handleInputChange = (id, event, setFields, fields) => {
        const newFields = fields.map((field) => {
            if (field.id === id) {
                return { ...field, [event.target.name]: event.target.value };
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

    console.log(skillsFields)

    return (
        <div className="applicationForm__handler">
            <div className="container py-5">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12">
                        <h1 className="text-center my-4 mainTextColor">Fill form and find available jobs</h1>
                    </div>
                    {
                        formInputs?.map((formInput, idx) => (
                            <div key={idx} className="col-lg-8 m-auto my-2">
                                <div className="row">
                                    <CustomInput isApplicationForm={true} error={formInput.error} type={formInput.type} register={register} placeholder={formInput.placeholder} name={formInput.name} lableName={formInput.lableName} id={formInput.id} />
                                </div>
                            </div>
                        ))
                    }
                    <div className="col-lg-8 m-auto my-2">
                        <div className="row">
                            <label className="text-capitalize mb-1 col-md-3" htmlFor="signUpMobileNumber">
                                Mobile Number <span className="requiredStar">*</span>
                            </label>
                            <div className="col-md-9">
                                <div className="row p-0">
                                    <div className="col-3 ps-0">
                                        <select
                                            id=""
                                            defaultValue={''}
                                            {...register('phone_code')}
                                            className={`form-select w-100 ${errors.phone_code ? 'error_input' : ''}`}
                                        >
                                            <option value="" disabled>000</option>
                                            {
                                                countries?.countries?.map(country => (
                                                    <option key={country?.id} id={country?.phone_code} value={country?.phone_code}>
                                                        {country?.phone_code}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        {
                                            errors.phone_code
                                            &&
                                            (<span className='error_message'>{errors.phone_code.message}</span>)
                                        }
                                    </div>
                                    <div className="col-9 m-0 p-0">
                                        <input
                                            type='text'
                                            id='signUpMobileNumber'
                                            placeholder='Enter your phone number'
                                            {...register('phone')}
                                            className={`form-control ${errors.phone ? 'error_input' : ''}`}
                                        />
                                        {
                                            errors.phone
                                            &&
                                            (<span className='error_message'>{errors.phone.message}</span>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 m-auto my-2">
                        <div className="row">
                            <label className='text-capitalize mb-1 col-md-3' htmlFor={'fillApplicationFormCountry_id'}>Country <span className="requiredStar">*</span></label>
                            <select
                                id={'fillApplicationFormCountry_id'}
                                className={`form-select w-75 col-md-9 ${errors?.country_id?.message && 'error_input'}`}
                                {...register('country_id')}
                            >
                                <option disabled value="">Select Country</option>
                                {
                                    countries?.countries?.map(country => (
                                        <option key={country?.id} value={country?.id}>{country?.name}</option>
                                    ))
                                }
                            </select>
                            {
                                errors?.country_id?.message &&
                                <span className="error_message">{errors?.country_id?.message}</span>
                            }
                        </div>
                    </div>
                    <div className="col-lg-8 m-auto my-2">
                        <div className="row">
                            <label className='text-capitalize mb-1 col-md-3' htmlFor={'fillApplicationFormcity_id'}>City <span className="requiredStar">*</span></label>
                            <select
                                id={'fillApplicationFormcity_id'}
                                className={`form-select w-75 col-md-9 ${errors?.city_id?.message && 'error_input'}`}
                                {...register('city_id')}
                            >
                                <option disabled value="">Select City</option>
                                {
                                    cities?.cities?.cities?.map(city => (
                                        <option key={city?.id} value={city?.id}>{city?.name}</option>
                                    ))
                                }
                            </select>
                            {
                                errors?.city_id?.message &&
                                <span className="error_message">{errors?.city_id?.message}</span>
                            }
                        </div>
                    </div>

                    {
                        formSelects?.map((formSelect, idx) => (
                            <div key={idx} className="col-lg-8 m-auto my-2">
                                <div className="row">
                                    <CustomSelect isApplicationForm={true} error={formSelect?.error} options={formSelect?.options} register={register} name={formSelect.name} labelName={formSelect.labelName} id={formSelect.id} />
                                </div>
                            </div>
                        ))
                    }
                    <CustomCrudFields
                        error={errors?.skills_id}
                        isApplicationForm={true}
                        fields={skillsFields}
                        options={skills?.skills}
                        setFields={setSkillsFields}
                        handleAddField={handleAddField}
                        handleDeleteField={handleDeleteField}
                        handleInputChange={handleInputChange}
                        labelName={'Add Skill'}
                    />
                    <CustomCrudFields
                        error={errors?.industry_id}
                        isApplicationForm={true}
                        fields={industriesFeilds}
                        options={industries?.industries}
                        setFields={setIndustriesFields}
                        handleAddField={handleAddField}
                        handleDeleteField={handleDeleteField}
                        handleInputChange={handleInputChange}
                        labelName={'Industry'}
                    />
                    <CustomCrudFields
                        error={errors?.languages_id}
                        isApplicationForm={true}
                        fields={languagesFeilds}
                        options={langs?.languages}
                        setFields={setLanguagesFields}
                        handleAddField={handleAddField}
                        handleDeleteField={handleDeleteField}
                        handleInputChange={handleInputChange}
                        labelName={'Your Languages'}
                    />

                </form>
            </div>
        </div>
    );
};

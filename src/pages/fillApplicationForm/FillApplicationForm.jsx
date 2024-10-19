import { useForm } from "react-hook-form";
import CustomInput from "../../custom/CustomInput";
import CustomSelect from "../../custom/CustomSelect";
import { useEffect, useState } from "react";
import { getDataFromApi } from "../../functions/getDataFromApi";
import { baseUrl } from "../../functions/baseUrl";
import CustomCrudFields from "../../custom/CustomCrudFields";
import { useCitizenShipStore } from "../../store/useCitizenShipStore";
import { useCountriesStore } from "../../store/useCountriesStore";
import { usePrimaryExpStore } from "../../store/usePrimaryExpStore";
import { useYearsOfExpStore } from "../../store/useYearsOfExpStore";
import { useLangStore } from "../../store/useLangStore";
import { useSkillsStore } from "../../store/useSkillsStore";
import { useIndustriesStore } from "../../store/useIndustriesStore";
import { useAvailabilitiesStore } from "../../store/useAvailabilitiesStore";
import { useProjectTypesStore } from "../../store/useProjectTypesStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { FillApplicationFormShema } from "../../validation/FillApllication";
import axios from "axios";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import toast from "react-hot-toast";
import bgImage from '../../assets/home-overview/9ed0b317c009431f96f7364d813c33b8.jpeg';

export default function FillApplicationForm() {
    const { register, setValue, watch, handleSubmit, reset , formState: { errors , isSubmitting } } = useForm({
        defaultValues: {
            full_name: '',
            email: '',
            position: '',
            linkedin_profile: '',
            phone: '',
            phone_code: '',
            citizenship_id: '',
            country_id: '',
            city_id: '',
            year_exp_id: '',
            primary_expertise_id: '',
            skills_id: '',
            industry_id: '',
            languages_id: '',
            attachment: '',
            publication: '',
            portfolio_file: '',
            portfolio_link: '',
            project_type_id: '',
            availability_id: '',
            willingness_to_travel: '',
        },
        resolver: zodResolver(FillApplicationFormShema),
    });
    const citizenships = useCitizenShipStore((state) => state.citizenships);
    const countries = useCountriesStore((state) => state.countries);
    const primaryExp = usePrimaryExpStore((state) => state.primaryExp);
    const yearsOfExp = useYearsOfExpStore((state) => state.yearsOfExp);
    const langs = useLangStore((state) => state.langs);
    const skills = useSkillsStore((state) => state.skills);
    const industries = useIndustriesStore((state) => state.industries);
    const availabilities = useAvailabilitiesStore((state) => state.availabilities);
    const projectTypes = useProjectTypesStore((state) => state.projectTypes);
    const [typeOfPortFolio, setTypeOfPortFolio] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [portFolioLinks, setPortFolioLinks] = useState([]);
    const [publicationInput, setPublicationInput] = useState('');
    const [publications, setPublications] = useState([])
    const [cities, setCitites] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [skillsFields, setSkillsFields] = useState([{ id: Date.now(), value: '' }]);
    const [industriesFeilds, setIndustriesFields] = useState([{ id: Date.now(), value: '' }]);
    const [languagesFeilds, setLanguagesFields] = useState([{ id: Date.now(), value: '' }]);
    const [checkedPreferredTypes, setcheckedPreferredTypes] = useState([]);
    const [travelWills, setTravelWills] = useState('no');

if(error){''};
if(loading){''};

    const getData = (slug, setData) => {
        getDataFromApi(`${baseUrl}/${slug}`, setData, setLoading, setError);
    };

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

    const handleAddInputValueToPortfolioLinks = (inputValue, setInputValue, setData, data) => {
        if (inputValue.trim()) {
            setData([...data, inputValue]);
            setInputValue('');
        };
    };

    const handleRemoveItem = (idx, setData, data) => {
        setData(data?.filter((el, index) => index !== idx));
    };

    const handleCheckboxChange = (event, item, setCheckedItems, checkedItems) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setCheckedItems([...checkedItems, item]);
        } else {
            setCheckedItems(checkedItems.filter((checkedItem) => checkedItem.id !== item.id));
        };
    };

    useEffect(() => {
        if (watch('country_id')) {
            getData(`countries/${watch('country_id')}`, setCitites);
        };
    }, [watch('country_id')]);
    useEffect(() => {
        if (checkedPreferredTypes.length > 0) {
            setValue('project_type_id', checkedPreferredTypes?.map(el => `${el?.id}`));
        };
    }, [checkedPreferredTypes]);
    useEffect(() => {
        setValue('willingness_to_travel', travelWills);
    }, [travelWills]);
    useEffect(() => {
        setValue('industry_id', industriesFeilds?.map(el => el?.value));
    }, [industriesFeilds]);
    useEffect(() => {
        setValue('languages_id', languagesFeilds?.map(el => el?.value));
    }, [languagesFeilds]);
    useEffect(() => {
        setValue('skills_id', skillsFields?.map(el => el?.value));
    }, [skillsFields]);
    useEffect(() => {
        setValue('portfolio_link', portFolioLinks);
    }, [portFolioLinks]);
    useEffect(() => {
        setValue('publication', publications);
    }, [publications]);

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
            options: citizenships, error: errors?.citizenship_id?.message, name: 'citizenship_id', labelName: 'Nationality', id: 'fillApplicationFormCitizenShip_id'
        },
        {
            options: yearsOfExp, error: errors?.year_exp_id?.message, name: 'year_exp_id', labelName: 'Years Of Experience', id: 'fillApplicationFormyear_exp_id'
        },
        {
            options: primaryExp, error: errors?.primary_expertise_id?.message, name: 'primary_expertise_id', labelName: 'Primary Expertise', id: 'fillApplicationFormprimary_expertise_id'
        },
        {
            options: availabilities, error: errors?.availability_id?.message, name: 'availability_id', labelName: 'Availability', id: 'fillApplicationFormAvailability_id'
        },
    ];

    const onSubmit = async (data) => {
        const toastId = toast.loading('loading...');
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (key !== 'portfolio_file' && key !== 'attachment' && !Array.isArray(data[key])) {
                formData.append(key, data[key]);
            } else if (key !== 'portfolio_file' && key !== 'attachment' && Array.isArray(data[key])) {
                data[key].forEach((item, index) => {
                    formData.append(`${key}[${index}]`, item);
                });
            } else if (key === 'attachment' || key === 'portfolio_file') {
                Array.from(data[key]).forEach((file, index) => {
                    formData.append(`${key}[${index}]`, file);
                });
            };
        });
        await axios.post(`${baseUrl}/fill-application`, formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(res => {
            console.log(res?.data);
            toast.success(res?.data?.message || 'Form Filled Successfully!',{
                id: toastId,
                duration: 1000
            });
            reset();
        })
        .catch(err => {
            console.log(err?.response?.data)
            toast.error(err?.response?.data?.message || 'Something Went Wrong please try Again',{
                id: toastId,
                duration: 1000,
            });
        });
    };

    return (
        <>
            <MyHeroImage title={`Accounts Payables associate`} bgImage={bgImage} subTit={'Amman, Jordan'} />
            <div className="applicationForm__handler">
                <div className="container py-5">
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-12 mb-4">
                            <h1 className="my-4 mainTextColor">Application Form</h1>
                        </div>
                        {
                            formInputs?.map((formInput, idx) => (
                                <div key={idx} className="col-lg-8 my-2">
                                    <CustomInput error={formInput.error} type={formInput.type} register={register} placeholder={formInput.placeholder} name={formInput.name} lableName={formInput.lableName} id={formInput.id} />
                                </div>
                            ))
                        }
                        <div className="col-lg-8 my-2">
                            <label className="text-capitalize mb-1" htmlFor="signUpMobileNumber">
                                Mobile Number <span className="requiredStar">*</span>
                            </label>
                            <div className="row p-0">
                                <div className="col-3">
                                    <select
                                        id=""
                                        defaultValue={''}
                                        {...register('phone_code')}
                                        className={`form-select ${errors.phone_code ? 'error_input' : ''}`}
                                    >
                                        <option value="" disabled>000</option>
                                        {
                                            countries?.map(country => (
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
                                <div className="col-9">
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
                        <div className="col-lg-8 my-2">
                            <label className='text-capitalize mb-1' htmlFor={'fillApplicationFormCountry_id'}>Country <span className="requiredStar">*</span></label>
                            <select
                                id={'fillApplicationFormCountry_id'}
                                className={`form-select ${errors?.country_id?.message && 'error_input'}`}
                                {...register('country_id')}
                            >
                                <option disabled value="">Select Country</option>
                                {
                                    countries?.map(country => (
                                        <option key={country?.id} value={country?.id}>{country?.name}</option>
                                    ))
                                }
                            </select>
                            {
                                errors?.country_id?.message &&
                                <span className="error_message">{errors?.country_id?.message}</span>
                            }
                        </div>
                        <div className="col-lg-8 my-2">
                            <label className='text-capitalize mb-1' htmlFor={'fillApplicationFormcity_id'}>City <span className="requiredStar">*</span></label>
                            <select
                                id={'fillApplicationFormcity_id'}
                                className={`form-select ${errors?.city_id?.message && 'error_input'}`}
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
                        {
                            formSelects?.map((formSelect, idx) => (
                                <div key={idx} className="col-lg-8 my-2">
                                    <CustomSelect error={formSelect?.error} options={formSelect?.options} register={register} name={formSelect.name} labelName={formSelect.labelName} id={formSelect.id} />
                                </div>
                            ))
                        }
                        <CustomCrudFields
                            error={errors?.skills_id}
                            fields={skillsFields}
                            options={skills}
                            setFields={setSkillsFields}
                            handleAddField={handleAddField}
                            handleDeleteField={handleDeleteField}
                            handleInputChange={handleInputChange}
                            labelName={'Add Skill'}
                        />
                        <CustomCrudFields
                            error={errors?.industry_id}
                            fields={industriesFeilds}
                            options={industries}
                            setFields={setIndustriesFields}
                            handleAddField={handleAddField}
                            handleDeleteField={handleDeleteField}
                            handleInputChange={handleInputChange}
                            labelName={'Industry'}
                        />
                        <CustomCrudFields
                            error={errors?.languages_id}
                            fields={languagesFeilds}
                            options={langs}
                            setFields={setLanguagesFields}
                            handleAddField={handleAddField}
                            handleDeleteField={handleDeleteField}
                            handleInputChange={handleInputChange}
                            labelName={'Your Languages'}
                        />
                        <div className="col-lg-8 my-2">
                            <label className='text-capitalize mb-1' htmlFor={'fillApplicationFormattachment'}>Attachments <span className="requiredStar">*</span></label>
                            <input
                                type="file"
                                multiple
                                id={'fillApplicationFormattachment'}
                                className={`form-control ${errors?.attachment?.message && 'error_input'}`}
                                {...register('attachment')}
                                accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
                            />
                            {
                                errors?.attachment?.message &&
                                <span className="error_message">{errors?.attachment?.message}</span>
                            }
                        </div>
                        <div className="col-lg-8 my-2">
                            <label className='text-capitalize mb-1' htmlFor={'fillApplicationFormPortfolioType'}>Select Portfolio Type <span className="optional">(optional)</span></label>
                            <select
                                defaultValue={''}
                                id={'fillApplicationFormPortfolioType'}
                                className={`form-select`}
                                onChange={(e) => {
                                    setTypeOfPortFolio(e.target.value);
                                }}
                            >
                                <option value="" disabled>Select a type</option>
                                <option value="files">Files</option>
                                <option value="links">Links</option>
                            </select>
                            {
                                errors?.attachment?.message &&
                                <span className="error_message">{errors?.attachment?.message}</span>
                            }
                            {
                                typeOfPortFolio === 'files' ?
                                    <>
                                        <label className='text-capitalize mb-1 mt-4' htmlFor={'fillApplicationFormPortFolioTypeFiles'}>PortFolio File <span className="optional">(optional)</span></label>
                                        <input
                                            type="file"
                                            multiple
                                            id={'fillApplicationFormPortFolioTypeFiles'}
                                            className={`form-control mt-3 ${errors?.portfolio_file?.message && 'error_input'}`}
                                            {...register('portfolio_file')}
                                            accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
                                        />
                                        {
                                            errors?.portfolio_file?.message &&
                                            <span className="error_message">{errors?.portfolio_file?.message}</span>
                                        }
                                    </>
                                    :
                                    <>
                                        <label className='text-capitalize mt-4 mb-1' htmlFor={'fillApplicationFormPortfolioLinks'}>Portfolio Links <span className="optional">(optional)</span></label>
                                        <input
                                            type="text"
                                            id="fillApplicationFormPortfolioLinks"
                                            className={`form-control mt-3 ${errors?.portfolio_link?.message && 'error_input'}`}
                                            placeholder="type a PortFolio Link"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                        />
                                        {
                                            errors?.portfolio_link?.message &&
                                            <span className="error_message">{errors?.portfolio_link?.message}</span>
                                        }
                                        <div className="col-12 mt-3">
                                            <div className="addLink__btn d-flex justify-content-center">
                                                <button type="button" className="btn btn-outline-success mb-3" onClick={() => handleAddInputValueToPortfolioLinks(inputValue, setInputValue, setPortFolioLinks, portFolioLinks)}>
                                                    Add Other Link
                                                </button>
                                            </div>
                                            <div className="added-values">
                                                {
                                                    portFolioLinks?.map((link, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="badge bg-success m-1 py-1">
                                                            {link} <i className="bi bi-trash cursorPointer hoveredIcon" onClick={() => handleRemoveItem(idx, setPortFolioLinks, portFolioLinks)}></i>
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                        <div className="col-lg-8 my-2">
                            <label className='text-capitalize mt-4 mb-1' htmlFor={'fillApplicationFormPublications'}>Publications <span className="optional">(optional)</span></label>
                            <input
                                type="text"
                                id="fillApplicationFormPublications"
                                className={`form-control mt-3 ${errors?.publication?.message && 'error_input'}`}
                                placeholder="type a Publication"
                                value={publicationInput}
                                onChange={(e) => setPublicationInput(e.target.value)}
                            />
                            {
                                errors?.publication?.message &&
                                <span className="error_message">{errors?.publication?.message}</span>
                            }
                            <div className="col-12 mt-3">
                                <div className="addLink__btn d-flex justify-content-center">
                                    <button type="button" className="btn btn-outline-success mb-3" onClick={
                                        () => handleAddInputValueToPortfolioLinks(publicationInput, setPublicationInput, setPublications, publications)
                                    }>
                                        Add Other publication
                                    </button>
                                </div>
                                <div className="added-values">
                                    {
                                        publications?.map((el, idx) => (
                                            <span
                                                key={idx}
                                                className="badge bg-success m-1 py-1">
                                                {el} <i className="bi bi-trash cursorPointer hoveredIcon" onClick={() => handleRemoveItem(idx, setPublications, publications)}></i>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 my-2">
                            <label className="fs-5 text-capitalize mt-4 mb-2">Preferred types of projects</label>
                            <div className="row">
                                {
                                    projectTypes?.map((type) => (
                                        <div key={type?.id} className="form-check mb-2 col-md-2">
                                            <input
                                                className="form-check-input cursorPointer"
                                                type="checkbox"
                                                value={type?.name}
                                                id={`check-${type?.id}`}
                                                onChange={(event) => handleCheckboxChange(event, type, setcheckedPreferredTypes, checkedPreferredTypes)}
                                            />
                                            <label className="form-check-label cursorPointer" htmlFor={`check-${type?.id}`}>
                                                {type?.name}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-8 my-2">
                            <label className="mb-3">Willing To Travel</label>
                            <div className="form-check mb-2">
                                <input
                                    className="form-check-input cursorPointer"
                                    type="checkbox"
                                    defaultValue={''}
                                    id={`fillFormWillingness_to_travel`}
                                    onChange={(event) => {
                                        if (event.target.checked === true) {
                                            setTravelWills('yes');
                                        } else {
                                            setTravelWills('no')
                                        };
                                    }}
                                />
                                <label className="form-check-label cursorPointer" htmlFor={`fillFormWillingness_to_travel`}>
                                    Will you want to travel?
                                </label>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button disabled={isSubmitting} className="btn btn-outline-primary submitApplicationBtn py-2">Submit Application</button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
};
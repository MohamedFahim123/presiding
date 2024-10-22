import PropTypes from "prop-types"
import { useForm } from "react-hook-form";
import { ApplyForJobShema } from "../../validation/ApplyForJobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCitizenShipStore } from "../../store/useCitizenShipStore";
import { useYearsOfExpStore } from "../../store/useYearsOfExpStore";
import { useAvailabilitiesStore } from "../../store/useAvailabilitiesStore";
import { useLangStore } from "../../store/useLangStore";
import { useEffect, useState } from "react";
import CustomInput from "../../custom/CustomInput";
import CustomSelect from "../../custom/CustomSelect";
import CustomCrudFields from "../../custom/CustomCrudFields";
import axios from "axios";
import { baseUrl } from "../../functions/baseUrl";
import toast from "react-hot-toast";

export default function ApplyForJobForm({ jobId }) {
    const { register, setValue, reset , handleSubmit, formState: { errors , isSubmitting } } = useForm({
        defaultValues: {
            full_name: '',
            email: '',
            phone: '',
            company: '',
            linkedin_url: '',
            major: '',
            university: '',
            location: '',
            year_exp_id: '',
            citizenship_id: '',
            another_citizenship_id: '',
            availability_id: '',
            languages_id: '',
            cv: '',
            extra_info: '',
            visa: '',
        },
        resolver: zodResolver(ApplyForJobShema),
    });
    const citizenships = useCitizenShipStore((state) => state.citizenships);
    const yearsOfExp = useYearsOfExpStore((state) => state.yearsOfExp);
    const availabilities = useAvailabilitiesStore((state) => state.availabilities);
    const langs = useLangStore((state) => state.langs);
    const formInputs = [
        {
            error: errors?.full_name?.message, type: 'text', placeholder: 'Full Name', name: 'full_name', lableName: 'Full Name', id: 'applyForAJobFullName'
        },
        {
            error: errors?.email?.message, type: 'email', placeholder: 'Example@gmail.com', name: 'email', lableName: 'Email', id: 'applyForAJobEmail'
        },
        {
            error: errors?.phone?.message, type: 'number', placeholder: '+0201122334455', name: 'phone', lableName: 'Phone Number', id: 'applyForAJobPhoneNumber'
        },
        {
            error: errors?.company?.message, type: 'text', placeholder: 'Enter Your Company Name', name: 'company', lableName: 'Company Name', id: 'applyForAJobCompany'
        },
        {
            error: errors?.linkedin_url?.message, type: 'text', placeholder: 'Enter Linkedin Url', name: 'linkedin_url', lableName: 'Linkedin Url', id: 'applyForAJoblinkedin_url'
        },
        {
            error: errors?.major?.message, type: 'text', placeholder: 'Enter Major', name: 'major', lableName: 'Major', id: 'applyForAJobmajor'
        },
        {
            error: errors?.university?.message, type: 'text', placeholder: 'Enter University Name', name: 'university', lableName: 'University Name', id: 'applyForAJobuniversity'
        },
        {
            error: errors?.location?.message, type: 'text', placeholder: 'Enter Your Location', name: 'location', lableName: 'Location', id: 'applyForAJoblocation'
        },
    ];
    const formSelects = [
        {
            options: citizenships, error: errors?.citizenship_id?.message, name: 'citizenship_id', labelName: 'Nationality', id: 'applyForAJobCitizenShip_id'
        },
        {
            optional: true, options: citizenships, error: errors?.another_citizenship_id?.message, name: 'another_citizenship_id', labelName: 'Other Nationality', id: 'applyForAJobanother_citizenship_id'
        },
        {
            options: yearsOfExp, error: errors?.year_exp_id?.message, name: 'year_exp_id', labelName: 'Years Of Experience', id: 'applyForAJobyear_exp_id'
        },
        {
            options: availabilities, error: errors?.availability_id?.message, name: 'availability_id', labelName: 'Availability', id: 'applyForAJobavailability_id'
        },
    ];
    const [languagesFeilds, setLanguagesFields] = useState([{ id: Date.now(), value: '' }]);

    useEffect(() => {
        setValue('languages_id', languagesFeilds?.map(el => el?.value));
    }, [languagesFeilds]);

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

    const onSubmit = async (data) => {
        const toastId = toast.loading('loading...');
        data.job_id = jobId;
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (key !== 'cv' && !Array.isArray(data[key])) {
                formData.append(key, data[key]);
            } else if (key !== 'cv' && Array.isArray(data[key])) {
                data[key].forEach((item, index) => {
                    formData.append(`${key}[${index}]`, item);
                });
            } else if (key === 'cv') {
                formData.append('cv', data[key][0]);
            };
        });
        await axios.post(`${baseUrl}/apply-job`, formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => {
                console.log(res?.data)
                toast.success(res?.data?.message || 'Applied Successfully!' ,{
                    id: toastId,
                    duration: 1000,
                });
                reset();
            })
            .catch(err => {
                console.log(err?.response?.data);
                toast.error(err?.response?.data?.message || 'Something went Wrong!' ,{
                    id: toastId ,
                    duration: 1000,
                });
            });
    };

    return (
        <div className="form__handler py-5 ">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="row">
                    {
                        formInputs?.map((formInput, idx) => (
                            <div key={idx} className="col-lg-8 my-2">
                                <CustomInput error={formInput.error} type={formInput.type} register={register} placeholder={formInput.placeholder} name={formInput.name} lableName={formInput.lableName} id={formInput.id} />
                            </div>
                        ))
                    }
                    {
                        formSelects?.map((formSelect, idx) => (
                            <div key={idx} className="col-lg-8 my-2">
                                <CustomSelect optional={formSelect?.optional} error={formSelect?.error} options={formSelect?.options} register={register} name={formSelect.name} labelName={formSelect.labelName} id={formSelect.id} />
                            </div>
                        ))
                    }
                    <CustomCrudFields
                        error={errors?.languages_id}
                        fields={languagesFeilds}
                        options={langs}
                        setFields={setLanguagesFields}
                        handleAddField={handleAddField}
                        handleDeleteField={handleDeleteField}
                        handleInputChange={handleInputChange}
                        labelName={'Language'}
                    />
                    <div className="col-lg-8 my-2">
                        <label className='text-capitalize mb-1' htmlFor={'applyForAJobCVFile'}>Your CV <span className="requiredStar">*</span></label>
                        <input
                            type="file"
                            id={'applyForAJobCVFile'}
                            className={`form-control ${errors?.cv?.message && 'error_input'}`}
                            {...register('cv')}
                            accept='.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx'
                        />
                        {
                            errors?.cv?.message &&
                            <span className="error_message">{errors?.cv?.message}</span>
                        }
                    </div>
                    <div className="col-lg-8 my-2">
                        <label className='text-capitalize mb-1' htmlFor={'applyForAJobExtraInfo'}>Extra Information <span className="optional">( optional )</span></label>
                        <textarea
                            id={'applyForAJobExtraInfo'}
                            placeholder="Extra Information about you"
                            className={`form-control ${errors?.extra_info?.message && 'error_input'}`}
                            {...register('extra_info')}
                        />
                        {
                            errors?.extra_info?.message &&
                            <span className="error_message">{errors?.extra_info?.message}</span>
                        }
                    </div>
                    <div className="col-lg-8 my-2">
                        <div className="form-check mb-2">
                            <input
                                className="form-check-input cursorPointer"
                                type="checkbox"
                                defaultValue={''}
                                id={`applyForAJobVisa`}
                                onChange={(event) => {
                                    if (event.target.checked === true) {
                                        setValue('visa', 'yes');
                                    } else {
                                        setValue('visa', 'no');
                                    };
                                }}
                            />
                            <label className="form-check-label cursorPointer" htmlFor={`applyForAJobVisa`}>
                                Do you have a Visa? <span className="requiredStar">*</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button disabled={isSubmitting} className="btn btn-outline-primary submitApplicationBtn py-2">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
ApplyForJobForm.propTypes = {
    jobId: PropTypes.string.isRequired,
};
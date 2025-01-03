import PropTypes from "prop-types";
import CustomInput from "../../custom/CustomInput";
import CustomSelect from "../../custom/CustomSelect";
import { getDataFromApi } from "../../functions/getDataFromApi";
import { useEffect, useState } from "react";
import { baseUrl } from "../../functions/baseUrl";
import { useYearsOfExpStore } from "../../store/useYearsOfExpStore";
import styles from './personalInformationInputs.module.css';

export default function PersonalInformationInputs({ isFillForm, errors, watch, register, countries, citizenships }) {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const yearsOfExp = useYearsOfExpStore((state) => state.yearsOfExp);
    const formTextInputs = isFillForm ?
        [
            {
                error: errors?.full_name?.message, type: 'text', placeholder: 'Full Name', name: 'full_name', lableName: 'Full Name', id: 'applyForAJobFullName'
            },
            {
                error: errors?.email?.message, type: 'email', placeholder: 'Example@gmail.com', name: 'email', lableName: 'Email', id: 'applyForAJobEmail'
            },
            {
                error: errors?.position?.message, type: 'text', placeholder: 'Enter Your position', name: 'position', lableName: 'position', id: 'applyForAJobposition'
            },
        ]
        :
        [
            {
                error: errors?.full_name?.message, type: 'text', placeholder: 'Full Name', name: 'full_name', lableName: 'Full Name', id: 'applyForAJobFullName'
            },
            {
                error: errors?.email?.message, type: 'email', placeholder: 'Example@gmail.com', name: 'email', lableName: 'Email', id: 'applyForAJobEmail'
            },
            {
                error: errors?.linkedin_url?.message, type: 'text', placeholder: 'Enter Linkedin Url', name: 'linkedin_url', lableName: 'Linkedin Url', id: 'applyForAJoblinkedin_url'
            },
        ];

    const otherIntputsAtEnd = [{
        error: errors?.linkedin_profile?.message, type: 'text', placeholder: 'Enter Linkedin Profile', name: 'linkedin_profile', lableName: 'Linkedin Profile', id: 'applyForAJoblinkedin_profile'
    },]


    const formSelectInputs = [
        {
            options: citizenships, error: errors?.citizenship_id?.message, name: 'citizenship_id', labelName: 'Nationality', id: 'applyForAJobCitizenShip_id'
        },
        {
            optional: true, options: citizenships, error: errors?.another_citizenship_id?.message, name: 'another_citizenship_id', labelName: 'Other Nationality', id: 'applyForAJobanother_citizenship_id'
        },
        {
            options: yearsOfExp, error: errors?.year_exp_id?.message, name: 'year_exp_id', labelName: 'Total Years Of Experience', id: 'fillApplicationFormyear_exp_id'
        },
    ];

    useEffect(() => {
        if (watch('country_id')) {
            getDataFromApi(`${baseUrl}/countries/${watch('country_id')}`, setCities, setLoading, setError);
        };
    }, [watch('country_id')]);

    if (loading) { '' };

    if (error) { '' };

    return (
        <div className="col-lg-10 bg-white shadow py-4 px-4 mb-5">
            <div className="row">
                <h3 className="col-12 mb-3">
                    Personal Information
                </h3>
                {
                    formTextInputs?.map((formInput, idx) => (
                        <div key={idx} className="col-lg-6 my-2">
                            {
                                formInput?.name === 'major' &&
                                <h3 className="my-3">
                                    Education
                                </h3>
                            }
                            <CustomInput error={formInput.error} type={formInput.type} register={register} placeholder={formInput.placeholder} name={formInput.name} lableName={formInput.lableName} id={formInput.id} />
                        </div>
                    ))
                }
                <div className="col-lg-6 my-2">
                    <div className="row p-0">
                        <label className={`text-capitalize mb-1 fw-bold`} htmlFor={'fillFormMobileNumber'}>Phone Number<span className="requiredStar">*</span></label>
                        <div className={`col-3 ${styles.country_code}`}>
                            <select
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
                        <div className={`col-9 ${styles.phoneNumber}`}>
                            <input
                                type='text'
                                id='fillFormMobileNumber'
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
                <div className="col-lg-6 my-2">
                    <label className='text-capitalize mb-1 fw-bold' htmlFor={'fillApplicationFormCountry_id'}>Country of Residence <span className="requiredStar">*</span></label>
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
                <div className="col-lg-6 my-2">
                    <label className='text-capitalize mb-1 fw-bold' htmlFor={'fillApplicationFormcity_id'}>City<span className="requiredStar">*</span></label>
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
                    formSelectInputs?.map((formSelect, idx) => (
                        <div key={idx} className="col-lg-6 my-2">
                            <CustomSelect optional={formSelect?.optional} error={formSelect?.error} options={formSelect?.options} register={register} name={formSelect.name} labelName={formSelect.labelName} id={formSelect.id} />
                        </div>
                    ))
                }
                {
                    isFillForm &&
                    otherIntputsAtEnd?.map((formInput, idx) => (
                        <div key={idx} className="col-lg-6 my-2">
                            {
                                formInput?.name === 'major' &&
                                <h3 className="my-3">
                                    Education
                                </h3>
                            }
                            <CustomInput error={formInput.error} type={formInput.type} register={register} placeholder={formInput.placeholder} name={formInput.name} lableName={formInput.lableName} id={formInput.id} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
PersonalInformationInputs.propTypes = {
    errors: PropTypes.object.isRequired,
    register: PropTypes.any,
    countries: PropTypes.array,
    citizenships: PropTypes.array,
    watch: PropTypes.any,
    isFillForm: PropTypes.bool.isRequired,
};
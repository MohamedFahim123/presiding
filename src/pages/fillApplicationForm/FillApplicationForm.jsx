import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import bgImage from '../../assets/home-overview/applyForAJobImage.avif';
import ApplyBtn from "../../components/ApplyBtn/ApplyBtn";
import AttachMentsInputs from "../../components/AttachMentsInputs/AttachMentsInputs";
import EducationInformationInputs from "../../components/EducationInformationInputs/EducationInformationInputs";
import LanguageFeild from "../../components/LanguageFeild/LanguageFeild";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import MyLoader from "../../components/myLoaderSec/MyLoader";
import PersonalInformationInputs from "../../components/PersonalInformationInputs/PersonalInformationInputs";
import ProfessionalExperienceInputs from "../../components/ProfessionalExperienceInputs/ProfessionalExperienceInputs";
import CustomCrudFields from "../../custom/CustomCrudFields";
import { useCitizenShipStore } from "../../store/useCitizenShipStore";
import { useCountriesStore } from "../../store/useCountriesStore";
import { useIndustriesStore } from "../../store/useIndustriesStore";
import { useJobTypesStore } from "../../store/useJobTypes";
import { useLangStore } from "../../store/useLangStore";
import { useProjectTypesStore } from "../../store/useProjectTypesStore";
import { useSkillsStore } from "../../store/useSkillsStore";
import { useYearsOfExpStore } from "../../store/useYearsOfExpStore";
import { FillApplicationFormShema } from "../../validation/FillApllication";

export default function FillApplicationForm() {
    const { register, control, setValue, watch, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            full_name: '',
            email: '',
            phone: '',
            phone_code: '',
            position: '',
            linkedin_profile: '',
            country_id: '',
            city_id: '',
            citizenship_id: '',
            another_citizenship_id: '',
            major: '',
            degree: '',
            university: '',
            graduate_year: '',
            professional_experience: [
                {
                    position: '',
                    company: '',
                    start_date: '',
                    end_date: '',
                    present: '',
                    industry_id: '',
                },
            ],
            languages: '',
            cv: '',
            year_exp_id: '',
            skills_id: '',
            job_type_id: '',
            project_type_id: '',
        },
        resolver: zodResolver(FillApplicationFormShema),
    });
    const citizenships = useCitizenShipStore((state) => state.citizenships);
    const countries = useCountriesStore((state) => state.countries);
    const langs = useLangStore((state) => state.langs);
    const skills = useSkillsStore((state) => state.skills);
    const projectTypes = useProjectTypesStore((state) => state.projectTypes);
    const jobTypes = useJobTypesStore((state) => state.jobTypes);
    const citizenshipsLoading = useCitizenShipStore(state => state.citizenshipsLoading);
    const countriesLoading = useCountriesStore(state => state.countriesLoading);
    const industriesLoading = useIndustriesStore(state => state.industriesLoading);
    const langsLoading = useLangStore(state => state.langsLoading);
    const projectTypesLoading = useProjectTypesStore(state => state.projectTypesLoading);
    const skillsLoading = useSkillsStore(state => state.skillsLoading);
    const yearsOfExpLoading = useYearsOfExpStore(state => state.yearsOfExpLoading);
    const [skillsFields, setSkillsFields] = useState([{ id: Date.now(), value: '' }]);
    const [checkedPreferredTypes, setcheckedPreferredTypes] = useState([]);
    const [checkedPreferredJobTypes, setcheckedPreferredJobTypes] = useState([]);

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
                };
            };
            return field;
        });
        setFields(newFields);
    };

    const handleDeleteField = (id, setFields, fields) => {
        if (fields.length > 1) {
            setFields(fields.filter((field) => field.id !== id));
        };
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
        setValue('skills_id', skillsFields?.map(el => el?.value));
    }, [setValue, skillsFields]);

    const onSubmit = async (data) => {
        data.job_type_id = checkedPreferredJobTypes?.map(job => job?.id);
        data.project_type_id = checkedPreferredTypes?.map(type => type?.id);
        void data;
        const toastId = toast.loading('loading...');
        reset();
        toast.success('Demo mode: your talent profile was submitted locally.', {
            id: toastId,
            duration: 1800,
        });
    };

    if (
        citizenshipsLoading ||
        countriesLoading ||
        industriesLoading ||
        langsLoading ||
        skillsLoading ||
        yearsOfExpLoading ||
        projectTypesLoading
    ) {
        return <MyLoader />;
    };

    return (
        <>
            <MyHeroImage title={`Application Form`} bgImage={bgImage} bgPosition={'center'} />
            <div className="applicationForm__handler">
                <div className="container py-5">
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        <PersonalInformationInputs isFillForm={true} watch={watch} citizenships={citizenships} errors={errors} register={register} countries={countries} />
                        <EducationInformationInputs register={register} errors={errors} />
                        <ProfessionalExperienceInputs errors={errors} control={control} register={register} />
                        <div className="col-lg-10 shadow mb-5 p-4 bg-white">
                            <div className="row">
                                <h3 className="col-12 mb-3">
                                    Skills
                                </h3>
                                <CustomCrudFields
                                    error={errors?.skills_id?.message}
                                    fields={skillsFields}
                                    options={skills}
                                    setFields={setSkillsFields}
                                    handleAddField={handleAddField}
                                    handleDeleteField={handleDeleteField}
                                    handleInputChange={handleInputChange}
                                    labelName={'Skill'}
                                />
                            </div>
                        </div>
                        <div className="col-lg-10 shadow mb-5 p-4 bg-white">
                            <div className="row">
                                <LanguageFeild langs={langs} setValue={setValue} handleAddField={handleAddField} handleDeleteField={handleDeleteField} handleInputChange={handleInputChange} errors={errors} />
                            </div>
                        </div>

                        <div className="col-lg-10 shadow mb-5 p-4 bg-white">
                            <div className="row">
                                <AttachMentsInputs fillFrom={true} errors={errors} register={register} />
                                <div className="col-lg-8 my-2">
                                    <label className="fs-5 text-capitalize mt-4 mb-2 fw-bold">Preferred Employment Type <span className="requiredStar">*</span></label>
                                    <div className="row">
                                        {
                                            projectTypes?.map((type) => (
                                                <div key={type?.id} className="form-check ms-2 mb-2 col-md-2">
                                                    <input
                                                        className="form-check-input cursorPointer"
                                                        type="checkbox"
                                                        value={type?.name}
                                                        id={`checkProjectType-${type?.id}`}
                                                        onChange={(event) => handleCheckboxChange(event, type, setcheckedPreferredTypes, checkedPreferredTypes)}
                                                    />
                                                    <label className="form-check-label cursorPointer" htmlFor={`checkProjectType-${type?.id}`}>
                                                        {type?.name}
                                                    </label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-8 my-2">
                                    <label className="fs-5 text-capitalize mt-4 mb-2 fw-bold">Preferred Job Type <span className="requiredStar">*</span></label>
                                    <div className="row">
                                        {
                                            jobTypes?.map((type) => (
                                                <div key={type?.id} className="form-check ms-2 mb-2 col-md-2">
                                                    <input
                                                        className="form-check-input cursorPointer"
                                                        type="checkbox"
                                                        value={type?.name}
                                                        id={`checkJobType-${type?.id}`}
                                                        onChange={(event) => handleCheckboxChange(event, type, setcheckedPreferredJobTypes, checkedPreferredJobTypes)}
                                                    />
                                                    <label className="form-check-label cursorPointer" htmlFor={`checkJobType-${type?.id}`}>
                                                        {type?.name}
                                                    </label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ApplyBtn isSubmitting={isSubmitting} />
                    </form>
                </div >
            </div >
        </>
    );
};
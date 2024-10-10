import { useForm } from 'react-hook-form';
import styles from './myInsightsFiltersBar.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { InsightsFilterationShema } from '../../validation/insightsFilter';
import CustomSelect from '../../custom/CustomSelect';

export default function MyInsightsFiltersBar() {
    const {
        register,
        handleSubmit,
        // setError,
        // reset,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            industry: '',
            service: '',
        },
        resolver: zodResolver(InsightsFilterationShema),
    });

    const selectInputs = [
        {
            id: 1,
            idName: 'insightsFilterationIndustry',
            name: 'industry',
            error: errors?.industry?.message,
        },
        {
            id: 2,
            idName: 'insightsFilterationService',
            name: 'service',
            error: errors?.service?.message,
        }
    ];

    const submitHandler = async data => {
        console.log(data);
    };

    return (
        <div className={styles.filterSec__handler}>
            <div className="container">
                <form onSubmit={handleSubmit(submitHandler)} className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 d-flex align-items-center">
                        <h3>Filter insights by:</h3>
                    </div>
                    {
                        selectInputs?.map(select =>(
                            <div key={select?.id} className="col-lg-3 col-md-4 d-flex justify-content-center flex-column">
                                <CustomSelect register={register} id={select?.idName} name={select?.name} error={select.error} />
                            </div>
                        ))
                    }
                    <div className="col-lg-3 col-md-4 d-flex align-items-center justify-content-center">
                        <input className='sign__up__btn' disabled={isSubmitting} type="submit" value="Filter" />
                    </div>
                </form>
            </div>
        </div>
    );
};

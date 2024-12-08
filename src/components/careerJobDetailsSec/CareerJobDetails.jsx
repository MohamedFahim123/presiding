import PropTypes from 'prop-types';
import styles from './careerJobDetails.module.css';

export default function CareerJobDetails({ jobDetails }) {
    return (
        <>
            <div className={`${styles.careerJobDetails_handler}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className={`row mb-5`}>
                                <li className={`${styles.mainInfoJob} col-lg-4 text-center`}>
                                    <h3>
                                        <span className={styles.title__content}>
                                            Experience
                                        </span>
                                    </h3>
                                    <p>
                                        {jobDetails?.years_of_experience}
                                    </p>
                                </li>
                                <li className={`${styles.mainInfoJob} col-lg-4 text-center`}>
                                    <h3>
                                        <span className={styles.title__content}>
                                            Career Level
                                        </span>
                                    </h3>
                                    <p>
                                        {jobDetails?.managment_level}
                                    </p>
                                </li>
                                <li className={`${styles.mainInfoJob} col-lg-4 text-center`}>
                                    <h3>
                                        <span className={styles.title__content}>
                                            Employment Type
                                        </span>
                                    </h3>
                                    <p>
                                        {jobDetails?.job_type}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className={`${styles.JobDetails_allInfo}`}>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        <span className={styles.title__content}>
                                            Description
                                        </span>
                                    </h3>
                                    <p>
                                        {jobDetails?.description}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        <span className={styles.title__content}>
                                            education
                                        </span>
                                    </h3>
                                    <p>
                                        {jobDetails?.education}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        <span className={styles.title__content}>
                                            travel requirement
                                        </span>
                                    </h3>
                                    <p>
                                        {jobDetails?.travel_requirment}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        <span className={styles.title__content}>
                                            responsibilities
                                        </span>
                                    </h3>
                                    <p>
                                        {jobDetails?.key_responsabilities}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        <span className={styles.title__content}>
                                            languages
                                        </span>
                                    </h3>
                                    {
                                        jobDetails?.languages?.map((el) => (
                                            <p key={el?.id}>
                                                {el?.name}
                                            </p>
                                        ))
                                    }
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        <span className={styles.title__content}>
                                            skills
                                        </span>
                                    </h3>
                                    {
                                        jobDetails?.skills?.map((el) => (
                                            <p key={el?.id}>
                                                {el?.name}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
CareerJobDetails.propTypes = {
    jobDetails: PropTypes.object,
};

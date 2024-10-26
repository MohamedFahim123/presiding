import PropTypes from 'prop-types';
import styles from './careerJobDetails.module.css';
export default function CareerJobDetails({ jobDetails }) {
    return (
        <>
            <div className={`${styles.careerJobDetails_handler}`}>
                <div className="container">
                    <div className="row">
                        <div className="co-12">
                            <ul className={`${styles.JobDetails_action}`}>
                                <li className={`${styles.mainInfoJob}`}>
                                    <h3>
                                        Experience
                                    </h3>
                                    <p>
                                        {jobDetails?.years_of_experience}
                                    </p>
                                </li>
                                <li className={`${styles.mainInfoJob}`}>
                                    <h3>
                                        Career Level
                                    </h3>
                                    <p>
                                        {jobDetails?.managment_level}
                                    </p>
                                </li>
                                <li className={`${styles.mainInfoJob}`}>
                                    <h3>
                                        Employment Type
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
                                        Description
                                    </h3>
                                    <p>
                                        {jobDetails?.description}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        education
                                    </h3>
                                    <p>
                                        {jobDetails?.education}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        travel requirment
                                    </h3>
                                    <p>
                                        {jobDetails?.travel_requirment}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        responsabilities
                                    </h3>
                                    <p>
                                        {jobDetails?.key_responsabilities}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        languages
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
                                        skills
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

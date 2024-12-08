import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImage from '../../assets/home-overview/applyForAJobImage.avif';
import CareerJobDetails from "../../components/careerJobDetailsSec/CareerJobDetails";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import MyLoader from "../../components/myLoaderSec/MyLoader";
import { baseUrl } from "../../functions/baseUrl";
import { postDataToApi } from "../../functions/postDataToApi";

export default function SingleCareer() {
    const { JobId } = useParams();
    const [job, setJob] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    useEffect(() => {
        postDataToApi(`${baseUrl}/get-job`, { job_id: JobId }, setJob, setError, setLoading);
    }, [JobId]);

    if (loading) {
        return <MyLoader />;
    };

    if (error) { '' };

    return (
        <>
            <MyHeroImage bgImage={bgImage} title={`${job?.job?.title}`} subTit={`${job?.job?.country}, ${job?.job?.city}`} actions={true} btnName={'Apply Now'} btnNavigation={`/careers/apply/${JobId}`} linkName={'View other openings'} linkDistenation={'/careers'} />
            <CareerJobDetails jobDetails={job?.job} />
        </>
    );
};
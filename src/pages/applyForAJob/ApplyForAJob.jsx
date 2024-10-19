import { useEffect, useState } from "react";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import { postDataToApi } from "../../functions/postDataToApi";
import { baseUrl } from "../../functions/baseUrl";
import { useParams } from "react-router-dom";
import MyLoader from "../../components/myLoaderSec/MyLoader";
import ApplyForJobForm from "../../components/applyForJobForm/ApplyForJobForm";
import bgImage from '../../assets/home-overview/9ed0b317c009431f96f7364d813c33b8.jpeg';

export default function ApplyForAJob() {
    const { JobId } = useParams();
    const [job, setJob] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    if(error){''}

    useEffect(() => {
        postDataToApi(`${baseUrl}/get-job`, { job_id: JobId }, setJob, setError, setLoading);
    }, [JobId]);

    return (
        <>
            {
                loading ?
                    <MyLoader />
                    :
                    <>
                        <MyHeroImage bgImage={bgImage} title={`Apply For ${job?.job?.title}`} subTit={`${job?.job?.city}, ${job?.job?.country}`} />
                        <ApplyForJobForm jobId={JobId} />
                    </>
            }
        </>
    );
};

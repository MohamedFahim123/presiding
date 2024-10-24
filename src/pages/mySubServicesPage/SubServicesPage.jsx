import MySubServices from "../../components/mySubServicesSec/MySubServices";
import bgImage from '../../assets/home-insights/8be20325d2160343393bf6f345b1b8fb.jpeg';
import MyHeroImage from '../../components/myHeroImageSec/MyHeroImage';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';
import { useParams } from 'react-router-dom';
import MyLoader from "../../components/myLoaderSec/MyLoader";

export default function SubServicesPage() {
    const { subService } = useParams();
    const [currData, loading] = useFetch(`${baseUrl}/show-sub-service/${subService}`);
    console.log(currData)

    if (loading) {
        return <MyLoader />;
    };

    return (
        <>
            <MyHeroImage title={`${currData?.subService?.title}`} bgImage={bgImage} />
            <MySubServices currData={currData} />
        </>
    );
};

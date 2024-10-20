import MyServicesCards from '../../components/myServicesCardsSec/MyServicesCards';
import bgImage from '../../assets/home-insights/8be20325d2160343393bf6f345b1b8fb.jpeg';
import MyHeroImage from '../../components/myHeroImageSec/MyHeroImage';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import MyLoader from '../../components/myLoaderSec/MyLoader';

export default function ServicesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currData,loading] = useFetch(`${baseUrl}/all-services?page=${currentPage}`);

    if(loading){
        return <MyLoader />;
    };

    return (
        <>
            <MyHeroImage title={`Our Services`} bgImage={bgImage} />
            <MyServicesCards currData={currData} setCurrentPage={setCurrentPage} />
        </>
    );
};

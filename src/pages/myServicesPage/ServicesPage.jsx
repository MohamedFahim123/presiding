import MyServicesCards from '../../components/myServicesCardsSec/MyServicesCards';
import bgImage from '../../assets/home-insights/8be20325d2160343393bf6f345b1b8fb.jpeg';
import MyHeroImage from '../../components/myHeroImageSec/MyHeroImage';


export default function ServicesPage() {
    return (
        <>
            <MyHeroImage title={`Our Services`} bgImage={bgImage}/>
            <MyServicesCards />
        </>
    );
};

import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import bgImage from '../../assets/contactUs/ef56f05a5d0cd1d802146cb39bc9c48a.jpg';
import { useEffect, useState } from "react";
import MyLoader from "../../components/myLoaderSec/MyLoader";
import AboutUsOurMission from "../../components/aboutUsOurMission/AboutUsOurMission";
import AboutUsSliderSection from "../../components/aboutUsSliderSection/AboutUsSliderSection";

export default function AboutUs() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    if (loading) {
        return <MyLoader />;
    };

    return (
        <>
            <MyHeroImage bgPosition={'center'} backGroundOverLoay={'rgba(0, 0, 0, 0.6)'} title={`Who We Are?`} bgImage={bgImage} />
            <AboutUsOurMission />
            <AboutUsSliderSection />
        </>
    );
};
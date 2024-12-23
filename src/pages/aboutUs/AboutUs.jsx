import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import bgImage from '../../assets/contactUs/ef56f05a5d0cd1d802146cb39bc9c48a.jpg';
import { useEffect, useState } from "react";
import MyLoader from "../../components/myLoaderSec/MyLoader";
import AboutUsOurMission from "../../components/aboutUsOurMission/AboutUsOurMission";
import MyHomeOurMission from "../../components/myHomeOurMissionSec/MyHomeOurMission";
import AboutUsSliderSection1 from "../../components/aboutUsSliderSection1/AboutUsSliderSection";
import AboutUsSliderSection2 from "../../components/aboutUsSliderSection2/AboutUsSliderSection";
import AboutUsSliderSection3 from "../../components/aboutUsSliderSection3/AboutUsSliderSection";

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
            <MyHomeOurMission currPage={'about'} />
            <AboutUsSliderSection1 />
            <hr />
            <AboutUsSliderSection2 />
            <hr />
            <AboutUsSliderSection3 />
            <AboutUsOurMission />
        </>
    );
};
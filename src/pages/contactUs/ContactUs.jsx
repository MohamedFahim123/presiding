import { useEffect, useState } from "react";
import MyLoader from "../../components/myLoaderSec/MyLoader";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import bgImage from '../../assets/contactUs/ef56f05a5d0cd1d802146cb39bc9c48a.jpg';
import ContactUsMainTextSection from "../../components/ContactUsMainTextSection/ContactUsMainTextSection";
import ContactUsMap from "../../components/ContactUsMap/ContactUsMap";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";


export default function ContactUs() {
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
            <MyHeroImage bgPosition={'center'} backGroundOverLoay={'rgba(0, 0, 0, 0.6)'} title={`Contact Us`} bgImage={bgImage} />
            <ContactUsMainTextSection />
            <ContactUsMap />
            <ContactUsForm />
        </>
    );
};
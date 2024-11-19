import MyServicesCards from '../../components/myServicesCardsSec/MyServicesCards';
import bgImage from '../../assets/home-insights/8be20325d2160343393bf6f345b1b8fb.jpeg';
import MyHeroImage from '../../components/myHeroImageSec/MyHeroImage';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import MyLoader from '../../components/myLoaderSec/MyLoader';
import ServicesIconsSection from '../../components/servicesIconsSec/ServicesIconsSection';
import styles from './servicesPage.module.css';
// import MyPartnersSlider from '../../components/myPartinersSliderSec/MyPartnersSlider';

export default function ServicesPage() {
    const [currData, loading] = useFetch(`${baseUrl}/all-services`);

    if (loading) {
        return <MyLoader />;
    };

    return (
        <>
            <MyHeroImage
                title={`Our Services`}
                bgImage={bgImage}
                subTit={'"It’s not about paperwork; it’s about delivering tailored services that ensure the best results."'}
                actions={true}
                btnName={'Get in touch'}
                btnNavigation={'/contact-us'}
            />
            <ServicesIconsSection />
            <div className={`header_ofSec text-center py-4 ${styles.mainHeaderServices}`}>
                <h3>
                    Diverse Industries, Global Reach
                </h3>
                <p className={`mt-3 m-auto ${styles?.mainParagraph}`}>
                We serve various industries across several countries, delivering tailored solutions with a global perspective.
                </p>
            </div>
            <MyServicesCards currData={currData?.services} />
            {/* <MyPartnersSlider /> */}
        </>
    );
};

import MyServicesCards from '../../components/myServicesCardsSec/MyServicesCards';
import bgImage from '../../assets/home-insights/8be20325d2160343393bf6f345b1b8fb.jpeg';
import MyHeroImage from '../../components/myHeroImageSec/MyHeroImage';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import MyLoader from '../../components/myLoaderSec/MyLoader';
import ServicesIconsSection from '../../components/servicesIconsSec/ServicesIconsSection';
import styles from './servicesPage.module.css';

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
                subTit={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem labore repudiandae a cupiditate!'}
                actions={true}
                btnName={'Get in touch'}
                btnNavigation={'/contact-us'}
            />
            <ServicesIconsSection />
            <div className={`header_ofSec text-center py-4 ${styles.mainHeaderServices}`}>
                <h3>
                    Lorem, ipsum dolor.
                </h3>
                <p className={`mt-3 m-auto ${styles?.mainParagraph}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fuga ipsum, explicabo ipsam consequuntur libero saepe iusto tempore vero earum ut amet aperiam porro ipsa molestiae sequi at sed. Magni?
                </p>
            </div>
            <MyServicesCards currData={currData} />
        </>
    );
};

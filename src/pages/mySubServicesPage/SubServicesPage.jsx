import MyHomeSlider from "../../components/myHomeSliderSec/MyHomeSlider";
import sliderImg1 from '../../assets/home-insights/8be20325d2160343393bf6f345b1b8fb.jpeg'
import MySubServices from "../../components/mySubServicesSec/MySubServices";
export default function SubServicesPage() {
    return (
        <>
            <MyHomeSlider heading={'Policies & Procedures'} title={''} overLayColor={'#00000057'} showBtn={false} sliderImg1={sliderImg1} sliderImg2={sliderImg1} />
            <MySubServices />
        </>
    );
};

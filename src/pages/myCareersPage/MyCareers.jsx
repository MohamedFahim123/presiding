import CareerJopsTable from "../../components/careerJopsTableSec/CareerJopsTable";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import bgImage from '../../assets/home-overview/f95ccedc77bb0dea110ccc66fa4aef90.jpeg';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import MyLoader from "../../components/myLoaderSec/MyLoader";
import WhyPresidingSec from "../../components/whyPresidingSec/WhyPresidingSec";

export default function MyCareers() {
  const [currData, loading] = useFetch(`${baseUrl}/all-jobs`);

  if (loading) {
    return <MyLoader />;
  };

  return (
    <>
      <MyHeroImage
        title={`Seeking For More Expertise`}
        subTitle={' Fill the talent form to be considered for upcoming opportunities with Presiding and collaborate on impactful projects with us !'}
        subTit={'Join our pool of expertise of talented and skilled consultants.'}
        height={'80vh'}
        btnName={'Fill Talent Form'}
        btnNavigation={'fill-application-form'}
        actions={true}
        backGroundOverLoay={'linear-gradient( transparent,var(--main-blue-color-bg))'}
        itemsPosition={'center'}
        bgImage={bgImage}
        bgPosition={'center'}
      />
      <WhyPresidingSec 
        heading={'A culture that inspires'} 
        paraOne={'"A great company culture is the foundation of every successful organization. It thrives on trust, inclusion, and a shared commitment to excellence. At Presiding, we welcome both emerging talents and seasoned experts, creating an environment where collaboration and innovation flourish.'}
        paraTwo={'By fostering a culture that values growth, dedication, and diverse perspectives, we empower individuals to contribute meaningfully, driving success and delivering impactful results for our clients."'}
      />
      {/* <InternShipSec /> */}
      <CareerJopsTable currData={currData?.jobs} />
    </>
  );
};
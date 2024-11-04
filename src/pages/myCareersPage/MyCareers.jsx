import CareerJopsTable from "../../components/careerJopsTableSec/CareerJopsTable";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import bgImage from '../../assets/home-overview/f95ccedc77bb0dea110ccc66fa4aef90.jpeg';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import MyLoader from "../../components/myLoaderSec/MyLoader";
import WhyPresidingSec from "../../components/whyPresidingSec/WhyPresidingSec";
import InternShipSec from "../../components/internShipSec/InternShipSec";

export default function MyCareers() {
  const [currData, loading] = useFetch(`${baseUrl}/all-jobs`);

  if (loading) {
    return <MyLoader />;
  };

  return (
    <>
      <MyHeroImage
        title={`Looking For More Talented Jobs`}
        subTit={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aut maiores itaque perferendis, laborum quisquam.'}
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
        heading={'Why Presiding?'} 
        paraOne={'We have experienced teams advising companies across the full breadth of the energy and natural resources including upstream and downstream and from conventional resource extraction through to developing the latest clean technologies. Our global network means we can support you as you expand your business and provide on the ground expertise and insight.'}
        paraTwo={'Whether you are looking to raise finance, improve M&A post deal integration, model extraction revenues or benchmark key engineers pay, we have experienced teams able to work for the duration of the project lifecycle, and beyond.'}
      />
      <InternShipSec />
      <CareerJopsTable currData={currData?.jobs} />
    </>
  );
};
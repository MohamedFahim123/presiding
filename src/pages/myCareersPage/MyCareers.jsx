import CareerJopsTable from "../../components/careerJopsTableSec/CareerJopsTable";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import bgImage from '../../assets/home-overview/f95ccedc77bb0dea110ccc66fa4aef90.jpeg';

export default function MyCareers() {
  return (
    <>
      <MyHeroImage title={`Job Openings`} bgImage={bgImage} bgPosition={'center'} />
      <CareerJopsTable />
    </>
  );
};
import CareerJopsTable from "../../components/careerJopsTableSec/CareerJopsTable";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import bgImage from '../../assets/home-overview/9ed0b317c009431f96f7364d813c33b8.jpeg';

export default function MyCareers() {
  return (
    <>
      <MyHeroImage title={`Accounts Payables associate`} bgImage={bgImage} subTit={'Amman, Jordan'} />
      <CareerJopsTable />
    </>
  );
};
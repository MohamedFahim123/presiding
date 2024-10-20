import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MyLayout from './components/myLayoutSec/MyLayout';
import MyHome from './pages/myHomePage/MyHome';
import InsightsPage from './pages/myInsightsPage/InsightsPage';
import SingleInsightPage from './pages/singleInsightPage/SingleInsightPage';
import ServicesPage from './pages/myServicesPage/ServicesPage';
import SubServicesPage from './pages/mySubServicesPage/SubServicesPage';
import { Toaster } from 'react-hot-toast';
import FillApplicationForm from './pages/fillApplicationForm/FillApplicationForm';
import { useEffect } from 'react';
import { useCitizenShipStore } from './store/useCitizenShipStore';
import { useYearsOfExpStore } from './store/useYearsOfExpStore';
import { useCountriesStore } from './store/useCountriesStore';
import { usePrimaryExpStore } from './store/usePrimaryExpStore';
import { useLangStore } from './store/useLangStore';
import { useSkillsStore } from './store/useSkillsStore';
import { useIndustriesStore } from './store/useIndustriesStore';
import { useAvailabilitiesStore } from './store/useAvailabilitiesStore';
import { useProjectTypesStore } from './store/useProjectTypesStore';
import MyCareers from './pages/myCareersPage/MyCareers';
import SingleCareer from './pages/singleCareerPage/SingleCareer';
import ApplyForAJob from './pages/applyForAJob/ApplyForAJob';

function App() {
  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <MyLayout />,
      // errorElement: <></>,
      children: [
        { index: true, element: <MyHome /> },
        { path: 'home', element: <MyHome /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'services/:subService', element: <SubServicesPage /> },
        { path: 'insights', element: <InsightsPage /> },
        { path: 'insights/:singleInsight', element: <SingleInsightPage /> },
        { path: 'careers', element: <MyCareers /> },
        { path: 'careers/job-details/:JobId', element: <SingleCareer /> },
        { path: 'careers/apply/:JobId', element: <ApplyForAJob /> },
        { path: 'careers/fill-application-form', element: <FillApplicationForm /> },
      ],
    }
  ]);

  const getCitizenShips = useCitizenShipStore(state => state.getCitizenShips);
  const getYearsOfExp = useYearsOfExpStore(state => state.getYearsOfExp);
  const getCountries = useCountriesStore(state => state.getCountries);
  const getPrimaryExp = usePrimaryExpStore(state => state.getPrimaryExp);
  const getLangs = useLangStore(state => state.getLangs);
  const getSkills = useSkillsStore(state => state.getSkills);
  const getIndustries = useIndustriesStore(state => state.getIndustries);
  const getAvailabilities = useAvailabilitiesStore(state => state.getAvailabilities);
  const getProjectTypes = useProjectTypesStore(state => state.getProjectTypes);

  useEffect(() => {
    getCitizenShips();
    getCountries();
    getPrimaryExp();
    getYearsOfExp();
    getLangs();
    getSkills();
    getIndustries();
    getAvailabilities();
    getProjectTypes();
  }, [getAvailabilities, getCitizenShips, getCountries, getIndustries, getLangs, getPrimaryExp, getProjectTypes, getSkills, getYearsOfExp]);

  return (
    <>
      <Toaster position='right-top' />
      <RouterProvider router={Routes}>
      </RouterProvider>
    </>
  );
};

export default App;

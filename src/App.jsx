import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
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
import { Routes } from './routes/Routes';

function App() {
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

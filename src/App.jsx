import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MyLayout from './components/myLayoutSec/MyLayout';
import MyHome from './pages/myHomePage/MyHome';
import InsightsPage from './pages/myInsightsPage/InsightsPage';
import SingleInsightPage from './pages/singleInsightPage/SingleInsightPage';
import ServicesPage from './pages/myServicesPage/ServicesPage';
import SubServicesPage from './pages/mySubServicesPage/SubServicesPage';

function App() {
  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <MyLayout />,
      // errorElement: <></>,
      children: [
        { index: true, element: <MyHome /> },
        { path: 'home', element: <MyHome /> },
        { path: 'insights', element: <InsightsPage /> },
        { path: 'insights/:singleInsight', element: <SingleInsightPage /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'services/:subService', element: <SubServicesPage /> },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={Routes}>
      </RouterProvider>
    </>
  );
};

export default App

import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../components/myLayoutSec/MyLayout";
import MyHome from "../pages/myHomePage/MyHome";
import ServicesPage from "../pages/myServicesPage/ServicesPage";
import SubServicesPage from "../pages/mySubServicesPage/SubServicesPage";
import InsightsPage from "../pages/myInsightsPage/InsightsPage";
import SingleInsightPage from "../pages/singleInsightPage/SingleInsightPage";
import MyCareers from "../pages/myCareersPage/MyCareers";
import SingleCareer from "../pages/singleCareerPage/SingleCareer";
import ApplyForAJob from "../pages/applyForAJob/ApplyForAJob";
import FillApplicationForm from "../pages/fillApplicationForm/FillApplicationForm";
import ContactUs from "../pages/contactUs/ContactUs";
import NotFound from "../pages/notFound/NotFound";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MyLayout />,
        errorElement: <NotFound />,
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
            { path: 'careers/fill-application-form', element: <FillApplicationForm plicationForm /> },
            { path: 'contact-us', element: <ContactUs /> },
        ],
    },
]);
import heroArchitecture from '../assets/home-overview/homeMainSlider.png';
import teamMeeting from '../assets/home-overview/backGround.jpg';
import analyticsCharts from '../assets/home-overview/a.jpg';
import officePeople from '../assets/home-overview/secondImage.png';
import studentPortrait from '../assets/home-overview/career_internShip.jpg';
import officeCity from '../assets/home-overview/insights.jpg';
import podcastCover from '../assets/home-podacast/brooke-cagle-JBwcenOuRCg-unsplash.png';
import insightMarkets from '../assets/insightsPage/SingleInsighsHeroSec.jpeg';
import insightStrategy from '../assets/home-insights/Picture2.png';
import insightLeadership from '../assets/home-insights/WhatsApp Image 2024-10-27 at 17.53.26_a6394369.jpg';

const industries = [
    { id: 1, title: 'Energy & Utilities', image: officeCity },
    { id: 2, title: 'Financial Services', image: analyticsCharts },
    { id: 3, title: 'Healthcare', image: teamMeeting },
    { id: 4, title: 'Technology', image: heroArchitecture },
    { id: 5, title: 'Government', image: officePeople },
    { id: 6, title: 'Telecommunications', image: insightMarkets },
    { id: 7, title: 'Real Estate', image: heroArchitecture },
    { id: 8, title: 'Transportation', image: officeCity },
];

const services = [
    {
        id: 1,
        title: 'Strategy & Transformation',
        main_image: analyticsCharts,
        image: analyticsCharts,
        subServices: [
            { id: 101, title: 'Business Strategy' },
            { id: 102, title: 'Digital Transformation' },
        ],
    },
    {
        id: 2,
        title: 'Technology Consulting',
        main_image: heroArchitecture,
        image: heroArchitecture,
        subServices: [
            { id: 201, title: 'Technology Advisory' },
            { id: 202, title: 'Data & Analytics' },
        ],
    },
    {
        id: 3,
        title: 'People & Organization',
        main_image: officePeople,
        image: officePeople,
        subServices: [
            { id: 301, title: 'Organization Design' },
            { id: 302, title: 'Talent & Workforce' },
        ],
    },
    {
        id: 4,
        title: 'Project Management',
        main_image: teamMeeting,
        image: teamMeeting,
        subServices: [
            { id: 401, title: 'Program Delivery' },
            { id: 402, title: 'PMO Advisory' },
        ],
    },
];

const jobs = [
    {
        id: 1,
        title: 'Senior Strategy Consultant',
        job_type: 'Full time',
        city: 'Riyadh, Saudi Arabia',
        country: 'Saudi Arabia',
        years_of_experience: '5–8 years',
        managment_level: 'Senior',
        description: 'Work with leading organizations to solve complex strategic challenges and deliver measurable outcomes.',
        education: 'Bachelor’s degree in Business, Economics, Engineering, or a related field.',
        travel_requirment: 'Occasional regional travel may be required.',
        key_responsabilities: 'Lead analysis, develop recommendations, and collaborate with client teams through implementation.',
        languages: [{ id: 1, name: 'English' }, { id: 2, name: 'Arabic' }],
        skills: [{ id: 1, name: 'Strategy' }, { id: 2, name: 'Stakeholder Management' }],
    },
    {
        id: 2,
        title: 'Digital Transformation Manager',
        job_type: 'Full time',
        city: 'Jeddah, Saudi Arabia',
        country: 'Saudi Arabia',
        years_of_experience: '7+ years',
        managment_level: 'Manager',
        description: 'Help clients modernize operations, adopt emerging technologies, and build sustainable digital capabilities.',
        education: 'Bachelor’s degree in Information Technology, Computer Science, or a related discipline.',
        travel_requirment: 'Travel depends on client needs.',
        key_responsabilities: 'Shape transformation roadmaps, manage delivery teams, and track business benefits.',
        languages: [{ id: 1, name: 'English' }, { id: 2, name: 'Arabic' }],
        skills: [{ id: 3, name: 'Digital Transformation' }, { id: 4, name: 'Program Management' }],
    },
    {
        id: 3,
        title: 'Business Analyst',
        job_type: 'Contract',
        city: 'Dubai, UAE',
        country: 'United Arab Emirates',
        years_of_experience: '3–5 years',
        managment_level: 'Consultant',
        description: 'Translate business needs into clear analysis and practical solutions for cross-functional teams.',
        education: 'Bachelor’s degree in a relevant field.',
        travel_requirment: 'No regular travel expected.',
        key_responsabilities: 'Gather requirements, analyze data, and support the design and testing of solutions.',
        languages: [{ id: 1, name: 'English' }],
        skills: [{ id: 5, name: 'Business Analysis' }, { id: 6, name: 'Communication' }],
    },
];

const blogs = [
    { id: 1, title: 'Building resilient organizations for a changing world', description: 'How organizations can turn uncertainty into an opportunity for sustainable growth.', body: '<p>Resilient organizations combine a clear sense of purpose with the ability to adapt. By investing in people, data, and flexible operating models, leaders can respond to change while continuing to create value.</p>', image: insightLeadership, attachment: '#' },
    { id: 2, title: 'The next chapter of digital transformation', description: 'A practical view of creating lasting value through digital transformation.', body: '<p>Successful digital transformation starts with business outcomes. A focused roadmap, empowered teams, and continuous learning help organizations move from isolated pilots to lasting impact.</p>', image: insightMarkets, attachment: '#' },
    { id: 3, title: 'Unlocking value through better strategy execution', description: 'Turning bold strategic choices into consistent results across the organization.', body: '<p>Execution improves when priorities are explicit, ownership is clear, and progress is visible. Strong governance connects daily decisions to long-term strategic goals.</p>', image: insightStrategy, attachment: '#' },
];

const option = (id, name, extra = {}) => ({ id, name, ...extra });
const countries = [
    option(1, 'Saudi Arabia', { phone_code: '+966' }),
    option(2, 'United Arab Emirates', { phone_code: '+971' }),
    option(3, 'Jordan', { phone_code: '+962' }),
    option(4, 'Egypt', { phone_code: '+20' }),
];
const citizenships = [option(1, 'Saudi'), option(2, 'Emirati'), option(3, 'Jordanian'), option(4, 'Egyptian')];
const languages = [option(1, 'Arabic'), option(2, 'English'), option(3, 'French')];
const skills = [option(1, 'Business Strategy'), option(2, 'Project Management'), option(3, 'Data Analysis'), option(4, 'Communication')];
const projectTypes = [option(1, 'Short-term Project'), option(2, 'Long-term Project'), option(3, 'Advisory')];
const jobTypes = [option(1, 'Full time'), option(2, 'Part time'), option(3, 'Contract')];
const years = [option(1, '0–2 years'), option(2, '3–5 years'), option(3, '6–10 years'), option(4, '10+ years')];
const availabilities = [option(1, 'Immediately'), option(2, 'Within 2 weeks'), option(3, 'Within 1 month'), option(4, 'More than 1 month')];
const primaryExpertises = [option(1, 'Strategy'), option(2, 'Technology'), option(3, 'Transformation')];

const dataByPath = {
    '/settings': { email: 'hello@presiding.com', phone: '+966 11 000 0000', instagram: '#', facebook: '#', twitter: '#', linkedin: '#' },
    '/industries': { industries },
    '/sections': { sections: [
        { image: insightLeadership, description: 'Ideas that move businesses forward', link: '/insights' },
        { image: officePeople, description: 'A partner for your next chapter', link: '/about-us' },
        { image: analyticsCharts, description: 'Solutions built around your goals', link: '/services' },
        { image: officeCity, description: 'Where we work', link: '/branches' },
        { image: studentPortrait, description: 'Build your future with us', link: '/careers' },
    ] },
    '/home-services': { services },
    '/all-services': { services },
    '/sliders': { sliders: [
        { id: 1, image: teamMeeting, title: 'Presiding Solutions', description: 'We grow your business', link: '/services', button_text: 'Explore our services' },
        { id: 2, image: heroArchitecture, title: 'Built around your vision', description: 'Move forward with confidence', link: '/about-us', button_text: 'Discover Presiding' },
    ] },
    '/home-blogs': { blogs },
    '/all-blogs': { blogs },
    '/video-cover': { video_cover: { image: podcastCover, link: '#' } },
    '/parteners': { parteners: ['Presiding', 'Strategy Co.', 'Northstar', 'Gulf Partners'].map((name, index) => ({ id: index + 1, name })) },
    '/all-jobs': { jobs },
    '/citizenships': { citizenships },
    '/countries': { countries },
    '/languages': { languages },
    '/skills': { skills },
    '/project-types': { projectTypes },
    '/employment-types': { projectTypes: jobTypes },
    '/years-of-experience': { years },
    '/availabilities': { availabilities },
    '/primary-expertise': { primaryExpertises },
};

export function getMockData(url = '', requestData = {}) {
    const path = String(url).replace(/[?#].*$/, '').replace(/^.*\/mock-api/, '') || '/';
    let data = dataByPath[path];

    if (path.startsWith('/countries/')) {
        const countryId = Number(path.split('/').pop());
        const citiesByCountry = {
            1: [option(1, 'Riyadh'), option(2, 'Jeddah'), option(3, 'Dammam')],
            2: [option(4, 'Dubai'), option(5, 'Abu Dhabi'), option(6, 'Sharjah')],
            3: [option(7, 'Amman'), option(8, 'Aqaba')],
            4: [option(9, 'Cairo'), option(10, 'Alexandria')],
        };
        data = { cities: { cities: citiesByCountry[countryId] || [] } };
    } else if (path.startsWith('/show-sub-service/')) {
        const id = Number(path.split('/').pop());
        const subService = services.flatMap((service) => service.subServices).find((item) => item.id === id) || services[0].subServices[0];
        data = { subService: { ...subService, body: `<p>${subService.title} helps organizations create practical, measurable progress. Our specialists work alongside your team to shape a clear plan and deliver lasting results.</p>`, medias: [] } };
    } else if (path.startsWith('/show-blog/')) {
        const id = Number(path.split('/').pop());
        const blog = blogs.find((item) => item.id === id) || blogs[0];
        data = { blog, relatedBlogs: blogs.filter((item) => item.id !== blog.id) };
    } else if (path === '/get-job') {
        const jobId = Number(requestData.job_id);
        data = { job: jobs.find((item) => item.id === jobId) || jobs[0] };
    }

    return data ? structuredClone(data) : {};
}

export const mockOptions = {
    availabilities,
    citizenships,
    countries,
    industries,
    jobTypes,
    languages,
    primaryExpertises,
    projectTypes,
    skills,
    years,
};

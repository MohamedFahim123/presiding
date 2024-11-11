import { z } from 'zod';

export const ApplyForJobShema = z.object({
    full_name: z.string().min(1, { message: 'Full Name is Required' }),
    citizenship_id: z.string().min(1, { message: 'Citizenship is Required' }),
    another_citizenship_id: z.string(),
    email: z.string().email({ message: 'Invalid Email Address' }),
    phone: z.string().min(1, { message: 'Phone is Required' }),
    availability_id: z.any(),
    visa: z.string().min(1, { message: 'Required' }),
    linkedin_url: z.string().min(1, { message: 'Required' }),
    languages: z.any(),
    cv: z.any(),
    major: z.string().min(1, { message: 'Major is Required' }),
    university: z.string().min(1, { message: 'University is Required' }),
    phone_code: z.string().min(1, { message: 'Phone Code is Required' }),
    country_id: z.string().min(1, { message: 'Country is Required' }),
    city_id: z.string().min(1, { message: 'City is Required' }),
    degree: z.string().min(1, { message: 'degree is Required' }),
    graduate_year: z.string().min(1, { message: 'graduate_year is Required' }),
    professional_experience: z.any(),
    cover_letter: z.any(),
    expected_salary: z.any(),
});
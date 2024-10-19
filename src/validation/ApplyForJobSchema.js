import { z } from 'zod';

export const ApplyForJobShema = z.object({
    full_name: z.string().min(1, { message: 'Full Name is Required' }),
    citizenship_id: z.string().min(1, { message: 'Citizenship is Required' }),
    another_citizenship_id: z.string(),
    email: z.string().email({ message: 'Invalid Email Address' }),
    phone: z.string().min(1, { message: 'Phone is Required' }),
    year_exp_id: z.string().min(1, { message: 'Required' }),
    availability_id: z.any(),
    visa: z.string().min(1, { message: 'Required' }),
    linkedin_url: z.string().min(1, { message: 'Required' }),
    languages_id: z.any(),
    cv: z.any(),
    location: z.string().min(1, { message: 'Location is Required' }),
    company: z.string().min(1, { message: 'Company is Required' }),
    major: z.string().min(1, { message: 'Major is Required' }),
    university: z.string().min(1, { message: 'University is Required' }),
    extra_info: z.string(),
});
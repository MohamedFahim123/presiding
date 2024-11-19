import {z} from 'zod';

export const ContactFormShema = z.object({
    name: z.string().min(1, { message: 'Full Name is Required' }),
    email: z.string().min(1, { message: 'Email is Required' }),
    phone: z.string().min(1, { message: 'Phone is Required' }),
    subject: z.string().min(1, { message: 'Subject is Required' }),
    message: z.string(),
});
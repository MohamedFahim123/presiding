import {z} from 'zod';

export const NewsLetterShema = z.object({
    email: z.string().email({message: 'Invalid Email Address'}),
});
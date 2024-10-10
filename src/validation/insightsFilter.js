import {z} from 'zod';

export const InsightsFilterationShema = z.object({
    industry: z.string().min(1,{message: 'Required'}),
    service: z.string().min(1,{message: 'Required'})
});